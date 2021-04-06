import './App.css';
import Create from './component/createStudent';
import Home from './component/home';
import Navbar from './component/navbar';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import StudentDetails from './component/studentDetail';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/home" component={Home} />
       <Route exact path="/create" component={Create} />
       <Route exact path="/student/:id" component={StudentDetails}/>

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
