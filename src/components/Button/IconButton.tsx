import { StyledIconButton } from "./Button.styled";

export type IconButtonVariant = "contained" | "icon";

type ButtonProps = {
  onClick?: () => void;
  icon: string;
  variant?: IconButtonVariant;
};

const IconButton: React.FC<ButtonProps> = ({
  onClick,
  icon,
  variant = "icon",
}) => {
  return (
    <StyledIconButton $variant={variant} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
