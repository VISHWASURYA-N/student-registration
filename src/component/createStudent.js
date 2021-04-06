import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";

const Create = () => {
  const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [age,setAge]=useState("");
  const [email,setEmail]=useState("");
  const [review, setReview] = useState('');
  const [branch, setBranch] = useState('');
  const history=useHistory()
  
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"ADD_DETAIL",payload:{id:uuidv4(), name:name,age:age,email:email,branch:branch,review:review}})
    console.log({name,age,email,review,branch,})
    setBranch("")
    setEmail("")
    setReview("")
    setAge("")
    setName("")
    history.push("/home")
}

  return (
    <div className="create">
      <h2>Add Student Details</h2>
      <form onSubmit={handleSubmit}>
        <label>NAME:</label>
        <input 
          type="text" 
          required 
          value={name}
          placeholder="enter the name"
          onChange={(e) => setName(e.target.value)}
        />
           <label>age:</label>
        <input 
          type="number" 
          required 
          value={age}
          placeholder="enter the age"
          onChange={(e) => setAge(e.target.value)}
        />
           <label>EMAIL:</label>
        <input 
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <label>Student Branch</label>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required 
        >
          <option value="ComputerScience">ComputerScience</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="InformationScience">InformationScience</option>
        </select>
        <label>Student Review:</label>
        <textarea
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="enter the review"
        ></textarea>
        <button className="delete">Add details</button>
      </form>
    </div>
  );
}
 
export default Create;