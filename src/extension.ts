import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidChangeTextDocument(
    (e: vscode.TextDocumentChangeEvent) => console.log(e.document.fileName)
  );
}

export function deactivate() {}
