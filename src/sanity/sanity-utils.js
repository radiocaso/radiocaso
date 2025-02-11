import { client } from "./client";

export async function getFutureTransmissions() {
  return client.fetch(`*[_type == "transmision" && fecha > now()] | order(fecha asc) { 
    _id,
    titulo,
    fecha,
    tipoDeTransmision[]->{
      _id,
      tipoDeTransmision
    },
    programa->{
      titulo},
    contexto->{
      titulo},
    descripcionCorta,
  }`);
}

export async function getInitialData() {
  return client.fetch(
    `*[_type == "infoGeneral"][0] {
      titulo,
      descripcion,
      contacto,
      redesSociales,
      logo {
        asset->{
          url
        },
      },
      configuracionDeTransmision,
      destacados[]->{
        _id,
        _type,
        titulo,
        slug,
      },
    }`,
  );
}

export async function getTags() {
  return client.fetch(
    `*[_type == "tag"] {
      _id,
      tag,
    }`,
  );
}

export async function getTransmissionTypes() {
  return client.fetch(
    `*[_type == "tipoDeTransmision"] {
      _id,
      tipoDeTransmision,
    }`,
  );
}
