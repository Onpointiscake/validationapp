import React, { useEffect, useState } from 'react'

export default function Admin() {

    useEffect(() => {
        // Do api call - get here
    })

    return (
        <div>
            <p> Aquí se verá la validación de cada usuario y se podrán visualizar los documentos y decidir si se valida o rechaza al usuario.</p>
        </div>
    )
}

// TODO
// [ ] Llamada a api y toggles (para validar o no al usuario)