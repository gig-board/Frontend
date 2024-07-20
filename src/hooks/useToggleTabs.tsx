import { useState } from 'react';

const useToggleTabs = (): [string, (tapLabel: string) => void] => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleToggleTab = (tapLabel: string) => {
    setActiveTab(tapLabel);
  };

  return [activeTab, handleToggleTab];
};

export default useToggleTabs;
