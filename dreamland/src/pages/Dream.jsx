import React from "react";
import { Logo } from "../icons/logo";

export const Dream = () => {
  return(
    <div className="border my-10 mx-5 p-10 py-18 rounded-3xl
    shadow-lg border border-gray-300
    bg-gradient-to-b from-[#f6d1cb] from-0% via-white via-40% to-white to-100%">
      <div className="flex justify-center">
        <Logo size={70} color="#1f3f96"/>
        <h1 className="text-2xl text-[#1f3f96] px-5 -mt-2">Lorem, ipsum dolor.</h1>
        <Logo size={70} color="#1f3f96"/>
      </div>
      <div className="mt-5 text-gray-600">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam, temporibus officiis sunt repellat necessitatibus praesentium laboriosam ratione voluptatem nobis corrupti alias vero! Dolores itaque culpa tenetur velit fugiat atque ad tempora exercitationem consequuntur nisi eos illo, repellendus doloribus qui non! Omnis, non quia! Aliquid, neque. Corporis qui debitis voluptatum.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam, temporibus officiis sunt repellat necessitatibus praesentium laboriosam ratione voluptatem nobis corrupti alias vero! Dolores itaque culpa tenetur velit fugiat atque ad tempora exercitationem consequuntur nisi eos illo, repellendus doloribus qui non! Omnis, non quia! Aliquid, neque. Corporis qui debitis voluptatum.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam, temporibus officiis sunt repellat necessitatibus praesentium laboriosam ratione voluptatem nobis corrupti alias vero! Dolores itaque culpa tenetur velit fugiat atque ad tempora exercitationem consequuntur nisi eos illo, repellendus doloribus qui non! Omnis, non quia! Aliquid, neque. Corporis qui debitis voluptatum.</p>
      </div>
    </div>
  )
}