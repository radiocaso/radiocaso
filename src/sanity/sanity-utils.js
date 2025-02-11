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
      _id,
      titulo},
    contexto->{
      _id,
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

export async function getContexts() {
  return client.fetch(
    `*[_type == "contexto"] | order(fecha desc) { 
      _id,
      titulo,
      slug,
    }`,
  );
}

export async function getContextTypes() {
  return client.fetch(
    `*[_type == "tipoDeContexto"] {
      _id,
      tipoDeContexto,
    }`,
  );
}

export async function getPrograms() {
  return client.fetch(`
    *[_type == "programa"] | order(fecha desc) { 
      _id,
      titulo,
      slug,
    }`);
}

export async function getPastTransmissions() {
  return client.fetch(
    `*[_type == "transmision" && fecha < now()] | order(fecha desc) { 
      _id,
      titulo,
      "slug": slug.current,
      fecha,
      programa->{
        titulo},
      contexto->{
        titulo},
      tipoDeTransmision[]->{
        _id,
        tipoDeTransmision}
    }`,
  );
}

export async function getPublications() {
  return client.fetch(
    `*[_type == "publicacion"] | order(fecha desc) { 
      _id,
      titulo,
      slug,
      fecha,
      tipoDePublicacion,
      descripcion,
      recursos[]->{
        _id,
        titulo,
        url,
        archivo{
          asset->{
            url
          }
        },
      },
      creditos
    }`,
  );
}

export async function getPeople() {
  return client.fetch(
    `*[_type == "persona"] | order(nombre asc) { 
      _id,
      nombre,
      slug,
    }`,
  );
}

export async function getPerson(slug) {
  return client.fetch(
    `*[_type == "persona" && slug.current == $slug][0] {
      _id,
      nombre,
      slug,
      links,
      paises,
    }`,
    { slug },
  );
}

export async function getGroups() {
  return client.fetch(
    `*[_type == "grupo"] | order(nombre asc) { 
      _id,
      nombre,
      slug,
    }`,
  );
}

export async function getGroup(slug) {
  return client.fetch(
    `*[_type == "grupo" && slug.current == $slug][0] {
      _id,
      nombre,
      slug,
      links,
      paises,
      integrantes[]->{
        _id,
        nombre,
        slug,
      },
    }`,
    { slug },
  );
}

export async function getSpaces() {
  return client.fetch(
    `*[_type == "espacio"] | order(nombre asc) { 
      _id,
      nombre,
      slug,
    }`,
  );
}

export async function getSpace(slug) {
  return client.fetch(
    `*[_type == "espacio" && slug.current == $slug][0] {
      _id,
      nombre,
      links,
      paises,
    }`,
    { slug },
  );
}
