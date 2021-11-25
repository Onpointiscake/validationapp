import React, { useEffect, useState } from 'react'
import {CloudinaryContext, Image} from "cloudinary-react"
import { Button, Container, Header, Grid, Modal } from 'semantic-ui-react'
import './admin.css'

export default function Admin() {

    const [openModal, setOpenModal] = React.useState(false)

    { /** TODO: 
        [X] Hacer las media queries 
        [ ] Meter un <p> O algo donde se vea el usuario
        [ ] Diseñar el modal para que se renderize desde api segun cantidad de usuarios
    */ }

    useEffect(() => {
        // Do api call - get here
    })

    return (
        <div>
            
            <Container style={{ marginTop: '3em' }}>
            <Header as='h1' dividing>
            Validation App - Admin 
            </Header>
            {/** Tocar media queries en maxWidth del modal y en margins de las imagenes */}
          
           
            <Modal className="modal" 
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}
            open={openModal}
            trigger={<Button>Ver imágenes</Button>}
            >
            <Modal.Header>Comprobación de identidad</Modal.Header>
            <Modal.Content >
            <CloudinaryContext cloudName="validation-ob-proyect">
                        <Container>
                            <Grid centered>
                                {/** Todo: Modificar tamaño imagen -- media queries */}
                            <Grid.Row><a rel="noreferrer" target="_blank" href="https://google.es"><Image id="image" className="images-id" publicId="sample"  /></a>
                           <a rel="noreferrer" target="_blank" href="https://google.es"><Image className="images-id" publicId="sample" /></a></Grid.Row>
                        </Grid>
                        </Container>
                    </CloudinaryContext>
                <Modal.Description>
                <p>
                    Hemos encontrado los siguientes IDs del usuario.
                </p>
                <p>¿Desea confirmar la identidad?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpenModal(false)}>
                Rechazar
                </Button>
                <Button
                content="Validar Identidad"
                labelPosition='right'
                icon='checkmark'
                onClick={() => setOpenModal(false)}
                positive
                />
            </Modal.Actions>
            </Modal>
           
           
            </Container>
        </div>
    )
}

// TODO
// [ ] Llamada a api y toggles (para validar o no al usuario)

// Modal para mostrar imagenes y botón para verificar o no
//https://react.semantic-ui.com/modules/modal/#types-modal