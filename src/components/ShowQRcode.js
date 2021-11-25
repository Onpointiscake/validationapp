import QRCode from "qrcode"
import React, { useEffect, useState } from "react"
import { Container, Header, Image, Grid } from 'semantic-ui-react'

export default function ShowQRcode() {
    const [src, setSrc] = useState("")

    useEffect(() => QRCode.toDataURL("https://google.es").then(data => setSrc(data)))

    return (
        <div>
            <Container style={{ marginTop: '3em' }}>

            <Grid centered>

            <Grid.Row><Header as="h3">Use su dispositivo móvil para escanear el siguiente código </Header></Grid.Row>
            <Grid.Row><Image alt="qrcode" src={src} size="medium" /></Grid.Row>

            </Grid>

            </Container>
        </div>
    )
}

// TODO
// [ ] Mostrar código QR 
// info https://github.com/LintangWisesa/React-QR-Generator-Scanner