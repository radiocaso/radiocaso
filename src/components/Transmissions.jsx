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
    <section className="flex flex-col gap-4 border-b p-4">
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
          {transmission.fecha && (
            <time className="text-xs">
              {new Intl.DateTimeFormat("es-AR", {
                timeZone: "America/Argentina/Buenos_Aires",
                day: "numeric",
                month: "numeric",
                year: "numeric",
              }).format(new Date(transmission.fecha))}
              {" - "}
              {new Intl.DateTimeFormat("es-AR", {
                timeZone: "America/Argentina/Buenos_Aires",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }).format(new Date(transmission.fecha))}
            </time>
          )}
          {transmission.titulo && (
            <h3 className="font-bold">{transmission.titulo}</h3>
          )}
          {transmission.contexto && (
            <div className="underline">{transmission.contexto.titulo}</div>
          )}
          {transmission.programa && (
            <div className="italic">{transmission.programa.titulo}</div>
          )}
        </div>
      ))}
    </section>
  );
}
