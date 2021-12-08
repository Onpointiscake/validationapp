import { useNavigate } from "react-router-dom"
import { Button, Grid, Form, Container, Header } from 'semantic-ui-react'

export default function Register() {

    const navigate = useNavigate();

    function handleSubmit() {

        // Here async api calls

        navigate('/welcome/:userid')
    }

    // Quitar apellido y poner en su lugar nombre de usuario
    return (
        <div>
            <Container style={{ marginTop: '3em' }}>
   
            <Header as='h1' dividing>
            Validation App
            </Header>

                <Grid style={{ marginTop: '1em' }} columns={3} stackable>

                    <Grid.Column></Grid.Column>

                <Grid.Column>
                    <Header as='h2'>Comenzar Proceso de validación</Header>

                    <p>
                    Por favor, ingrese los siguientes campos para registrarse en el sitio. 
                    A continuación la aplicación le guiará por el proceso de validación.
                    </p>
                    
                    <p>
                    Recuerde tener su <strong>documento de identidad a mano</strong>. Se le pedirá en las siguientes fases del proceso de verificación.
                    </p>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths='equal'>
                    <Form.Input
                    fluid
                    label='Nombre'
                    placeholder='nombre'
                    type='text'
                    />
                    <Form.Input
                    fluid
                    label='Apellido'
                    placeholder='apellido'
                    type='text'
                    />
                </Form.Group>
                <Form.Input label='Email' placeholder='email' type='text' />
                <Form.Input label='Contraseña' type='password' />
               
                <Button color='blue'>Enviar</Button>
                        </Form>
                
                </Grid.Column>
                <Grid.Column></Grid.Column>
                </Grid>
                </Container>
          
        </div>
    )
}

// TODO
// [ ] Form con nombre, lastname, email y password