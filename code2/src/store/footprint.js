export default {
    namespaced:true,//命名空间
    state:{
        lists:[
            
        ],
    },
    mutations:{
        add(state,obj){
            state.lists.unshift(obj);
        }
    },
    actions:{}
}