import { useNavigate } from "react-router-dom"
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'

export default function Register() {

    const navigate = useNavigate();

    function handleSubmit() {

        // Here async api calls

        navigate('/welcome/:userid')
    }

    return (
        <div>
            <Container>
            <Header as='h2'>Por favor regístrese para comenzar</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label>Nombre</label>
                <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Apellido</label>
                <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                <input type='email' placeholder='Email' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input type='password' placeholder='password' />
                </Form.Field>
                <Form.Field>
                <Checkbox label='Estoy de acuerdo con los términos y condiones' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            </Container>
        </div>
    )
}

// TODO
// [ ] Form con nombre, lastname, email y password