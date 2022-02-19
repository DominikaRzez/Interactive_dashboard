//Using D3 library to read in samples.json
d3.json("samples.json").then((data) => {
    console.log(data)
    //Mapping data to get samples details
    samples = data.samples.map(function (sample) {
        var id = sample.id;
        var otu_ids = sample.otu_ids.slice(0,10);
        var sample_values = sample.sample_values.slice(0,10);
        var otu_labels = sample.otu_labels.slice(0,10);
    });
    //Mapping data to get demographic details
   metadata = data.metadata.map(function (demographics) {
        var age = demographics.age;
        var bbtype = demographics.bbtype;
        var ethnicity = demographics.ethnicity;
        var gender = demographics.gender;
        var demo_id= demographics.id;
        var location = demographics.location;
        var wfreq = demographics.wfreq;
   });
   //Plotly.newPlot("bar", data);
  });  

  // this.value
  
    // Call updatePlotly() when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", updatePlotly);
    
    // This function is called when a dropdown menu item is selected
    function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
}