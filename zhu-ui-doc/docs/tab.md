---
title: Tab
---

# Tab


```js
    import { Tab, TabContent } from 'zhu-vue-ui';
    Vue.component("Tab", Button);
    Vue.component("TabContent", TabContent);
```

```vue
    <template>
        <Tab :titleItems="tabTitle" default="tab1">
            <TabContent tab-name="tab1">
                <div>tab1 content</div>
            </TabContent>
            <TabContent tab-name="tab2">
                <div>tab2 content</div>
            </TabContent>
            <TabContent tab-name="tab3">
                <div>tab3 content</div>
            </TabContent>
        </Tab>
    </template>
    <script>
        export dfault {
            data() {
                return {
                    tabTitle:[
                        {name: 'tab1', title:'标题一'},
                        {name: 'tab2', title:'标题二'},
                        {name: 'tab3', title:'标题三'}
                    ]
                };
            },
        }
    </script>
```


### Tab props
| props     | 说明              | 类型                           | 默认   |
| --        | ---              | --                             | --    |
|titleItems |标题数组           | [{name:string, title:string}]  |无      |
|default    |默认的tab name     | string                         |无      |


### TabContent props
| props   | 说明                | 类型     | 默认    |
| --      | ---                | --       | --     |
|tab-name |对应的tab标题name   | string   |无      |