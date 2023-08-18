var currentlabs = [
  {
    "name": "Fotolabor Görner",
    "location": "Dresden, Germany",
    "website": "https://www.foto-goerner.de/",
    "coordinates": [13.75121, 51.07070]
  },
  {
    "name": "Carmencita Film Lab",
    "location": "Barcelona, Spain",
    "website": "https://carmencitafilmlab.com/",
    "coordinates": [2.17938, 41.38208]
  },
  {
    "name": "Spieker Film Lab",
    "location": "Hamburg, Germany",
    "website": "https://www.spiekerfilmlab.de/",
    "coordinates": [10.02024, 53.57865]
  },
  {
    "name": "Safelight",
    "location": "Berlin, Germany",
    "website": "https://safelightberlin.com/",
    "coordinates": [13.41123, 52.55107]
  },
  {
    "name": "Silbersalz",
    "location": "Stuttgart, Germany",
    "website": "https://silbersalz35.com/",
    "coordinates": [9.22309, 48.80482]
  },
  {
    "name": "Film Speed Lab",
    "location": "Berlin, Germany",
    "website": "https://filmspeedlab.com/",
    "coordinates": [13.43276, 52.53526]
  },
  {
    "name": "Laboriver",
    "location": "Brussels, Belgium",
    "website": "https://www.laboriver.be/",
    "coordinates": [4.34595, 50.84811]
  },
  {
    "name": "Ghisa Film Lab",
    "location": "Legnano, Italy",
    "website": "https://ghisafilmlab.com/",
    "coordinates": [8.91858, 45.59237]
  },
  {
    "name": "Analog Space",
    "location": " Eindhoven, Netherlands",
    "website": "https://analogspace.nl/",
    "coordinates": [5.45817, 51.44703]
  },
  {
    "name": "Fotolabor Krzysztof Wolczak",
    "location": "Vienna, Austria",
    "website": "http://www.wolczak.at/",
    "coordinates": [16.34152, 48.19732]
  },
  {
    "name": "Czarno-Białe",
    "location": "Warsaw, Poland",
    "website": "https://czarno-biale.pl",
    "coordinates": [20.99507, 52.23287]
  },
  {
    "name": "Jasna Ciemnia",
    "location": "Rzeszów, Poland",
    "website": "https://www.jaroshka.com/jasnaciemnia/",
    "coordinates": [22.00574, 50.03392]
  },
  {
    "name": "Sagrada Película",
    "location": "Sever do Vouga, Portugal",
    "website": "https://lab.sagradapelicula.com/",
    "coordinates": [-8.37141, 40.73364]
  },
  {
    "name": "1826 Film Lab",
    "location": "Madrid, Spain",
    "website": "https://1826filmlab.com/",
    "coordinates": [-3.70351, 40.42390]
  },
  {
    "name": "Amigou Photo Lab",
    "location": "Barcelona, Spain",
    "website": "https://www.amigoulab.com/",
    "coordinates": [2.19671, 41.39729]
  },
  {
    "name": "Foto Carrete",
    "location": "Madrid, Spain",
    "website": "https://fotocarrete.com/",
    "coordinates": [-3.87676, 40.19674]
  },
  {
    "name": "Interphoto",
    "location": "Madrid, Spain",
    "website": "https://interphoto.es/",
    "coordinates": [-3.67645, 40.44328]
  },
  {
    "name": "Fotovramci",
    "location": "Kyiv, Ukraine",
    "website": "https://fotovramke.com/",
    "coordinates": [30.50908, 50.44860]
  },
  {
    "name": "Photo Kava Film Lab",
    "location": "Kyiv, Ukraine",
    "website": "https://photokavalab.com.ua/",
    "coordinates": [30.61334, 50.51364]
  },
  {
    "name": "Photovision",
    "location": "Kyiv, Ukraine",
    "website": "https://www.photovision.ua/",
    "coordinates": [30.59466, 50.45065]
  },
  {
    "name": "Café Analóg",
    "location": "Budapest, Hungary",
    "website": "https://cafeanalog.hu/",
    "coordinates": [19.06145, 47.49890]
  },
  {
    "name": "Bellows Film Lab",
    "location": "Chicago, USA",
    "website": "https://www.bellowsfilmlabchi.com/",
    "coordinates": [-87.67779, 41.91248]
  },
  {
    "name": "Bellows Film Lab",
    "location": "Miami, USA",
    "website": "https://www.bellowsfilmlabmia.com/",
    "coordinates": [-80.19883, 25.79635]
  },
  {
    "name": "Bellows Film Lab",
    "location": "Atlanta, USA",
    "website": "https://www.bellowsfilmlabatl.com/",
    "coordinates": [-84.35019, 33.76495]
  },
  {
    "name": "Palm Film Lab",
    "location": "Miami, USA",
    "website": "https://www.palmfilmlab.com/",
    "coordinates": [-80.28764, 25.74946]
  },
  {
    "name": "Dunwoody Photo",
    "location": "Dunwoody, USA",
    "website": "https://www.dunwoodyphoto.com/",
    "coordinates": [-84.33784, 33.94838]
  },
  {
    "name": "Old School Photo Lab",
    "location": "Dover, USA",
    "website": "https://oldschoolphotolab.com/",
    "coordinates": [-70.87334, 43.19306]
  },
  {
    "name": "Blue Moon Camera",
    "location": "Portland, USA",
    "website": "https://bluemooncamera.com/",
    "coordinates": [-122.75337, 45.58984]
  },
  {
    "name": "Andrew’s Analog Service Center",
    "location": "Pennsylvania, USA",
    "website": "https://www.needfilmdeveloped.com/",
    "coordinates": [-75.3066, 39.9492]
  },
  {
    "name": "Boutique Film Lab",
    "location": "Nashville, USA",
    "website": "https://www.boutiquefilmlab.com/",
    "coordinates": [-86.63495, 36.15836]
  },
  {
    "name": "Seattle Film Lab",
    "location": "Seattle, USA",
    "website": "https://www.shotonfilmstore.com/",
    "coordinates": [-122.29578, 47.71792]
  },
  {
    "name": "TheFINDlab",
    "location": "Orem, USA",
    "website": "https://thefindlab.com/",
    "coordinates": [-111.72764, 40.29359]
  }
]
