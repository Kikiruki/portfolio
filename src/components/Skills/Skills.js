import React from "react";
import "./Skills.css"

function Skills() {
    const skills = [
        {
            name: "Photoshop",
            value: 94
        },
        {
            name: "Illustrator",
            value: 80
        },
        {
            name: "Sublime Text",
            value: 89
        },
        {
            name: "Dreamweaver",
            value: 55
        }
    ];

    return (
        <div className="skills-soft">
                <ul>
                    {
                        skills.map((value, key) => {
                            const r = 45;
                            const c = Math.PI * (r * 2);
                            const cbar = ((100 - value.value) / 100) * c;
                            return (
                                <li key={key}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r={r}></circle>
                                        <circle className="cbar" cx="50" cy="50" r={r}
                                                style={{strokeDashoffset: cbar, strokeDasharray: c}}
                                        ></circle>
                                    </svg>
                                    <span>{value.name}</span>
                                </li>
                            )
                        })
                    }
            </ul>
        </div>
    );
}

export default Skills;