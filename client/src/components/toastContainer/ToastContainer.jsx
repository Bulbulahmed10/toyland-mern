import { toast } from "react-hot-toast";
import toastConfig from "../../utilities/toastConfig";

const ToastContainer = () => {
  return toast.error("Please Login", toastConfig);
};

export default ToastContainer;
