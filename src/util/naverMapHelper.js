const IMG = {
  "LH 청년매입": "https://i.ibb.co/f0k0wk9/homeLH.png",
  "SH 청년매입": "https://i.ibb.co/cL3pwtk/homeSH.png",
};

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
    const gov = MarkerObj[key].gov;
    const markerOption = setMarkerOption(
      map,
      MarkerObj[key].position,
      MarkerObj[key].title,
      IMG[gov]
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
  function setMarkerOption(map, position, title, img, ...props) {
    return new naver.maps.Marker({
      map,
      position,
      title,
      zIndex: 100,
      icon: {
        url: img,
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
  if (address.includes("응암에코타운")) {
    address = "서울특별시 은평구 응암동 72-6";
  }
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
        if (response.v2.addresses.length === 0) {
          console.log(address);
          console.log(response.v2.addresses);
        }
        // response.v2.addresses.testAddr = address;
        // console.log(response.v2.addresses);
        const item = response.v2.addresses[0],
          position = new naver.maps.Point(item.x, item.y);
        const lng = item.x;
        const lat = item.y;

        //   infoWindows.push(infoWindow.open(map, point))
        resolve([lng, lat]);
        // resolve(position);
      }
    );
  });
}

function setCenterByPosition(map, position) {
  console.log("Move Point");
  const [lng, lat] = position
    .toString()
    .slice(1, -1)
    .split(",")
    .map((e) => Number(e));

  map.panToBounds(
    new naver.maps.LatLngBounds(
      new naver.maps.LatLng(lat - 0.003, lng - 0.01),
      new naver.maps.LatLng(lat + 0.003, lng + 0.01)
    )
  );
  // 상준님이 한 부분
  // map.setCenter(position);
  // map.setZoom(16, true);
}

export {
  createMap,
  getPosition,
  createMarker,
  changeAddressToPositionByGeocode,
  setCenterByPosition,
};
