import React from "react";
import StoryItem from "../StoryItem/StoryItem";

import imageFootball_1 from "../../assets/images/stories/football_1.jpg";
import imageFootball_2 from "../../assets/images/stories/football_2.jpg";
import imageFootball_3 from "../../assets/images/stories/football_3.DNG";

function Stories() {
    const stories = [
        {
            images: [imageFootball_1, imageFootball_2, imageFootball_3],
            description: "Story 1",
            title: "Football"
        }
    ];

    return (
        <ul className="stories">
            {
                stories.map((story, key) => {
                   return (
                       <StoryItem key={key} data={story} />
                   );
                })
            }
        </ul>
    );
}

export default Stories;