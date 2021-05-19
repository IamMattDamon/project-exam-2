import { useState } from "react";
import EnquiryList from "../admin/EnquiryList";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaBarcode } from "react-icons/fa";

export default function EnquiryModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-modal-cta" onClick={handleShow}>
        <span>
          <FaBarcode />
        </span>
        <span className="ml-2">Booking enquiries</span>
      </Button>

      <Modal show={show} size="lg" centered onHide={handleClose}>
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
