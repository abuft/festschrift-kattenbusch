function Footer() {
    return (
        < div className="grid_5 prefix_5" >
            {/* <!-- Copyright information --> */}
            <footer id="page_footer">
                <hr />
                <p style={
                    {
                        fontFamily: "Arial",
                        fontSize: "0.8em",
                        color: "#555555"
                    }
                }>
                    Institut f&uuml;r Romanistik
                    <br />
                    Humbold-Univerität zu Berlin
                    <br />
                    &copy; 2012
                </p>
            </footer>
        </div >

    );
};

export default Footer;