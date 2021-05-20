import { useState } from "react";
import EnquiryList from "../admin/EnquiryList";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdViewList } from "react-icons/md";

export default function EnquiryModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-modal-cta" onClick={handleShow}>
        <span>
          <MdViewList />
        </span>
        <span className="ml-2">Booking enquiries</span>
      </Button>

      <Modal animation={false} show={show} size="lg" centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiries Dashboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnquiryList />
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
