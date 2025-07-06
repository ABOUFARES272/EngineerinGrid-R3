# EngineeringGrid

A comprehensive knowledge hub for engineering innovations across automotive, green energy, and immersive technologies.

## 🚀 Features

- **Three Main Categories**: Automotive Engineering, Green Energy Solutions, and Immersive Technology
- **Interactive Content**: Expandable sections with technical depth
- **PDF Resources**: Downloadable guides and reference materials
- **Search Functionality**: Advanced search with external resource suggestions
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Theme switching support
- **Newsletter Integration**: Subscription management with Formspree
- **Contact Forms**: Professional contact handling

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Forms**: Formspree integration
- **Deployment**: Netlify (static export)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd engineeringgrid
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build and Deploy

### For Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

3. Deploy to Netlify by connecting your Git repository or uploading the `out/` folder.

### Environment Variables

No environment variables are required for basic functionality. The contact forms use Formspree with a public endpoint.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions and data
├── content/              # Content management system
│   ├── pdfs/            # PDF resources
│   └── topics/          # Topic content
├── public/              # Static assets
└── ...                  # Config files
```

## 🎨 Content Management

### Adding New Topics

1. Update `lib/data.ts` with new topic metadata
2. Add content to `lib/content.ts` for detailed sections
3. Place PDF resources in `public/content/pdfs/[category]/`

### PDF Resources

Each topic can have associated PDF resources that are automatically integrated into the topic pages with preview and download functionality.

## 🔧 Configuration

### Netlify Configuration

The project includes:
- `netlify.toml` for build settings
- `public/_redirects` for SPA routing
- Static export configuration in `next.config.js`

### Form Handling

Contact forms and newsletter subscriptions use Formspree. Update the endpoint in:
- `components/contact-form.tsx`
- `components/newsletter.tsx`

## 📱 Features

### Search System
- Real-time search across all topics
- External resource suggestions
- Category-based filtering
- Fuzzy matching for better results

### PDF Viewer
- Online preview functionality
- Zoom controls
- Download capabilities
- Responsive design

### Theme System
- Light/dark mode toggle
- System preference detection
- Consistent theming across components

## 🚀 Deployment

This project is optimized for Netlify deployment with:
- Static site generation
- Automatic redirects for SPA routing
- Optimized build configuration
- CDN-friendly asset handling

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please use the contact form on the website or open an issue in this repository.