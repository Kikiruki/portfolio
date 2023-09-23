import React from "react";

function WorkItem(props) {
    const { data } = props;

    return (
        <div className="gallery-item">
            <img src={data.img} alt="Work 1"/>
            <span className="media-icon"></span>
        </div>
    );
}

export default WorkItem;