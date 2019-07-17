export default async function({$axios}) {
  await $axios.$get('/token')
  let cookie = {}
  // return $axios;
  if (document.cookie) {
    let str = `{${document.cookie.split(';').map(k => ('"'+k.trim().split('=').join('":"')+'"')).join(',')}}`;
    try {
      cookie = JSON.parse(str)
    } catch (error) {
      console.log(error);
    }
  }

  return $axios.setHeader('x-csrf-token', cookie.csrfToken || '');
}