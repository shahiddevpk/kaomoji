import { useEffect, useState } from "preact/hooks";
import type { ComponentType } from "preact";
/** next/dynamic({ ssr:false }) equivalent: render nothing on the server, load on mount. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function dynamic<P = any>(loader: () => Promise<ComponentType<P> | { default: ComponentType<P> }>) {
  return function Dynamic(props: P) {
    const [C, setC] = useState<ComponentType<P> | null>(null);
    useEffect(() => {
      let live = true;
      loader().then((m) => { if (live) setC(() => ("default" in (m as object) ? (m as { default: ComponentType<P> }).default : (m as ComponentType<P>))); });
      return () => { live = false; };
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return C ? <C {...(props as any)} /> : null;
  };
}
