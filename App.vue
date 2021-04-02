<template>
  <div id="frozen-app-content">
    <Space>
      <Button>一般按钮</Button>
      <Button disabled>禁止点击</Button>
      <Button :loading="btnLoading" @click="trigger">{{
        btnLoading ? "loading..." : `点击加载`
      }}</Button>
      <Button block style="margin-top: 1em; margin-bottom: 1em">Block Button</Button>
      <Button size="large">大号按钮</Button>
      <Button size="middle">中号按钮</Button>
      <Button size="small">小号按钮</Button>
    </Space>
    <Space>
      <Button @click="showModal">加载modal</Button>
      <Button @click="showMessage">消息提示</Button>
      <Button @click="showLoading">加载loading</Button>
    </Space>
    <Space>
      <Checkbox v-model="radiosChecked" type="radio" label="单选框样式"/>
      <Checkbox v-model="boxChecked" type="checkbox" label="复选框样式"/>
      <Checkbox disabled type="radio" label="禁止选择"/>
      <label>小号 <Checkbox size="small" v-model="radiosChecked" type="radio"/>  <Checkbox size="small"  v-model="boxChecked" type="checkbox"/></label>
    </Space>
    <Space>
      <Input label="一般输入框"/>
      <Input label="下划线输入框" lineType="single_line" placeholder="请输入内容"/>
      <Input label="带suffix提示的输入框" suffix="剩余时间(60s)"/>
    </Space>

    <Space>
      <Tab :titleItems="tabTitle" default="tab1">
        <TabContent tab-name="tab1">
          <div style="height:100px; background-color:gray">tab1</div>
        </TabContent>
        <TabContent tab-name="tab2">
          <div style="height:100px; background-color:purple">tab2</div>
        </TabContent>
        <TabContent tab-name="tab3">
          <div style="height:100px; background-color:green">tab3</div>
        </TabContent>
      </Tab>
    </Space>
  </div>
</template>
<script lang="ts">
import Space from "./src/Space/space.vue";
import Button from "./src/Button/button.vue";
import Checkbox from "./src/Checkbox/checkbox.vue";
import Input from "./src/Input/input.vue";
import TabContent from "./src/Tab/tab-content.vue";
import Tab from "./src/Tab/tab.vue";

export default {
  data() {
    return {
      btnLoading: false,
      radiosChecked: false,
      boxChecked: false,
      tabTitle:[
        {name: 'tab1', title:'tab1'},
        {name: 'tab2', title:'tab2'},
        {name: 'tab3', title:'tab3'}
      ]
    };
  },
  methods: {
    trigger() {
      this.btnLoading = true;
      setTimeout(()=>{
        this.btnLoading = false;
      }, 5000)
    },
    showModal(){
      const m = this.$modal({
        content: "Hi，这是个modal弹框",
        onOk(){
          m.destroy();
        },
        onCancel(){
          m.destroy();
        }
      })
    },
    showMessage(){
      this.$message("Hello,world!")
    },
    showLoading(){
      const m = this.$loading(80);
      m.show();
      setTimeout(()=>{
        m.destroy();
      }, 3000)

    }
  },
  components: {
    Space,
    Button,
    Input,
    Checkbox,
    Tab,
    TabContent
  },
};
</script>
<style lang="scss">
#frozen-app-content {
  min-height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
}
</style>