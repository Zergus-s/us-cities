import React, { useState } from 'react';
import Modal from '../../admin/forms/Modal';

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

  const renderModal = (inputs) => {
    return <Modal isOpen={isModalOpen} onClose={closeModal} inputs={inputs} />;
  };

  return { openModal, closeModal, renderModal };
}

export default useModal;
