import React, { FC } from 'react'
import "../../assets/css/search.css"

interface Props {
  setName:  React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Search: FC<Props> = ({setName, setCurrentPage}) => {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className='search'>
      <input
        className="btn-search"
        type="text"
        onChange={handleChange}
        placeholder="Buscar por Nombre"
      />
    </div>
  );
}
