import { Home, Person, ChatBubble, Settings } from "@mui/icons-material";
import { Box, Stack } from "@mui/joy";
import AltButton from "../components/AltButton";
import Pedido from "../components/Pedido";
import Rate from "../components/Rate";
import Statistic from "../components/Statistic";

const HomePage = () => {
    return (
        <Box sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2
        }}>
            <Stack direction='row' spacing={1}>
                <AltButton>
                    <Home />
                </AltButton>
                <AltButton>
                    <Person />
                </AltButton>
                <AltButton>
                    <ChatBubble />
                </AltButton>
                <AltButton>
                    <Settings />
                </AltButton>
            </Stack>
            <Box display="flex" gap={2}>
                <Box width={0.3}>
                    <Statistic arrowUp color="green" text="Entregadores disponíveis" value={3} />
                </Box>
                <Box display="flex" width={0.7} gap={2}>
                    <Statistic arrowDown color="red" text="Entregadores ocupados" value={2} />
                    <Statistic text="Entregadores em seu condomínio" value={10} />
                </Box>
            </Box>
            <Box display="flex" gap={2}>
                <Box width={0.3} flexDirection="column" display="flex" gap={2}>
                    <Pedido vertical />
                    <Rate></Rate>
                </Box>
                <Box width={0.7}>
                    <Pedido />
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;