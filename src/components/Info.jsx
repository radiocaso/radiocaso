import { useInitialData } from "../hooks/useData";
import { PortableText } from "@portabletext/react";

export default function Info() {
  const { data, isLoading, error } = useInitialData();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error al cargar la informacion</div>;

  return <>{data.descripcion && <PortableText value={data.descripcion} />}</>;
}
