import { useState } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
import useCategorias from "../hooks/useCategorias"

const Formulario = () => {

    const [busqueda,setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const { categorias } = useCategorias()
    const { consultarBebida,bebidas } = useBebidas()
    const [alerta,SetAlerta] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            SetAlerta('Todos los campos son obligatorios')
            return 
        }

        SetAlerta('')
        consultarBebida(busqueda)
    }

    return (
        <Form onSubmit={handleSubmit}>

            { alerta && <Alert className="text-center" variant="danger">{alerta}</Alert> }

            <Row>
                
                <Col md={6}>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Nombre Bedida</Form.Label>
                        <Form.Control 
                            id="nombre"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, Etc"
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className="mb-3">
                        <Form.Label htmlFor="categoria">Categoria Bedida</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        >
                            <option>--Selecciona Categoria--</option>
                            { categorias.map(categoria =>(
                                <option 
                                    key={categoria.strCategory} 
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            )) }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row md={3} className="justify-content-end"> 
                <Col>
                    <Button
                        variant="danger"
                        className="text-uppercase w-100"
                        type="submit"
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario