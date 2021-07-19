import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/home';

const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;