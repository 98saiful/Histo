/**
 * Custom hook for managing visited status of places
 */

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleVisited } from "../store/slices/places-slice";

/**
 * Hook to manage visited status
 * @returns Object with visited array, check function, and toggle function
 */
export const useVisitedStatus = () => {
  const dispatch = useAppDispatch();
  const visited = useAppSelector((state) => state.places.visited);

  /**
   * Check if a place is visited
   */
  const isVisited = (id: string | number): boolean => {
    return visited.includes(id);
  };

  /**
   * Toggle visited status for a place
   */
  const toggle = (id: string | number) => {
    dispatch(toggleVisited(id));
  };

  return {
    visited,
    isVisited,
    toggle,
  };
};

export default useVisitedStatus;
