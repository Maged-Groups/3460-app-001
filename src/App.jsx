import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TopNavbar from "./layout/TopNavbar";
import Main from "./layout/Main";

export default function App() {

    return (
        <>
            <Header />
            
            <Main />
            <aside>
                <h2>Side bar content</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam dolorem maiores corporis temporibus itaque? Cum accusantium, exercitationem odio vero quos aspernatur iste impedit ad, saepe est assumenda repellat tenetur.</p>
                <h4>Section A Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, doloremque.</p>
                <h4>Section B Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, doloremque.</p>
            </aside>
            <Footer />
        </>
    )
}