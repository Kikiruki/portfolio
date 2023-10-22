import React from "react";
import "./About.css";
import {useTranslation} from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (


        <article id="about">
            <p className="has-side-note">{t("about_page_text_1")}</p>

            <p className="has-side-note">{t("about_page_text_2")}</p>

            <p>{t("about_page_text_3")}</p>
        </article>
    )
}

export default About;