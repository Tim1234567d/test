import {ActionTypes} from "../contants/action-types";

const initialState ={
    setInfo:[],
    setGuestsComments:[]
};

 const infoReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__INFO:
            return {...state,setInfo:payload };
        case ActionTypes.FETCH__INFO:
            return {...state,setInfo:payload };

            default :
                return state
    } 
   

};
export default infoReduser;






export const guestsCommentsReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__GUESTS__COMMENTS:
            return {...state,setInfo:payload };
        case ActionTypes.FETCH__GUESTS__COMMENTS:
            return {...state,setInfo:payload };

            default :
                return state
    } 
   

}

