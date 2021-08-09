d3.json('./samples.json').then((data) =>{
  var names = data.names
  names.forEach((sample) => {
    self.onvrdisplaypointerunrestricted('option').text(sample).property('value', sample)
  })
  const first=names[0]
  met