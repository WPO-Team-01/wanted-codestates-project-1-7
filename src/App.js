import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage } from "@/pages";
import GlobalStyle from "@/styles/GlobalStyle";
import { Container } from "@/styles/Container";

import GeneratedForm from "./pages/GeneratedForm/GeneratedForm";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result/:id" element={<ResultPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>

          <Route path="/1" element={<GeneratedForm />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
