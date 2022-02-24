import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage, SubmittedePage } from "@/pages";
import GlobalStyle from "@/styles/GlobalStyle";
import { Container } from "@/styles/Container";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result/:id" element={<ResultPage />}></Route>
          <Route path="/submitted/:id" element={<SubmittedePage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
