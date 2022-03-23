import React from "react";
import { FilterBar } from "../components/FilterBar";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-1/3 bg-black p-2">
      <img
        src="https://global-uploads.webflow.com/5ddc307f68536f623db8c772/60b93129188d32f49610b1a1_Kiwibot%20for%20business.svg"
        alt="kiwibot logo"
        className="w-1/4"
      />
      <FilterBar />
    </div>
  );
};

export { Header };
