import React,{useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


function AddTransaction () {
    const {addTransaction } = useContext(GlobalContext)


    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const [transactionType , setTransactionType] = useState("Income")
    const Submit = e =>{
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 10000000),
            text,
            amount: transactionType === "Income" ?  +amount : -+amount,
            transactionType
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={Submit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" required  placeholder="Enter text..."  onChange={(e)=> setText(e.target.value)}/>
                </div>
                <div className="form-control">
                <label htmlFor="TransactionType">Transaction Type</label>
                    <select onChange={(e)=> setTransactionType(e.target.value)}  id="TransactionType">
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" min="0" placeholder="Enter amount..."  onChange={(e)=> setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default  AddTransaction;
