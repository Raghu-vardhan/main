const initialState ={
    filter_name : "All items"
}

export default function filterreducers(state=initialState,action){
    const {type,payload} =action;
    switch(type){
        case "SETFILTER" :
            return {...state,filter_name:payload}
        case 'RESETFILTER':
            return {...state,filter_name:"all items"}
        default:
            return state;
    }
}