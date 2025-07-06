"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Eye, 
  FileText, 
  ExternalLink,
  AlertCircle,
  Maximize2
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PDFResource } from '@/lib/content';

interface PDFViewerProps {
  resource: PDFResource;
}

export function PDFViewer({ resource }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'guide': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'reference': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'worksheet': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'case-study': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // For now, we'll create a sample PDF content and trigger download
      const response = await fetch(resource.downloadUrl);
      
      if (!response.ok && response.status !== 404) {
        throw new Error('PDF not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resource.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      // If PDF doesn't exist, create a placeholder download
      const pdfContent = createPlaceholderPDF(resource);
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resource.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } finally {
      setIsLoading(false);
    }
  };

  // Create a placeholder PDF when the actual file doesn't exist
  const createPlaceholderPDF = (resource: PDFResource) => {
    return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 800
>>
stream
BT
/F1 20 Tf
50 750 Td
(${resource.title}) Tj
0 -40 Td
/F1 14 Tf
(${resource.description}) Tj
0 -30 Td
/F1 12 Tf
(This is a sample PDF document for demonstration purposes.) Tj
0 -20 Td
(File: ${resource.filename}) Tj
0 -15 Td
(Size: ${resource.size}) Tj
0 -15 Td
(Pages: ${resource.pages}) Tj
0 -15 Td
(Category: ${resource.category}) Tj
0 -30 Td
(This PDF would contain comprehensive technical content) Tj
0 -15 Td
(related to the topic. In a production environment,) Tj
0 -15 Td
(this would be replaced with actual technical) Tj
0 -15 Td
(documentation, guides, and reference materials.) Tj
0 -30 Td
(For the complete content, please visit:) Tj
0 -15 Td
(https://engineeringgrid.com) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000001126 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
1225
%%EOF`;
  };

  const handlePreview = () => {
    // Open the actual PDF file in a new tab
    window.open(resource.previewUrl, '_blank');
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
              <CardDescription className="mt-1">{resource.description}</CardDescription>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span>{resource.size}</span>
                <span>{resource.pages} pages</span>
                <Badge className={getCategoryColor(resource.category)}>
                  {resource.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={handlePreview}>
            <Eye className="h-4 w-4 mr-2" />
            Preview Online
          </Button>
          
          <Button 
            onClick={handleDownload} 
            size="sm" 
            className="flex-1"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </>
            )}
          </Button>
        </div>
        
        {error && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  );
}