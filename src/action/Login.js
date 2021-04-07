import types from "./types/types"
const user={
    islogin:true,
    userName:"",
    password:""
}

 function Login(state=user,action){
switch(action.type){
    case types.login:return(
        {
            ...state,
            islogin:state.islogin,
            userName:action.payload.username,
            password:action.payload.password

        }
    )
  
    default:return(state)
    

}
}
export default Login