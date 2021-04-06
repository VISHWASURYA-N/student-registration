let studentDetails=[]
export default function studentRegistor(state=studentDetails,action){
    switch(action.type){
    case "ADD_DETAIL":return(
        [ ...state,{id:action.payload.id,name:action.payload.name,age:action.payload.age,email:action.payload.email,branch:action.payload.branch,review:action.payload.review}]

    )
    case "REMOVE_DETAIL":return(
        state.filter(student=>(
            student.id!==action.id
        ))
    )
    default:return(state)
    }
    
}