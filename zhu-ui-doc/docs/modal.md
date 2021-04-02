---
title: Modal
---

# Modal

全局注册
```js
    import { Modal } from 'zhu-vue-ui';
    Vue.use(Modal);
```

全局注册后，可在组件内部调用`$modal`方法。该方法返回一个带`destory`方法的对象，可供销毁组件实例。
```vue
    <script>
    export default {
        methods:{
            showModal(){
                const m = this.$modal({
                    title:"温馨提示"
                    content:"hello,world!",
                    onOk(){
                        //...
                    },
                    onCancel(){
                        m.destroy();
                    }
                })
            }
        }
    }
    </script>
```

### options
| optoin           |说明                                 | 类型      |  默认    |
| --               | ---                                | --        |  --     |
|title             |标题                                 | string    | 提示     |
|content           |提示内容                              | string    | 无      |
|cancelText        |取消按钮文案                           | string    | 取消    |
|okText            |确认按钮文案                           | string    | 确定    |
|okTextColor       |确认按钮文案颜色                        | string    | #3a8cf4|
|cancelTextColor   |取消按钮文案颜色                        | string    | 999999 |
|maskDestroy       |点击mask蒙板是否关闭                    | boolean   | true   |
|onOk              |定义边框线样式                          | Function  | 无     |
|onCancel          |定义边框线样式                          | Function  | 无     |