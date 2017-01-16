import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    filterByType(param) {
      if (param !== '') {
        return (this.get('store').query('question', {categories: param}));
      } else {
        return this.get('store').findAll('question');
      }
    },

    setActive() {
      this.$('.active-question').next().addClass('active-question');
    }
  },

  didInsertElement: function() {
            Ember.run.scheduleOnce('afterRender', this, function() {
              this.$("h2").css('display', 'none');
            });
    }

});
