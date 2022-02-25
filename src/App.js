import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage, SubmittedePage } from "@/pages";
import GlobalStyle from "@/styles/GlobalStyle";
import styled from "styled-components";
import CreateFormPage from "./pages/CreateFormPage/CreateFormPage";

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result/:id" element={<ResultPage />}></Route>
          <Route path="/submitted/:id" element={<SubmittedePage />}></Route>
          <Route path="/create" element={<CreateFormPage />} />
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
