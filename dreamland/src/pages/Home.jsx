import React from "react";
import { Card } from "../components/Card";

const dizi = [1,2,3,4,5,6,7,8,9,10]
export const Home = () => {
  return(
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 sm:gap-y-10 gap-x-10 gap-y-13 mt-10">
          {
            dizi.map((i) => ( <Card key = {i} /> ))
          }
          </div>
    </>
  )
}