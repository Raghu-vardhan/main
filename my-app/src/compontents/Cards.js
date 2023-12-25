import React from 'react' 
import {connect} from 'react-redux'
import { addorder, resetfilter, resettablenumber } from '../Actions';


const Cards = ({filter_name,addorder,table_number}) => {
    const [data,setdata] = React.useState([]);
    const [cloneData,setcloneData] = React.useState([]);
    React.useEffect(() =>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
        response => response.json()
        ).then(
         json =>{
            setdata(json.items);
            setcloneData(json.items)
         }
        )
    },[])

    React.useEffect(() =>{
        if(filter_name !=="All items") {
            let specific = cloneData.filter(item =>item.category===filter_name)
            setdata(specific)
        }
        else{
            setdata(cloneData)
        }
    },[filter_name])

    const Handler =async (id,name,prize,url) =>{
        if(table_number != null) {
            await addorder(id,name,prize,table_number,url)
            await resettablenumber
            await resetfilter
            alert("order placed successfully")
        }
        else{
            alert('Please Select the table number')
        }
    }
    return (
    <div>
        <center>
        {data.length >0 ?
            <div className='container'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-4 ' style={{padding:"8px"}} key={item.id}>
                            <div className='card' style={{width:"18rem", padding:"3px"}}>
                                <img src={item.url} className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='text-success'>{item.name}</h5>
                                    <div className='text-danger'>Rs.{item.prize}</div>
                                    <button className='btn btn-primary' id="liveAlertBtn" onClick={() => Handler(item.id,item.name,item.prize,item.url)} >Order</button>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            :
            <div className='spinner-border text-primary'>

            </div>
        }
        </center>
    </div>
    )
}
 
const mapStateToProps = state =>({
    filter_name:state.filterreducers.filter_name,
    table_number:state.tablereducers.table_number
})

export default  connect(mapStateToProps,{addorder}) (Cards); 

// 