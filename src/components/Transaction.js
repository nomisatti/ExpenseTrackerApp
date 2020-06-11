import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Transaction ({transactions}) {
    const {removeTransaction }= useContext(GlobalContext)

    const sign = transactions.transactionType ==="Income"? '+' :'-';
    const delteTransaction =e =>{
        if (window.confirm('Are you sure you want to remove this Transaction')){
            removeTransaction(transactions.id)
        }
      
    }
    return (
        <li className={sign === "-"?'minus':'plus'}>
           {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button 
           onClick={()=> delteTransaction()} className="delete-btn">
               x</button>
        </li> 

    )
}

export default  Transaction;
