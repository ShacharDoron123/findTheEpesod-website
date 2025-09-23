import { Navbar } from "./src/components/Navbar";
import { Outlet } from "react-router";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

export default function Layout(){
    return(
        <>
          <Navbar/>
          <Header/>
        <main>
            <Outlet/>
        </main>
            <Footer/>
        </>
    );
}