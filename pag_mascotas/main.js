import myHeader from "../components/myHeader.js";
import { pet } from "../components/pets.js";
import { openModal, closeModal } from "../components/modal.js";
import { navbar } from "../components/navbar.js";
myHeader.show();
navbar();
openModal();
closeModal();
pet();