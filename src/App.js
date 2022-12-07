//import {BrowserRouter as Router,  Route} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./component/Navigation";
const App = () => {
    return(
    <>
    <Router>
        <Navigation />
        
            <Route path = "/" component = {Home}>exact</Route>
            <Route path = "/about" component = {About}></Route>
        
    </Router>
    </>
    )
}
export default App;