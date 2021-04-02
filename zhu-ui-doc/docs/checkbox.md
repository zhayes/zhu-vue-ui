---
title: Checkbox
---

# Checkbox

```js
    import { Checkbox } from 'zhu-vue-ui';
    Vue.component("Checkbox", Checkbox);
```

支持双向数据绑定
```vue
    <template>
        <Checkbox @model="isChecked"/>
    </template>
    <script>
        export default {
            data(){
                return {
                    isChecked: false
                }
            }
        }
    </script>
```

目前没有给出`<Radio />`组件，因为笔者认为，控制单选还是多选完全可以通过代码操作数据以达到目的，完全够用了。当下笔者很懒，也许以后会补上`<Radio />`组件，如果后面变勤快了话。

鉴于单选跟多选的样式有所区别，所以该组件还是给出了一个`type`属性，可控制其是显示单选框样式，还是复选框样式。

### props
| props   | 说明  | 类型 | 默认 |
| --      | ---  | --  | --   |
|label    |定义标签内容。                                   | string  | 无 |
|size     |定义选框的大小。可取值: small; middle;            | string  | middle  |
|type     |定义选框的类型。可取值: radio; checkbox;          | string  | checkbox |
|disabled |定义选框是否被禁用。                              | boolean | false   |