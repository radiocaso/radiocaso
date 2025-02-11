import SectionTitle from "./SectionTitle";
import {
  useInitialData,
  useTags,
  useTransmissionTypes,
} from "../hooks/useData";

export default function Highlights() {
  const {
    data: initialData,
    isLoading: isInitialLoading,
    error: initialError,
  } = useInitialData();
  const {
    data: tagsData,
    isLoading: tagsLoading,
    error: tagsError,
  } = useTags();
  const {
    data: transmissionTypesData,
    isLoading: transmissionTypesLoading,
    error: transmissionTypesError,
  } = useTransmissionTypes();

  if (isInitialLoading || tagsLoading || transmissionTypesLoading) return null;
  if (initialError || tagsError || transmissionTypesError)
    return <div>Hubo un error al cargar la data</div>;

  return (
    <>
      <SectionTitle title="Destacados" />
      <div className="flex flex-wrap gap-2 p-4">
        {initialData.destacados?.map((highlight) => {
          return (
            <div key={highlight._id}>
              {highlight.titulo && highlight.titulo}
            </div>
          );
        })}
      </div>
      <SectionTitle title="Tags" />
      <div className="flex flex-wrap gap-2 p-4">
        {tagsData?.map((tag) => {
          return <div key={tag._id}>{tag.tag && tag.tag}</div>;
        })}
      </div>
      <SectionTitle title="Tipos de transmision" />
      <div className="flex flex-wrap gap-2 p-4">
        {transmissionTypesData?.map((transmissionType) => {
          return (
            <div key={transmissionType._id}>
              {transmissionType.tipoDeTransmision &&
                transmissionType.tipoDeTransmision}
            </div>
          );
        })}
      </div>
    </>
  );
}
