import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex items-center justify-between shadow-sm py-5">
      <img src="/logo.svg" alt="calescence" width={150} height={100} />

      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Início
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Pesquisa
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Novos
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Usados
        </li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <UserButton />
          <Button>Enviar Listagem</Button>
        </div>
      ) : (
        <Button>Entrar</Button>
      )}
    </div>
  );
}

export default Header;
