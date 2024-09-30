import { Add, Close, Star, StarHalf } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Stack, Typography } from "@mui/joy";

const Rate = () => {
    return ( 
        <>
            <Card>
                <Box display="flex" flexDirection="column" gap={4}>
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between" flexDirection="row">
                        <Box display="flex" gap={2}>
                            <Avatar sx={{ borderRadius: 'sm' }} variant="soft" color="neutral"  size="lg">
                            </Avatar>
                            <Stack justifyContent="center">
                                <Typography level="title-md">Thiago</Typography>
                                <Typography level="body-sm">14 pedidos</Typography>
                            </Stack>
                        </Box>
                        <Chip sx={{borderRadius: 'sm'}} color="success" variant="soft" size="lg">Concluído</Chip>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography level="h4" >Avalie sua última entrega</Typography>
                        <Stack alignItems="center" direction="row">
                            <Star htmlColor="#FADB14"/>
                            <Star htmlColor="#FADB14"/>
                            <Star htmlColor="#FADB14"/>
                            <Star htmlColor="#FADB14"/>
                            <StarHalf htmlColor="#FADB14"/>
                            <Typography mx={1} level="title-sm">4.5</Typography>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <Chip sx={{borderRadius: "sm"}} variant="outlined" endDecorator={<Close />} onClick={() => {}}>Educação</Chip>
                            <Chip sx={{borderRadius: "sm"}} variant="outlined" endDecorator={<Close />} onClick={() => {}}>Pontual</Chip>
                            <Chip sx={{borderRadius: "sm"}} variant="outlined" startDecorator={<Add />} onClick={() => {}}>Nova tag</Chip>
                        </Stack>
                    </Box>
                    <Button variant="solid">Avaliar</Button>
                </Box>
            </Card>
        </>
    );
}
 
export default Rate;