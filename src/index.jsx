import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TaskBoard from "./components/TaskBoard";
import NavBar from "./components/NavBar"
import reducer from "./store/reducres";

import "./index.scss"

const store = createStore(reducer);

const rootElement = document.getElementById("root");
const renderApp = () => {
  const App = (
    <>
      <NavBar />
      <Provider store={store}>
        <TaskBoard />
      </Provider>
    </>
  );

  const root = ReactDOM.createRoot(rootElement);
  root.render(App);
};

renderApp();
