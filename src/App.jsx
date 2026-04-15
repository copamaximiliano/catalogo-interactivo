import { useState } from 'react';
import { catalogo as catalogoList } from './data.js';
import { CardGrid } from './components/GridCard/GridCard.jsx';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader.jsx';
import { ItemCard } from './components/ItemCard/ItemCard.jsx';

function App() {

  const [catalogo, setCatalogo] = useState(catalogoList);

  const [search, setSearch] = useState("");

  const [optionDestacado, setOptiopnDestacado] = useState("all")

  const handlerSeachInCatalogo = (value) => {
    setSearch(value);

    const filter = catalogoList.filter((item) => item.titulo.toLowerCase().includes(value.toLowerCase()));
    setCatalogo(filter);
  }

  const handlerChangeSelect = (value) => {

    setOptiopnDestacado(value);

    const filterDestacado = catalogoList.filter((item) => {
      if (value === "all") return item;
      return `${item.destacado}` === value
    });

    setCatalogo(filterDestacado)
  }


  return (
    <>
      <ComponentHeader
        search={search}
        handlerSeachInCatalogo={handlerSeachInCatalogo}
        optionDestacado={optionDestacado}
        handlerChangeSelect={handlerChangeSelect}
      />
      <CardGrid>
        {catalogo.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </CardGrid>
    </>
  )
}

export default App;
