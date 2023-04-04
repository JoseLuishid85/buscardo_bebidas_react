import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import ListaddoBebidas from "./components/ListaddoBebidas"
import { CategoriasProvider } from "./context/CategoriaProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import ModalBebidas from "./components/ModalBebidas"

function App() {


    return (
        <>
            <CategoriasProvider>
                <BebidasProvider>
                    <header className="py-5" >
                        <h1>Buscador de Bebidas</h1>
                    </header>
                    <Container className="mt-5">
                        <Formulario />

                        <ListaddoBebidas /> 

                        <ModalBebidas />
                    </Container>
                </BebidasProvider>
            </CategoriasProvider>
        </>
    )
}

export default App
