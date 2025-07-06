# PDF Setup Guide for EngineerinGrid

## 📁 Directory Structure

Your PDF files should be placed in the following directory structure:

```
public/content/pdfs/
├── automotive/
│   ├── advanced-battery-systems-complete-guide.pdf
│   ├── oem-encyclopedia-guide.pdf
│   ├── adas-levels-guide.pdf
│   ├── zone-ee-architectures-guide.pdf
│   └── battery-platforms-guide.pdf
├── green/
│   ├── solar-energy-guide.pdf
│   ├── v2g-technology-guide.pdf
│   └── battery-storage-guide.pdf
└── immersive/
    ├── ar-automotive-displays-guide.pdf
    ├── virtual-prototyping-guide.pdf
    └── mixed-reality-engineering-guide.pdf
```

## 🔧 How to Add Your Own PDFs

### Step 1: Place Your PDF File
Put your PDF file in the correct category folder:
- **Automotive topics**: `public/content/pdfs/automotive/`
- **Green energy topics**: `public/content/pdfs/green/`
- **Immersive tech topics**: `public/content/pdfs/immersive/`

### Step 2: Update the Content Configuration
Edit `lib/content.ts` and find your topic. Update the `pdfResource` object:

```typescript
'your-topic-slug': {
  slug: 'your-topic-slug',
  category: 'automotive', // or 'green' or 'immersive'
  sections: [
    // ... your sections
  ],
  pdfResource: {
    id: 'main-guide',
    title: 'Your Topic Title - Complete Technical Guide',
    description: 'Brief description of what the PDF contains',
    filename: 'your-pdf-filename.pdf',
    size: '2.5 MB', // Actual file size
    pages: 12, // Actual page count
    downloadUrl: '/content/pdfs/category/your-pdf-filename.pdf',
    previewUrl: '/content/pdfs/category/your-pdf-filename.pdf',
    category: 'guide' // or 'reference', 'worksheet', 'case-study'
  }
}
```

## 📋 Example: Adding a New PDF

Let's say you want to add a PDF for "CAN Bus Communication":

### 1. Create the PDF file
Place your PDF at: `public/content/pdfs/automotive/can-bus-communication-guide.pdf`

### 2. Add topic content to `lib/content.ts`
```typescript
'can-bus-communication': {
  slug: 'can-bus-communication',
  category: 'automotive',
  sections: [
    {
      id: 'overview',
      title: '1. CAN Bus Overview',
      status: 'available',
      content: `Your content here...`
    }
  ],
  pdfResource: {
    id: 'main-guide',
    title: 'CAN Bus Communication - Complete Technical Guide',
    description: 'Understanding Controller Area Network protocols in modern vehicles. Includes implementation examples and troubleshooting guides.',
    filename: 'can-bus-communication-guide.pdf',
    size: '1.8 MB',
    pages: 10,
    downloadUrl: '/content/pdfs/automotive/can-bus-communication-guide.pdf',
    previewUrl: '/content/pdfs/automotive/can-bus-communication-guide.pdf',
    category: 'guide'
  }
}
```

### 3. Add topic metadata to `lib/data.ts`
```typescript
{
  title: "CAN Bus Communication",
  description: "Understanding Controller Area Network protocols in modern vehicles.",
  category: "automotive" as const,
  slug: "can-bus-communication",
  tags: ["CAN Bus", "Communication", "Protocols", "Networking"],
  readTime: "9 min read",
  difficulty: "Advanced",
  featured: false,
}
```

## 🎯 PDF Categories

Choose the appropriate category for your PDF:

- **`guide`**: Comprehensive technical guides and tutorials
- **`reference`**: Quick reference sheets and specification documents
- **`worksheet`**: Calculation sheets and templates
- **`case-study`**: Real-world implementation examples

## ✅ Verification Checklist

Before adding a new PDF, make sure:

- [ ] PDF file is placed in the correct category folder
- [ ] Filename matches exactly in the `pdfResource` configuration
- [ ] File size and page count are accurate
- [ ] Topic is added to both `lib/content.ts` and `lib/data.ts`
- [ ] All paths use forward slashes (`/`)
- [ ] No spaces in filenames (use hyphens instead)

## 🔄 Testing Your PDF

After adding your PDF:

1. Navigate to your topic page: `/category/topic-slug`
2. Click the "Resources" tab
3. Verify the PDF information displays correctly
4. Test both "Preview Online" and "Download PDF" buttons

## 📝 File Naming Convention

Use this naming pattern for consistency:
```
topic-slug-guide.pdf
```

Examples:
- `advanced-battery-systems-complete-guide.pdf`
- `solar-energy-guide.pdf`
- `ar-automotive-displays-guide.pdf`

## 🚀 Deployment

After adding your PDFs locally:

1. Commit your changes to Git
2. Push to your repository
3. Netlify will automatically deploy the updated site with your new PDFs

Your PDFs will be served directly from the CDN for fast download speeds!