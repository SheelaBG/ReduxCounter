
import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decNumber, incNumber } from './Actions';

function App() {
  const mystate=useSelector((state)=>state.changeNumber)
 const dispatch= useDispatch();
  return (
    <>
     <div className="counter" >
                 <h1>counter</h1>
                 
           <div className="quantity" style={
            {margin:"auto",
            backgroundColor:"grey",
            height:"30px",
            width:"90px",
            }
            
            }>
            <a className="minus" title="decrement" onClick={ ()=>{ dispatch(decNumber(5))}}><span style={{padding:"10px"}} >-</span></a>
            <input type="text" style={{width:"15px"}} value={mystate}/>
            
            <a className="plus" title="increment" onClick={ ()=>{ dispatch(incNumber(5))}} ><span style={{padding:"10px"}}>+</span></a>

           </div>
        </div>
        </>
  );
}

export default App;
