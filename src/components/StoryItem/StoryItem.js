import React, {useState} from 'react';
import Popup from "../Popup/Popup";
import InstaStories from "react-insta-stories";
import ProfilePhoto from "../../assets/images/profile-logo.jpg";

function StoryItem(props) {
    const { data } = props;
    const [show, setShow] = React.useState(false);

    function closeModal() {
        setShow(false);
    }

    function openModal() {
        setShow(true);
    }

    return (
        <li className="story-item" onClick={openModal}>
            <div className="image">
                <img src={data.img} alt={data.description} />
            </div>
            <div className="title">{data.title}</div>
            {
                show &&
                <Popup
                    close={closeModal}
                >
                    <InstaStories
                        stories={[{
                            url: data.img,
                            type: 'image',
                            header: {
                                heading: "k_konuc",
                                subheading: "Kirul Kandukou",
                                profileImage: ProfilePhoto
                            },
                        }]}
                        defaultInterval={5000}
                        style={{display: 'flex', justifyContent: "center", background:"red",
                            cursor: 'pointer'
                        }}
                        loop={false}
                        keyboardNavigation={true}
                        isPaused={()=>{}}
                        currentIndex={()=>{}}
                        onStoryStart={()=>{}}
                        onStoryEnd={closeModal}
                    />
                </Popup>
            }
        </li>
    );
}

export default StoryItem;
