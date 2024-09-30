import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Sheet, Box, Typography, Divider, Button, FormControl, FormLabel, Input, useTheme, Link } from "@mui/joy";
import GoogleIcon from "../components/GoogleIcon";
import { useState } from "react";



const LoginPage = () => {

    const theme = useTheme();

    const [toggleVisibility, setToggleVisibility] = useState<boolean>(true);

    const handleToggle = () => {
        setToggleVisibility(!toggleVisibility);
    }

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            px: 2,
            backgroundColor: `${theme.palette.neutral[100]}`
        }}>
            <Sheet
                sx={{
                    width: { xs: 1, sm: 0.7, md: 0.5, lg: 0.3 },
                    boxShadow: 'md',
                    borderRadius: 'md',
                    p: { xs: 2, md: 4 },
                }}>
                <Box>
                    <Typography level="h3" color="primary">Bem-vindo!</Typography>
                    <Typography level="body-sm" endDecorator={<Link href="#">Cadastre-se!</Link>}>Novo por aqui?</Typography>
                </Box>
                <Divider sx={{ my: 2 }}>ou</Divider>
                <Box component="form" display="flex" flexDirection="column" gap={2}>
                    <Button
                        size="md"
                        variant="outlined"
                        startDecorator={<GoogleIcon />}
                    >
                        Fazer login com Google
                    </Button>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Digite seu email"
                            required
                            size="md"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input
                            type={toggleVisibility ? "text" : "password"}
                            placeholder="Digite sua senha"
                            required
                            size="md"
                            endDecorator={<Button onClick={handleToggle} variant="plain" color="neutral">{toggleVisibility ? <Visibility /> : <VisibilityOff />}</Button>}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        size="md"
                        variant="solid"
                    >
                        Entrar
                    </Button>
                    <Button
                        size="md"
                        variant="outlined"
                    >
                        Esqueci minha senha
                    </Button>
                </Box>
            </Sheet>
        </Box>
    );
}

export default LoginPage;