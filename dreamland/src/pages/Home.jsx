import React, { useContext } from 'react';
import { DreamContext } from '../contexts/DreamContext';
import { Card } from "../components/Card";
import { useLoaderData} from "react-router-dom";
import { Pagination } from "../components/Pagination";

export const Home = () => {
    const items = useLoaderData();

    const { dreamState } = useContext(DreamContext);
    const dreams = dreamState.cardDreams;

  return(
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-7 gap-9 mt-12">
        {
          dreams.map((dream,index) => ( <Card key = {index} dream={dream}/> ))
        }
      </div>
      <Pagination/>
    </>
  )
}
export const homeLoader = async () => {
  return;
}