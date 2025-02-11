import SectionTitle from "./SectionTitle";
import { usePublications } from "../hooks/useData";

export default function Publications() {
  const { data, isLoading, error } = usePublications();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error al cargar las publicaciones</div>;

  return (
    <>
      <SectionTitle title="Publicaciones" />
      <div className="flex flex-col gap-4 border-b p-4">
        {data.map((publication) => (
          <div key={publication._id}>
            {publication.titulo && publication.titulo}
          </div>
        ))}
      </div>
    </>
  );
}
