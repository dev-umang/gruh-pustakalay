import { toast, ToastOptions, TypeOptions } from "react-toastify";

const msgConfig: ToastOptions = {
  position: "bottom-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const showToast = (msg: string, type: TypeOptions = "success") => {
  toast(msg ?? "Something is wrong!", { ...msgConfig, type });
};

export const showError = (msg?: string) => {
  toast(msg ?? "Something is wrong!", { ...msgConfig, type: "error" });
};
