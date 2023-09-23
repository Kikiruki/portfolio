import React from "react";
import StoryItem from "../StoryItem/StoryItem";
import storyImage1 from "../../assets/images/story-1.jpg";

function Stories() {
    const stories = [
        {
            img: storyImage1,
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