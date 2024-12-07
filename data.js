var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre",
      "name": "entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.1058873635463673,
        "pitch": 0.2691545650003633,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": -1.1996490036620209,
          "pitch": 0.524907856516343,
          "rotation": 5.497787143782138,
          "target": "1-projecteur"
        },
        {
          "yaw": 0.741903312068704,
          "pitch": 0.4741726269084765,
          "rotation": 4.71238898038469,
          "target": "2-cot-scene"
        },
        {
          "yaw": 0.12994368401643186,
          "pitch": -0.22560449790989168,
          "rotation": 3.141592653589793,
          "target": "3-vue-doiseau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-projecteur",
      "name": "projecteur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.04430451178139805,
        "pitch": 0.058366644402820356,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": -1.7624876954141193,
          "pitch": 0.4191703766369539,
          "rotation": 4.71238898038469,
          "target": "0-entre"
        },
        {
          "yaw": -2.7783606263023053,
          "pitch": -0.19424733473053557,
          "rotation": 3.141592653589793,
          "target": "3-vue-doiseau"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1872323310782189,
          "pitch": 0.48729625318852676,
          "title": "Ode à celle",
          "text": "Ode à celle vidéo : https://youtu.be/IHEbj5Kpz-M?si=wr0bP74ewkriuw9-"
        },
        {
          "yaw": 0.2744202268416558,
          "pitch": -0.2110693442523388,
          "title": "Performance",
          "text": "Vidéo à venir.&nbsp;"
        }
      ]
    },
    {
      "id": "2-cot-scene",
      "name": "coté scene",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.04833219467062477,
        "pitch": 0.5943802365404203,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": -0.84436916926499,
          "pitch": 0.3875094582963783,
          "rotation": 5.497787143782138,
          "target": "1-projecteur"
        },
        {
          "yaw": -1.6998486217697746,
          "pitch": 0.34115708428516456,
          "rotation": 15.707963267948973,
          "target": "0-entre"
        },
        {
          "yaw": -0.014659727980356863,
          "pitch": -0.515265929133049,
          "rotation": 3.141592653589793,
          "target": "3-vue-doiseau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vue-doiseau",
      "name": "vue d'oiseau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.9003848649923878,
        "pitch": 1.5024979766334194,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": -0.2893979061879737,
          "pitch": 0.4334832018917876,
          "rotation": 0,
          "target": "1-projecteur"
        },
        {
          "yaw": -1.1412556350626808,
          "pitch": 0.5074711392780156,
          "rotation": 3.141592653589793,
          "target": "0-entre"
        },
        {
          "yaw": -2.3678680592154127,
          "pitch": 0.7840292980872228,
          "rotation": 3.141592653589793,
          "target": "2-cot-scene"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Échappe-la pas",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
