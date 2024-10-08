import { useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'

function App() {
  const [scale, setScale] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const bookRef = useRef(null)

  const handleZoomIn = () => {
    setScale((prevScale) => {
      const newScale = Math.min(prevScale + 0.5, 3)
      if (newScale > 1) {
        setIsZoomed(true)
      }
      return newScale;
    })
  }

  const handleZoomOut = () => {
    setScale((prevScale) => {
      const newScale = Math.max(prevScale - 0.5, 1)
      if (newScale === 1) {
        setIsZoomed(false)
        setOffset({ x: 0, y: 0 });
      }
      return newScale;
    })
  }

  const handleMouseDown = (e) => {
    e.preventDefault(); 
    if (isZoomed) { 
      setDragging(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  }

  const handleTouchStart = (e) => {
    if (isZoomed) {
      const touch = e.touches[0]
      setDragging(true);
      setStartPosition({ x: touch.clientX, y: touch.clientY });
    }
  }

  const handleMouseMove = (e) => {
    if (dragging) {
      const dx = e.clientX - startPosition.x
      const dy = e.clientY - startPosition.y
      setOffset((prevOffset) => ({
        x: prevOffset.x + dx,
        y: prevOffset.y + dy,
      }))
      setStartPosition({ x: e.clientX, y: e.clientY })
    }
  }

  const handleTouchMove = (e) => {
    if (dragging) {
      const touch = e.touches[0]
      const dx = touch.clientX - startPosition.x;
      const dy = touch.clientY - startPosition.y;
      setOffset((prevOffset) => ({
        x: prevOffset.x + dx,
        y: prevOffset.y + dy,
      }));
      setStartPosition({ x: touch.clientX, y: touch.clientY });
    }
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  const handleTouchEnd = () => {
    setDragging(false)
  }

  return (
    <div
      className="bg-zinc-700 w-screen h-screen flex justify-center items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd} 
    >
      <div className="flex flex-col justify-center items-center gap-2 mb-4 fixed right-2 bottom-2 z-50">
        <button onClick={handleZoomOut} className="p-2 bg-[#0000008c] font-extrabold text-white w-10 rounded-lg border-[0.1rem]">-</button>
        <button onClick={handleZoomIn} className="p-2 bg-[#0000008c] font-extrabold text-white w-10 rounded-lg border-[0.1rem]">+</button>
      </div>
      <div
        className='w-screen flex items-center justify-center z-1' 
        style={{ 
          transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`, 
          transformOrigin: 'top left', 
          transition: 'transform 0.3s ease',
          cursor: dragging ? 'grabbing' : 'grab' 
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={window.innerWidth < 600 ? 400 : 600}
          height={window.innerWidth < 600 ? 650 : 800}
          showCover={true}
          startPage={0}
          flippingTime={1000}
          drawShadow={false}
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
    </div>
  )
}

export default App
