import React from "react";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

import skrolick_1 from '../../assets/images/posts/skrolick_1.png';
import skrolick_2 from '../../assets/images/posts/skrolick_2.png';
import skrolick_3 from '../../assets/images/posts/skrolick_3.jpg';


function Work() {
    const items = [
        {
            images: [skrolick_3, skrolick_2, skrolick_1, ],
        },
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