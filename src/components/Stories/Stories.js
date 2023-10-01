import React from "react";
import StoryItem from "../StoryItem/StoryItem";

import imageFootball_1 from "../../assets/images/stories/football_1.jpg";
import imageFootball_2 from "../../assets/images/stories/football_2.jpg";
import imageFootball_3 from "../../assets/images/stories/football_3.DNG";

import exhibition_1 from "../../assets/images/stories/exhibition_1.jpg";
import exhibition_2 from "../../assets/images/stories/exhibition_2.jpg";
import exhibition_3 from "../../assets/images/stories/exhibition_3.jpg";
import exhibition_4 from "../../assets/images/stories/exhibition_4.jpg";
import exhibition_5 from "../../assets/images/stories/exhibition_5.jpg";
import exhibition_6 from "../../assets/images/stories/exhibition_6.jpg";

import quiz_1 from "../../assets/images/stories/quiz_1.jpg";
import quiz_2 from "../../assets/images/stories/quiz_2.jpg";
import quiz_3 from "../../assets/images/stories/quiz_3.jpg";

import bike_1 from "../../assets/images/stories/bike_1.jpg";
import bike_2 from "../../assets/images/stories/bike_2.jpg";

import lang_1 from "../../assets/images/stories/lang_1.jpg";
import lang_2 from "../../assets/images/stories/lang_2.jpg";
import lang_3 from "../../assets/images/stories/lang_3.jpg";

import book_1 from "../../assets/images/stories/book_1.jpg";
import book_2 from "../../assets/images/stories/book_2.jpg";
import book_3 from "../../assets/images/stories/book_3.jpg";

import coffee_1 from "../../assets/images/stories/coffee_1.jpg";
import coffee_2 from "../../assets/images/stories/coffee_2.jpg";
import coffee_3 from "../../assets/images/stories/coffee_3.jpg";
import coffee_4 from "../../assets/images/stories/coffee_4.jpg";
import coffee_5 from "../../assets/images/stories/coffee_5.jpg";

import skate_1 from "../../assets/images/stories/skate_1.jpg";
import skate_2 from "../../assets/images/stories/skate_2.jpg";

import films_1 from "../../assets/images/stories/films_1.jpg";
import films_2 from "../../assets/images/stories/films_2.jpg";

import photo_1 from "../../assets/images/stories/photo_1.jpg";

import photobomb_1 from "../../assets/images/stories/photobomb_1.jpg";
import photobomb_2 from "../../assets/images/stories/photobomb_2.jpg";
import photobomb_3 from "../../assets/images/stories/photobomb_3.jpg";
import photobomb_4 from "../../assets/images/stories/photobomb_4.jpg";
import photobomb_5 from "../../assets/images/stories/photobomb_5.jpg";

function Stories() {
    const stories = [
        {
            images: [exhibition_1, exhibition_2, exhibition_3, exhibition_4, exhibition_5, exhibition_6],
            title: "exhibition_label"
        },
        {
            images: [quiz_1, quiz_2, quiz_3],
            title: "quiz_label"
        },
        {
            images: [bike_1, bike_2],
            title: "bike_label"
        },
        {
            images: [imageFootball_1, imageFootball_2, imageFootball_3],
            title: "football_label"
        },
        {
            images: [lang_1, lang_2, lang_3],
            title: "lang_label"
        },
        {
            images: [book_1, book_2, book_3],
            title: "books_label"
        },
        {
            images: [coffee_1, coffee_2, coffee_3, coffee_4, coffee_5],
            title: "coffee_label"
        },
        {
            images: [skate_1, skate_2],
            title: "skate_label"
        },
        {
            images: [films_1, films_2],
            title: "films_label"
        },
        {
            images: [photo_1],
            title: "photo_label"
        },
        {
            images: [photobomb_1, photobomb_2, photobomb_3, photobomb_4, photobomb_5],
            title: "photobomb_label"
        },

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