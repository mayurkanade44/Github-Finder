import React, {createContext, useContext, useReducer} from 'react'
import reducer from './reducer'
import mockUser from './mockdata/mockUser'
import mockRepos from './mockdata/mockRepos'
import mockFollowers from './mockdata/mockFollowers'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext()

const initialState = {
    githubUser: mockUser,
    repos: mockRepos,
    followers: mockFollowers

}

export const GithubProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <GithubContext.Provider value={{...state, }}>{children}</GithubContext.Provider>
}

export const useGithubContext = () => {
    return useContext(GithubContext)
}