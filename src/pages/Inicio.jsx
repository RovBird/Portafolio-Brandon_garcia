import {Box, Button, Typography} from '@mui/material'
function Inicio() {
    return(        
        <Box sx={{display:'flex', backgroundColor:'#1c1c1c'}}/*Hero*/>
            <Box /*Hero-Texto*/>
                <Typography sx={{fontSize: '50px', color:'white',fontWeight:'bold',textAlign:'left', marginLeft:'20px'}}>
                    Hola, soy<br />
                    ingeniero de<br/>
                    software
                </Typography>
                <Typography sx={{color:'#c54D00', fontWeight:'bold', textAlign:'left', marginLeft:'20px', fontSize:'25px'}}>
                    Diseño y desarrollo de software
                </Typography>
                <Typography sx={{textAlign:'left', marginLeft:'20px',color:'white'}}>
                    Soy un ingeniero de software capaz de hacer realidad<br />
                    las soluciones que tengas en tu imaginacion para tu negocio,<br />
                    escoge mis habilidades en desarrollo y diseño si quieres hacer<br />
                    tus metas realidad
                </Typography>

                <Box sx={{display:'flex',gap:2, justifyContent:'left',marginTop:'20px',marginLeft:'20px'}} /*Botones-Herp*/>
                    <Button sx={{backgroundColor:'#c54901', borderRadius:'12px', color:'white',fontWeight:'bold', fontSize:'15px'}}>
                        Ver proyectos
                    </Button>

                    <Button sx={{backgroundColor:'#1c1c1c', borderRadius:'12px', color:'white',fontWeight:'bold', fontSize:'15px',borderColor:'white'}}>
                        Contacto
                    </Button>
                    
                </Box>   
            </Box>

            <Box /*Renegul*/component="img" src='./heroimg1.png' sx={{width:'450px',display:'flex',marginLeft:'180px'}}>

            </Box>
            
        </Box>
        

    )
}
export default Inicio