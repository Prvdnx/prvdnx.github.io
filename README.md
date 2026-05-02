# Modern Developer Portfolio Template

A clean, responsive, and highly customizable portfolio template for developers. Built with React, TypeScript, Tailwind CSS, and Vite.

**Template Live Demo:** [https://prvdnx.github.io/](https://prvdnx.github.io/)
**Real Live Demo:** [https://ookamonu.pages.dev/](https://ookamonu.pages.dev/)

## 🚀 Getting Started

### 1. Clone and Install
```bash
git clone [your-repo-link]
cd [your-repo-name]
npm install
```

### 2. Customize Your Data
All personal information is centralized in a single file for easy updates. Open `src/data/portfolioData.ts` and replace the placeholder values with your own information:

- **Name, Role, Location**
- **Social Links** (GitHub, LinkedIn, Discord, etc.)
- **About Me** paragraphs
- **Work Experience**
- **Education**
- **Skills** list
- **Projects** (categorized with images and links)
- **Contact Info** (EmailJS integration)

### 3. Replace Assets
- **Profile Picture**: Replace `src/assets/profile-placeholder.png` with your own photo.
- **Project Images**: Add your project screenshots to `src/assets/projects/` and update the imports in `src/data/portfolioData.ts` (or simply reference the paths if you refactor for dynamic loading).

### 4. Setup Contact Form
The contact form uses [EmailJS](https://www.emailjs.com/).
1. Create a free account on EmailJS.
2. Add a new Email Service and Email Template.
3. Update the `contact` section in `src/data/portfolioData.ts` with your:
   - `emailJsServiceId`
   - `emailJsTemplateId`
   - `emailJsPublicKey`

### 5. Development and Deployment
Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 🛠️ Tech Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVGs
- **Build Tool**: Vite
- **Animations**: CSS Transitions / Framer Motion (if applicable)

## 📄 License
This project is open-source and free to use for your personal portfolio.