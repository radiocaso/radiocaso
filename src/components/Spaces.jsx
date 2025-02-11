import { useState } from "react";
import { useSpaces } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Spaces() {
  const { data, isLoading, error } = useSpaces();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los espacios</p>;

  console.log(data);

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <div className="flex justify-between">
        <SectionTitle title="Spaces" />
        <button
          className="size-8 border pb-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <div>
          {data.map((space) => (
            <div key={space._id}>{space.nombre && space.nombre}</div>
          ))}
        </div>
      )}
    </div>
  );
}
