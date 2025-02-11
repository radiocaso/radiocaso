import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="ml-auto flex justify-between py-4 text-xs uppercase">
      <NavLink
        className="flex size-24 items-center justify-center rounded-full border"
        to="/agenda"
      >
        Agenda
      </NavLink>
      <NavLink
        className="flex size-24 items-center justify-center rounded-full border"
        to="/archivo"
      >
        Archivo
      </NavLink>
      <NavLink
        className="flex size-24 items-center justify-center rounded-full border"
        to="/publicaciones"
      >
        Publicaciones
      </NavLink>
      <NavLink
        className="flex size-24 items-center justify-center rounded-full border"
        to="/info"
      >
        Info
      </NavLink>
    </nav>
  );
}
