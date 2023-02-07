import {  characters, getCharactersUrls, urls } from "../features/getInfo/CharactersSlice"
import { AppDispatch } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import '../assets/css/home.css'
import { Card } from "./components/Card";
import title from "../assets/img/title.png"
import { Search } from "./components/Search";
import { CharacterStateI } from "../models/character";


export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const url = useSelector(urls);
  const [name, setName] = useState("")

  const characteres = useSelector(characters);

  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    dispatch(getCharactersUrls())
  }, [])
  
  const filter = (characteres: any) => {
    return characteres.filter((i: {name:string}) => i.name.toLowerCase().includes(name));
  };

  //@ts-ignore
  let newArrChart= Array.from( new Set( filter(characteres).map( JSON.stringify ) ) ).map( JSON.parse );

  return (
    <>
      <div className="container">
        <div className="navBar">
          <img src={title} alt="title" />
        </div>
        <Search setName={setName} setCurrentPage={setCurrentPage}/>
        <Card data={filter(newArrChart)} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
    </>
  );
}
