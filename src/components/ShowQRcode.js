import QRCode from "qrcode"
import React, { useEffect, useState } from "react"

export default function ShowQRcode() {
    const [src, setSrc] = useState("")

    useEffect(() => QRCode.toDataURL("https://google.es").then(data => setSrc(data)))

    return (
        <div>
            <p>Use su dispositivo móvil para escanear el siguiente código </p>
            <img alt="qrcode" src={src} />
        </div>
    )
}

// TODO
// [ ] Mostrar código QR 
// info https://github.com/LintangWisesa/React-QR-Generator-Scanner