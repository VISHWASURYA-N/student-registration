import { useSelector } from "react-redux";
import Navbar from "./navbar";
import StudentList from "./studentList";
const Home = () => {

const students=useSelector(state=>(state.studentRegistor));
console.log(students)
  return (
    <div className="home">
      <Navbar/>
      <StudentList students={students} />
    </div>
  );
}
 
export default Home;