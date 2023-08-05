import Header from "./components/Header";
import router from "./router";
import {RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <>
          <Header />
          <RouterProvider router={router}/>
      </>
  );
};

export default App;
