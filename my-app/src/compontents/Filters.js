import React from 'react'
 import { connect } from 'react-redux';
 import { setfilter,resetfilter } from '../Actions';

const Filters = ({filter_name,setfilter,resetfilter}) => {
    const prod = ["All items","Rice Items","Cold Drinks","Hot Drinks","Pizza"];
   
  return (
    <div> 
        <center className='mt-3 '>
            <span className='h4 m-1 '>Filter</span>
            <select name='filter' className='p-1' onChange={(e) =>setfilter(e.target.value)}>
                {prod.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </center>
    </div>
  )
}

const mapStateToprops = state =>({
    filter_name :state.filterreducers.filter_name
})

export default connect(mapStateToprops,{setfilter,resetfilter})(Filters)