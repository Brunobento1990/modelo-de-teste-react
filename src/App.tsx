import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { TableApp } from "./table";
import { ConfiguracaoAtalho } from "./configuracao-atalho";
import { useEffect, useState } from "react";
import { ITeclaDeAtalho } from "./types";
import { useTeclaDeAtalho } from "./hooks/use-tecla-de-atalhos";
import { teclasDeAtalhosMock } from "./mock";
import { useModalChildren } from "./modal";
import { Imagem } from "./imagem";

export function App() {
  const [atalhos, setAtalhos] = useState<ITeclaDeAtalho[]>([]);
  const modal = useModalChildren();

  useTeclaDeAtalho(atalhos);

  function initTeclasDeAtalho() {
    const teclasLocalStorage = localStorage.getItem("teclas");
    if (teclasLocalStorage) {
      const parse = JSON.parse(teclasLocalStorage) as ITeclaDeAtalho[];
      setAtalhos(parse);
      return;
    }

    setAtalhos(teclasDeAtalhosMock);
  }

  useEffect(() => {
    initTeclasDeAtalho();
  }, []);

  return (
    <>
      <modal.Component />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <TableApp />
              </Layout>
            }
          />
          <Route
            path="/configuracao-atalho"
            element={
              <Layout>
                <ConfiguracaoAtalho />
              </Layout>
            }
          />
          <Route
            path="/imagem"
            element={
              <Layout>
                <Imagem />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
