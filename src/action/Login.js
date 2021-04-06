const user={
    islogin:true,
    userName:"",
    password:""
}
 function Login(state=user,action){
switch(action.type){
    case "LOGGIN":return(
        {
            ...state,
            islogin:state.islogin,
            userName:action.payload.username,
            password:action.payload.password

        }
    )
  
    default:return({state})

}
}
export default Login