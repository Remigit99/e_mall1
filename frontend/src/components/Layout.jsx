import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import {ToastContainer} from "react-toastify"

import { Provider } from "react-redux";
import store from "../../app/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <main>
        <ToastContainer/>
        <Navbar />
        <Outlet />
      </main>
    </Provider>
  );
};

export default Layout;
