# eudext.dev - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases projects, blog posts, and professional information in a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Project Showcase**: Display your projects with descriptions, technologies, and links
- **Blog Section**: Share your thoughts and insights through blog posts
- **About Page**: Personal information and skills showcase
- **Contact Form**: Easy way for visitors to get in touch
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons & Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── BlogCard.tsx       # Blog post card component
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header with navigation
│   ├── Hero.tsx           # Hero section component
│   ├── Layout.tsx         # Main layout wrapper
│   └── ProjectCard.tsx    # Project card component
├── data/                  # Static data files
│   ├── blog.ts            # Blog posts data
│   ├── navigation.ts      # Navigation menu items
│   └── projects.ts        # Projects data
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared types
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd eudext.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding Your Information

1. **Update personal information** in the following files:
   - `src/components/Hero.tsx` - Update name and description
   - `src/app/about/page.tsx` - Update bio and skills
   - `src/app/contact/page.tsx` - Update contact information
   - `src/components/Footer.tsx` - Update social links

2. **Add your projects** in `src/data/projects.ts`:
   ```typescript
   {
     id: 'unique-id',
     title: 'Project Title',
     description: 'Brief description',
     longDescription: 'Detailed description',
     image: '/path/to/image.jpg',
     technologies: ['React', 'TypeScript', 'Tailwind'],
     githubUrl: 'https://github.com/username/repo',
     liveUrl: 'https://your-project.com',
     featured: true, // Show on homepage
     date: '2024-01-15'
   }
   ```

3. **Add blog posts** in `src/data/blog.ts`:
   ```typescript
   {
     id: 'unique-id',
     title: 'Blog Post Title',
     excerpt: 'Brief excerpt',
     content: 'Full blog post content...',
     author: 'Your Name',
     date: '2024-01-15',
     tags: ['React', 'Web Development'],
     readTime: '5 min read',
     image: '/path/to/image.jpg'
   }
   ```

### Styling

- **Colors**: Update the color scheme by modifying Tailwind classes throughout the components
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Layout**: Modify component layouts in the respective component files

### SEO & Meta Tags

Update meta information in:
- `src/app/layout.tsx` - Global meta tags
- Individual page files - Page-specific meta tags

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

If you have any questions or need help customizing this template, feel free to reach out!