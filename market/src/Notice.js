export default function notify(ops) {
  let notify = null;
  // 先检查浏览器是否支持
  if (!("Notification" in window)) {
    alert("您的浏览器不支持消息通知。");
  } else {
    // 检查用户是否同意接受通知
    if (Notification.permission === "granted") {
      notify = new Notification(ops.title,ops);
    }

    // 否则我们需要向用户获取权限
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // 如果用户同意，就可以向他们发送通知
        if (permission === "granted") {
          notify = new Notification(ops.title, ops);
        }
      });
    }
  }

    
    
  return notify;
  // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
  // 出于尊重，我们不应该再打扰他们了
}