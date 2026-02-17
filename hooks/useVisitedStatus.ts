/**
 * Custom hook for managing visited status of places
 */

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleVisited } from "../store/slices/places-slice";

/**
 * Hook to manage visited status
 * @returns Object with check function and toggle function
 */
export const useVisitedStatus = () => {
  const dispatch = useAppDispatch();
  const visited = useAppSelector((state) => state.places.visited);

  /**
   * Check if a place is visited
   */
  const isVisited = useCallback(
    (id: string): boolean => {
      return !!visited[id];
    },
    [visited],
  );

  /**
   * Toggle visited status for a place
   */
  const toggle = useCallback(
    (id: string) => {
      dispatch(toggleVisited(id));
    },
    [dispatch],
  );

  return {
    isVisited,
    toggle,
  };
};

export default useVisitedStatus;
