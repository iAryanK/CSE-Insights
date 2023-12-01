import Nav from "@components/Nav"
import Provider from "@components/Provider"
import "@styles/globals.css"

export const metadata = {
  title: 'CSE-Insights',
  description: 'Unlock the Power of Computer Science & Engineering • CSE Insights - Your Gateway to Practical Tips, Proven Strategies, and College stories.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
            <div className="gradient"/>
        </div>

        <main className="app">
            <Nav/>
            {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
