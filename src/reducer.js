export const initialState = {
    basket : [],
    user: null
};
var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}
const reducer = (state,action) => {
    console.log(action);
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        case "REMOVE_TO_BASKET":
            return {
                ...state,
                basket: removeByAttr(state.basket,"id",action.item.id),
            } 
            
        case "SET_USER" :
            return{
                ...state,
                user : action.user
            }

        default:
            return state;    
    }
};
export default reducer;