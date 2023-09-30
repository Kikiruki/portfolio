import React, {useState} from "react";
import WorkContent from "../WorkContent/WorkContent";
import Popup from "../Popup/Popup";

function WorkItem(props) {
    const { data } = props;
    const [open, setOpen] = useState(false);

    const popupContent = (
        <WorkContent></WorkContent>
    );

    return (
        <div className="gallery-item" onClick={() => setOpen(true)}>
            <img src={data.img} alt="Work 1"/>
            <span className="media-icon"></span>
            {/*({open} ? <Popup content={popupContent} closePopup={() => setOpen(false)}></Popup>)*/}
        </div>
    );
}

export default WorkItem;