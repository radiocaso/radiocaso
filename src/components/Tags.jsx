import { useTags } from "../hooks/useData";
import SectionTitle from "./SectionTitle";

export default function Tags() {
  const { data, isLoading, error } = useTags();

  if (isLoading || error) return null;

  return (
    <div className="flex flex-col gap-4 border-b p-4">
      <SectionTitle title="Tags" />

      <div className="flex flex-wrap gap-2">
        {data?.map((tag) => (
          <div key={tag._id} className="border px-2 text-xs lowercase">
            {tag.tag}
          </div>
        ))}
      </div>
    </div>
  );
}
