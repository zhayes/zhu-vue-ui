<template>
  <div class="zhu_app_form_filed" :input-type="lineType">
    <div class="zhu_app_form_label">{{ label }}</div>
    <div class="zhu_app_form_input" :input-disabled="disabled">
      <input
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="inputHandle"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
      />
      <a class="suffix_text" @click="triggerSuffix">{{ suffix }}</a>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, toRefs } from "vue";

export default {
  emits: ["update:modelValue", "suffixClick"],
  setup(props, { emit }) {
    const inputHandle = (e: Event) => {
      const target = e.target as HTMLInputElement
      const value = target.value;
      emit("update:modelValue", value);
    };
    const triggerSuffix = (e: MouseEvent) => {
      emit("suffixClick", e);
    };

    return {
      ...toRefs(props),
      inputHandle,
      triggerSuffix,
    };
  },
  props: {
    label: String,
    placeholder: String,
    modelValue: String,
    disabled: Boolean,
    readonly: {
      type: Boolean,
      default: false,
    },
    autocomplete: [Boolean, String],
    type: {
      type: String as PropType<"text" | "password" | "search">,
      default: "text",
    },
    lineType: {
      type: String as PropType<"single_line" | "default">,
      default: "default",
    },
    suffix: String,
  },
};
</script>
<style lang="scss" scoped>
$border_color: #cecece;
$border: 1px solid $border_color;

.zhu_app_form_filed {
  
  margin-bottom: 32px;
  overflow: hidden;
  font-size: 28px;

  .zhu_app_form_label {
    color: #222222;
    font-size: inherit;
    margin-bottom: 16px;
    font-weight: 400;
  }

  .zhu_app_form_input[input-disabled="true"] {
    background-color: #eaeaea;
    cursor: not-allowed;
  }

  .zhu_app_form_input {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    input {
      width: 0;
      flex: 1;
      outline: none;
      height: 86px;
      font-size: inherit;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 40px;
      color: #333;
      border: 0;
      background-color: inherit;
    }

    input:disabled {
      background-color: transparent;
      cursor: not-allowed;
    }

    .suffix_text {
      color: #3287ff;
      font-size: inherit;
      white-space: nowrap;
      user-select: none;
    }
  }

  &[input-type="default"] {
    .zhu_app_form_input {
      border: $border;
      border-radius: 8px;
      overflow: hidden;
      padding: 0px 32px;
    }
  }

  &[input-type="single_line"] {
    font-size: 32px !important;
    .zhu_app_form_label {
      margin-bottom: 0;
      font-size: inherit;
    }

    .zhu_app_form_input {
      position: relative;
      font-size: inherit;
      border: 0;

      &::after{
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        content: "";
        height: 1px;
        background-color: $border_color;
        transform: scaleY(0.5);
      }
    }
  }
}
</style>