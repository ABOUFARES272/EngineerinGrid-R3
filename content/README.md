# Content Management System

This directory contains the content management system for EngineeringGrid topics.

## Structure

```
content/
├── topics/           # Individual topic content files (future use)
│   ├── automotive/   # Automotive engineering topics
│   ├── green/        # Green energy topics
│   └── immersive/    # Immersive technology topics
├── pdfs/            # PDF resources and documents
│   ├── automotive/
│   ├── green/
│   └── immersive/
└── images/          # Topic-related images and diagrams
    ├── automotive/
    ├── green/
    └── immersive/
```

## Current Implementation

The content system is currently implemented using TypeScript data structures in `lib/content.ts`. This provides:

- **Type Safety**: Full TypeScript support for content structure
- **Dynamic Loading**: Content is loaded dynamically based on topic slug
- **PDF Integration**: Built-in support for PDF resources with preview and download
- **Section Management**: Expandable content sections with progress tracking

## Adding New Content

### 1. Adding a New Topic

To add content for a new topic, update `lib/content.ts`:

```typescript
export const topicContentData: Record<string, TopicContent> = {
  'your-topic-slug': {
    slug: 'your-topic-slug',
    category: 'automotive', // or 'green' or 'immersive'
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction and Overview',
        status: 'available',
        content: `
# Your Topic Title

## Introduction
Your content here...
        `,
        pdfResources: [
          {
            id: 'intro-guide',
            title: 'Your PDF Title',
            description: 'PDF description',
            filename: 'your-pdf-file.pdf',
            size: '2.8 MB',
            pages: 32,
            downloadUrl: '/content/pdfs/automotive/your-pdf-file.pdf',
            previewUrl: '/content/pdfs/automotive/your-pdf-file.pdf',
            category: 'guide'
          }
        ]
      }
    ]
  }
};
```

### 2. Adding PDF Resources

1. **Create the PDF file** and place it in the appropriate category folder:
   - Automotive: `public/content/pdfs/automotive/`
   - Green Energy: `public/content/pdfs/green/`
   - Immersive Tech: `public/content/pdfs/immersive/`

2. **Add PDF metadata** to the content section in `lib/content.ts`:

```typescript
pdfResources: [
  {
    id: 'unique-pdf-id',
    title: 'PDF Display Title',
    description: 'Brief description of the PDF content',
    filename: 'actual-filename.pdf',
    size: '2.8 MB', // File size
    pages: 32, // Number of pages
    downloadUrl: '/content/pdfs/category/filename.pdf',
    previewUrl: '/content/pdfs/category/filename.pdf', // Same as download for now
    category: 'guide' // 'guide', 'reference', 'worksheet', 'case-study'
  }
]
```

### 3. Content Formatting

Content supports basic markdown-style formatting:

- **Headers**: Use `#`, `##`, `###` etc.
- **Bold text**: Use `**bold text**`
- **Line breaks**: Use `\n`
- **Lists**: Use standard markdown list syntax

### 4. Section Status Types

- `'available'`: Content is complete and visible
- `'in-progress'`: Content is being developed (shows progress bar)
- `'coming-soon'`: Content is planned but not started

## Example: Working Implementation

The system includes a complete working example for "Advanced Battery Systems":

- **Full content**: Complete introduction section with comprehensive text
- **PDF resources**: Two sample PDFs with preview and download functionality
- **Multiple sections**: Mix of available, in-progress, and coming-soon sections

## File Locations for Adding Content

### PDF Files
- **Automotive**: `public/content/pdfs/automotive/`
- **Green Energy**: `public/content/pdfs/green/`
- **Immersive Tech**: `public/content/pdfs/immersive/`

### Content Data
- **All content**: `lib/content.ts` (topicContentData object)

### Components
- **PDF Viewer**: `components/pdf-viewer.tsx`
- **Content Sections**: `components/content-section.tsx`
- **Topic Content**: `components/topic-content.tsx`

## Features

### PDF Viewer
- **Online Preview**: View PDFs directly in the browser
- **Download**: Direct download functionality
- **Zoom Controls**: Zoom in/out for better readability
- **Responsive**: Works on all device sizes

### Content Sections
- **Expandable**: Click to expand/collapse sections
- **Progress Tracking**: Visual progress bars for in-development content
- **Status Indicators**: Clear visual indicators for content status
- **Mixed Content**: Support for text content and PDF resources in the same section

### Dynamic Loading
- **Slug-based**: Content loads based on topic slug
- **Type Safe**: Full TypeScript support prevents errors
- **Fallback**: Graceful handling of missing content

## Future Enhancements

- [ ] Markdown file support for easier content editing
- [ ] Image integration within content sections
- [ ] Video content support
- [ ] Interactive diagrams and charts
- [ ] User comments and feedback
- [ ] Content versioning
- [ ] Multi-language support