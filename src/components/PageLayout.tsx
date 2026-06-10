import GlobalNav from './GlobalNav.tsx'
import GlobalFooterNav from './GlobalFooterNav.tsx'
// import ScatteredGallery from './ScatteredGallery.tsx'
import type { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
    return (            
        <div className="l-wrapper">
            <div className="l-container">
            <header className="l-header">
                <div className="l-banner">
                <img
                    src="/images/header.jpg"
                    alt="きしず座 - Photo &amp; Illustration"
                />
                </div>
                <GlobalNav />
            </header>

            {/* <ScatteredGallery /> */}

            <main className="l-main">
                {children}
            </main>
            </div>

            <footer className="l-footer">
            <GlobalFooterNav />
            </footer>
        </div>
    )
}