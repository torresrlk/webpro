# 🚀 WebPro - Site Profissional

Site profissional completo para agência de criação de websites.

![WebPro](https://via.placeholder.com/800x400/2563eb/ffffff?text=WebPro+-+Criação+de+Sites)

---

## 📁 Estrutura Completa do Projeto

```
webpro/
│
├── 📄 index.html              # Página principal
│
├── 📁 css/
│   ├── 📄 styles.css          # Estilos principais
│   ├── 📄 variables.css       # Variáveis CSS (cores, fontes, espaçamentos)
│   ├── 📄 animations.css      # Animações e transições
│   └── 📄 components.css      # Componentes reutilizáveis (botões, cards, etc)
│
├── 📁 js/
│   ├── 📄 main.js             # JavaScript principal
│   ├── 📄 utils.js            # Funções utilitárias (máscaras, validações)
│   └── 📄 components.js       # Componentes JS (Modal, Toast, Tabs, etc)
│
├── 📁 pages/
│   ├── 📄 obrigado.html       # Página de confirmação de envio
│   └── 📄 404.html            # Página de erro 404
│
├── 📁 images/
│   ├── 📁 icons/              # Ícones do PWA
│   └── (suas imagens aqui)
│
├── 📁 assets/
│   └── 📁 fonts/              # Fontes locais (opcional)
│
├── 📄 manifest.json           # Configuração PWA
├── 📄 robots.txt              # Configuração para buscadores
├── 📄 sitemap.xml             # Mapa do site para SEO
├── 📄 .gitignore              # Arquivos ignorados pelo Git
└── 📄 README.md               # Este arquivo
```

---

## ✨ Funcionalidades

### 🎨 Design & UI
- ✅ Design moderno e profissional
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves de scroll
- ✅ Efeitos hover elegantes
- ✅ Tema de cores customizável via variáveis CSS
- ✅ Scrollbar personalizada

### ⚡ Performance
- ✅ Código otimizado
- ✅ Imagens lazy loading
- ✅ CSS e JS organizados
- ✅ Fontes com preconnect

### 📱 Interatividade
- ✅ Menu mobile animado (hamburger → X)
- ✅ Navegação suave entre seções
- ✅ Contador animado de estatísticas
- ✅ Modal de sucesso ao enviar formulário
- ✅ Sistema de Toast notifications
- ✅ Validação de formulário
- ✅ Máscara de telefone automática

### 🔍 SEO
- ✅ Meta tags otimizadas
- ✅ Open Graph para redes sociais
- ✅ Sitemap XML
- ✅ Robots.txt configurado
- ✅ Estrutura semântica HTML5

### 📦 Extras
- ✅ PWA ready (manifest.json)
- ✅ Página 404 personalizada
- ✅ Página de obrigado
- ✅ Componentes JS reutilizáveis
- ✅ Pronto para Git

---

## 🛠️ Como Usar

### Opção 1: Abrir Diretamente
```bash
# Basta clicar duas vezes no arquivo index.html
```

### Opção 2: Live Server (Recomendado)
```bash
# 1. Abra o projeto no VS Code
# 2. Instale a extensão "Live Server"
# 3. Clique direito em index.html → "Open with Live Server"
```

### Opção 3: Servidor Local
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve

# Com PHP
php -S localhost:8000
```

---

## 🎨 Personalização

### Alterar Cores
Edite o arquivo `css/variables.css`:

```css
:root {
    --primary: #2563eb;      /* Azul - cor principal */
    --primary-dark: #1d4ed8; /* Azul escuro */
    --accent: #06b6d4;       /* Ciano - destaque */
    --secondary: #0f172a;    /* Azul escuro - textos */
}
```

### Paletas Prontas

**Verde (Natureza):**
```css
--primary: #22c55e;
--primary-dark: #16a34a;
--accent: #10b981;
```

**Roxo (Criativo):**
```css
--primary: #8b5cf6;
--primary-dark: #7c3aed;
--accent: #a855f7;
```

**Laranja (Energia):**
```css
--primary: #f97316;
--primary-dark: #ea580c;
--accent: #fb923c;
```

**Rosa (Moderno):**
```css
--primary: #ec4899;
--primary-dark: #db2777;
--accent: #f472b6;
```

---

## 📝 Arquivos CSS

| Arquivo | Descrição |
|---------|-----------|
| `variables.css` | Variáveis globais (cores, fontes, espaçamentos, sombras) |
| `animations.css` | Keyframes e classes de animação |
| `components.css` | Botões, cards, inputs, badges, avatars, etc |
| `styles.css` | Estilos específicos das seções do site |

---

## 📝 Arquivos JavaScript

| Arquivo | Descrição |
|---------|-----------|
| `main.js` | Menu mobile, scroll, contador, formulário |
| `utils.js` | Máscaras (CPF, CNPJ, telefone), validações, formatações |
| `components.js` | Modal, Toast, Tabs, Accordion, Dropdown |

### Usando os Componentes JS

```javascript
// Toast Notifications
Toast.success('Operação realizada!');
Toast.error('Algo deu errado');
Toast.warning('Atenção!');
Toast.info('Informação');

// Modal
const modal = new Modal();
modal.open('<p>Conteúdo aqui</p>', 'Título do Modal');

// Utilitários
Utils.maskPhone('11999999999');     // (11) 99999-9999
Utils.maskCPF('12345678900');       // 123.456.789-00
Utils.formatCurrency(1500);          // R$ 1.500,00
Utils.isValidEmail('teste@email.com'); // true
```

---

## 📧 Configurar Formulário

### Netlify (Gratuito)
1. Hospede no Netlify
2. O formulário já está configurado!

### Formspree
1. Crie conta em [formspree.io](https://formspree.io)
2. Altere o action do form:
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

### EmailJS
1. Crie conta em [emailjs.com](https://www.emailjs.com)
2. Adicione o script e configure

---

## 🚀 Deploy

### Netlify
```bash
# 1. Arraste a pasta para netlify.com/drop
# ou
# 2. Conecte seu repositório GitHub
```

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
# 1. Crie repositório no GitHub
# 2. Vá em Settings → Pages
# 3. Selecione a branch main
```

---

## 📱 PWA (Progressive Web App)

Para ativar o PWA completo:

1. Adicione os ícones na pasta `images/icons/`
2. Adicione no `<head>` do index.html:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#2563eb">
```

3. Crie um Service Worker (opcional para offline)

---

## 🔧 Checklist Antes de Publicar

- [ ] Alterar textos e informações de contato
- [ ] Adicionar suas próprias imagens
- [ ] Atualizar cores se necessário
- [ ] Testar em diferentes navegadores
- [ ] Testar em dispositivos móveis
- [ ] Configurar domínio
- [ ] Atualizar sitemap.xml com seu domínio
- [ ] Configurar Google Analytics
- [ ] Testar formulário de contato

---

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

---

## 💡 Suporte

Dúvidas? Entre em contato!

---

Desenvolvido com ❤️ | WebPro © 2024
