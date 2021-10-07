import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './useModal.module.scss';

const modalNode = document.querySelector('#modal');

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const backdropClickHandler = (e) => {
    if (e.target.id === 'modalBackdrop') closeModal();
  };

  const renderModal = (Component, inputs, option) => {
    if (!isModalOpen) return null;
    return ReactDOM.createPortal(
      <div
        id="modalBackdrop"
        className={styles.backDrop}
        onClick={backdropClickHandler}
      >
        <div className={styles.modal}>
          <Component
            styles={styles}
            onClose={closeModal}
            inputs={inputs}
            option={option}
          />
        </div>
      </div>,
      modalNode
    );
  };

  return { openModal, closeModal, renderModal };
}

export default useModal;
