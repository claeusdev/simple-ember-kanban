import Component from '@ember/component';

export default Component.extend({
  actions: {
    save(ev) {
      ev.preventDefault();
      this.onsubmit(this.list, this.title);
      this.set('list', '');
      this.set('title', '');
    }
  }
});
