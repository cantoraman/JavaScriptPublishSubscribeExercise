const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', function(){

  const selectionElement = document.querySelector('select#instrument-families');
  const animalDropdown = new SelectView(selectionElement);
  animalDropdown.bindEvents();

  const instrumentInfoDiv = document.querySelector('div#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(instrumentInfoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentsDataSource = new InstrumentFamilies();
  instrumentsDataSource.bindEvents();
});
