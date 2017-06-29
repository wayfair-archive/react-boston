/**
 * ClassNames
 * Simple quick version of: https://github.com/JedWatson/classnames
 * @param {Object} obj a map of class names to booleans
 * @returns {String} the joined class names for only the values that are true
 */

export const cx = (obj) => Object.keys(obj).reduce((memo, key) => {
  if (obj[key]) { memo.push(key); }
  return memo;
}, []).join(' ');


// Custom Google Map style config. not really a utility, but whatever
export const mapStyles = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#444444"
        }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "color": "#f2f2f2"
        }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 45
        }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "color": "#4baee2"
        },
        {
            "visibility": "on"
        }
    ]
  }
];
