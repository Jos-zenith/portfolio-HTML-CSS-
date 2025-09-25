import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zenith Joshua | Product Engineer Portfolio',
  description: 'Full-Stack Developer, Embedded Systems Engineer, and Agile Business Analyst',
  keywords: ['Product Engineer', 'Full-Stack Developer', 'Embedded Systems', 'IoT', 'React', 'Next.js'],
  authors: [{ name: 'Zenith Joshua' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}