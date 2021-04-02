---
title: Message
---

# Message

全局注册
```js
    import { Message } from 'zhu-vue-ui';
    Vue.use(Message);
```

在组件内部调用`$message`方法。该方法具有两个参数，第一个参数是消息内容`content:string`，第二个参数是停留的时间长度`duration:number`(单位：毫秒)，默认为2000ms。
```js
    this.$message("This is a message!", 3000);
```