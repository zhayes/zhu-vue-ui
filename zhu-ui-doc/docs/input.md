---
title: Input
---

# Input

```js
    import { Input } from 'zhu-vue-ui';
    Vue.component("Input", Input);
```

支持双向数据绑定
```vue
    <template>
        <Input @model="inputValue"/>
    </template>
    <script>
        export default {
            data(){
                return {
                    inputValue: ""
                }
            }
        }
    </script>
```

### props
| props   | 说明  | 类型 | 默认 |
| --      | ---  | --  | --   |
|readonly |是否只读。                                           | boolean |false    |
|disabled |是否被禁用。                                         | boolean | false   |
|type     |定义类型。可选值:text/password                        | string  | text    |
|lineType |定义边框线样式。可选值:default/single_line(下划线输入框) | string  | default |