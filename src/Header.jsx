import React from "react";

// ✅ Recebemos os props aqui nos parênteses:
function Header({ carrinho = [], onAbrirCarrinho }) {
  return (
    <header className="fixed w-auto top-4 left-[14px] right-[14px] z-50 backdrop-blur-md rounded-[10px] shadow-[-6px_10px_30px_1px_rgba(0,0,0,0.15)] bg-white/80">
      <nav className="flex justify-evenly items-center p-3 font-bold text-base text-green-600">
        <img className="w-20" src="image/logo/logo.png" alt="logoDoSite" />

        <a
          className="text-[20px] hover:text-black transition duration-300"
          href="#inicio"
        >
          Início
        </a>
        <a
          className="text-[20px] hover:text-amber-600 transition duration-300"
          href="#sessaoRaçoes"
        >
          Rações
        </a>
        <a
          className="text-[20px] hover:text-red-400 transition duration-300"
          href="#sessaoAcessorios"
        >
          Acessórios
        </a>

        <input
          type="text"
          placeholder="Buscar por produtos / categorias..."
          className="text-black w-80 px-4 py-2 border-2 border-gray-400 rounded-lg outline-none focus:border-green-600 transition duration-200"
        />

        <button
          onClick={onAbrirCarrinho}
          className="relative cursor-pointer group"
        >
          <img
            className="w-10 transform group-hover:scale-110 duration-200"
            src="image/carrinho/carrinho.png"
            alt="imgCart"
          />

          {carrinho.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
              {carrinho.length}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
