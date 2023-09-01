import "./header.scss";
class BaseHeader {
  render(list) {
    const bodyEl = document.querySelector("body");
    const headerEl = document.createElement("header");
    const ulEl = document.createElement("ul");
    for (const item of list) {
      console.log("item", item);
      const liEl = document.createElement("li");
      liEl.textContent = item;
      ulEl.appendChild(liEl);
    }
    headerEl.prepend(ulEl);
    bodyEl.prepend(headerEl);
  }
}

export default BaseHeader;
