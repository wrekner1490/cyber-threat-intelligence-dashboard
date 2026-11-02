# Cyber Threat Intelligence Dashboard

A full-stack dashboard for looking up threat intelligence on IPs/domains/hashes
and streaming results to a live UI. An Express backend queries external threat
feeds (VirusTotal, Shodan) and pushes updates over Socket.IO to a React frontend.

## Architecture

```
frontend (React + Tailwind + socket.io-client)
      │  REST + WebSocket
backend (Express + socket.io)
      │  axios
VirusTotal API   Shodan API
```

- **backend/** — Express API (`/api/threats`), Socket.IO server, VirusTotal &
  Shodan service wrappers. Runs on port `5000` (override with `PORT`).
- **frontend/** — Create-React-App client (`ThreatForm`, `ThreatTable`) talking to
  the backend over REST + WebSocket.

## Setup

### 1. Backend

```bash
cd backend
npm install
```

Create `backend/.env` (it is git-ignored — never commit real keys):

```
VIRUSTOTAL_API_KEY=your_key_here
SHODAN_API_KEY=your_key_here
PORT=5000
```

```bash
node server.js
```

### 2. Frontend

```bash
cd frontend
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build
```

## Notes

- API keys live only in `backend/.env`; `.gitignore` excludes `.env` and
  `node_modules/`.
- Requires valid VirusTotal and Shodan API keys to return live data.

## Status

Working full-stack project (backend API + Socket.IO + React UI).
