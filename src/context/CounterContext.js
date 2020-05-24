import React,{useState} from 'react'


const CounterContext = React.createContext()



export function CounterProvider({children}){ 
    const [valor ,setValor] = useState(0)

    function increment(){
          setValor(valor + 1)
    }
    function decrement(){
          setValor(valor - 1)
    }


//temos que passar um obejeto com os dados e a funcao que vai alterar o estado
    return <CounterContext.Provider  value={{data:valor,increment,decrement}}>
        {children}
    </CounterContext.Provider>

}


export default CounterContext
