import React from "react";
import "./footer.css";

function Footer({textSearch}) {
    return (
        <footer className="footer">
             <div className="footer__wrapper-btn">
                 <input  onChange={(el) => textSearch(el.target.value)} className="btn" type="text"/>
                 {/*<button className="btn">Поиск</button>*/}
             </div>
        </footer>
    )
}

export default Footer;