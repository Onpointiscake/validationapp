import {CloudinaryContext, Image} from "cloudinary-react"

import React, { useEffect} from "react"

export default function ShowId() {

    useEffect(() => {
        // Api calls here 
    })

    return (
        <div>
            <p>Aquí se verán ambas imágenes, subidas a través del móvil.</p>
            <CloudinaryContext cloudName="validation-ob-proyect">
                <div>
                    <Image publicId="sample" width="250" />
                </div>
                <div>
                    <Image publicId="sample" width="250" />
                </div>
            </CloudinaryContext>
            { /** Meter aquí ternary 'no ha sido validado' : 'ha sido validado' */ }
            <p>Tu perfil todavía no ha sido validado. Vuelve a esta página en los próximos días</p>
        </div>
    )
}

// TODO
// [ ] Insertar imágenes que ha acaba de subir el usuario (llamada a API )