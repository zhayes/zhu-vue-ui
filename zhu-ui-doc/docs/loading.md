---
title: Loading
---

# Loading

全局注册
```js
    import { Loading } from 'zhu-vue-ui';
    Vue.use(Loading);
```

在组件内部调用`$loading`方法。该方法可传入一个参数`size:number`表示图标的大小，非必传。
```js
    this.$loading(60);
```