import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Accueil from "../components/Accueil";

export default function Layout({children}){
return(
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
)
}