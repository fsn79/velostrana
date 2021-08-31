const div0 = document.querySelector('#source0').getAttribute('data-start-point')
const div1 = document.querySelector('#source1').getAttribute('data-start-point')
const div2 = document.querySelector('#source2').getAttribute('data-start-point')
const div3 = document.querySelector('#source3').getAttribute('data-start-point')

const div0e = document.querySelector('#source0').getAttribute('data-end-point')
const div1e = document.querySelector('#source1').getAttribute('data-end-point')
const div2e = document.querySelector('#source2').getAttribute('data-end-point')
const div3e = document.querySelector('#source3').getAttribute('data-end-point')

ymaps.ready(init);
  function init() {
    const myMap0 = new ymaps.Map('map0', {
      center: [+(div0.slice(0, 8)), +(div0.slice(11))],
      zoom: 10,
    });
    const myMap1 = new ymaps.Map('map1', {
      center: [+(div1.slice(0, 8)), +(div1.slice(11))],
      zoom: 10,
    });
    const myMap2 = new ymaps.Map('map2', {
      center: [+(div2.slice(0, 8)), +(div2.slice(11))],
      zoom: 10,
    });
    const myMap3 = new ymaps.Map('map3', {
      center: [+(div3.slice(0, 8)), +(div3.slice(11))],
      zoom: 10,
    });

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const multiRoute0 = new ymaps.multiRouter.MultiRoute({   
      referencePoints: [
        [+(div0.slice(0, 8)), +(div0.slice(11))],
        [+(div0e.slice(0, 8)), +(div0e.slice(11))]
      ],
      params: {
        routingMode: 'bicycle'  
      }
  }, {
        boundsAutoApply: true
  });

  const multiRoute1 = new ymaps.multiRouter.MultiRoute({
    activeRouteAutoSelection: true,   
    referencePoints: [
      [+(div1.slice(0, 8)), +(div1.slice(11))],
      [+(div1e.slice(0, 8)), +(div1e.slice(11))]
    ],
    params: {
      routingMode: 'bicycle'  
    }
}, {
      boundsAutoApply: true
});

const multiRoute2 = new ymaps.multiRouter.MultiRoute({
  
  referencePoints: [
    [+(div2.slice(0, 8)), +(div2.slice(11))],
    [+(div2e.slice(0, 8)), +(div2e.slice(11))]
  ],
  params: {
    routingMode: 'bicycle'  
  }
},

{
    routeWalkMarker: true, 
    boundsAutoApply: true
});

const multiRoute3 = new ymaps.multiRouter.MultiRoute({   
  referencePoints: [
    [+(div3.slice(0, 8)), +(div3.slice(11))],
    [+(div3e.slice(0, 8)), +(div3e.slice(11))]
  ],
  params: {
    routingMode: 'bicycle'  
  }
}, {
    boundsAutoApply: true
});

  myMap0.geoObjects.add(multiRoute0);
  myMap1.geoObjects.add(multiRoute1);
  myMap2.geoObjects.add(multiRoute2);
  myMap3.geoObjects.add(multiRoute3);
      }
    
