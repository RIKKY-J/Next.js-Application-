import React from 'react'
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
        {children}
      </body>
    </html>
  );
}