import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map(student=> (
        <div className="student-preview" key={student.id} >
          <Link to={`/student/${student.id}`}>
            <h2>{ student.name}</h2>
            <p>{student.branch }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default StudentList;