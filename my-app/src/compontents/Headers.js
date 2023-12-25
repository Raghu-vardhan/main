import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = ({count}) => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand'  href="#"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1ellLkvGt4QhrVyfq6FLLtSY8SN51qkE3XYirwtw7Q&s"  width="30" height="30" class="d-inline-block align-text-top"/>
        Resturant</a>
        <button className='btn btn-primary m-13'> 
          <Link to='/Orders' style={{color:"white",textDecoration:'none'}}>Order</Link>
          <span className='badge bg-secondary'>{count}</span>
        </button>
        </nav>
    </div>
  )
}

const mapStateToProps = state =>({
  count : state.orderreducers.length 
})

export default connect(mapStateToProps)( Header)