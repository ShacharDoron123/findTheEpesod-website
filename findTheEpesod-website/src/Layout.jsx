import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}