import React, { useContext } from 'react';
import { DreamContext } from '../contexts/DreamContext';
import { Card } from "../components/Card";
import { useLoaderData} from "react-router-dom";
import { Pagination } from "../components/Pagination";
import { useSelector } from 'react-redux';
export const Home = () => {
    // const dreams = useLoaderData();

    const state = useSelector((state) => state.dream);
    const dreams = state.dreams;

  return(
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-7 gap-9 mt-12">
        {
          Array.isArray(dreams) ? (
            dreams.map((dream,index) => ( <Card key = {index} dream={dream}/> ))
          ) : (
            <p>Veri yükleniyor veya format hatalı</p>
          )}
      </div>
      <Pagination/>
    </>
  )
}
// export const homeLoader = async () => {
// }