import { useNavigate } from "react-router-dom"
import { Button, Container, Header, Grid } from 'semantic-ui-react'

export default function Welcome() {

    const navigate = useNavigate();

    function handleClick () {
        navigate('/show_qr_code')
    }   

    return (
        <div>
            <Container style={{ marginTop: '3em' }}>
   
            <Header as='h1' dividing>
            Validation App
            </Header>

       <Grid style={{ marginTop: '1em' }} columns={3} stackable>

           <Grid.Column></Grid.Column>

       <Grid.Column>
           <Header as='h2'>Se ha registrado correctamente</Header>

           <p>
           Continue para validar su identidad en el sistema
           </p>

       <Button onClick={handleClick} color='green'>Siguiente</Button>
              
       
       </Grid.Column>
       <Grid.Column></Grid.Column>
       </Grid>
       </Container>
 
        </div>
    )
}

// TODO
// [ ] Página de welcome 