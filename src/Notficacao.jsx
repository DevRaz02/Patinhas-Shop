function Notficacao ({mostrar}) {
    return(
     const [mostrar, setMostrar] = useState("");

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
      {/*condiçao de Notificação*/}
      {mostrar && (
        <span className="mt-1 transition w-auto bg-green-600 text-white py-1 flex justify-center rounded-xl hover:bg-green-700 transition cursor-pointer font-semibold">
          adicionado! 🛒
        </span>
      )}   
    )
}

export default Notficacao