import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import types from "../action/types/types";
import Navbar from "./navbar";

const StudentDetails= () => {
  const { id } = useParams();
 const history = useHistory();
 const dispatch=useDispatch()
const students=useSelector(state=>(state.studentRegistor));
const themeToggle=useSelector(state=>(state.themeToggle))
const {isLightTheme,dark,light}=themeToggle
const theme=isLightTheme ? light :dark
function handleDelete(){
  dispatch({type:types.remove_details,id})
  history.push("/home")
}
  let student=students.filter(student=>(student.id===id))
  console.log(students)
  console.log(student)
  console.log(id)
  return (
  <div className="student-details">
    <Navbar/>
    {student.map(student=>(
 <article style={{background:theme.background,color:theme.color}}>
 <h2>{ student.name }</h2>
  <h3>{student.age}</h3>
 <p>{ student.branch }</p>
 <p>{student.email}</p>
 <div>{ student.review }</div>
 <button className="delete" onClick={handleDelete}>delete</button>
</article>
    ))}
     
      
    
    </div>
  );
}
 
export default StudentDetails;