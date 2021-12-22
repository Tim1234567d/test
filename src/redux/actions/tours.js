import {ActionTypes} from '../contants/action-types'



export const  setTours = (toursItems) => {
  return{
    type:ActionTypes.SET__TOURS,
    payload:toursItems,
  };
    
};

export const selectedTours = (toursItem) => {
  return {
    type: ActionTypes.SELECRED__TOUR,
    payload: toursItem,
  };
};

export const removeSelectedTour = () => {
  return {
    type: ActionTypes.REMOVE__SELECTED__TOUR,
  };
};