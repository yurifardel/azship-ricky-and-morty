import { createContext, ReactNode } from "react";
import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from '../graphql/index'

interface ContextProvider {
  children: ReactNode
}

interface ContextData {
  data: {
    characters: {
      info: {}
      results: [{}]
    }
    episodes: {
      results: [{}]
    }
  }
  loading: boolean
}

export const Context = createContext({} as ContextData)

export default function AppProvider ({children}: ContextProvider) {
  const {data, loading} = useQuery(GET_ALL_CHARACTERS)

  return (
    <Context.Provider value={{ loading, data}}>
      {children}
    </Context.Provider>
  )
}

