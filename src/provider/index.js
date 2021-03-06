import React, { useState } from "react";

export const DataContext = React.createContext();

const Provider = ({ children }) => {
  const [itensCheckout, setItensCheckout] = useState([]);
  return (
    <DataContext.Provider
      value={{
        itensCheckout,
        adicionarItem: (novoItem) => {
          let copiaItensCheckout = [...itensCheckout];
          let itemFiltrado = copiaItensCheckout.find(
            (item) => item.id === novoItem.id
          );

          if (itemFiltrado) {
            itemFiltrado.quantidade++;
          } else {
            novoItem.quantidade = 1;
            copiaItensCheckout = [...itensCheckout, novoItem];
          }

          setItensCheckout(copiaItensCheckout);
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
