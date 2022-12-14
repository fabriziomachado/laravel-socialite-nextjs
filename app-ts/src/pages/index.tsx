import AppLayout from '../components/Layouts/AppLayout'

export default function Home() {
    return (
        <>
            <AppLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Home
                    </h2>
                }>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                You're logged in
                                <span
                                    className="ml-2 p-2 text-xs leading-none text-indigo-100 bg-indigo-700 rounded-full"
                                >
                                    Home Page</span>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>

        </>
    )
}
