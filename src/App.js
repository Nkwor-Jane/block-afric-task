import Homepage from "./components/Homepage";
import Activity from './components/pages/Activity';
import Earn from './components/pages/Earn';
import Wallet from './components/pages/Wallet';
import Market from './components/pages/Market';

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/activity" component={Activity}></Route>
          <Route path="/earn" exact component={Earn}></Route>
          <Route path="/wallet" exact component={Wallet}></Route>
          <Route path="/market" exact component={Market}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
