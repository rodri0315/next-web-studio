import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from '../components/meta'
import metaData from '../data/meta.json'
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Nav logo={metaData.logo} />
        <main>
          {children}
          <Analytics />
        </main>
      </div>
      <Footer />
    </>
  )
}
