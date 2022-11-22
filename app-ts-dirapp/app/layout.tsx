import './globals.css';

// import Navigation from './components/Layouts/Navigation';

// import MyToggle from './components/MyToggle'


export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="min-h-screen bg-gray-100">

            {/* <Navigation {...user} /> */}
            {/* <Navigation /> */}



            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    SUB-HEADER
                </div>
            </header>

            <main>{children}</main>
        </div>
    )
}