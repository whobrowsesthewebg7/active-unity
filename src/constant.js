// import.meta.env is the same as process.env as we've seen in our previous project
// import.meta.env is a vite alternative check this doc: https://vitejs.dev/guide/env-and-mode.html#env-variables
export const BASENAME = import.meta.env.PROD ? "/active-unity" : "";
