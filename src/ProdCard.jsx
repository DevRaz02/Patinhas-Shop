import { useState } from "react";
import Card from "./Card";

// ==========================================
// lISTA GERAL DOS PRODUTOS
// ==========================================
function ProductCard({ adicionarAoCarrinho }) {
  const produtoDog = [
    {
      id: 1,
      imagem: "image/racaoDog/premier.png",
      nome: "Ração Premier Formula Cães Adultos Raças Médias",
      peso: "Pacote de 15kg",
      precoAntigo: "",
      preco: "R$ 219,90",
      desconto: "",
      avaliacao: "4.6 (156 Avaliações)",
    },
    {
      id: 2,
      imagem: "image/racaoDog/quabi.png",
      nome: "Guabi Natural Vida Mais Saudável",
      peso: "Pacote de 15kg",
      precoAntigo: "R$ 319,90 ",
      desconto: "30% OFF",
      preco: " R$ 223,93",
      avaliacao: "4.8 (132 avaliações)",
    },
    {
      id: 3,
      imagem: "image/racaoDog/royalCanin.png",
      nome: "Royal Canin Gastrointestinal",
      peso: "pacote de 10.1kg",
      precoAntigo: "R$ 499,90",
      desconto: "30% OFF",
      preco: "R$ 349,93",
      avaliacao: "4.9 (284 avaliações)",
    },
    {
      id: 4,
      imagem: "image/racaoDog/continente.png",
      nome: "Continente Pet Carne e Cereais",
      peso: "pacote 15kg",
      desconto: "",
      precoAntigo: "",
      preco: "R$ 159,90",
      avaliacao: "4.7 (256 avaliações)",
    },
    {
      id: 5,
      imagem: "image/racaoDog/quatree.png",
      nome: "Quatree Gourmet Filhotes Premium",
      peso: "pacote 15kg",
      desconto: "30% OFF",
      precoAntigo: "R$ 199,90",
      preco: "R$ 139,93",
      avaliacao: "4.7 (167 avaliações)",
    },
    {
      id: 6,
      imagem: "image/racaoDog/bawWaw.png",
      nome: "Ração Baw Waw, Frango & Arroz",
      peso: "pacote 15kg",
      desconto: "",
      precoAntigo: "",
      preco: "R$ 119,90",
      avaliacao: "4.4 (286 avaliações)",
    },
  ];

  const produtoCat = [
    {
      id: 7,
      imagem: "image/racaoCat/Farmina.png",
      nome: "Farmina N&D Grain-Free",
      peso: "Pacote de 15kg",
      precoAntigo: "R$ 169,90",
      preco: "R$ 118,93",
      desconto: "30% OFF",
      avaliacao: "4.9 (123 Avaliações)",
    },
    {
      id: 8,
      imagem: "image/racaoCat/goldengatos.png",
      nome: "Golden Gatos Adultos",
      peso: "Pacote de 15kg",
      precoAntigo: "",
      desconto: "",
      preco: " R$ 223,93",
      avaliacao: "4.8 (132 avaliações)",
    },
    {
      id: 9,
      imagem: "image/racaoCat/granplus.png",
      nome: "Royal Canin Gastrointestinal",
      peso: "pacote de 10.1kg",
      precoAntigo: "R$ 499,90",
      desconto: "30% OFF",
      preco: "R$ 349,93",
      avaliacao: "4.9 (284 avaliações)",
    },
    {
      id: 10,
      imagem: "image/racaoCat/matisse.png",
      nome: "Matisse Castrados Frango",
      peso: "pacote 15kg",
      desconto: "",
      precoAntigo: "",
      preco: "R$ 159,90",
      avaliacao: "4.7 (256 avaliações)",
    },
    {
      id: 11,
      imagem: "image/racaoCat/purina.png",
      nome: "Purina Pro Plan LiveClear",
      peso: "pacote 15kg",
      desconto: "30% OFF",
      precoAntigo: "R$ 199,90",
      preco: "R$ 139,93",
      avaliacao: "4.7 (167 avaliações)",
    },
    {
      id: 12,
      imagem: "image/racaoCat/whiskas.png",
      nome: "Matisse Castrados Frango",
      peso: "pacote 15kg",
      desconto: "",
      precoAntigo: "",
      preco: "R$ 299,90",
      avaliacao: "4.9 (365 avaliações)",
    },
  ];

  const produtoToy = [
    {
      id: 13,
      imagem: "image/brinquedo/bolaAutonoma.png",
      nome: "Pet Gravity Bola Interativa Autônoma",
      peso: "Unidade (43mm)",
      precoAntigo: "R$ 89,90",
      desconto: "40% OFF", // 1º com OFF
      preco: "R$ 53,94",
      avaliacao: "4.8 (95 avaliações)",
    },
    {
      id: 14,
      imagem: "image/brinquedo/ervaCatnip.png",
      nome: "Chalesco Brinquedo Abacate Catnip",
      peso: "Unidade (Catnip Giratório)",
      precoAntigo: "R$ 39,90",
      desconto: "40% OFF", // 2º com OFF
      preco: "R$ 23,94",
      avaliacao: "4.9 (150 avaliações)",
    },
    {
      id: 15,
      imagem: "image/brinquedo/lancador.png",
      nome: "Lançador de Bolinhas",
      peso: "Unidade (1.5 kg)",
      precoAntigo: "",
      desconto: "", // 1º SEM OFF
      preco: "R$ 93,99",
      avaliacao: "4.7 (82 avaliações)",
    },
    {
      id: 16,
      imagem: "image/brinquedo/mordedorShark.png",
      nome: "Mordedor Shark de Borracha",
      peso: "Tamanho M (200g)",
      precoAntigo: "",
      desconto: "", // 2º SEM OFF
      preco: "R$ 49,90",
      avaliacao: "4.6 (110 avaliações)",
    },
    {
      id: 17,
      imagem: "image/brinquedo/ossoCoco.png",
      nome: "Osso Recreativo de Fibra de Coco",
      peso: "Tamanho Único (180g)",
      precoAntigo: "",
      desconto: "", // 3º SEM OFF
      preco: "R$ 41,90",
      avaliacao: "4.8 (64 avaliações)",
    },
    {
      id: 18,
      imagem: "image/brinquedo/rasgador.png",
      nome: "Arranhador Torre Bola Pendurada",
      peso: "Unidade (1.2 kg)",
      precoAntigo: "R$ 129,90",
      desconto: "40% OFF", // 3º com OFF
      preco: "R$ 77,94",
      avaliacao: "4.9 (210 avaliações)",
    },
  ];

  const produtoLook = [
    {
      id: 19,
      imagem: "image/roupas/capaDeChuva.png",
      nome: "Capa de Chuva Impermeável Pet",
      peso: "Tamanho M",
      precoAntigo: "R$ 89,90",
      desconto: "40% OFF",
      preco: "R$ 53,94",
      avaliacao: "4.8 (95 avaliações)",
    },
    {
      id: 20,
      imagem: "image/roupas/colete.png",
      nome: "Colete Acolchoado de Inverno",
      peso: "Tamanho G",
      precoAntigo: "R$ 39,90",
      desconto: "40% OFF",
      preco: "R$ 23,94",
      avaliacao: "4.9 (150 avaliações)",
      tamanhoImg: "scale-75", // Mantido o ajuste caso a imagem precise ser menor
    },
    {
      id: 21,
      imagem: "image/roupas/fantasiaTubarao.png",
      nome: "Fantasia Pet Divertida Tubarão",
      peso: "Tamanho P",
      precoAntigo: "",
      desconto: "",
      preco: "R$ 299,90",
      avaliacao: "4.7 (82 avaliações)",
    },
    {
      id: 22,
      imagem: "image/roupas/moleton.png",
      nome: "Moletom Quentinho com Capuz",
      peso: "Tamanho M",
      precoAntigo: "",
      desconto: "",
      preco: "R$ 39,90",
      avaliacao: "4.6 (110 avaliações)",
    },
    {
      id: 23,
      imagem: "image/roupas/roupaoPosBanho.png",
      nome: "Roupão Pós-Banho Microfibra Pet",
      peso: "Tamanhos: P | M | G", // 👈 Especifica as opções disponíveis
      precoAntigo: "",
      desconto: "",
      preco: "R$ 41,90",
      avaliacao: "4.8 (64 avaliações)",
    },
    {
      id: 24,
      imagem: "image/roupas/roupaVerao.png",
      nome: "Camiseta Leve de Verão Estampada",
      peso: "Tamanho P",
      precoAntigo: "R$ 129,90",
      desconto: "40% OFF",
      preco: "R$ 77,94",
      avaliacao: "4.9 (210 avaliações)",
    },
  ];

  // ==========================================
  // CONFIGURAÇÕES GERAIS
  // ==========================================
  const produtosPorPagina = 3;

  // ==========================================
  // CARROSSEL 1: PRODUTOS GERAIS
  // ==========================================
  const [paginaAtual, setPaginaAtual] = useState(0);
  const totalPaginas = Math.ceil(produtoDog.length / produtosPorPagina);

  const avancar = () => {
    if (paginaAtual < totalPaginas - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const voltar = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  // ==========================================
  // CARROSSEL 2: GATOS (CAT)
  // ==========================================
  const [paginaCat, setPaginaCat] = useState(0);
  const totalPaginasCat = Math.ceil(produtoCat.length / produtosPorPagina);

  const avancarCat = () => {
    if (paginaCat < totalPaginasCat - 1) {
      setPaginaCat(paginaCat + 1);
    }
  };

  const voltarCat = () => {
    if (paginaCat > 0) {
      setPaginaCat(paginaCat - 1);
    }
  };

  // ==========================================
  // CARROSSEL 3: BRINQUEDOS (TOY)
  // ==========================================
  const [paginaToy, setPaginaToy] = useState(0);
  const totalPaginasToy = Math.ceil(produtoToy.length / produtosPorPagina);

  const avancarToy = () => {
    if (paginaToy < totalPaginasToy - 1) {
      setPaginaToy(paginaToy + 1);
    }
  };

  const voltarToy = () => {
    if (paginaToy > 0) {
      setPaginaToy(paginaToy - 1);
    }
  };

  // ==========================================
  // CARROSSEL 4: ROUPAS (LOOKS)
  // ==========================================
  const [paginaLook, setPaginaLook] = useState(0);
  const totalPaginasLook = Math.ceil(produtoLook.length / produtosPorPagina);

  const avancarLook = () => {
    if (paginaLook < totalPaginasLook - 1) {
      setPaginaLook(paginaLook + 1);
    }
  };

  const voltarLook = () => {
    if (paginaLook > 0) {
      setPaginaLook(paginaLook - 1);
    }
  };

  return (
    <main
      id="sessaoRaçoes"
      className=" scroll-mt-36 w-full max-w-6xl mx-auto py-10 relative"
    >
      <h2 className="text-5xl font-bold text-amber-600 m-2">Rações</h2>
      <p className="text-4xl font-bold text-orange-900 m-6">Cachorros</p>

      <div className="relative flex items-center w-full px-12">
        <button
          onClick={voltar}
          className="absolute left-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10094;
        </button>

        <div className="overflow-hidden w-full h-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${paginaAtual * 100}%)` }}
          >
            {produtoDog.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                <Card
                  imagem={item.imagem}
                  nome={item.nome}
                  desconto={item.desconto}
                  peso={item.peso}
                  precoAntigo={item.precoAntigo}
                  preco={item.preco}
                  avaliacao={item.avaliacao}
                  adicionar={adicionarAoCarrinho}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={avancar}
          className="absolute right-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10095;
        </button>
      </div>

      <p className="text-4xl font-bold text-red-950 m-6">Gatos</p>

      <div className="relative flex items-center w-full px-12">
        <button
          onClick={voltarCat}
          className="absolute left-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10094;
        </button>

        <div className="overflow-hidden w-full h-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${paginaCat * 100}%)` }}
          >
            {produtoCat.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                <Card
                  imagem={item.imagem}
                  nome={item.nome}
                  desconto={item.desconto}
                  peso={item.peso}
                  precoAntigo={item.precoAntigo}
                  preco={item.preco}
                  avaliacao={item.avaliacao}
                  adicionar={adicionarAoCarrinho}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={avancarCat}
          className="absolute right-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10095;
        </button>
      </div>

      <h2
        id="sessaoAcessorios"
        className="text-5xl scroll-mt-40 font-bold text-blue-400 mt-10"
      >
        Acessórios
      </h2>
      <p className="text-4xl font-bold text-pink-500 m-6">Brinquedos</p>

      <div className="relative flex items-center w-full px-12">
        <button
          onClick={voltarToy}
          className="absolute left-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10094;
        </button>

        <div className="overflow-hidden w-full h-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${paginaToy * 100}%)` }}
          >
            {produtoToy.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                <Card
                  imagem={item.imagem}
                  nome={item.nome}
                  desconto={item.desconto}
                  peso={item.peso}
                  precoAntigo={item.precoAntigo}
                  preco={item.preco}
                  avaliacao={item.avaliacao}
                  adicionar={adicionarAoCarrinho}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={avancarToy}
          className="absolute right-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10095;
        </button>
      </div>

      <p className="text-4xl font-bold text-red-400 m-6">Looks</p>

      <div className="relative flex items-center w-full px-12">
        <button
          onClick={voltarLook}
          className="absolute left-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10094;
        </button>

        <div className="overflow-hidden w-full h-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${paginaLook * 100}%)` }}
          >
            {produtoLook.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                <Card
                  imagem={item.imagem}
                  nome={item.nome}
                  desconto={item.desconto}
                  peso={item.peso}
                  precoAntigo={item.precoAntigo}
                  preco={item.preco}
                  avaliacao={item.avaliacao}
                  adicionar={adicionarAoCarrinho}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={avancarLook}
          className="absolute right-0 z-10 bg-gray-700 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-all select-none"
        >
          &#10095;
        </button>
      </div>
    </main>
  );
} // Esta chave fecha a function ProductCard

export default ProductCard;
