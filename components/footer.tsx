import Link from 'next/link';
import { ThemeLogo } from '@/components/theme-logo';

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ThemeLogo width={150} height={40} className="rounded-lg" />
              <span className="font-bold text-xl font-heading"></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your knowledge hub for engineering innovations across automotive, green energy, and immersive technologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/automotive" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/green" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Green Energy
                </Link>
              </li>
              <li>
                <Link href="/immersive" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Immersive Tech
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EngineeringGrid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}