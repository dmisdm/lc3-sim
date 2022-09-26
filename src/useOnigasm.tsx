import { useEffect } from "react";
import { loadWASM } from "onigasm";

let loaded = false;
/** Use this hook to load the Onigasm WASM backend  */
export function useOnigasm() {
  useEffect(() => {
    if (!loaded) {
      loadWASM(`https://unpkg.com/onigasm/lib/onigasm.wasm`);
      loaded = true;
    }
  }, []);
}
