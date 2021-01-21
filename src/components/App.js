
import {Route, Switch} from 'react-router-dom';

import Content from './Content';
import SideBar from './SideBar';

//Pages
import Courses from './Courses';
import Users from './Users';
import Sales from './Sales';
import Categories from './Categories';

function App() {
  return (
    <div id="wrapper">
      <SideBar/>
      
      <Switch>
        <Route exact path="/" component={Content}/>
        <Route exact path="/courses" component={Courses}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/sales" component={Sales}/>
        <Route exact path="/categories" component={Categories}/>
    </Switch>
    </div>
  );
}

export default App;
