import { useSelector } from "react-redux";
import { characters } from "../../features/getInfo/CharactersSlice";
import { CharacterStateI } from "../../models/character";
import "../../assets/css/card.css";
import { FC, useState } from "react";
import { Pagination } from "./Pagination";


interface Props {
  data: [];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

export const Card: FC<Props> = ({data, setCurrentPage, currentPage }) => {

  const characteres = useSelector(characters);
  const [perPage, setPerPage] = useState(12)

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  return (
    <>
      {
        data.length == 0 ? (
          <div className="error">
            <h6>No existe ese personaje</h6>
          </div>
        ): (
          <>
          <Pagination totalCharacters ={data.length} setCurrentPage={setCurrentPage}/>
          <div className="cardContainer">
            {data?.slice(indexOfFirst, indexOfLast).map((data: any, index) => {
              return (
                <div className="card" key={index}>
                  <div className="img">
                    <img src={data["image"]} alt={data["name"]} />
                    <div className="id">
                      <h3>#{data["id"]}</h3>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className="name">{data["name"].toUpperCase()}</h3>
                    <h5><strong style={{background:"white"}}>Status: </strong>{data["status"]}</h5>
                    <h5><strong style={{background:"white"}}>Gender: </strong>{data["gender"]}</h5>
                    <h5><strong style={{background:"white"}}>Specie: </strong>{data["species"]}</h5>

                  </div>
                </div>
              );
            })}
          </div>
          </>
        )}

    </>
  );
}
