import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ResultPage } from "@/pages";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result/:id" element={<ResultPage />}></Route>
          <Route path="/create" element={<CreateFormPage />} />
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
