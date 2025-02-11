export default function TransmissionCard({ transmission }) {
  return (
    <div className="flex flex-col gap-1 border p-2 pb-8">
      <div>{transmission.fecha}</div>
      <h3 className="font-bold">{transmission.titulo}</h3>
      {transmission.programa && (
        <div className="italic">{transmission.programa.titulo}</div>
      )}
      <div className="flex gap-1">
        {transmission.tipoDeTransmision &&
          transmission.tipoDeTransmision.map((tipo) => (
            <div key={tipo._id} className="rounded-full border px-2 text-xs">
              {tipo.tipoDeTransmision}
            </div>
          ))}
      </div>
      {transmission.descripcionCorta && (
        <div>{transmission.descripcionCorta}</div>
      )}
    </div>
  );
}
