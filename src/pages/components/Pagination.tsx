import { FC } from "react";
import ReactPaginate from 'react-paginate';
import "../../assets/css/pagination.css"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface Props {
  totalCharacters: number;
  setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: FC<Props> = ({totalCharacters,setCurrentPage}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
      }}
    > 
      <ReactPaginate
        activeClassName="item active "
        nextLabel={<AiOutlineRight style={{fontSize: 30, width: 150, color:"greenyellow"}}/>}
        breakLabel={'...'}
        className="pagination justify-content-center gap-4 my-4"
        pageCount={totalCharacters / 12}
        nextClassName="item next"
        pageLinkClassName="page-link"
        pageRangeDisplayed={2}
        disabledClassName={"disabled-page"}
        previousClassName="item previous"
        previousLabel={<AiOutlineLeft style={{fontSize: 30, width: 150, color:"greenyellow"}}/>}
        onPageChange={(data) => setCurrentPage(data.selected + 1)}
      />
    </div>
  );

}