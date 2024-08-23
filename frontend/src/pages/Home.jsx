import { Link } from "react-router-dom"
import Background from "../components/background/Background"
import SquareContainer from "../components/divContainer/SquareContainer"
import Square from "../components/divContainer/Square"
import TitleH1 from "../components/title/TitleH1"
import Nav from "../components/nav/Nav"


function Home() {
  return (
    <Background>
      <Nav></Nav>
      <TitleH1 title="SISTRO"></TitleH1>
      <SquareContainer>
        <Square>
          <Link to={`/instrumentos`}>
            <img src="img/clases.jpg" alt="" className="w-full h-full rounded-3xl" />
          </Link>
          <p className="w-full text-center text-white text-4xl mt-4">Clases</p>
        </Square>
        <Square>
          <Link to={`/lista-partituras`}>
            <img src="img/partituras.jpg" alt="" className="w-full h-full rounded-3xl" />
          </Link>
          <p className="w-full text-center text-white text-4xl mt-4">Canciones</p>
        </Square>
      </SquareContainer>
    </Background>
  )
}

export default Home