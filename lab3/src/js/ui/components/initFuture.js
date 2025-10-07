import { futureData } from "../../mockData/futureData.js"
import { futureTemplate } from "../templates/futureTemplate.js"

const initFuture = (futureNode) => {
    futureNode.insertAdjacentHTML("beforeend", futureTemplate(futureData));
}

export default initFuture;