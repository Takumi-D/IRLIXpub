import React, {useState} from "react";
import "./footer.css";
import { connect } from "react-redux";

function Footer({ searchOptions }) {
    const [show, setShow] = useState("none");
    const textInput = React.createRef();

    return (
        <footer className="footer">
             <div className="footer__wrapper-btn">
                 <div className="wrapper-search">
                     <input ref={textInput} onChange={(el) => searchOptions(el.target.value)} className={`input ${show}`} type="text"/>
                     <button onClick={() => {setShow("none"); searchOptions(""); textInput.current.value = ""}} className={`btn btn-search ${show}`}>X</button>
                 </div>
                 <button onClick={() => setShow("")} className={`btn ${show === "" ? "none": ""}`}>Поиск</button>
             </div>
        </footer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchOptions: (textSearch) => {
            dispatch({
                type: "SEARCH_OPTIONS",
                textSearch: textSearch
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Footer);