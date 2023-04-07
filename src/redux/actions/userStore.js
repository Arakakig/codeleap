import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'User',
  initialState: {
   userName: "",
  },
  reducers: {

    editarUser: (state, action) => {
      const { userName} = action.payload;
      state.userName = userName;
      console.log(  state.userName)
    }
  }
})

// Action creators are generated for each case reducer function
export const { editarUser } = User.actions

export default User.reducer
