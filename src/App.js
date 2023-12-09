import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "../src/Layout/MainLayout";
import Home from "../src/View/Home/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
