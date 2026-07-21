# uc5Desktop

Projeto integrador da unidade 5 - aplicacao desktop com Electron + TypeScript + Vite (via `electron-vite`).

## Requisitos

- Node.js 18 ou superior instalado
- PostgreSQL acessivel para a conexao do banco (`pg`)

## Como rodar

```bash
git clone https://github.com/alamohf/uc5Desktop.git
cd uc5Desktop
npm install
cp .env.example .env   # preencha com as credenciais do seu banco Postgres
npm run dev
```

`npm run dev` abre a aplicacao Electron com hot-reload da tela (renderer) via Vite.

## Scripts

- `npm run dev` - abre a aplicacao em modo desenvolvimento com hot-reload
- `npm run build` - builda main, preload e renderer para `out/`
- `npm start` - executa o build de producao (`out/`)
- `npm run lint` - roda o tslint sobre o codigo em `src/`

## Estrutura

- `src/main` - processo principal do Electron (janela, IPC, conexao com o banco em `db.ts`)
- `src/preload` - script de preload (contextBridge)
- `src/renderer` - tela (HTML/TS) servida pelo Vite
- `src/shared` - tipos compartilhados entre main e renderer

## Banco de dados

A conexao com o PostgreSQL usa `pg` + `dotenv` e fica em `src/main/db.ts`, lendo as variaveis `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` e `DB_NAME` do arquivo `.env` (nao versionado - veja `.env.example`).
