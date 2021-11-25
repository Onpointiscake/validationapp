import React, { useEffect, useState } from 'react'
import {CloudinaryContext, Image} from "cloudinary-react"
import { Button, Divider, Container, Header, Grid, Menu } from 'semantic-ui-react'
import './admin.css'

export default function Admin() {

    const fakeData = [{id: 1, name: "Javierito", imagenes: ["https://www.comunidadredpill.com/wp-content/uploads/2018/01/daygame-700x392.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmxK4ymrwjDnuk3K2YqaQM2JdBfnWpueuINrHgBGj0n5gbdHkafk8E1M6r_N9G4707dw&usqp=CAU"]},{id: 2, name: "Anacarto", imagenes: ["https://www.comunidadredpill.com/wp-content/uploads/2018/01/daygame-700x392.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmxK4ymrwjDnuk3K2YqaQM2JdBfnWpueuINrHgBGj0n5gbdHkafk8E1M6r_N9G4707dw&usqp=CAU"]},{id: 3, name: "Davicito", imagenes: ["https://www.comunidadredpill.com/wp-content/uploads/2018/01/daygame-700x392.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmxK4ymrwjDnuk3K2YqaQM2JdBfnWpueuINrHgBGj0n5gbdHkafk8E1M6r_N9G4707dw&usqp=CAU"]},{id: 4, name: "Sarita", imagenes: ["https://www.comunidadredpill.com/wp-content/uploads/2018/01/daygame-700x392.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmxK4ymrwjDnuk3K2YqaQM2JdBfnWpueuINrHgBGj0n5gbdHkafk8E1M6r_N9G4707dw&usqp=CAU"]}]

    useEffect(() => {
        // Do api call - get here
    })

    return (
        <div>
            
            <Container style={{ marginTop: '3em' }}>
            <Header as='h1' dividing>
            Validation App - Admin 
            </Header>
           
            {fakeData.map((data, index) => {
                return (
                    <Grid style={{ marginTop: '0.2em' }} columns={3} stackable>

                    <Grid.Column></Grid.Column>

                    <Grid.Column>
            <Menu vertical fluid>
              <Menu.Item>
                <Header size='medium' as='h1'>
                 {data.name}
                </Header>
                <Grid.Row>
      <Grid.Column>
      
        <Divider />
        <Image style={{ marginRight: '1em' }} size='150px' src={data.imagenes[1]} />
        <Image size='150px' src={data.imagenes[1]} />
      </Grid.Column>
      
          
    </Grid.Row>
   
              </Menu.Item>
              <Button style={{ marginBottom: '0.8em' }}basic color='blue' >
            Confirmar imágenes
          </Button>
            </Menu>
          </Grid.Column>
                <Grid.Column></Grid.Column>
                </Grid>
                )
            })}
            </Container>
        </div>
    )
}

// TODO
// [ ] Llamada a api y toggles (para validar o no al usuario)

// Modal para mostrar imagenes y botón para verificar o no
//https://react.semantic-ui.com/modules/modal/#types-modal