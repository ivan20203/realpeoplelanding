import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeScript from './theme-script';
import 'styles/main.css';

const title = 'Real People Landing';
const description = 'Connect with authentic people in a digital world.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storageTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = storageTheme || systemTheme;
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-zinc-900 dark:text-white">
        <ThemeProvider>
          <ThemeScript />
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Footer />
          <Suspense>
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
