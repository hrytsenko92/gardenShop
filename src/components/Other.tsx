import React from "react";
import data from "../../data/cherry.json"
import { dttp } from "../../data/dt"
// import "../../data/img/ksenia.jpg"
const Other: React.FC = () => {
    console.log(data.data)
    return (
        <div>
            Other
            <img src={data.data[0].path}/>
        </div>
    )
}
export default Other;