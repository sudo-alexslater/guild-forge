import { createCtx } from '../hooks/createCtx';

export type AppState = {};
export type AppStateActions = {};
export type AppContextType = {
	state: AppState;
	actions: AppStateActions;
};
export const [useApp, AppProvider] = createCtx<AppContextType>();
