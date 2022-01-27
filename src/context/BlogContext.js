import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) =>{

    switch(action.type){

        case 'get_blogposts':

        return action.payload;

  default: 
return state;
    }
  
};


const getBlogPosts = dispatch =>{
return async ()=>{

 const response = await jsonServer.get('/blogposts');

 dispatch( { type: 'get_blogposts', payload: response.data});

};
};

       
    export const { Context, Provider } = createDataContext(
        blogReducer, 
        {getBlogPosts}, 
        []
        );

