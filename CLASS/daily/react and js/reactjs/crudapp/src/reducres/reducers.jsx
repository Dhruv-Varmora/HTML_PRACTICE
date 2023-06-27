const IntialData={
    details:[],
    isDelete:false,
    isResponse:false,
    isUpdate:false,
}
const reducer = (state=IntialData,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
            case 'Delete_DETAILS':
            return{
                isDetails:action.payload
            }
            case 'POST_DETAILS':
                return{
                    isResponse:action.payload
            }
            case 'UPDATE_DETAILS':
                return{
                    isUpdate:action.payload
                }
        default:return state;    
    }
}
export default reducer;