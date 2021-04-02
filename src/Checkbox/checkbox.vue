<template>
    <label :data-type="type">
        <input type="checkbox" @change="checkboxChange" :checked="modelValue" :disabled="disabled"/>
        <span class="check_box" :data-size="size" :data-checked="modelValue" :disabled="disabled">
            <svg id="fi_2089713" enable-background="new 0 0 515.556 515.556"  viewBox="0 0 515.556 515.556" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"></path>
            </svg>
        </span>
        {{label}}
    </label>
</template>
<script lang="ts">
import {PropType, toRefs} from 'vue';

export default {
    name: "Checkbox",
    emits: ["update:modelValue", "change"],
    props:{
        label: [String],
        modelValue: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String as PropType<"radio"|"checkbox">,
            default: "checkbox"
        },
        size:{
            type: String as PropType<"small"|"middle">,
            default: "middle"
        }
    },
    setup(props:any, {emit}){
        let {modelValue, disabled} = toRefs(props);
        const checkboxChange = (e:Event)=>{
            const target = e.target as HTMLInputElement;
            emit("update:modelValue",target.checked);
            emit("change", target.checked);
        }

        return {
            checkboxChange,
            modelValue,
            disabled
        }
    }
}
</script>
<style lang="scss" scoped>
label{
    display: inline-flex;
    align-items: center;
    justify-items: center;
    vertical-align: middle;
    font-size: 30px;

    input[type=checkbox]{
        display: none;
    }

    .check_box[data-size=middle]{
        height: 42px;
        width: 42px;
    }

    .check_box[data-size=small]{
        height: 24px;
        width: 24px;
    }

    .check_box[data-checked=true]{
        background-color: #3A8CF4!important;
        svg{
            opacity: 1;
        }
    }

    .check_box[disabled=true]{
        background-color: #eaeaea;
        cursor: not-allowed;
    }

    .check_box{
        display: inline-flex;
        align-items: center;
        background-color: #fff;
        border: 1px solid #BBBBBB;
        cursor: pointer;
        transition: .2s;
        user-select: none;
        margin-right: 10px;
        transition: .4s;

        svg{
            fill:#ffffff;
            opacity: 0;
            margin: 4px;
        }
    }
}

label[data-type=radio]{
    .check_box{
        border-radius: 50%;
    }

    .check_box[data-checked=true]{
        background-color: #3A8CF4;
    }
}

label[data-type=checkbox]{
    .check_box{
        border-radius: 0;
    }
    .check_box[data-checked=true]{
        background-color: #ffffff;
    }
}
</style>