import { useFutureTransmissions } from "../hooks/useData";
import SectionTitle from "./SectionTitle";
import TransmissionCard from "./TransmissionCard";

export default function FutureTransmissions() {
  const { data, isLoading, error } = useFutureTransmissions();

  if (isLoading) return null;
  if (error) return <div>Hubo un error al cargar las transmisiones</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Próximas transmisiones" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((transmission) => (
          <TransmissionCard
            key={transmission._id}
            transmission={transmission}
          />
        ))}
      </div>
    </div>
  );
}
