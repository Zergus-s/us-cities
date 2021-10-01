import React, { useState } from 'react';
import Modal from '../components/Modal';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState([]);
  const openModal = (...args) => {
    setModalProps(args);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setModalProps([]);
    setIsModalOpen(false);
  };

  const renderModal = (headerText, bodyText, onConfirm, onCancel) => {
    const confirmClickHandler = () => {
      onConfirm(...modalProps);
      closeModal();
    };
    return (
      <Modal
        isOpen={isModalOpen}
        headerText={headerText}
        bodyText={bodyText}
        onConfirm={confirmClickHandler}
        onCancel={onCancel || closeModal}
      />
    );
  };

  return { openModal, closeModal, renderModal };
}

export default useModal;
