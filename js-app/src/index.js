import Header from "./components/BaseHeader";

// export default Header;
class HeaderCl {
  render(list) {
    const header = new Header();
    header.render(list);
  }
}

export default HeaderCl;
