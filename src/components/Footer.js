function Footer(props) {
  return (
      <footer>
        © {props.appData.author} {props.appData.published}
      </footer>
  );
}

export default Footer;
