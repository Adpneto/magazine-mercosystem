import HTMLFlipBook from 'react-pageflip'

function App() {

  return (
    <div className="bg-zinc-700 w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      <HTMLFlipBook
        width={window.innerWidth < 600 ? 400 : 600}
        height={window.innerWidth < 600 ? 650 : 800}
        showCover={true}
        startPage={0}
        flippingTime={1000}
        animationDuration={0}
        drawShadow={true}
      >
        <img src="1 - Capa.png" alt="" />
        <img src="2 - Indice.png" alt="" />
        <img src="3 - Sobre o grupo.png" alt="" />
        <img src="4 - Piso Aquecido.png" alt="" />
        <img src="5 - Piso Aquecido.png" alt="" />
        <img src="6 - Energia Solar.png" alt="" />
        <img src="7 - Energia Solar.png" alt="" />
        <img src="8 - Automação.png" alt="" />
        <img src="9 - Automação.png" alt="" />
        <img src="10 - Iluminação.png" alt="" />
        <img src="11 - Iluminação.png" alt="" />
        <img src="12 - Revestimento.png" alt="" />
        <img src="13 - Revestimento.png" alt="" />
        <img src="14 - Cortinas.png" alt="" />
        <img src="15 - Cortinas.png" alt="" />
        <img src="16 - Vidros e Desembaçador.png" alt="" />
        <img src="17 - Vidros e Desembaçador.png" alt="" />
        <img src="18 - Toalheiros.png" alt="" />
        <img src="20 Toalheiros.png" alt="" />
        <img src="21 - Contra Capa.png" alt="" />
      </HTMLFlipBook>
    </div>
  )
}

export default App;
