import React from "react";
import Data from "../Shared/Data";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Procure por tipo:</h2>
      <div className="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <div className="border rounded-xl p-4 flex items-center flex-col hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <img src={category.icon} width={35} height={35} />
            <h2 className="mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
