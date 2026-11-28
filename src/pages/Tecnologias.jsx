import { Box, Typography,Card} from "@mui/material"

function Tecnologias() {
    return(
        <Box /*Tecnologias-seccion*/>
            <Typography sx={{display:'flex',color:'black',fontWeight:'bold',fontSize:'40px',justifyContent:'center'}}>Tecnologias</Typography>

            <Box sx={{display:'flex', justifyContent:'center',gap:5}}/*Iconos-tecnologias*/>

                <Card sx={{display:'flex'}}>
                    <Box /*imagen-tarjeta*/component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                    <Box /*Nombre tecnologia*/sx={{display:'flex',alignItems:'center'}}><Typography>React</Typography></Box>
                </Card>

                <Card sx={{display:'flex'}}>
                    <Box /*imagen-tarjeta*/component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                    <Box /*Nombre tecnologia*/sx={{display:'flex',alignItems:'center'}}><Typography>React</Typography></Box>
                </Card>

                <Card sx={{display:'flex'}}>
                    <Box /*imagen-tarjeta*/component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                    <Box /*Nombre tecnologia*/sx={{display:'flex',alignItems:'center'}}><Typography>React</Typography></Box>
                </Card>

                <Card sx={{display:'flex'}}>
                    <Box /*imagen-tarjeta*/component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                    <Box /*Nombre tecnologia*/sx={{display:'flex',alignItems:'center'}}><Typography>React</Typography></Box>
                </Card>

                <Card sx={{display:'flex'}}>
                    <Box /*imagen-tarjeta*/component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                    <Box /*Nombre tecnologia*/sx={{display:'flex',alignItems:'center'}}><Typography>React</Typography></Box>
                </Card>
                
                <Card sx={{display:'flex'}}>
                    <Box /*imagen-tarjeta*/component="img" src="./react.png" sx={{height:'40px',width:'40px'}}></Box>
                    <Box /*Nombre tecnologia*/sx={{display:'flex',alignItems:'center'}}><Typography>React</Typography></Box>
                </Card>
            </Box>
        </Box>
    
    )
}
export default Tecnologias