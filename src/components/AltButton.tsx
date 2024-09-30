import { IconButton } from "@mui/joy";

interface AltButtonProps {
    children: React.ReactNode
}

const AltButton = ({children} : AltButtonProps) => {
    return ( 
        <>
            <IconButton 
                variant="outlined"
                color="neutral"
                size="sm"
                loading={false}
                sx={{
                    boxShadow: "hsla(215, 15%, 97%, 0.4) 0 2px 0 inset,hsla(215, 15%, 92%, 0.5) 0 -1.5px 0 inset,hsla(215, 15%, 89%, 0.5) 0 1px 2px 0",
                    borderRadius: 'lg'
                }}
            >
                {children}
            </IconButton>
        </>
    );
}
 
export default AltButton;