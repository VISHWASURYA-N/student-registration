import './App.css';
import Create from './pages/createStudent';
import Home from './pages/home';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import StudentDetails from './pages/studentDetail';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import types from './action/types/types';

function App() {
  const themeToggle=useSelector(state=>(state.themeToggle))
  const {isLightTheme,dark,light}=themeToggle
  const dispatch=useDispatch()
  console.log(isLightTheme,dark,light)
  const theme=isLightTheme ? light :dark
console.log(themeToggle)

  return (
    <div className="App" style={{background:theme.background,color:theme.color}}>
      <Router>
         <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/home" component={Home} />
       <Route exact path="/create" component={Create} />
       <Route exact path="/student/:id" component={StudentDetails}/>

        </Switch>
      </Router>
    <button className="delete" onClick={()=>{dispatch({type:types.toggle_Theme})}} >{isLightTheme? "change dark mode":"change to light mode"}</button>
    </div>
  );
}

export default App;
