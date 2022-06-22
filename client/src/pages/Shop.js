import React from "react";
import Filter from "../components/Filter";
import Catalogue from "../components/Catalogue";

export default function Shop(props) {
  return (
    <div>
      <h1>Browse our books</h1>

      <Filter />
      <Catalogue />
      
    </div>
  );
};