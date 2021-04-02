<template>
    <div>
        <div class="tab-title-container">
            <div 
                class="tab-title" 
                v-for="item in titleItems" 
                :key="item.name"
                :data-active="item.name===active"
                :data-name="item.name"
                @click="choose"
            >
                {{item.title}}
            </div>
            <div class="scroll-bar" :style="`left: ${leftScale}px`"></div>
        </div>
        <div class="tab-content" :data-name="active">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import {ref, PropType, onMounted, onUnmounted, watchEffect, provide} from 'vue';

type TitleItem = {
    name: String
    title: String
}

export default {
    setup(props, {slots}){
        const titleItems = ref(props.titleItems);
        const active = ref(props.default);
        const leftScale = ref(-100);

        const getLeftScale = ()=>{
            const el = window.document.querySelector(`[data-name=${active.value}]`) as Element;
            if(!el) return -100;
            const {offsetLeft, offsetWidth} = el as HTMLElement;

            const leftScale = offsetLeft + (offsetWidth/2);
            return leftScale;
        }

        watchEffect(()=>{
            const el = window.document.querySelector(`[data-name=${active.value}]`);
            if(!el) return -100;
            const {offsetLeft, offsetWidth} = el as HTMLElement;

            leftScale.value = offsetLeft + (offsetWidth/2);
        });

        provide("active", active);

        const setLeftScale = ()=>{
            leftScale.value = getLeftScale();
        }

        onMounted(()=>{
            setLeftScale();
            window.addEventListener("resize", setLeftScale);
        });

        onUnmounted(()=>{
            window.removeEventListener("resize", setLeftScale);
        })

        return {
            titleItems,
            active,
            leftScale
        }
    },
    methods:{
        choose(e:any){
            const target = e.target;
            const name = target.dataset.name;
            this.active = name;
        }
    },
    props:{
        titleItems: {
            type: Array as PropType<TitleItem[]>,
            default: []
        },
        default: {
            type: String,
            default: ""
        }
    }
}
</script>
<style lang="scss" scoped>
    .tab-title-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;

        .scroll-bar{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 44px;
            height: 7px;
            background: #1677FF;
            border-radius: 3px;
            transform: translateX(-22px);
            transition: .4s;
        }

        .tab-title{
            text-align: center;
            box-sizing: content-box;
            font-size: 32px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 45px;
            height: 45px;
            color: #333333;
            padding-bottom: 16px;
            transition: .3s;
            white-space: nowrap;
        }

        .tab-title[data-active=true]{
            color: #1677FF;
        }
    }
    .tab-content{
        display: flex;
        align-items: flex-start;
        overflow: hidden;
    }
</style>