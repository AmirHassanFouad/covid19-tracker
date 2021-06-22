import cliniserveLogo from "./cliniserve-logo.svg";
import { DistrictTracker } from "./components/districtsTracker";
import "antd/dist/antd.css";
import "./App.scss";

function App(): JSX.Element {
  return (
    <div className="app">
      <header className="app-header">
        <img src={cliniserveLogo} className="app-logo" alt="logo" />
      </header>
      <DistrictTracker />
    </div>
  );
}

export default App;
