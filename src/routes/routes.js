import { Route, Routes } from "react-router-dom";
import RenderProducts from "../components/products/products"
import RenderDetails from "../components/products/product/renderDetails"

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RenderProducts />} />
      <Route exact path="/product-details" element={<RenderDetails />} />
    </Routes>
  );
};

export { AppRoutes };
