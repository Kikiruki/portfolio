import React from "react";
import "./About.css";
import {useTranslation} from "react-i18next";

import work_photo from "../../assets/images/about/work.jpg";
import collage_photo from "../../assets/images/about/collage.jpg";

function About() {
    const { t } = useTranslation();

    return (


        <article id="about">
            <p className="has-side-note">{t("about_page_text_1")}</p>

            <figure>
                <img alt="Yellow flower in front of out-of-focus background" src={collage_photo} />
                {/*<figcaption>*/}
                {/*    <a href="https://www.flickr.com/photos/kleinfreund/29739015432">via Flickr</a>, shot with an Auto Revuenon 1:1.9/50mm manual lens.*/}
                {/*</figcaption>*/}
            </figure>

            <p className="has-side-note">{t("about_page_text_2")}</p>

            <p>{t("about_page_text_3")}</p>

            <figure>
                <img alt="Yellow flower in front of out-of-focus background" src={work_photo} />
                {/*<figcaption>*/}
                {/*    <a href="https://www.flickr.com/photos/kleinfreund/29739015432">via Flickr</a>, shot with an Auto Revuenon 1:1.9/50mm manual lens.*/}
                {/*</figcaption>*/}
            </figure>
        </article>
    )
}

export default About;