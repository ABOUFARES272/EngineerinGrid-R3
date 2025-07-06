"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ThemeLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function ThemeLogo({ width = 32, height = 32, className, priority = false }: ThemeLogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div 
        className={className}
        style={{ width, height }}
      />
    );
  }

  // Determine which logo to use based on the resolved theme
  const isDark = resolvedTheme === 'dark';
  const logoSrc = isDark ? '/logo-dark.png' : '/logo-light.png';
  const altText = `EngineerinGrid Logo ${isDark ? 'Dark' : 'Light'} Mode`;

  return (
    <Image
      src={logoSrc}
      alt={altText}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}