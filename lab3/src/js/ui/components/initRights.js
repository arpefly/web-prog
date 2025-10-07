import { rightsData } from "../../mockData/rightsData.js";
import { rightsTemplate } from "../templates/rightsTemplate.js";

const initRights = (rightsNode) => {
    console.log(rightsData)
    rightsNode.insertAdjacentHTML("beforeend", rightsTemplate(rightsData));
}

export default initRights;