import { Box } from "@mui/material";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

export function Login() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgb(242, 242, 242)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "250px",
        }}
      >
        {/* Intro */}
        <Card
          sx={{
            width: "450px",
            height: "250px",
            borderRadius: "10px 0px 0px 10px",
            bgcolor: "rgb(29, 155, 240)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            padding: "50px",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            GrowTwitter
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Trabalho final do bloco intermediário
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </Typography>
        </Card>

        {/* Login */}
        <Card
          sx={{
            width: "350px",
            height: "250px",
            borderRadius: "0px 10px 10px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems:"center",
            padding: "50px",
          }}
        >
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Entrar no Growtwitter
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}
