import { createSlice, ReducerType } from "@reduxjs/toolkit";
const initialState={
    _id: "",
     firstname: "",
      lastname: "",
      email: "",
       image:"",
       address:"",
       telephone :"",
};
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        loginRedux:(state,action)=>{
            console.log(action);
            state._id = action.payload.user._id;
            state.firstname = action.payload.user.firstname;
            state.lastname = action.payload.user.lastname;
            state.email = action.payload.user.email;
            state.image = action.payload.user.image;
            state.address = action.payload.user.address;
            state.telephone = action.payload.user.telephone;
        },
        logoutRedux: (state, action) => {
            state._id = "";
            state.firstname = "";
            state.lastname = "";
            state.email = "";
            state.image = "";
            state.address ="";
            state.telephone ="";


          },
    }

})
export const {loginRedux,logoutRedux} = userSlice.actions
export default userSlice.reducer