import { usePrograms } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Programs() {
  const { data, isLoading, error } = usePrograms();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error al cargar los programas</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Programas" />
      {data.map((program) => (
        <div key={program._id}>{program.titulo && program.titulo}</div>
      ))}
    </div>
  );
}
