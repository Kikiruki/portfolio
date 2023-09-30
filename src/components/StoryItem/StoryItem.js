import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import InstaStories from "react-insta-stories";
import ProfilePhoto from "../../assets/images/profile-logo.jpg";

function StoryItem(props) {
    const { data } = props;
    const [open, setOpen] = useState(false);

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }

    return (
        <li className="story-item" onClick={openModal}>
            <div className="image">
                <img src={data.img} alt={data.description} />
            </div>
            <div className="title">{data.title}</div>
            {
                open &&
                <Modal
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
                </Modal>
            }
        </li>
    );
}

export default StoryItem;
