import React from "react";
import workImage1 from '../../assets/images/gallery-1.jpg';
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

function Work() {
    const items = [
        {
            img: workImage1,
        },
        {
            img: workImage1,
        },
        {
            img: workImage1,
        },
        {
            img: workImage1,
        }
    ];

    return (
        <div className="gallery">
            {items.map((item, key) => {
                return (
                    <WorkItem key={key} data={item}></WorkItem>
                )
            })}
        </div>
    );
}

export default Work;