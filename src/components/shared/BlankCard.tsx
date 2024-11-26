import { Card } from "@mui/material";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  padding?: number
  paddingY?:number
  paddingX?:number
};

const BlankCard = ({ children, className, padding, paddingY, paddingX }: Props) => {
  return (
    <Card
      sx={{width:'100%', p: padding ?? 0, paddingY: paddingY ?? 0,paddingX: paddingX ?? 0, position: "relative" }}
      className={className}
      elevation={9}
      variant={undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
