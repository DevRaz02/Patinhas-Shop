import { useState } from "react";

function Notficacao({ adicionar }) {
  const [mostrar, setMostrar] = useState(false);

  // Função acionada ao clicar no botão
  const mostrarCarrinho = () => {
    setMostrar(true);

    // Chama a função passada pelo ProductCard (se existir)
    if (adicionar) {
      adicionar();
    }

    // Faz o span sumir depois de 3 segundos
    setTimeout(() => {
      setMostrar(false);
    }, 3000);
  };

  return (
    <div className="group rounded-2xl shadow-lg p-4 bg-white flex flex-col justify-between h-full">
      {/* Condição da notificação */}
      {mostrar && (
        <span className="mt-1 w-auto bg-green-600 text-white py-1 flex justify-center rounded-xl hover:bg-green-700 transition cursor-pointer font-semibold">
          Adicionado! 🛒
        </span>
      )}

      <button
        onClick={mostrarCarrinho}
        className="mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default Notficacao;
