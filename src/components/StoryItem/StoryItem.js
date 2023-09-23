import React from 'react';

function StoryItem(props) {
    const { data } = props;

    return (
        <li className="story-item">
            <div className="image">
                <img src={data.img} alt={data.description} />
            </div>
            <div className="title">{data.title}</div>
        </li>
    );
}

export default StoryItem;
