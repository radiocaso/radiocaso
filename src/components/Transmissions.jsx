import { usePastTransmissions, useTransmissionTypes } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Transmissions() {
  const {
    data: transmissions,
    isLoading: transmissionsLoading,
    error: transmissionsError,
  } = usePastTransmissions();

  const {
    data: types,
    isLoading: typesLoading,
    error: typesError,
  } = useTransmissionTypes();

  if (transmissionsLoading || typesLoading) return <div>Cargando...</div>;
  if (transmissionsError || typesError)
    return <div>Hubo un error al cargar los programas</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Transmisiones pasadas" />

      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <span key={type._id} className="border px-2 text-xs lowercase">
            {type.tipoDeTransmision && type.tipoDeTransmision}
          </span>
        ))}
      </div>

      {transmissions.map((transmission) => (
        <div key={transmission._id}>
          {transmission.titulo && transmission.titulo}
        </div>
      ))}
    </div>
  );
}
