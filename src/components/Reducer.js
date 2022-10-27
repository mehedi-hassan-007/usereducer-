export const reducer =(state, action)=>{
    if(action.type === "add"){ 
        const allName=[...state.name, action.payload]
        return {
            ...state,
            name: allName,
            isModalText: "true",
            modalText: "item is loaded"
        }
    }
    if(action.type === "remove"){
        const allNames =[...state.name].filter((name => name.id !== action.payload));
         return {
            ...state,
            name: allNames,
            isModalText: "true",
            modalText: "item is removed"
         }
    }
    return state
    }
    