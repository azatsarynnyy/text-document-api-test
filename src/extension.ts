import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.workspace.onDidChangeTextDocument(
    (e: vscode.TextDocumentChangeEvent) => console.log(e.document.uri)
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
