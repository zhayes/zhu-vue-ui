import { uid } from "uid";
import {h, render, App} from "vue";
import Loading  from "./loading.vue";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      $loading: (size?:number, color?: string)=>any
    }
}

export default {
    create(size:number=30, color?:string){
        const vNode = h(Loading, {size, color, key: uid()});
        const div = document.createElement("div");

        render(vNode, div)
        const n = {
            show(){
                document.body.appendChild(div);
            },
            destroy(){
                try{
                    document.body.removeChild(div);
                }catch{}
            }
        };

        return n;
    },

    install(app:App){
        app.config.globalProperties.$loading = (size?:number, color?:string) => {
            return this.create(size, color)
        }
    }
}