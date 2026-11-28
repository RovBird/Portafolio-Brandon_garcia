import { Box, Typography,Card} from "@mui/material"

function Tecnologias() {
    return(
        <Box /*Tecnologias-seccion*/>
            <Typography sx={{display:'flex',color:'black',fontWeight:'bold',fontSize:'40px',justifyContent:'center'}}>Tecnologias</Typography>

            <Box /*Iconos-tecnologias*/>
                <Card>
                    <Box component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                </Card>
            </Box>
        </Box>
    
    )
}
export default Tecnologias