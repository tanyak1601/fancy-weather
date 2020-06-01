export default class Element {
  constructor(tag, eClass, id, name, value, type, checked, efor, placeholder, innerHTML) {
    this.tag = tag;
    this.eClass = eClass;
    this.id = id;
    this.name = name;
    this.value = value;
    this.type = type;
    this.checked = checked;
    this.efor = efor;
    this.placeholder = placeholder;
    this.innerHTML = innerHTML;
  }

  create() {
    const elem = document.createElement(this.tag);

    if (this.eClass) {
      elem.classList.add(this.eClass);
    }

    if (this.id) {
      elem.id = this.id;
    }

    if (this.name) {
      elem.name = this.name;
    }

    if (this.value) {
      elem.value = this.value;
    }

    if (this.type) {
      elem.type = this.type;
    }

    if (this.checked) {
      elem.checked = this.checked;
    }

    if (this.efor) {
      elem.setAttribute('for', this.efor);
    }

    if (this.placeholder) {
      elem.placeholder = this.placeholder;
    }

    if (this.innerHTML) {
      elem.innerHTML = this.innerHTML;
    }

    return elem;
  }
}
