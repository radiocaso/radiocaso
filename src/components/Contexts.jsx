import { useContexts, useContextTypes } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Contexts() {
  const {
    data: contexts,
    isLoading: contextsLoading,
    error: contextsError,
  } = useContexts();
  const {
    data: contextTypes,
    isLoading: contextTypesLoading,
    error: contextTypesError,
  } = useContextTypes();

  if (contextsLoading || contextTypesLoading) return <div>Cargando...</div>;
  if (contextsError || contextTypesError)
    return <div>Hubo un error al cargar los contextos</div>;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Contextos" />

      <div className="flex flex-wrap gap-2">
        {contextTypes.map((contextType) => (
          <div className="border px-2 text-xs lowercase" key={contextType._id}>
            {contextType.tipoDeContexto}
          </div>
        ))}
      </div>

      {contexts.map((context) => (
        <div key={context._id}>{context.titulo && context.titulo}</div>
      ))}
    </div>
  );
}
