export const settablenumber = (value) =>{

    return{
        type:"SETTABLENUMBER",
        payload:value
    }
}

export const resettablenumber =()  =>{

    return({
        type:"RESETTABLENUMBER"
    })
}

export const setfilter = (value) =>{

    return{
        type:"SETFILTER",
        payload:value
    }
}

export const resetfilter =() =>{
    return({
        type:"RESETFILTER"
    })
}

export const addorder =(item,url,id,name,prize,table_number) => {
    return({
        type:"ADDORDER",
        payload:{
            id:id,
            name:name,
            table_number:table_number,
            url:url,
            item:item,
            prize:prize 
        }
    })
}
