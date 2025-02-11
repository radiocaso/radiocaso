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

export function useContexts() {
  return useQuery({
    queryKey: ["contexts"],
    queryFn: sanityUtils.getContexts,
  });
}

export function useContextTypes() {
  return useQuery({
    queryKey: ["contextTypes"],
    queryFn: sanityUtils.getContextTypes,
  });
}

export function usePrograms() {
  return useQuery({
    queryKey: ["programs"],
    queryFn: sanityUtils.getPrograms,
  });
}

export function usePastTransmissions() {
  return useQuery({
    queryKey: ["pastTransmissions"],
    queryFn: sanityUtils.getPastTransmissions,
  });
}

export function usePublications() {
  return useQuery({
    queryKey: ["publications"],
    queryFn: sanityUtils.getPublications,
  });
}
