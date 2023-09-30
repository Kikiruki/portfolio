import React, {useState} from "react";
import WorkContent from "../WorkContent/WorkContent";
import Modal from "../Modal/Modal";
import "./WorkItem.css";

function WorkItem(props) {
    const { data } = props;
    const [open, setOpen] = useState(false);

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }

    return (
        <div className="gallery-item" onClick={openModal}>
            <img src={data.img} alt="Work 1"/>
            <span className="media-icon"></span>
            {
                open &&
                <Modal close={closeModal}>
                    <WorkContent close={closeModal}></WorkContent>
                </Modal>
            }
        </div>
    );
}

export default WorkItem;