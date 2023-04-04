import { Row } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
import Bebida from "./Bebida"

const ListaddoBebidas = () => {

    const { bebidas } = useBebidas()
    return (
            <Row className="mt-3">
                {  bebidas.map(bebida =>(
                        <Bebida
                            key={bebida.idDrink}
                            bebida={bebida}
                        />
                )) }
            </Row>
        
    )
}

export default ListaddoBebidas