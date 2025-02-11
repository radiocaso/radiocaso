import { useQuery } from "@tanstack/react-query";
import * as sanityUtils from "../sanity/sanity-utils";

export function useFutureTransmissions() {
  return useQuery({
    queryKey: ["futureTransmissions"],
    queryFn: sanityUtils.getFutureTransmissions,
  });
}

export function useInitialData() {
  return useQuery({
    queryKey: ["initialData"],
    queryFn: sanityUtils.getInitialData,
  });
}

export function useTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: sanityUtils.getTags,
  });
}

export function useTransmissionTypes() {
  return useQuery({
    queryKey: ["transmissionTypes"],
    queryFn: sanityUtils.getTransmissionTypes,
  });
}
