import React, {useState} from "react";
import WorkContent from "../WorkContent/WorkContent";
import Modal from "../Modal/Modal";
import "./WorkItem.css";

function WorkItem(props) {
    const { images, description } = props;
    const [open, setOpen] = useState(false);

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }

    return (
        <div className="gallery-item" onClick={openModal}
            style={{
                backgroundImage: `url(${images[0]})`,
                backgroundSize: 'cover', // You can adjust this to your needs
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', // You can adjust this to your needs
            }}>
            <span className={images.length > 1 ? "media-icon" : ""}></span>
            {
                open &&
                <Modal close={closeModal}>
                    <WorkContent images={images} description={description} close={closeModal}></WorkContent>
                </Modal>
            }
        </div>
    );
}

export default WorkItem;