import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveCard(list, title) {
      let card = this.store.createRecord('card', {
        list,
        title
      });
      card.save();
    },
    updateCard(list, card) {
      card.set('list', list);
      card.save();
    }
  }
});
