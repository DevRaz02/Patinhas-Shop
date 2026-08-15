export function Sidebar({ onFechar, carrinho, setCarrinho }) {
  const apagarCarrinho = (id) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((produto) => produto.id !== id),
    );
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      alert("seu carrinho está vazio!");
      return;
    }

    const confirmar = window.confirm("Deseja finalizar sua compra?");

    if (confirmar) {
      alert("Compra realizada!🛒");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      {/* Painel Lateral */}
      <aside className="w-80 sm:w-96 bg-white h-full p-6 shadow-2xl flex flex-col justify-between">
        {/* Topo da Sidebar */}
        <div>
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800">Meu Carrinho</h2>

            {/* Botão de Fechar */}
            <button
              onClick={onFechar}
              className="text-gray-400 hover:text-black font-bold text-3xl transition cursor-pointer"
            >
              &times;
            </button>
          </div>

          {/* Lista de Produtos */}
          <div className="mt-4 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
            {carrinho.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                Seu carrinho está vazio.
              </p>
            ) : (
              carrinho.map((produto) => (
                <div
                  key={produto.id}
                  className="flex items-center justify-between p-2 border-b border-gray-100"
                >
                  <div className="flex-1 pr-2">
                    <h4 className="font-bold text-sm text-gray-800 line-clamp-1">
                      {produto.nome}
                    </h4>

                    <p className="text-sm text-green-600 font-bold">
                      {produto.preco}
                    </p>

                    <span className="text-xs text-gray-500 font-semibold">
                      Qtd: {produto.quantidade}
                    </span>
                  </div>

                  {/* Botão de Apagar */}
                  <button
                    type="button"
                    onClick={() => apagarCarrinho(produto.id)}
                    className="text-2xl text-red-500 font-bold hover:text-red-700 cursor-pointer px-2"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-gray-700">Total:</span>
            <span className="text-green-600">
              R${" "}
              {carrinho
                .reduce(
                  (total, produto) =>
                    total +
                    Number(
                      produto.preco.replace("R$", "").replace(",", ".").trim(),
                    ) *
                      produto.quantidade,
                  0,
                )
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>

          <button
            onClick={finalizarCompra}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition cursor-pointer shadow-md active:scale-95"
          >
            Finalizar Compra
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
