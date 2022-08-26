import React, {useState} from "react";
import "./footer.css";
import { connect } from "react-redux";

function Footer({ searchOptions, searchValue }) {
    const [show, setShow] = useState("none");

    return (
        <footer className="footer">
             <div className="footer__wrapper-btn">
                 <div className="wrapper-search">
                     <input onChange={(el) => searchOptions(el.target.value)} value={searchValue} className={`input ${show}`} type="text"/>
                     <button onClick={() => {setShow("none"); searchOptions("")}} className={`btn btn-search ${show}`}>X</button>
                 </div>
                 <button onClick={() => setShow("")} className={`btn ${show === "" ? "none": ""}`}>Поиск</button>
             </div>
        </footer>
    )
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.searchOptions
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);