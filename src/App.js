import Navbar from "./components/Navbar/Navbar";
import RenderProducts from "./components/products/products";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";



function App() {
  return (
    <>
      <Navbar />
      <RenderProducts />
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
