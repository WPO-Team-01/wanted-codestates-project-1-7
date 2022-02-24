import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage } from "@/pages";
// import { GlobalStyle } from "@root/styles/GlobalStyle";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result/:id" element={<ResultPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
