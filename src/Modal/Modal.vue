<template>
  <div :class="['zhu_app_modal_mask', 'fade-enter', showModal ? 'fade-enter-active': null  ]" @click="(maskDestroy && onCancel())">
    <div class="modal" @click.stop="()=>{}">
      <div class="title">
        {{ title }}
      </div>
      <div class="content" v-html="content"></div>
      <div class="footer">
        <div v-if="showCancelBtn" class="btn" role="button" @click="onCancel" :style="`color:${cancelTextColor}`">{{ cancelText }}</div>
        <div v-if="showCancelBtn && showOkBtn" class="line"></div>
        <div v-if="showOkBtn" class="btn" role="button" @click="onOk" :style="`color:${okTextColor}`">{{ okText }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue';
export default {
  name: "modal",
  setup(props:any){
    const showModal  = ref(props.show);

    return {
      showModal
    }
  },
  emits:["cancel","ok"],
  methods: {
    onCancel() {
      this.$emit("cancel");
    },
    onOk() {
      this.$emit("ok");
    }
  },
  mounted() {
    setTimeout(() => {
        this.showModal = true;
    }, 0);
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示",
    },
    content: String,
    cancelText: {
      type: String,
      default: "取消",
    },
    okText: {
      type: String,
      default: "确定",
    },
    okTextColor:{
      type:String,
      default: "#3a8cf4"
    },
    cancelTextColor:{
      type:String,
      default: "#999999"
    },
    // ok: {
    //   type: Function,
    // },
    // cancel: {
    //   type: Function,
    // },
    maskDestroy:{
        type: Boolean,
        default: true
    },
    showCancelBtn:{
      type:Boolean,
      default: true
    },
    showOkBtn:{
      type:Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>

.fade-enter {
    opacity: 0;
    transition: all .1s ease-in;
    .modal{
        transform: scale(0);
        transition: all .3s ease-in;
    }
}

.fade-enter-active{
    opacity: 1;
    .modal{
        transform: scale(1);
    }
}

.zhu_app_modal_mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    width: 560px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      text-align: center;
      padding: 32px 0 0;
      line-height: 50px;
      font-weight: 500;
      color: #222222;
      font-size: 36px;
    }
    .content {
      font-size: 28px;
      flex: 1;
      padding: 20px 40px; 
      text-align: center;
    }
    .footer {
      font-size: 36px;
      border-top: 1px solid #e1e1e1;
      display: flex;
      width: 100%;
      height: 104px;
      align-items: center;
      justify-content: space-between;
      div.btn {
        font-size: 36px;
        flex: 1;
        text-align: center;
        user-select: none;
      }

      div.line {
        width: 1px;
        height: 100%;
        background-color: #e1e1e1;
      }
    }
  }
}
</style>