import React,  { useState, useEffect }  from "react";
import './WorkContent.css';

function WorkContent() {
    const PostImage = () => {
        const img = "https://res.cloudinary.com/doxyfmuxf/image/upload/v1630592740/niall/br1_udmpiv.jpg";

        const [loaded, setLoaded] = useState(false);

        useEffect(() => {
            setLoaded(true);
        }, []);

        return <div>{loaded === true ? <img className={'post-image'} src={img}  alt={''}/> : null}</div>;
    };

    const Meta = () => {
        const [meta] = useState([
            {
                name: "nialldbarber",
                city: "Bristol",
                country: "United Kingdom",
                icon:   "https://res.cloudinary.com/doxyfmuxf/image/upload/v1630592744/niall/me-1_ya73ve.jpg"
            }
        ]);

        return (
            <div className="meta-wrap">
                {meta.map((item, i) => (
                    <div className="meta" key={i}>
                        <div>
                            <img src={item.icon}  alt={''}/>
                        </div>
                        <div>
                            <p className="handle">{item.name}</p>
                            <p className="location">
                                <span>{item.city}</span>
                                {", "}
                                <span>{item.country}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

//-----------------------------------------------------

    const Comments = () => {
        const comments =
            "After a few years in London it’s pretty nice to wake up to this sweeeeeeet view 👌🏻";

        return (
            <div className="meta comments">
                <p>
                    <span className="handle">nialldbarber</span> <span>{comments}</span>
                </p>
            </div>
        );
    };


    return (
        <div className="grid">
            <div className="image-wrap">
                <PostImage />
            </div>
            <div className="meta-info">
                <Meta />
                <Comments />
            </div>
        </div>
    );
}

export default WorkContent;