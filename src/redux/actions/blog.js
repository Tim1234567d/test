import {ActionTypes} from '../contants/action-types'



export const  setBlog = (blogItems) => {
  return{
    type:ActionTypes.SET__BLOG,
    payload:blogItems,
  };
    
};

export const selectedBlog = (blogItem) => {
  return {
    type: ActionTypes.SELECTED__BLOG,
    payload: blogItem,
  };
};

export const removeSelectedBlog = () => {
  return {
    type: ActionTypes.REMOVE__SELECTED__BLOG,
  };
};