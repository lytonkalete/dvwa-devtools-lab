localStorage.setItem("userToken", "local_sk_user_ABC123_EXAM");
sessionStorage.setItem("pendingAction", "confirm-email-123");

window.__DVWA_FRAMEWORKS__ = {
  jquery: typeof window.jQuery !== "undefined",
  react: typeof window.React !== "undefined"
};

document.cookie = "sessionId=localdev-xyz123; path=/; SameSite=Lax";

const logOutput = document.getElementById('logOutput');

function appendLog(message, type = 'info') {
  const time = new Date().toLocaleTimeString();
  const color = type === 'init' ? 'text-green-600' : 'text-indigo-600';
  logOutput.innerHTML += `<p class="${color}">[${time}] ${message}</p>`;
  logOutput.scrollTop = logOutput.scrollHeight;
}

appendLog("Application start initiated.", 'init');
appendLog("Storage keys initialized.", 'init');

document.getElementById("demoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputData = document.getElementById('inputData').value;

  console.log(`Processing data: "${inputData}"`);

  appendLog(`Processing input: "${inputData}"`, 'action');

  alert("Data processing simulated.");
});