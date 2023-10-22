import React from "react";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

import skrolick_1 from '../../assets/images/posts/skrolick_1.png';
import skrolick_2 from '../../assets/images/posts/skrolick_2.png';
import skrolick_3 from '../../assets/images/posts/skrolick_3.jpg';

import baltica_1 from '../../assets/images/posts/baltica_1.jpg';
import baltica_2 from '../../assets/images/posts/baltica_2.jpg';
import baltica_3 from '../../assets/images/posts/baltica_3.png';

import life_vitba_1 from '../../assets/images/posts/life_vitba_1.png';
import life_vitba_2 from '../../assets/images/posts/life_vitba_2.png';
import life_vitba_3 from '../../assets/images/posts/life_vitba_3.png';

import gruzin_1 from '../../assets/images/posts/gruzin.png';

import nostandarts_1 from '../../assets/images/posts/nostandarts_1.jpg';
import nostandarts_2 from '../../assets/images/posts/nostandarts_2.jpg';
import nostandarts_3 from '../../assets/images/posts/nostandarts_3.jpg';

import hokku_1 from '../../assets/images/posts/hokku_1.jpg';
import hokku_2 from '../../assets/images/posts/hokku_2.jpg';
import hokku_3 from '../../assets/images/posts/hokku_3.png';
import hokku_4 from '../../assets/images/posts/hokku_4.png';

function Work() {
    const items = [
        {
            images: [baltica_1,baltica_2, baltica_3],
            description: "baltica_label"
        },
        {
            images: [life_vitba_3, life_vitba_2, life_vitba_1],
            description: "life_vitba_label"
        },
        {
            images: [gruzin_1],
            description: "gruzin_label"
        },
        {
            images: [skrolick_2, skrolick_1, skrolick_3],
            description: "skrolick_label"
        },
        {
            images: [nostandarts_1, nostandarts_2, nostandarts_3],
            description: "nostandarts_label"
        },
        {
            images: [hokku_2, hokku_1, hokku_3, hokku_4],
            description: "hokku_label"
        },
    ];

    return (
        <div className="gallery">
            {items.map((item, key) => {
                return (
                    <WorkItem key={key} images={item.images} description={item.description}></WorkItem>
                )
            })}
        </div>
    );
}

export default Work;