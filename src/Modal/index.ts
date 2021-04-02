import {h, render, ComponentInternalInstance, App, cloneVNode} from 'vue';
import Modal from './Modal.vue';

export interface OptionObject{
    title?:string
    content?:string
    cancelText?:string
    okText?:string
    okTextColor?:string
    cancelTextColor?:string
    maskDestroy?:boolean 
    onOk?:()=>void
    onCancel?:()=>void
}

export interface ModalComponent extends ComponentInternalInstance{
    destroy:()=>void
}

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      $modal: (option?:OptionObject)=>ModalComponent;
    }
}

export default {
    install(app: App) {
        app.config.globalProperties.$modal = (options: OptionObject) => {
            const vNode = h(Modal, options);
            const div = document.createElement("div");
            render(vNode, div);
            document.body.appendChild(div);

            return {
                ...vNode.component,
                destroy(){
                    try{
                        document.body.removeChild(div);
                    }catch{}
                }
            };
        }
    }
}