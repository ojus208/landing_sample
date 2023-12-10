import './globals.css'


export const metadata = {
  title: 'nike.com',
  description: 'nike latest shoed collection',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' type='image/x-icon' href='./favicon.ico' ></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
