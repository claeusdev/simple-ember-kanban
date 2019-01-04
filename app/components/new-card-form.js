import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleForm() {
      this.set('showForm', true);
    },
    save(e) {
      e.preventDefault();
      this.onsubmit(this.list, this.title);
      this.set('title', '');
      this.set('showForm', false);
    }
  }
});
