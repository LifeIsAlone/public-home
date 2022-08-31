const naver = window.naver;

export function getPosition(lat, lng) {
    return new naver.maps.LatLng(lat, lng);
}
