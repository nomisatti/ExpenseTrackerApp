import React , {createContext,useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

//Context
export const GlobalContext = createContext(initialState);

//Provider

export const GlobalProvider = ({children}) => {
  const [state , dispatch] = useReducer(AppReducer , initialState);

   //Delete Action
    function removeTransaction(id) {
      dispatch({
        type: 'REMOVE_TRANSACTION',
        payload: id
      });
    }

     //Add Action
     function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      });
    }

  return (<GlobalContext.Provider value= {{
        transactions:state.transactions,
        removeTransaction,
        addTransaction
  }}>
         {children}
     </GlobalContext.Provider>
  )
}


