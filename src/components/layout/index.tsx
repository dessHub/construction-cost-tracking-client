import Navbar from "../atoms/Navbar";
type Props = {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="bg-slate-50 w-full min-h-screen relative">
            <Navbar />

            <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    )
}

export default Layout;