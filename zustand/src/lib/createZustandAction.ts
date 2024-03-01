
export function createApiMethod<T, P = void>(apiCall: (param: P) => Promise<T>, set: Function, initialState: object) {
    return async (param: P) => {
        set({ ...initialState, loading: true });
        try {
            const data = await apiCall(param);
            set({ ...initialState, posts: data });
        } catch (error: any) {
            set({ ...initialState, error: error.message });
        }
    };
}

