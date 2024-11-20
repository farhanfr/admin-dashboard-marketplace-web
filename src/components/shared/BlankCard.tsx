import { Card } from "@mui/material";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  padding?: number
  paddingY?:number
};

const BlankCard = ({ children, className, padding, paddingY }: Props) => {
  return (
    <Card
      sx={{ p: padding ?? 0, paddingY: paddingY ?? 0, position: "relative" }}
      className={className}
      elevation={9}
      variant={undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
