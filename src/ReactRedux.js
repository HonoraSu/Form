import React from 'react';

/*
*   Provider:项目的跟组件
*       1、接收传递给组件的store
*       2.把store挂载到上下文中

 */
class Provider extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    
    render(){
        return this.props.children
    }
}

let connect = (test)=>(Component)=>{
    return class Proxy extends React.Component{
        static contextType={
            store:ProTypes.object
        }
        render(){
            return <Component {...test(this.context.store.getState())}/>
        }
    }
}

export{
    Provider,
    connect
}