import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "/src/store/reducers";
import TaskBoard from "/src/components/TaskBoard";
import NavBar from "/src/components/NavBar"

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
