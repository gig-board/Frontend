import { useState } from 'react';

const useModal = (): [boolean, () => void] => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(prev => !prev);
    console.log('Modal opened:', showModal);
  };

  return [showModal, handleModal];
};

export default useModal;
