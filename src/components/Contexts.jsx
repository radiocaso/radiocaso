import { useContexts } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Contexts() {
  const { data, isLoading, error } = useContexts();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error al cargar los contextos</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Contextos" />
      {data.map((context) => (
        <div key={context._id}>{context.titulo && context.titulo}</div>
      ))}
    </div>
  );
}
