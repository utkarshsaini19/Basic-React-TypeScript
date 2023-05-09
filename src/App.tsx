
import { type } from 'node:os';
import { createContext, useReducer } from 'react';
import './App.css';
import User from './components/User';
import { actionType, initialState, reducer } from './reducer';


type cxtType = {
  state: typeof initialState,
  dispatch: React.Dispatch<actionType>
}

export const UserContext = createContext({} as cxtType)


function App() {
  
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>

      {/* <Profile name="Utkarsh" age={25} status='single'>
        <span style={{ color: 'green' }}>salary - 10ctc</span>
      </Profile>
      <Profile name="Shubh" status='committed' >
        <span style={{ color: 'green' }}>salary - 5ctc</span>

      </Profile> */}
      {/* <Todo /> */}
      <User />
    </UserContext.Provider>
  );
}

export default App;
