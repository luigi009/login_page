import { ReactNode, SyntheticEvent } from "react";

export interface ButtonProps {
  children: ReactNode | string;
  onClick?: (event?: SyntheticEvent) => void;
  className?: string;
}
