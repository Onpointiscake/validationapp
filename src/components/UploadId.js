import React, { useState, useRef } from 'react'

import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

export default function UploadId() {

    const [files, setFiles] = useState([])

    return (
        <div>
            <p>Está página se verá desde el móvil. Aquí el usuario adjuntará su documento de identidad por ambas partes.</p>
        
            <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={2}
        server="https://api.cloudinary.com/v1_1/validation-ob-project/upload"
        name="files" 
        labelIdle='Arrastra y suelta tus imágenes aquí o <span class="filepond--label-action">Busca en tus archivos</span>'
      />
     
        </div>
    )
}

// TODO
// [ ] Insertar librería para subir id