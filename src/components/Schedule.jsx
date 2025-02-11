import SectionTitle from "./SectionTitle";
import { useFutureTransmissions } from "../hooks/useData";

export default function Schedule() {
  const { data, isLoading, error } = useFutureTransmissions();

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      <SectionTitle title="Agenda" />
      <div className="flex flex-col gap-4 border-b p-4">
        {data.map((transmission) => (
          <div key={transmission._id}>
            {transmission.titulo && transmission.titulo}
          </div>
        ))}
      </div>
    </>
  );
}
