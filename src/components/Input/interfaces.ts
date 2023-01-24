import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  labelClassName?: string;
  placeholder: string;
  imgIcon?: string;
  altImgIcon?: string;
}
