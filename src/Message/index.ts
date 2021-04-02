import {h, render, App} from "vue";
import Message  from './Message'

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      $message: (content:string, duration?:number)=>any
    }
}

let messageListNode:any[] = [];

export default {
    create(content:string, duration:number=2000){
        messageListNode.forEach((item)=>{
            item.destroy();
        })
        
        const vNode = h(Message, {content});
        const div = document.createElement("div");
        render(vNode, div);

        document.body.appendChild(div);

        const n = {
            ...vNode.component,
            destroy(){
                try{
                    document.body.removeChild(div);
                }catch{}
            }
        };

        setTimeout(()=>{
            const com = messageListNode.filter((m)=>{return m===n})[0]

            com && com.destroy();

        }, duration)


        messageListNode.push(n);

        return n;
    },

    install(app:App){
        app.config.globalProperties.$message = (content:string, duration:number) => {
            const n = this.create(content, duration)
            return n
        }
    }
}