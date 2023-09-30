import React, {useState} from 'react';
import Popup from "../Popup/Popup";
import InstaStories from "react-insta-stories";
import ProfilePhoto from "../../assets/images/profile-logo.jpg";

function StoryItem(props) {
    const { data } = props;
    const [open, setOpen] = useState(false);

    const storyModal = (
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
            // width={'100%'}
            // height={'100vh'}
            style={{display: 'flex', justifyContent: "center", background:"red",
                cursor: 'pointer'
            }}
            loop={false}
            keyboardNavigation={true}
            isPaused={()=>{}}
            currentIndex={()=>{}}
            onStoryStart={()=>{}}
            onStoryEnd={()=>{setOpen(false)}}
        />
    )

    return (
        <li className="story-item" onClick={() => setOpen(true)}>
            <div className="image">
                <img src={data.img} alt={data.description} />
            </div>
            <div className="title">{data.title}</div>
            {
                open ?
                <Popup
                    content={storyModal}
                    closePopup={() => setOpen(false)}
                /> : null
            }
        </li>
    );
}

export default StoryItem;
