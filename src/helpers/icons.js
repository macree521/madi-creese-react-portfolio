import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faPhone,
  faPaperPlane,
  faMapMarkedAlt,
  faKey
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faPaperPlane, faMapMarkedAlt, faKey);
};

export default Icons;
