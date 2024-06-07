import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import { Provider } from "react-redux";
import store from "../../app/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </Provider>
  );
};

export default Layout;
