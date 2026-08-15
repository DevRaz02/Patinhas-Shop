import { useState } from "react";

function Card({
  id,
  imagem,
  nome,
  desconto,
  peso,
  precoAntigo,
  preco,
  avaliacao,
  adicionar,
}) {
  const [mostrar, setMostrar] = useState(false);

  // Função acionada ao clicar no botão
  const mostrarCarrinho = () => {
    setMostrar(true);

    // Chama a função passada pelo ProductCard (se existir)
    if (adicionar) {
      adicionar({ id, nome, preco });
    }

    setTimeout(() => {
      setMostrar(false);
    }, 1000);
  };

  return (
    <div className="group rounded-2xl shadow-lg p-4 bg-white flex flex-col justify-between h-full">
      {/*condiçao de Notificação*/}
      {mostrar && (
        <span className=" fixed m-1 p-3 transition w-auto h-auto bg-green-700 text-white py-1 flex justify-center rounded-xl hover:bg-green-700 transition cursor-pointer font-semibold">
          adicionado! 🛒
        </span>
      )}

      <div>
        {/* Imagem e Título */}
        <div className="w-full h-36 flex items-center gap-3">
          <img
            className="max-h-full max-w-full object-contain"
            src={imagem}
            alt={nome}
          />
          <h3 className="mt-4 text-xl font-bold text-gray-800 line-clamp-2">
            {nome}
          </h3>
        </div>

        {/* Informações do Produto */}
        <div>
          {desconto && (
            <span className="m-2 font-bold text-green-700">{desconto}</span>
          )}
          <p className="mt-2 text-gray-500">{peso}</p>

          <div className="flex gap-1.5">
            {precoAntigo && (
              <p className="mt-3 text-base font-semibold text-gray-400 line-through">
                {precoAntigo}
              </p>
            )}
            <p className="mt-3 text-base font-semibold text-black">{preco}</p>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <img
              src="image/star/estrela.png"
              className="w-6 h-6"
              alt="estrela"
            />
            <span className="text-sm text-gray-600">{avaliacao}</span>
          </div>
        </div>
      </div>

      {/* Botão e Notificação */}
      <div>
        <button
          onClick={mostrarCarrinho}
          className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition cursor-pointer font-bold"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Card;
