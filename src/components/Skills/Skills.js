import React from "react";
import "./Skills.css"
import {useTranslation} from "react-i18next";

function Skills() {
    const { t } = useTranslation();

    const skills = [
        [
            {
                name: "skill_concept_creation",
                value: 68
            },
            {
                name: "skill_naming_and_sloganwriting",
                value: 75
            }
        ],
        [
            {
                name: "skill_digital_ads",
                value: 70
            },
            {
                name: "skill_script_writing",
                value: 60
            },
            {
                name: "skill_working_with_ai",
                value: 80
            },
            {
                name: "skill_teamwork",
                value: 80
            }
        ],
        [
            {
                name: "skill_adobe_premier_pro",
                value: 50
            },
            {
                name: "skill_adobe_photoshop",
                value: 21
            },
            {
                name: "skill_english",
                value: 64
            },
            {
                name: "skill_spanish",
                value: 26
            }
        ]
    ];

    return (
        <div className="skills-soft">
            {
                skills.map((value, key) => {
                    return (
                        <ul key={key}>
                            {value.map((skill, key) => {
                                const r = 45;
                                const c = Math.PI * (r * 2);
                                const cbar = ((100 - skill.value) / 100) * c;

                                return (
                                    <li key={key} style={{display: "flex", justifyContent: "center"}} >
                                        <svg viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r={r}></circle>
                                            <circle className="cbar" cx="50" cy="50" r={r}
                                                    style={{strokeDashoffset: cbar, strokeDasharray: c}}
                                            ></circle>
                                        </svg>
                                        <span style={{width: "70%"}}>{t(skill.name)}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    )
                })
            }
        </div>
    );
}

export default Skills;