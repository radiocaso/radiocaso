import {
  useInitialData,
  useFutureTransmissions,
  useTags,
  useTransmissionTypes,
} from "../hooks/useData";

export default function LoadingScreen() {
  const { isLoading: isInitialDataLoading } = useInitialData();
  const { isLoading: isFutureTransmissionsLoading } = useFutureTransmissions();
  const { isLoading: isTagsLoading } = useTags();
  const { isLoading: isTransmissionTypesLoading } = useTransmissionTypes();

  if (
    !isInitialDataLoading &&
    !isFutureTransmissionsLoading &&
    !isTagsLoading &&
    !isTransmissionTypesLoading
  )
    return null;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="size-16 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </div>
  );
}
