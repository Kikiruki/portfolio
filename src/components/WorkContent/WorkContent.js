import React,  { useState, useEffect }  from "react";
import './WorkContent.css';
import ProfilePhoto from "../../assets/images/profile-logo.jpg";

function WorkContent(params) {
    const {close} = params;

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
                name: "k_konuc",
                city: "Minsk",
                country: "Belarus",
                icon: ProfilePhoto
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
                    <span className="handle">k_konuc</span> <span>{comments}</span>
                </p>
            </div>
        );
    };


    return (
        <div>
            <header className="mobile-only">
                <div className="grid-header">
                    <svg onClick={(e) => {
                        e.stopPropagation(); close()}} xmlns="http://www.w3.org/2000/svg" width="16" height="30" viewBox="0 0 16 30" fill="none">
                        <path d="M14.1994 29.6897C14.4051 29.8966 14.6624 30 14.9453 30C15.2283 30 15.4855 29.8966 15.6913 29.6897C16.1029 29.2759 16.1029 28.6034 15.6913 28.1897L2.57235 15L15.6913 1.81034C16.1029 1.39655 16.1029 0.724138 15.6913 0.310345C15.2797 -0.103448 14.6109 -0.103448 14.1994 0.310345L0.308682 14.25C-0.102894 14.6638 -0.102894 15.3362 0.308682 15.75L14.1994 29.6897Z" fill="black"/>
                    </svg>
                </div>
            </header>

            <div className="grid">
                <div className="image-wrap">
                    <PostImage />
                </div>
                <div className="meta-info">
                    <Meta />
                    <Comments />
                </div>
            </div>
        </div>
    );
}

export default WorkContent;