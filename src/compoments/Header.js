function Header(props) {
  return (
    <div>
      <header id="page_header">
        <h1 id="header">
          <a href="/">
            (Das) diskrete Tatenbuch</a> {">"} Dialekte/Varietäten {">"} {props.id}
        </h1>
        <hr />
      </header>
    </div>
  );
}

export default Header;