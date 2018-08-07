const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){

  PubSub.subscribe('Instrument:all-instruments-ready', (event) => {
    const allAnimals = event.detail;
    this.fillSelections(instruments);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.fillSelections = function(instruments){
  instruments.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
