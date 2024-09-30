import { Box, useTheme } from "@mui/joy";
import React from "react";

interface CardProps {
    children?: React.ReactNode
}

const Card = ({children}: CardProps) => {

    const theme = useTheme();

    return ( 
        <>
            <Box sx={{
                width: 1,
                p: 2,
                border: `1px solid ${theme.palette.neutral.outlinedBorder}`,
                borderRadius: 'sm'
            }}>
                {children}
            </Box>
        </>
    );
}
 
export default Card;