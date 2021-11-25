import React, { useEffect, useState } from 'react'
import {CloudinaryContext, Image} from "cloudinary-react"
import { Button, Container, Header, Grid, Modal } from 'semantic-ui-react'

export default function Admin() {

    const [openModal, setOpenModal] = React.useState(false)

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
          
           
            <Modal 
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
                            <Grid.Row><a rel="noreferrer" target="_blank" href="https://google.es"><Image publicId="sample" width="250" /></a>
                           <a rel="noreferrer" target="_blank" href="https://google.es"><Image publicId="sample" width="250" /></a></Grid.Row>
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