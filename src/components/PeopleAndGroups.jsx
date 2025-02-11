import { useState } from "react";
import { usePeople, useGroups } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function PeopleAndGroups() {
  const {
    data: people,
    isLoading: peopleLoading,
    error: peopleError,
  } = usePeople();
  const {
    data: groups,
    isLoading: groupsLoading,
    error: groupsError,
  } = useGroups();

  const [isOpen, setIsOpen] = useState(false);

  if (peopleLoading || groupsLoading) return <div>Cargando...</div>;
  if (peopleError || groupsError)
    return <div>Hubo un error al cargar las personas y grupos</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <div className="flex justify-between">
        <SectionTitle title="Personas/Grupos" />
        <button
          className="size-8 border pb-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <div>
          {people.map((person) => (
            <div key={person._id}>{person.nombre && person.nombre}</div>
          ))}
          {groups.map((group) => (
            <div key={group._id}>{group.nombre && group.nombre}</div>
          ))}
        </div>
      )}
    </div>
  );
}
