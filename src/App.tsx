import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Editor, { useMonaco, loader } from "@monaco-editor/react";
import { globalStylesStuff } from "./globalStylesStuff";
import { registerLC3 } from "./registerLC3";
import { useOnigasm } from "./useOnigasm";

function App() {
  const monaco = useMonaco();
  useOnigasm();
  // @ts-ignore
  useEffect(() => {
    if (monaco) {
      registerLC3(monaco);
    }
  }, [monaco]);
  return (
    <>
      {globalStylesStuff}
      <Box>
        <Box>LC3 Assembler</Box>
        <Box height={300} width={300}>
          <Editor language="lc3" path="test.asm" />
        </Box>
      </Box>
    </>
  );
}

export default App;
