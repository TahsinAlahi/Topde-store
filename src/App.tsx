import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ProductProvider } from "./Contexts/ProductContext";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
