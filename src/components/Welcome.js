import { useNavigate } from "react-router-dom"
import { Button, Container, Header, Icon } from 'semantic-ui-react'

export default function Welcome() {

    const navigate = useNavigate();

    function handleClick () {
        navigate('/show_qr_code')
    }   

    return (
        <div>
            <Container>
            <Header as='h2'><Header.Content>Bievenido usuario</Header.Content></Header>
             <Header as='h2'>
                <Button onClick={handleClick} ><Header.Content>Comenzar Verificación</Header.Content></Button>
            </Header>
            </Container>
        </div>
    )
}

// TODO
// [ ] Página de welcome 