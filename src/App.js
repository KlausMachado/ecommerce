import Navbar from "./components/Navbar/Navbar";
import RenderProducts from "./components/products/products";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RenderProducts />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
