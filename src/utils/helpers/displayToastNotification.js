import { toast } from "react-toastify";

const toastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export function displayToastNotification(message, type) {
  toast.dismiss();

  type === "success"
    ? toast.success(message, toastOptions)
    : toast.error(message, toastOptions);
}
