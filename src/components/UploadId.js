import React, { useState, useRef } from 'react'
import { Button, Container, Header, Grid } from 'semantic-ui-react'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

export default function UploadId() {

    const [files, setFiles] = useState([])
    // sustituir por filepond https://uploadcare.com/
    return (
        <div>
            <Container style={{ marginTop: '3em' }}>
            <Header as='h1' dividing>
            Validation App
            </Header>

            <Header as="h4">Adjunte ahora su documento por ambas partes.</Header>
            <Grid columns={3} stackable>

            <Grid.Column></Grid.Column>
<Grid.Column><FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={2}
                server="https://api.cloudinary.com/v1_1/validation-ob-project/upload"
                name="files" 
                labelIdle='Arrastra y suelta tus imágenes aquí o <span class="filepond--label-action">Busca en tus archivos</span>'
            /></Grid.Column>
            <Grid.Column></Grid.Column>

            </Grid>
            </Container>
        </div>
    )
}

// TODO
// [ ] Insertar librería para subir id