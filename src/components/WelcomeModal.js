import React from "react";
import Modal from "react-modal";

const WelcomeModal = ({ children, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Hej"
    style={customStyles}
  >
    {children}
  </Modal>
);
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default WelcomeModal;
