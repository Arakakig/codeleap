import { configureStore } from '@reduxjs/toolkit'
import Comentarios from './actions/comentariosStore'
import  User  from './actions/userStore'

export default configureStore({
  reducer: {
    comentarios: Comentarios,
    user: User
  }
})