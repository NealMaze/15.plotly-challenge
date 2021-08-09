import sampFileLoq from helpers.js
import * from helpers.js

function optionChanged(nuSam){
  disp(nuSam);
  graph(nuSam);
}

function create() {
  d3.json(sampFileLoq).then((data) => {
      var num = data.names;
      var show = d3.select("#selDataset");

      num.forEach((sam) =>{
          show.append("option").text(sam).property('value', sam);
      });

      var intSam = num[0];

      disp(intSam);
      graph(intSam);
  });
}

create();

