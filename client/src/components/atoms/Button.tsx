import React, { ReactNode, forwardRef } from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    SxProps,
    Theme,
} from "@mui/material";

interface ButtonProps extends Omit<MuiButtonProps, "sx" | "ref"> {
    label: string;
    icon?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    sx?: SxProps<Theme>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ label, icon, onClick, sx }, ref) => {
        return (
            <MuiButton ref={ref} onClick={onClick} sx={sx} startIcon={icon}>
                {label}
            </MuiButton>
        );
    }
);

Button.displayName = "Button";

export default Button;
