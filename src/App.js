import './App.css';
import Create from './pages/createStudent';
import Home from './pages/home';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import StudentDetails from './pages/studentDetail';
import Login from './pages/Login';

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
