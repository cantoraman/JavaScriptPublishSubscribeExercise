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
  this.container.innerHTML = '';

  const headerNode = document.createElement('h1');
  headerNode.textContent = instrument.name;
  this.container.appendChild(headerNode);

  const descriptionText = document.createElement('p');
  descriptionText.textContent = instrument.description;
  this.container.appendChild(descriptionText);

  const examplesHeader = document.createElement('h2');
  examplesHeader.textContent = "Examples Include:";
  this.container.appendChild(examplesHeader);


  for (var example of instrument.instruments){
    const examplesList = document.createElement('li');
    examplesList.textContent = example;
    this.container.appendChild(examplesList);
  }


  //IMPORTANT: instead of trying to remove text content, we wipe everything clean, because in between the div tags, there can be other tags like p's or anything... by assigning innerHTML an empty string it wipes everything clean
  //but this may not be a final method to set things to empty..

};

module.exports = InstrumentInfoView;
