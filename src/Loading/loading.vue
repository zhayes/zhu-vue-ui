<template>
    <div class="loading_mask">
        <LoadingSVG :width="size" :fill="color"/>
    </div>
</template>
<script>
import LoadingSVG from '../LoadingSVG/loading.vue';

export default {
    name: "loading",
    components:{
        LoadingSVG
    },
    props:{
        size:{
            type:Number,
            default: 60
        },
        color: {
            type: String
        }
    }
}
</script>
<style lang="scss">
    .loading_mask{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>