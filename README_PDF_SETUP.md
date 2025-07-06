# PDF File Setup Guide

## Where to Put Your PDF Files

Based on your screenshot, you want to add actual PDF files to your project. Here's exactly where to place them:

### Directory Structure for PDFs

```
public/content/pdfs/
├── automotive/
│   ├── advanced-battery-systems-complete-guide.pdf
│   ├── advanced-battery-systems-guide.pdf
│   ├── battery-chemistry-reference.pdf
│   ├── battery-technical-fundamentals.pdf
│   ├── oem-encyclopedia-guide.pdf
│   └── adas-levels-guide.pdf
├── green/
│   ├── solar-energy-guide.pdf
│   ├── v2g-technology-guide.pdf
│   └── [other green energy PDFs]
└── immersive/
    ├── ar-automotive-displays-guide.pdf
    ├── virtual-prototyping-guide.pdf
    └── [other immersive tech PDFs]
```

### For the "Advanced Battery Systems" Topic (as shown in your screenshot):

**Main PDF File Location:**
```
public/content/pdfs/automotive/advanced-battery-systems-complete-guide.pdf
```

This corresponds to the PDF you see in your screenshot with:
- Title: "Advanced Battery Systems - Complete Technical Guide"
- Size: 2.8 MB
- Pages: 12
- Category: guide

### How the System Works:

1. **PDF File Naming**: The filename should match the pattern used in `lib/content.ts`
2. **Automatic Detection**: The system automatically looks for PDFs in the correct directory
3. **Preview & Download**: Both "Preview Online" and "Download PDF" buttons will work with your actual PDF

### To Add Your Own PDF:

1. **Replace the sample PDF** I just created at:
   ```
   public/content/pdfs/automotive/advanced-battery-systems-complete-guide.pdf
   ```

2. **Or add additional PDFs** for other topics by placing them in the appropriate category folder

3. **Update metadata** in `lib/content.ts` if you want to change:
   - File size
   - Page count
   - Description
   - Title

### Example for Other Topics:

If you want to add PDFs for other topics, follow the same pattern:

- **Solar Energy**: `public/content/pdfs/green/solar-energy-guide.pdf`
- **AR Displays**: `public/content/pdfs/immersive/ar-automotive-displays-guide.pdf`
- **OEM Encyclopedia**: `public/content/pdfs/automotive/oem-encyclopedia-guide.pdf`

The system will automatically serve these files when users click "Preview Online" or "Download PDF" buttons.