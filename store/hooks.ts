/**
 * Typed Redux hooks
 * Use these throughout your app instead of plain `useDispatch` and `useSelector`
 */

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

/**
 * Typed useDispatch hook
 * @example const dispatch = useAppDispatch();
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Typed useSelector hook
 * @example const places = useAppSelector(state => state.places);
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
