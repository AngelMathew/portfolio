import React from "react";
import * as styles from "./Header.module.scss";
import { useLocation } from "@reach/router";
import Logo from "../../assets/Logo.svg";

const Header=()=>{
    const currentPath = useLocation().pathname;
    // console.log("currentpath",currentPath)
    const scrollToBottom=()=>{
       window.scrollTo(0,document.body.scrollHeight);
       }

    return(<div className={styles.header}>
        <div className={styles.textClass}><a href="/portfolio" aria-label="home"><img src={Logo} alt="Logo Image"></img></a></div>
        
        <ul className={styles.mainNavLink}>
            <li className={styles.navLinks}> <a  href="/portfolio"  aria-label="about"
            className={
              currentPath === "/portfolio/"
                ? styles.navLink + " " + styles.selected
                : styles.navLink
            }>About</a></li>
            <li className={styles.navLink}>
                <a onClick={()=>scrollToBottom()}  aria-label="contact">Contact</a></li>
        </ul>
    </div>)

}

export default Header;