import { createContext, useState } from "react";

export const ModelContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const onOpen = () => setModal(true);
  const onClose = () => setModal(false);

  return (
    <ModelContext.Provider value={{ modal, onOpen, onClose }}>
      {children}
    </ModelContext.Provider>
  );
};
