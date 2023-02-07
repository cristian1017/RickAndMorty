import axios from "axios";
import { CharacterStateI } from "../models/character";

const baseURL = `https://rickandmortyapi.com/api/location?page=1`;
export let characterArr:any = []

export const getCharactersLocation = async () => {
  const { data } = await axios.get(`${baseURL}`);
  return data ;
};

export const getCharacter = async (url: string) => {

  const {data} = await axios.get(url)
  const chart: CharacterStateI = {
    id: data.id,
    name: data.name,
    status: data.status,
    gender: data.gender,
    species: data.species,
    image: data.image,
  };
  return {chart};
};
