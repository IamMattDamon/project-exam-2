import { useState } from "react";
import CreateAccommodationForm from "./../admin/CreateAccommodationForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdCreateNewFolder } from "react-icons/md";

export default function CreateAccommodationModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-modal-cta" onClick={handleShow}>
        <span>
          <MdCreateNewFolder />
        </span>
        <span className="ml-2">New accommodation</span>
      </Button>

      <Modal show={show} size="lg" centered onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create Accommodations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateAccommodationForm />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-modal-close" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
