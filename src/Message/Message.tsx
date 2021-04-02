
export default {
    props:{
        content: String
    },

    setup(props:any){
        return ()=>{
            return (
                <div style={{position:'fixed',zIndex:1000, top:0, left:0, width: '100vw', height: '100vh', margin:'auto', display:'flex', alignItems: 'center', justifyContent:'center', fontSize: '3.5vw', userSelect:'none'}}>
                    <div style={{backgroundColor: 'rgba(0,0,0,.8)', color: '#fff', padding: '1vw 2vw', borderRadius: '1vw', maxWidth: '70%', wordBreak:'break-all', textAlign:'justify'}}>
                        {props.content}
                    </div>
                </div>
            )
        }
    }
}