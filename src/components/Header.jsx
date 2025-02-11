import { useInitialData } from "../hooks/useData";

export default function Header() {
  const { data, isLoading, error } = useInitialData();
  if (isLoading || error) return null;

  return (
    <div className="flex items-center border-b py-4">
      <h1 className="text-7xl font-black">{data.titulo}</h1>
    </div>
  );
}
