function formatUrl(url) {
  if (url.startsWith('http://'))
    url = url.slice(7)
  if (url.startsWith('https://'))
    url = url.slice(8)
  if(url.endsWith('/'))
    url = url.slice(0, -1)
  return url;
}

var features = currentlabs.map(lab => ({
  'type': 'Feature',
  'properties': {
    'description': '<strong>' + lab.name + '</strong><p>' + lab.location + '</p><p><a href="' + lab.website + '" target="_blank">' + formatUrl(lab.website) + '</a></p>',
  },
  'geometry': {
    'type': 'Point',
    'coordinates': lab.coordinates
  }
}));

mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYXN0aWFubGF5IiwiYSI6ImNsa3B0NHB3ejFwb3kzZW8zOWh6bzQzbDcifQ.j4RMfglecrPYyG7Wwnthyg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/sebastianlay/clkpsy94300nf01pc211l6rqq'
});

map.on('load', () =>
{
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }));

  map.loadImage('/map-icon.png', (error, image) => { if (error) throw error; map.addImage('lab', image); });

  map.addSource('labs', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': features
    }
  });

  map.addLayer({
    'id': 'labs',
    'type': 'symbol',
    'source': 'labs',
    'layout': {
      'icon-image': 'lab',
      'icon-size': 0.8,
      'icon-allow-overlap': true
    }
  });

  map.on('click', 'labs', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  map.on('mouseenter', 'labs', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'labs', () => {
    map.getCanvas().style.cursor = '';
  });
});
