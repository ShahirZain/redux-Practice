import { type } from "../actions/type";


const initialState = {
  countNumber: 0,
};

 export   const reducer = (state=initialState, action) => {
   switch (action.type) {
     case type.add: {
       return {
           ...state,
         countNumber: state.countNumber + action.payLoad,
       };
     }
     case type.dec: {
       return {
         ...state,
         countNumber: state.countNumber + action.payLoad,
       };
     }
     default:
       return state;
   }
 };