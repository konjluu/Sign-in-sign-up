export default class Main {
  $title;
  
  constructor() {
    this.$title = document.createElement("h1");
    this.$title.textContent="TRANG CHU"
  }


  render(container) {
    
    container.appendChild(this.$title);
  }
}
