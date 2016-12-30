import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterSelectChange(filterInputValue) {
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    },
    
    handleFilterEntry() {
      let filterAction = this.get('filter');
      let filterInputValue = this.get('value');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }

});
