import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: 'data' ,
  initialState,
  
  reducers: {
    setData: (state, action) => {
      //console.log("state is::", state);
      state.data.push(action.payload);
      //console.log("action is ::", action);       
    },

    editData: (state, action) => {
      
      
    }

  },
});

export const { setData,editData } = dataSlice.actions;

export const getData = (state) => state.data.data;

export default dataSlice.reducer;


