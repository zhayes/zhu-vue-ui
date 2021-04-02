<template>
    <transition name="tabSlide">
        <div v-show="tabName===active" style="flex-shrink:0; width: 100%">
            <slot></slot>
        </div>
    </transition>
</template>
<script lang="ts">
import {inject} from 'vue';

export default {
    setup(){
        const active = inject("active");

        return {
            active
        }
    },
    props:{
        'tabName': {
            type: String,
            default: ""
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabSlide-enter{
        transform: translateX(200%);
    }

    .tabSlide-enter-active{
        animation: slide-enter .2s linear;
    }

    .tabSlide-enter-to{
        transform: translateX(0);
    }

    .tabSlide-leave{
        transform: translateX(-200%);
    }

    .tabSlide-leave-active{
        animation: slide-leave .2s linear;
    }

    .tabSlide-leave-to{
        transform: translateX(0);
    }

    @keyframes slide-leave{
        from{
            transform: translateX(0);
        }

        to{
            transform: translateX(-200%);
        }
    }

    @keyframes slide-enter{
        from{
            transform: translateX(200%);
        }

        to{
            transform: translateX(0);
        }
    }
</style>