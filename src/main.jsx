import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import "./index.css";
import Banners from "./Banners.jsx";
import Sidebar from "./sideBar.jsx";
import ProductCard from "./ProdCard.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [abrirSideBar, setAbrirSideBar] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((carrinhoAtual) => {
      // Procura se o produto já está no carrinho usando o NOME
      const existe = carrinhoAtual.find((item) => item.nome === produto.nome);

      if (existe) {
        return carrinhoAtual.map((item) =>
          item.nome === produto.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }

      // Se for um produto novo, adiciona com quantidade 1
      return [
        ...carrinhoAtual,
        {
          ...produto,
          quantidade: 1,
        },
      ];
    });
  };

  return (
    <>
      <Header
        carrinho={carrinho}
        onAbrirCarrinho={() => setAbrirSideBar(true)}
      />

      {/* Repassamos 'carrinho' e 'setCarrinho' para a Sidebar */}
      {abrirSideBar && (
        <Sidebar
          onFechar={() => setAbrirSideBar(false)}
          carrinho={carrinho}
          setCarrinho={setCarrinho}
        />
      )}

      <Banners />

      <ProductCard adicionarAoCarrinho={adicionarAoCarrinho} />

      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
