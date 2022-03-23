import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [asc, setAsc] = useState(false);
  const sortCards = () => {
    setAsc(!asc);
  };
  const [deliveryId, setDeliveryId] = useState("");
  return (
    <AppContext.Provider value={{ asc, sortCards, deliveryId, setDeliveryId }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
