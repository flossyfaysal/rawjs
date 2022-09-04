class App {
  constructor(selector) {
    this.rootElement = document.querySelector(selector);
    this.components = {};
  }
  addComponent(component) {
    this.components[component.name] = component;
    component.model = this.proxify(component.model);
  }
  displayComponent(name) {
    this.currentComponet = this.components[name];
    if (this.currentComponet) {
      this.currentComponet.controller(this.currentComponet.model);
    }
    this.updateView();
  }
  updateView() {
    if (this.currentComponet) {
      this.rootElement.innnerHTML = this.currentComponet.view(
        this.currentComponet
      );
    } else {
      this.rootElement.innnerHTML = `<h2>${this.currentComponet.name} Not Found`;
    }
  }
  proxify(model) {
    return new Proxy(model, {
      set: (item, property, value) => {
        item[property] = value;
        this.updateView();
        return true;
      },
    });
  }
}
