// Global navigation pub/sub — lets Footer navigate without prop drilling

// Global navigation handler — set once from App, used by Footer everywhere
let _globalNav = () => { };
const setGlobalNav = fn => { _globalNav = fn; };
const globalNav = (...args) => _globalNav(...args);

export { _globalNav, setGlobalNav, globalNav }
