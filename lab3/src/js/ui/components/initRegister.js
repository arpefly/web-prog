import { registerData } from "../../mockData/registerData.js"
import { registerTemplate } from "../templates/registerTemplate.js"

const initRegister = (registerNode) => {
    registerNode.insertAdjacentHTML("beforeend", registerTemplate(registerData))
};

export default initRegister;