import React from "react";
import { Card } from "../components/Card";
import { useLoaderData} from "react-router-dom";
export const Home = ({dreams}) => {
  const items = useLoaderData();
  return(
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-7 gap-9 mt-12">
          {
            dreams.map((dream,index) => ( <Card key = {index} dream={dream}/> ))
          }
          </div>
    </>
  )
}
export const homeLoader = async () => {
  return;
}