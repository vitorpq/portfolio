# 🧠 Vítor Andrade — Portfolio

Portfólio pessoal bilíngue (EN/PT) construído com **React + Vite**, deploy automático no **GitHub Pages**.

🔗 **Live:** `https://SEU_USUARIO.github.io/portfolio/`

---

## 🚀 Deploy no GitHub (passo a passo)

### 1. Criar o repositório

Acesse [github.com/new](https://github.com/new) e crie um repositório chamado `portfolio` (público).

### 2. Subir o código

Abra o terminal na pasta do projeto e execute:

```bash
cd portfolio
npm install
git init
git add .
git commit -m "feat: portfolio initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/portfolio.git
git push -u origin main
```

### 3. Ativar GitHub Pages

1. Vá em **Settings** → **Pages** (menu lateral)
2. Em **Source**, selecione **GitHub Actions**
3. O deploy será feito automaticamente pelo workflow em `.github/workflows/deploy.yml`

### 4. Aguardar o deploy

- Vá em **Actions** no menu do repositório
- Acompanhe o workflow "Deploy to GitHub Pages"
- Quando ficar verde ✅, acesse: `https://SEU_USUARIO.github.io/portfolio/`

---

## ⚠️ Configuração importante

No arquivo `vite.config.js`, o campo `base` deve corresponder ao nome do seu repositório:

```js
// Se o repositório se chama "portfolio":
base: '/portfolio/',

// Se o repositório se chama "meu-site":
base: '/meu-site/',

// Se usar domínio customizado (ex: vitorem.dev):
base: '/',
```

---

## 💻 Desenvolvimento local

```bash
npm install     # instalar dependências
npm run dev     # servidor local em http://localhost:5173
npm run build   # gerar versão de produção
npm run preview # visualizar build local
```

---

## 📁 Estrutura do projeto

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD automático
├── public/                     # arquivos estáticos
├── src/
│   ├── Portfolio.jsx           # componente principal
│   └── main.jsx                # entry point React
├── index.html                  # HTML com meta tags SEO
├── vite.config.js              # config do Vite
├── package.json
└── .gitignore
```

## 🎨 Customização

- **Conteúdo:** Edite o objeto `t` no início de `Portfolio.jsx` (seção `en` e `pt`)
- **Cores:** Altere as CSS variables no bloco `:root` dentro da const `css`
- **Fontes:** Troque o `@import` do Google Fonts no início do CSS
- **Favicon:** Substitua o emoji no `index.html` por um `.ico` ou `.png` real
- **Open Graph image:** Adicione uma imagem `og-image.png` em `public/` e atualize a meta tag no `index.html`

## 📝 Domínio customizado (opcional)

Para usar um domínio como `vitorem.dev`:

1. Crie um arquivo `public/CNAME` com o conteúdo: `vitorem.dev`
2. Mude `base: '/'` em `vite.config.js`
3. Configure o DNS do seu domínio apontando para o GitHub Pages
