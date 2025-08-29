# 🚀 My Developer Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and professional background, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌐 Live Demo

👉 [View Portfolio](https://portfolio-eight-sigma-31.vercel.app)

---

## 🛠 Tech Stack

- **Next.js** — React framework with optimized routing & SSR
- **TypeScript** — Static typing for scalability
- **Tailwind CSS** — Utility-first CSS for fast styling
- **Framer Motion** — Smooth animations & transitions
- **React Icons** — Icons for tech stack & social links
- **EmailJS** — Contact form functionality
- **Vercel** — Hosting & deployment

---

## ✨ Features

- 🎨 **Modern Hero Section** — Animated intro with a clean layout
- 💼 **Projects Showcase** — Cards displaying title, description, tech stack & links
- 📩 **Contact Form** — Integrated with EmailJS for direct messaging
- 📱 **Responsive Design** — Optimized for all screen sizes
- ⚡ **Smooth Animations** — Page transitions with Framer Motion
- 🧭 **Navbar Navigation** — Smooth scroll to different sections

---

## 📸 Screenshots


![Home Page](public/screenshots/heross.png)
![Projects Section](public/screenshots/projectsss.png)


---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    
    git clone [https://github.com/divyan154/portfolio.git](https://github.com/divyan154/portfolio.git)
    cd portfolio
 
2.  **Install dependencies:**
   
    npm install
    
3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add:
    
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    
4.  **Run the development server:**
    
    npm run dev
   
    Open `http://localhost:3000` in your browser.

---

## 📂 Folder Structure
```ruby

├── app/                  # Main layout & pages
├── components/           # Reusable React components
├── sections/             # Hero, Projects, Contact sections
├── public/               # Static assets (images, icons, screenshots)
├── .env.local            # Environment variables (not committed)
├── next.config.js        # Next.js configuration
├── package.json
└── README.md
