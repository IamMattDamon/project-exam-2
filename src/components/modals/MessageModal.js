import { useState } from "react";
import MessageList from "../admin/MessageList";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { HiMail } from "react-icons/hi";


export default function MessageModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-modal-cta" onClick={handleShow}>
        <span>
          <HiMail />
        </span>
        <span className="ml-2">Admin messages</span>
      </Button>

      <Modal animation={false} show={show} size="lg" centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Dashboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MessageList />
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
