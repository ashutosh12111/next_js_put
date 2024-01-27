import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    openModal,
    closeModal,
  };
};

export default useModal;
