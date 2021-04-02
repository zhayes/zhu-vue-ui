---
title: Button
---
# Button

```js
    import { Button } from 'zhu-vue-ui';
    Vue.component("Button", Button);
```

```vue
    <Button>这是个按钮</Button>
```

### props
| props | 说明  | 类型 | 默认 |
| --    | ---  | --  | --   |
|type   |定义按钮的类型。可取值：primary; light           | string  | primary |
|size   |定义按钮的大小。可取值：small; middle; large     | string  | middle  |
|block  |是否是块级按钮，自占一行                         | boolean | false   |
|disabled|定义按钮是否禁用                               | boolean | false   |
|loading|定义按钮是否显示加载动画，且期间不可点击            | boolean | false   |