import { Container, Paper, Box, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from "@mui/material"
import { Image } from "mui-image"
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg"

export function Login() {

    const navigate = useNavigate();
    
    function handleSubmit( event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("../");
    }

    return(
        <Container
        component="main"
        maxWidth="xs"
        sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center"
        }}
        >
            <Paper
                sx={{
                    paddingX: 10,
                    paddingY: 5
                }}
            >
                <Box
                    sx={{
                       display: "flex",
                       flexDirection: "column",
                       alignItems: "center"
                    }}
                >

                    <Image 
                        src={Logo}
                        style={{
                            width: 140,
                            height: 66,
                            marginBottom: 16
                        }}
                    />
                    <Typography
                        component="h1"
                        variant="h5"
                        color="secondary"
                        fontWeight= "bold"
                    >
                        Login
                    </Typography>

                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1}}
                        onSubmit={handleSubmit}
                    >
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            variant="standard"

                        />
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            autoComplete="current-password"
                            variant="standard"

                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2}}
                        >
                            Entrar
                        </Button>
                        <Grid container justifyContent="center">
                                <Link href="#" variant="body2">
                                    Esqueceu sua senha?
                                </Link>

                        </Grid>

                    </Box>

                </Box>

            </Paper>
        </Container>
    )
}