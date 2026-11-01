import { createContext, h, type ComponentType } from "preact";
import { useContext } from "preact/hooks";

/**
 * Mini island system. Components that were "use client" in Next are wrapped
 * with island(): on the server they render inside <pk-island data-id data-props>
 * and src/client/islands.ts hydrates each marker with Preact. Nested islands
 * render inline (InIsland) so only the outermost one hydrates.
 */
export const InIsland = createContext(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function island<P extends Record<string, any>>(id: string, Impl: ComponentType<P>) {
  function Island(props: P) {
    const inside = useContext(InIsland);
    if (inside || typeof window !== "undefined") return h(Impl, props);
    return h(
      "pk-island",
      { "data-id": id, "data-props": JSON.stringify(props ?? {}), style: "display:contents" },
      h(InIsland.Provider, { value: true }, h(Impl, props)),
    );
  }
  Island.displayName = `Island(${id})`;
  return Island;
}
