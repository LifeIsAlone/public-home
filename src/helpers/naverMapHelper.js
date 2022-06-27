const naver = window.naver;

console.log("NAVER HELPER EXECUTE");

function createMap(id, position, zoom) {
  return new naver.maps.Map(id, { center: position, zoom: zoom });
}

function getPosition(lat, lng) {
  return new naver.maps.LatLng(lat, lng);
}

/**
 * created At: 22-06-21
 *
 * @param {Object} MarkerObj {title: 제목, position: Naver.LatLng }
 * @param {Naver.map} map  createMap으로 생성된 Map
 * @param {Function} content (MarkerObj[Keys]): String
 */
function createMarker(MarkerObj, map, content) {
  let markers = [];
  let infoWindows = [];

  for (let key in MarkerObj) {
    const markerOption = setMarkerOption(
      map,
      MarkerObj[key].position,
      MarkerObj[key].title
    );
    const markerInfoWindow = setMarkerInfoWindow(content(MarkerObj[key]));

    markers.push(markerOption);
    infoWindows.push(markerInfoWindow);
  }

  naver.maps.Event.addListener(map, "idle", function () {
    updateMarkers(map, markers);
  });

  for (var i = 0, ii = markers.length; i < ii; i++) {
    naver.maps.Event.addListener(markers[i], "click", getClickHandler(i));
  }

  /** Functions  **/
  function setMarkerOption(map, position, title, ...props) {
    return new naver.maps.Marker({
      map,
      position,
      title,
      zIndex: 100,
      icon: {
        url: "https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1603-house_4x.png&highlight=FFD600,ff000000&scale=2.0",
        scaledSize: new naver.maps.Size(20, 20),
      },
      ...props,
    });
  }

  function setMarkerInfoWindow(content) {
    return new naver.maps.InfoWindow({ content });
  }

  function updateMarkers(map, markers) {
    var mapBounds = map.getBounds();
    var marker, position;

    for (var i = 0; i < markers.length; i++) {
      marker = markers[i];
      position = marker.getPosition();

      if (mapBounds.hasLatLng(position)) {
        showMarker(map, marker);
      } else {
        hideMarker(map, marker);
      }
    }
  }

  function showMarker(map, marker) {
    if (marker.setMap()) return;
    marker.setMap(map);
  }

  function hideMarker(map, marker) {
    if (!marker.setMap()) return;
    marker.setMap(null);
  }

  // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
  function getClickHandler(seq) {
    return function (e) {
      var marker = markers[seq],
        infoWindow = infoWindows[seq];

      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    };
  }
}

function changeAddressToPositionByGeocode(address) {
  return new Promise((resolve, reject) => {
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          reject("Something Wrong!");
        }

        if (response.v2.meta.totalCount === 0) {
          reject("totalCount" + response.v2.meta.totalCount);
        }

        const item = response.v2.addresses[0],
          position = new naver.maps.Point(item.x, item.y);

        //   infoWindows.push(infoWindow.open(map, point))
        resolve(position);
      }
    );
  });
}

function setCenterByPosition(map, position) {
  console.log('Move Point');
  map.setCenter(position);
  map.setZoom(16, true);
}

export {
  createMap,
  getPosition,
  createMarker,
  changeAddressToPositionByGeocode,
  setCenterByPosition
};
