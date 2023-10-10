import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddRegister from "./pages/AddRegister";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <>
      <CrudProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-register" element={<AddRegister />} />
          </Routes>
        </BrowserRouter>
      </CrudProvider>
    </>
  );
}

export default App;
