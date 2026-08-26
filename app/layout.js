import React from 'react'
import ComponentsPage from './_components/page';
export const metadata = {
  title: {
    template: '%s | Avatar_Tech',
    default: 'Avatar_Tech',
  }
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1 style={{ color: 'red', fontSize: '2rem' }}>My App</h1>
        <ComponentsPage />
        <nav>
          <ul>
            <li><a href="/">This is the Home Page</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/files">Files</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}