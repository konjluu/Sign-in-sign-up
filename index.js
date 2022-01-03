import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";;
import { auth } from "./constants/const.js";

import Login from "./component/login.js";
import Main from "./component/main.js";

class App {
  activeScreen;
  container;

  constructor(container) {
    this.container = container;
    this.setupAuthenticationListener();
  }

  setupAuthenticationListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const mainScreen = new Main();
        this.setActiveScreen(mainScreen);
      } else {
        const loginScreen = new Login();
        this.setActiveScreen(loginScreen);
      }
    });
  }

  setActiveScreen(screen) {
    if (this.activeScreen !== undefined) {
      this.container.innerHTML = "";
    }
    this.activeScreen = screen;
    this.activeScreen.render(this.container);
  }
}

const appContainer = document.getElementById("app");

const app = new App(appContainer);

export default app;
