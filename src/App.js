import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/result/:id" element={<ResultPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
