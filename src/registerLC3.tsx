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
    provideCompletionItems(model, position, context, token) {
      const firstEditor = monaco.editor.getEditors()[0];
      const snippetController =
        firstEditor.getContribution("snippetController2");
      return {
        suggestions: Object.entries(snippets).map(([label, config]) => ({
          label,
          insertText: config.body,
          kind: monaco.languages.CompletionItemKind.Snippet,
          range: {
            startColumn: position.column,
            endColumn: position.column,
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
          },
        })),
      };
    },
  });
  const grammars = new Map();
  grammars.set("lc3", "source.asm");
  wireTmGrammars(monaco, registry, grammars);
}
