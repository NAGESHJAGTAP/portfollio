import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NageshJagtap',
  description:
    'Welcome to NageshJagtap homepage. Discover more about my journey in engineering and development. i am Second-year engineering student at Rai University in Ahmedabad, passionate about becoming a full-stack developer. Eager to learn, apply skills to real projects, and a strong team player.',
  keywords: ['engineering student',
  'personal portfolio' ,
  'full-stack developer', 
  'Rai University',
  'codinggita', 
  'nagesh jagtap', 
  'nagesh',
  'jagtap', 
  'nageshjagtap', 
  'nagesh jagtap rai university',
  'Nagesh jagtap', 
  'NageshJagtap', 
  'Nagesh Jagtap rai university', 
  'react developer',
  'mern developer',
  'node developer',
  'angular developer',
  'backend developer',
  'frontend developer',
  'mean developer',
  'full stack developer',
  'web developer', 
  'web designer',
  'ui/ux designer', 
  'software developer', 
  'software engineer',
  'computer science student', 
  'computer science engineering', 
  'computer science', 
  'front end developer', 
  'jsminds', 
  'team player',],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="author" content="NageshJagtap" />
        <meta name="robots" content="index, follow"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/next.svg" type="image/svg+xml" />

      </Head>

      <body className={inter.className}>
      <Toaster position="top-center" />
        {children}
        </body>
    </html>
  );
}
