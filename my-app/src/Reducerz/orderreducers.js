const initialstate = []

export default function orderreducers(state=initialstate,actions){
    const {type,payload} =actions;
    switch(type){
        case "ADDORDER":
            return [...state,payload]
        default:
            return state;
    }
}