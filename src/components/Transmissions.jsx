import { usePastTransmissions } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Programs() {
  const { data, isLoading, error } = usePastTransmissions();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error al cargar los programas</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Transmisiones pasadas" />
      {data.map((transmission) => (
        <div key={transmission._id}>
          {transmission.titulo && transmission.titulo}
        </div>
      ))}
    </div>
  );
}
