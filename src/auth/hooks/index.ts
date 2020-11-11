import { useContext } from 'react'
import { AuthContext } from '../context/index'

const useAuth = () => useContext(AuthContext)

export default useAuth
