import { useRef, useState, ChangeEvent } from 'react';

const useImageInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newImg, setNewImg] = useState<File | null>(null);
  const [action, setAction] = useState<'edit' | 'delete' | null>(null);

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setNewImg(file);
      setAction('edit');
    }
  };

  const handleDeleteFileClick = () => {
    setNewImg(null);
    setAction('delete');
  };

  return {
    newImg,
    fileInputRef,
    handleFileButtonClick,
    handleFileChange,
    handleDeleteFileClick,
    action,
  };
};

export default useImageInput;
