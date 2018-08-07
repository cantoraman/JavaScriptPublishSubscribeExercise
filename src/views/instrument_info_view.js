const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){

  PubSub.subscribe('Instrument:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    this.display(instrument);
  });

};

InstrumentInfoView.prototype.display = function(instrument){
  const displayText = document.createElement('p');
  displayText.textContent = instrument.description;
  this.container.innerHTML = '';
  //IMPORTANT: instead of trying to remove text content, we wipe everything clean, because in between the div tags, there can be other tags like p's or anything... by assigning innerHTML an empty string it wipes everything clean
  //but this may not be a final method to set things to empty..
  this.container.appendChild(displayText);
};

module.exports = InstrumentInfoView;
