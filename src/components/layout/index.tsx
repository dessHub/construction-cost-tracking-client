import Navbar from "../atoms/Navbar";
type Props = {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="bg-slate-50 w-full min-h-screen relative">
            <Navbar />

            <div className="w-full pt-16">
                {children}
            </div>
        </div>
    )
}

export default Layout;