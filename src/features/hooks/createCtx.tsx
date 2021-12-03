import { createContext, useContext } from "react";

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createCtx<A extends {} | null>() {
	const ctx = createContext<A | undefined>(undefined);
	function useCtx(): Readonly<A> {
		const context = useContext(ctx);
		if (context === undefined) throw new Error("useCtx must be inside a Provider with a value");
		return context;
	}
	return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
