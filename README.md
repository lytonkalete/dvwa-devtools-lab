# DVWA DevTools Lab

Controlled lab for teaching DevTools footprinting tasks.

## Run

1. `npm install`
2. `npm start`
3. The command automatically generates certificates and starts the HTTPS server at [https://localhost:3443](https://localhost:3443).

- You must accept the browser's **TLS warning** (Self-Signed Certificate) to proceed. This warning is critical for Question 6 of the checklist.

## Lab Checklist

1. **Elements:** Capture a screenshot of the Elements panel.
2. **Network:** Reload the page and record the **Server**, **X-Powered-By**, and **Content-Type** response headers.
3. **Frameworks:** Identify any JavaScript frameworks/libraries.
4. **Storage:** From Application → Storage, list all **cookies** and **localStorage/sessionStorage** keys.
5. **Secrets:** Inspect HTML comments/hidden inputs and copy any notes or sensitive data.
6. **Security:** From the Security panel, check the TLS certificate and note any warnings.

## Analysis Questions

- Which discovered item is most useful to an attacker? Why?
- Suggest 3 countermeasures the site owner should implement.
- Who would you inform if you found sensitive information (e.g., API keys)?
