import React from 'react'
import { connect  } from 'react-redux'
import Headers from './compontents/Headers'

const Orders = ({list}) => {
  return(
    <div>
        <Headers/>
        <center>
        
          {list.length >0 ?
              <div className='container'>
                  <div className='row'>
                      {list.map((item) => (
                          <div className='col-md-4 ' style={{padding:"8px"}} key={item.id}>
                              <div className='card' style={{width:"18rem", padding:"3px"}}>
                                  <img src={item.prize} className='card-img-top'/>
                                  <div className='card-body'>
                                      <h5 className='card-title'>{item.url}</h5>
                                      <div className='card-text'>Rs.Billing Amount :{item.id}</div>
                                    <p>Table Number: {item.name}</p>
                                  </div> 
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
              :
              <div className='h3'>
                No order placed yet
              </div>
          }
      </center>
    </div>
  )
}

const mapStateToprops = state =>({
  list : state.orderreducers
})

export default connect(mapStateToprops) (Orders)