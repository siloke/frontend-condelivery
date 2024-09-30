import { Box, Stack, Typography } from "@mui/joy";
import Card from "./Card";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

interface StatisticProps {
    text: string,
    value: number,
    color?: string,
    arrowUp?: boolean,
    arrowDown?: boolean
}

const Statistic = ({ text, value, color, arrowUp, arrowDown }: StatisticProps) => {


    return (
        <>
            <Card>
                <Box width={1} display="flex" flexDirection="column" alignItems="center" gap={1}>
                    <Typography level="body-sm">{text}</Typography>
                    <Stack direction="row" alignItems="center" gap={1}>
                        { arrowUp && <ArrowUpward sx={{color: "green"}} /> }
                        { arrowDown && <ArrowDownward color="warning" sx={{color: "red"}} /> }
                        <Typography 
                        sx={{
                            color: color
                        }} 
                        level="h3" 
                        fontWeight={"lg"} 
                        color="neutral">
                            {value}
                        </Typography>
                    </Stack>
                </Box>
            </Card>
        </>
    );
}

export default Statistic;