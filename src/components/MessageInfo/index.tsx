import { MESSAGE_TYPE } from "@/constant";
import Text from "./Text";
import React from "react";

// type Obj = {
//     [key in MESSAGE_TYPE]: (props:) => JSX.Element
// }

const Options = {
    [MESSAGE_TYPE.TEXT]: Text,
    [MESSAGE_TYPE.IMAGE]: Text,
    [MESSAGE_TYPE.FILE]: Text,
    [MESSAGE_TYPE.LINK]: Text,
    [MESSAGE_TYPE.VIDEO]: Text,
    [MESSAGE_TYPE.transaction]: Text,
}
export default Options