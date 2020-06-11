import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Transaction ({transactions}) {
    const {removeTransaction }= useContext(GlobalContext)

    const sign = transactions.amount <0? '-' :'+';
    return (
        <li className={sign === "-"?'minus':'plus'}>
           {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button 
           onClick={()=>removeTransaction(transactions.id)} className="delete-btn">x</button>
        </li> 
    )
}

export default  Transaction;