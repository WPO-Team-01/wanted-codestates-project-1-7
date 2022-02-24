import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage, SubmittedePage } from "@/pages";
import GlobalStyle from "@/styles/GlobalStyle";
import { Container } from "@/styles/Container";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result/:id" element={<ResultPage />}></Route>
          <Route path="/submitted/:id" element={<SubmittedePage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
