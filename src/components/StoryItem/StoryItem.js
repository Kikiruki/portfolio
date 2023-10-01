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
                <img src={data.images[0]} alt={data.description} />
            </div>
            <div className="title">{data.title}</div>
            {
                open &&
                <Modal
                    close={closeModal}
                >
                    <InstaStories
                        stories={
                            data.images.map((value, key) => {
                                return {
                                    url: value,
                                    type: 'image',
                                    header: {
                                        heading: "k_konuc",
                                        subheading: "Kirul Kandukou",
                                        profileImage: ProfilePhoto
                                    },
                                }
                            })
                        }
                        defaultInterval={5000}
                        style={{display: 'flex', justifyContent: "center", background:"red",
                            cursor: 'pointer'
                        }}
                        loop={false}
                        keyboardNavigation={true}
                        isPaused={()=>{}}
                        currentIndex={()=>{}}
                        onStoryStart={()=>{}}
                        onAllStoriesEnd={closeModal}
                    />
                </Modal>
            }
        </li>
    );
}

export default StoryItem;
