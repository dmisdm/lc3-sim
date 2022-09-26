import { Monaco } from "@monaco-editor/react";
import { wireTmGrammars } from "monaco-editor-textmate";
import { Registry } from "monaco-textmate";
import lc3tm from "./lc3asm.tmLanguage.json";
import snippets from "./lc3asm-snippets.json";

export function registerLC3(monaco: Monaco) {
  const content = lc3tm;
  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      return {
        format: "json",
        content,
      };
    },
  });

  monaco.languages.register({ id: "lc3" });
  monaco.languages.registerCompletionItemProvider("lc3", {
    provideCompletionItems: () => {
      return Object.entries(snippets).map(([label, config]) => ({
        label,
        insertText: [],
        kind: monaco.languages.CompletionItemKind.Snippet,
      }));
    },
  });
  const grammars = new Map();
  grammars.set("lc3", "source.asm");
  wireTmGrammars(monaco, registry, grammars);
}
