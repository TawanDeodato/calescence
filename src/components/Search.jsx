import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "../Shared/Data";

function Search() {
  return (
    <>
      <div className="p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
        <Select>
          <SelectTrigger className="w-full outline-none border-none shadow-none text-lg">
            <SelectValue placeholder="Carros" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Novos</SelectItem>
            <SelectItem value="dark">Antigos</SelectItem>
            <SelectItem value="dark">Usados</SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
          <SelectTrigger className="w-full outline-none border-none shadow-none text-lg">
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            {Data.CarMakes.map((marker, index) => (
              <SelectItem key={marker.id} value={marker.name}>
                {marker.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
          <SelectTrigger className="w-full outline-none border-none shadow-none text-lg">
            <SelectValue placeholder="Preço" />
          </SelectTrigger>
          <SelectContent>
            {Data.Pricing.map((price, index) => (
              <SelectItem key={price.id} value={price.amount}>
                {price.amount}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div>
          <CiSearch className="text-[50px] bg-primary text-white rounded-full p-3 hover:scale-105 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Search;
