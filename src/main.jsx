import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import "./index.css";
import Banners from "./Banners.jsx";
import ProductCard from "./ProdCard.jsx";
import Footer from "./Footer.jsx";

function App() {
  // A lista do carrinho fica salva aqui!
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar o produto
  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  function App() {
    // A lista do carrinho fica salva aqui!
    const [carrinho, setCarrinho] = useState([]);

    // Função para adicionar o produto
    const adicionarAoCarrinho = (produto) => {
      setCarrinho([...carrinho, produto]);
    };

    return (
      <>
        {/* O Header recebe o carrinho para saber a quantidade */}
        <Header carrinho={carrinho} />

        <Banners />

        {/* O ProductCard recebe a função para adicionar itens */}
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
}
