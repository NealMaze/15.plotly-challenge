var sampFileLoq = "samples.json"

function disp(samNum) {
  d3.json(sampFileLoq).then((data) => {
      var met = data.metadata;
      var fil = met.filter(row => row.id == samNum);
      console.log(fil);
      var returned = fil[0];
      var visMeta = d3.select("#sample-metadata");
      visMeta.html('');
      Object.entries(returned).forEach(([key, value]) => {
          visMeta.append('h6').text(`${key} ${value}`);
      });
  });
}

function graph(samNum){
  d3.json(sampFileLoq).then((data) => {
      var allSams = data.samples;
      var thisSam = allSams.filter(row => row.id == samNum);
      var names = thisSam[0].otu_ids;
      var vals = thisSam[0].sample_values;
      var sHovertext = thisSam[0].otu_labels;

      var barSpecs = [{
        type: 'bar',
        orientation: 'h',
        x: [],
        y: [],
        text: [],
      }];
      var barLayout = {
        title: "top bac in sample",
        yaxis: {title: 'bac id'}
        xaxis: {title: "freq"}
      };




      var bubSpecs = {
          x: names,
          y: vals,
          mode: 'markers',
          text: sHovertext
        };
      var bubLayout = {
        title: 'bac in sample',
        showlegend: false,
      };



      Plotly.newPlot('bar', barSpecs, barLayout);
      Plotly.newPlot('bubble', bubSpecs, bubLayout);


  });
}




