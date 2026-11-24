import {Box, Button, Typography} from '@mui/material'
function Inicio() {
    return(        
        <Box sx={{display:'flex', backgroundColor:'#1c1c1c'}}/*Hero*/>
            <Box /*Hero-Texto*/>
                <Typography>
                    Hola, soy<br />
                    ingeniero de software<br />
                </Typography>
                <Typography>
                    Diseño y dearrollo de software
                </Typography>
                <Typography>
                    Soy un ingeniero de software capaz de hacer realidad<br />
                    las soluciones que tengas en tu imaginacion para tu negocio,<br />
                    escoge mis habilidades en desarrollo y diseño si quieres hacer<br />
                    tus metas realidad
                </Typography>

                <Box /*Botones-Herp*/>
                    <Button>
                        Ver proyectos
                    </Button>

                    <Button>
                        Contacto
                    </Button>
                    
                </Box>   
            </Box>

            <Box /*Renegul*/component="img" src='' sx={{width:'500px'}}>

            </Box>
            
        </Box>
        

    )
}
export default Inicio