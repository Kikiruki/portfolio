import React, {useState} from "react";
import WorkContent from "../WorkContent/WorkContent";
import Modal from "../Modal/Modal";
import "./WorkItem.css";

function WorkItem(props) {
    const { images } = props;
    const [open, setOpen] = useState(false);

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }

    console.log(images)
    return (
        <div className="gallery-item" onClick={openModal}>
            <img src={images[0]} alt="Work 1"/>
            <span className={images.length > 1 ? "media-icon" : ""}></span>
            {
                open &&
                <Modal close={closeModal}>
                    <WorkContent images={images} close={closeModal}></WorkContent>
                </Modal>
            }
        </div>
    );
}

export default WorkItem;