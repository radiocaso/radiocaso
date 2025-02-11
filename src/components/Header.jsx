import { useInitialData } from "../hooks/useData";
import Nav from "./Nav";
import { NavLink } from "react-router";

export default function Header() {
  const { data, isLoading, error } = useInitialData();
  if (isLoading || error) return null;

  return (
    <div className="flex items-center border-b py-4">
      <NavLink to="/" className="text-7xl font-black">
        {data.titulo}
      </NavLink>
      <Nav />
    </div>
  );
}
