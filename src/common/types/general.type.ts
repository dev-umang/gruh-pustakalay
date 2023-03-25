import { IconType } from "react-icons";

export interface ValueDTO {
  lable: string;
  value: string;
  Icon?: IconType;
}

export interface ElementChangeEvent {
  data: any;
  name?: string;
}
