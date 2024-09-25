import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">
          Encontre carros para venda e aluguel perto de você
        </h2>
        <h2 className="text-[60px] font-bold">
          Econtre o carro dos seus sonhos
        </h2>
        <Search />

        <img src="/tesla.png" alt="Seu Carro" className="mt-10" />
      </div>
    </div>
  );
}

export default Hero;
