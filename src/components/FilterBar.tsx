import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const FilterBar = () => {
  const { sortCards, asc } = useContext(AppContext);
  const FilterBarStyles = `
  bg-gradient-to-r from-violet-900 to-blue-600 w-4/5
  rounded-full
  flex justify-between
  `;
  const ButtonStyles = `
  bg-white rounded-full m-2 p-2
  text-sm text-blue-600 hover:text-black`;
  return (
    <div className={FilterBarStyles}>
      <button className={ButtonStyles} onClick={sortCards}>
        {" "}
        {asc ? "ASC" : "DESC"} by Creation Date
      </button>
      <button className={ButtonStyles}> Order by Status</button>
    </div>
  );
};

export { FilterBar };
