import {
  StyledH5Typography,
  StyledH6Typography,
  StyledBody1Typography,
  StyledBody2Typography,
} from "./Typography.styled";

type TypographyProps = {
  variant?: "h5" | "h6" | "body1" | "body2";
} & ParentProps;

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body1",
}) => {
  const variantMapping = {
    h5: StyledH5Typography,
    h6: StyledH6Typography,
    body1: StyledBody1Typography,
    body2: StyledBody2Typography,
  };

  const VariantComponent = variantMapping[variant];

  return <VariantComponent title={children}>{children}</VariantComponent>;
};

export default Typography;
