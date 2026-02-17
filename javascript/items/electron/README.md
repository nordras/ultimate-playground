# Simple Electron Exercises

This directory contains 4 short exercises to practice basic Electron concepts.

## Prerequisites

- Node.js 18+
- npm

## Installation

In the terminal, inside this folder (`javascript/items/electron`):

```bash
npm install
```

## How to run

```bash
npm run ex1
npm run ex2
npm run ex3
npm run ex4
```

## Exercises

### Ex1 - Basic window

File: `exercicios/01-janela-basica/main.js`

Goal:
- Create an Electron window
- Load a local HTML file

Suggested challenge:
- Change window width and height
- Change the title in HTML

### Ex2 - Safe preload

Files:
- `exercicios/02-preload/main.js`
- `exercicios/02-preload/preload.js`

Goal:
- Use `preload.js` with `contextIsolation: true`
- Expose simple information to renderer without enabling Node directly

Suggested challenge:
- Expose one more environment information (e.g., platform)

### Ex3 - Basic IPC

Files:
- `exercicios/03-ipc/main.js`
- `exercicios/03-ipc/preload.js`
- `exercicios/03-ipc/renderer.js`

Goal:
- Communication between renderer and main via `ipcRenderer.invoke` and `ipcMain.handle`
- Add two numbers in the main process

Suggested challenge:
- Create subtraction operation

### Ex4 - Menu + dialog

Files:
- `exercicios/04-menu-dialog/main.js`
- `exercicios/04-menu-dialog/preload.js`
- `exercicios/04-menu-dialog/renderer.js`

Goal:
- Create application menu
- Open `dialog.showOpenDialog` from renderer via IPC

Suggested challenge:
- Show selected paths in a list on screen
