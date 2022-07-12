
import Button from 'react-bootstrap/Button';
import React, {callback} from 'react';

const Modal = ({open, setPopup,  callback}) => {

    const handleClose = () => {
        setPopup({open: false});
        if (callback) {
            callback();
        }
    }

    return (
        <> < Modal show = {
            open
        }
        onHide = {
            handleClose
        } > <Modal.Header closeButton="closeButton">
            <Modal.Title>"wow"</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                OK
            </Button>
        </Modal.Footer>
    </Modal>
</>
    )
}
export default Modal;