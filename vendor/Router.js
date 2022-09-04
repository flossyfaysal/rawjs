class Router {
  constructor(app) {
    this.app = app;
    this.components = [];
    this.hashChange = this.hashChange.bind(this);
    window.addEventListener("hashchange", this.hashChange);
    window.addEventListener("DOMContentLoaded", this.hashChange);
  }
  addRouter(name, path) {
    this.components.push({
      name,
      path,
    });
  }
  hashChange() {
    const { hash } = window.location;
    const route = this.components.find((route) => {
      return hash.match(new RegExp(route.path));
    });
    if (route) {
      const params = new RegExp(route.path).exec(hash);
      this.params = params;
      this.app.displayComponent(route.name);
    } else {
      this.app.displayComponent();
    }
  }
}
