import React from "react";
import workImage1 from '../../assets/images/gallery-1.jpg';
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

function Work() {
    const items = [
        {
            images: [workImage1],
        },
        {
            images: [workImage1, workImage1],
        },
        {
            images: [workImage1, workImage1],
        },
        {
            images: [workImage1, workImage1],
        }
    ];

    return (
        <div className="gallery">
            {items.map((item, key) => {
                return (
                    <WorkItem key={key} images={item.images}></WorkItem>
                )
            })}
        </div>
    );
}

export default Work;