import { useState } from "react";

const manifestData = chrome.runtime.getManifest();
window.APP_VERSION = manifestData.version;
window.APP_NAME = manifestData.name;

function App() {
  return (
    <main className="w-80 font-mono">
      <div className="flex flex-col items-center justify-center h-64">
        <h2 className="text-xl font-bold">Popup</h2>
        <p className="text-center">This is the popup.</p>
        <p className="text-center">v{window.APP_VERSION}</p>
      </div>
    </main>
  );
}

export default App;
