import React, {useState} from "react";
import "./footer.css";

function Footer({textSearch}) {
    const [show, setShow] = useState("none");
    const textInput = React.createRef();

    return (
        <footer className="footer">
             <div className="footer__wrapper-btn">
                 <div className="wrapper-search">
                     <input ref={textInput} onChange={(el) => textSearch(el.target.value)} className={`input ${show}`} type="text"/>
                     <button onClick={() => {setShow("none"); textSearch(""); textInput.current.value = ""}} className={`btn btn-search ${show}`}>X</button>
                 </div>
                 <button onClick={() => setShow("")} className={`btn ${show === "" ? "none": ""}`}>Поиск</button>
             </div>
        </footer>
    )
}

export default Footer;