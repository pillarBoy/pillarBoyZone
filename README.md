# pillarBoyZone

## 整合一个前端技术的综合项目展示dome

项目需求：
  - [ ] 纯前端部分 (综合多页与单页应用)
    - [x] vue框架实现登录
    - [ ] react实现简易版聊天
    - [ ] angular实现项目说明详情及评论

  - [x] 服务端node中间层部分
    - [x] nuxtjs实现vue ssr
    - [x] nextjs实现react ssr

  - [ ] 后端接口/数据库/redis/JWT
     - [ ] redis共享登录状态

  - [ ] 部署(nginx/docker/github/CI)
    - [x] nginx转发
      - [x] ^/api 转的到服务端应用
      - [x] ^/login 转到 vue应用
      - [ ] ^/chat 转到 react应用

## 项目包管理 
  还是用npm吧，egg初始化项目

## 项目开始(2019-07-11)
  - [ ] 搭建项目目录架构


## 项目 docker image build
docker build -t pillar-server .
