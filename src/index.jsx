import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ToastContainer, Flip } from "react-toastify";
import reducer from "@store/reducers";
import TaskBoard from "@components/TaskBoard";
import NavBar from "@components/NavBar";

import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(reducer);
const rootElement = document.getElementById("root");

const renderApp = () => {
  const App = (
    <Provider store={store}>
      <ToastContainer transition={Flip} />
      <NavBar />
      <TaskBoard />
    </Provider>
  );

  const root = ReactDOM.createRoot(rootElement);
  root.render(App);
};

renderApp();
