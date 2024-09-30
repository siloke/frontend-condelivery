import { Box, Button, Stack, Step, StepIndicator, Stepper, Typography, useTheme } from "@mui/joy";
import Card from "./Card";
import { Check } from "@mui/icons-material";
import IFoodIcon from "./IFoodIcon";

interface PedidoProps {
    vertical?: boolean
}

const Pedido = ({ vertical }: PedidoProps) => {

    const theme = useTheme();

    return ( 
        <>
            <Card>
                {vertical ?
                <Box display="flex" flexDirection="column" gap={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Typography level="h4">Pedido em andamento</Typography>
                        <IFoodIcon />
                    </Stack>
                    <Stepper orientation="vertical">
                        <Step indicator={<StepIndicator variant="soft" color="primary"><Check /></StepIndicator>}>
                            <Typography level="body-md">Concluído</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Pedido confirmado</Typography>
                        </Step>
                        <Step indicator={<StepIndicator variant="solid" color="primary">2</StepIndicator>}>
                            <Typography level="body-md">Em andamento</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Saiu para a entrega</Typography>
                        </Step>
                        <Step indicator={<StepIndicator variant="soft" color="neutral">3</StepIndicator>}>
                            <Typography level="body-md">A ser concluído</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Entregue ao Condelivery</Typography>
                        </Step>
                        <Step indicator={<StepIndicator variant="soft" color="neutral">3</StepIndicator>}>
                            <Typography level="body-md">A ser concluído</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Pedido concluído</Typography>
                        </Step>
                    </Stepper>
                    <Button variant="solid">Autorizar pedido</Button>
                </Box>
                :
                <Box display="flex" flexDirection="column" gap={2}>
                    <Stack direction="column" justifyContent="center" alignItems="center" gap={1}>
                        <Typography level="h4" >Pedido em andamento</Typography>
                        <IFoodIcon />
                    </Stack>
                    <Stepper orientation="horizontal">
                        <Step orientation="vertical" indicator={<StepIndicator variant="soft" color="primary"><Check /></StepIndicator>}>
                            <Typography level="body-md">Concluído</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Pedido confirmado</Typography>
                        </Step>
                        <Step orientation="vertical" indicator={<StepIndicator variant="solid" color="primary">2</StepIndicator>}>
                            <Typography level="body-md">Em andamento</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Saiu para a entrega</Typography>
                        </Step>
                        <Step orientation="vertical" indicator={<StepIndicator variant="soft" color="neutral">3</StepIndicator>}>
                            <Typography level="body-md">A ser concluído</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Entregue ao Condelivery</Typography>
                        </Step>
                        <Step orientation="vertical" indicator={<StepIndicator variant="soft" color="neutral">3</StepIndicator>}>
                            <Typography level="body-md">A ser concluído</Typography>
                            <Typography sx={{color: theme.vars.palette.neutral[400]}} level="body-sm">Pedido concluído</Typography>
                        </Step>
                    </Stepper>
                    {/* <Button variant="solid">Autorizar pedido</Button> */}
                </Box>
                }
            </Card>
        </>
    );
}

export default Pedido;
