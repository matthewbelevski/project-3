d3.csv("Resources/Fake.csv").then(function(dataf, err) {
    if (err) throw err;
  
console.log(dataf);
    // parse data
    dataf.forEach(function(data) {
      data.title = data.title;
    });

    console.log(dataf);

    d3.layout.cloud().size([500, 500])
    .words(data.title.map(function(d) {
        return {text: d, size: 10 + Math.random() * 90};
    }))
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();

});