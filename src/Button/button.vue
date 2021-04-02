<template>
  <button
    class="zhu_app_btn"
    :loading-status="loading"
    :btn-size="size"
    :btn-block="block"
    :btn-type="type"
    @click="clickHandle"
    :disabled="disabled || loading"
  >
    <LoadingSVg v-if="loading" />
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { PropType, toRefs } from "vue";

import LoadingSVg from "./loading.vue";

export default {
  name: "Button",
  emits: ["click"],
  components: {
    LoadingSVg,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "middle" | "large">,
      default: "middle",
    },
    type:{
      type: String as PropType<"primary" | "light">,
      default: "primary"
    }
  },
  setup(props, { slots, emit }) {
    const clickHandle = (e: MouseEvent) => {
      emit("click", e);
    };

    return {
      ...toRefs(props),
      slots,
      clickHandle,
    };
  },
};
</script>
<style lang="scss" scoped>
$btn_bg_color: #1677ff;
$btn_bg_light_color: #E4EFFF;

.zhu_app_btn {
  display: inline-flex;
  user-select: none;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  border-radius: 8px;
  vertical-align: middle;
  cursor: pointer;
  overflow: hidden;

  svg{
    width: 1em;
    margin-right: .5em;
  }

  

  &[btn-type="primary"]{
    background: $btn_bg_color;
    &:hover {
      background-color: darken($btn_bg_color, 10%);
    }
    &:focus {
      background-color: darken($btn_bg_color, 25%);
    }
  }

    &[btn-type="light"]{
    background: $btn_bg_light_color;
    color: #3287FF;
    &:hover {
      background-color: darken($btn_bg_light_color, 10%);
    }
    &:focus {
      background-color: darken($btn_bg_light_color, 15%);
    }
  }



  &[btn-size="small"] {
    padding: 8px 16px;
    font-size: 14px;
  }

  &[btn-size="middle"] {
    padding: 10px 24px;
    font-size: 27px;
  }

  &[btn-size="large"] {
    padding: 10px 24px;
    font-size: 32px;
  }

  &[btn-block="true"] {
    display: block;
    width: 100%;
    line-height: 88px;
    padding: 0 1em;
    height: 88px;
    font-size: 32px;
    font-weight: 500;
  }
}

.zhu_app_btn:disabled {
  background-color: #999!important;
  cursor: not-allowed;
}
.zhu_app_btn[loading-status=true]{
  background-color: $btn_bg_color!important;
  cursor: not-allowed;
}
</style>