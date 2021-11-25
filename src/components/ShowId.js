import {CloudinaryContext, Image} from "cloudinary-react"
import { Container, Header, Grid } from 'semantic-ui-react'

import React, { useEffect} from "react"

export default function ShowId() {

    useEffect(() => {
        // Api calls here 
    })

    return (
        <div>
        <Container style={{ marginTop: '3em' }}>

        <Grid centered>

        <Grid.Row><Header as="h4">Enhorabuena! Acaba de subir las siguientes imágenes.</Header></Grid.Row>

        <Grid.Row>
        <CloudinaryContext cloudName="validation-ob-proyect">
                        <Container>
                            <Grid centered>
                            <Grid.Row><a rel="noreferrer" target="_blank" href="https://google.es"><Image publicId="sample" width="250" /></a></Grid.Row>
                            <Grid.Row><a rel="noreferrer" target="_blank" href="https://google.es"><Image publicId="sample" width="250" /></a></Grid.Row>
                        </Grid>
                        </Container>
                    </CloudinaryContext>
        </Grid.Row>
        
        <Header as="h5">Puede cerrar esta página. Su perfil se encuentra ahora en proceso de verificación por el administrador.</Header>

        </Grid>
        </Container>


            { /** 
             <p>Aquí se verán ambas imágenes, subidas a través del móvil.</p>
            <CloudinaryContext cloudName="validation-ob-proyect">
                <div>
                    <Image publicId="sample" width="250" />
                </div>
                <div>
                    <Image publicId="sample" width="250" />
                </div>
            </CloudinaryContext>
          
            <p>Tu perfil todavía no ha sido validado. Vuelve a esta página en los próximos días</p>
            */}
        </div>
    )
}

// TODO
// [ ] Insertar imágenes que ha acaba de subir el usuario (llamada a API )