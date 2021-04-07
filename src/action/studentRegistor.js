import types from "./types/types"
let studentDetails=[]
export default function studentRegistor(state=studentDetails,action){
    switch(action.type){
    case types.add_details:return(
        [ ...state,{id:action.payload.id,name:action.payload.name,age:action.payload.age,email:action.payload.email,branch:action.payload.branch,review:action.payload.review}]

    )
    case types.remove_details:return(
        state.filter(student=>(
            student.id!==action.id
        ))
    )
    default:return(state)
    }
    
}