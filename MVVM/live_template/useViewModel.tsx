// useViewModel
import { useRef } from "react";
import { IViewModel } from "./interface";

/**
 * Create ref to the functional component (It will not re-run on each render)
 * @param ViewModelConstructor
 * @param props context
 * @return ViewModelConstructor
 */

export function useViewModel<P extends object, S, A>(
  props: P,
  ViewModelConstructor: IViewModel<P, S, A>
) {
  let vmRef = useRef(ViewModelConstructor(props));
  return vmRef.current;
}
