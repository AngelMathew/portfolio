import React from "react";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Contact from "../components/Contact/Contact";
const Home=()=>{
    return(<>
    <header><Header/></header>
        <section><Info/></section>
        
       <footer><Contact/></footer>
       </>
    )
}

export default Home;