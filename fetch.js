var WikiScraper = require("wikiscraper");
var fs = require('fs');

 
var wikiscraper = new WikiScraper([
"Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Caesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Ununtrium","Flerovium","Ununpentium","Livermorium","Ununseptium","Ununoctium",
]);

var wikiscraper = new WikiScraper([
"Hydrogen","Helium"
]);

 
 
var elements = [];
 
wikiscraper.scrape(function(err, element) {
  if (!err) {
    elements.push(element);
  }
  else {
    console.error(err);
  }
});
 
wikiscraper.on("sitesloaded", function() {
fs.writeFile("elements.js", JSON.stringify(elements), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
});

