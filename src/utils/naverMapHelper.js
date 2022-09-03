export function getPosition(lat, lng) {
    return new naver.maps.LatLng(lat, lng);
}
export function loadNMaps(callback) {
    const existingScript = document.getElementById('naverMaps');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src =
            'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=83bfuniegk&amp;submodules=geocoder';
        script.id = 'naverMaps';
        script.type = 'text/javascript';
        document.body.appendChild(script);
        script.onload = () => {
            if (callback) callback();
        };
    }
    if (existingScript && callback) callback();
}
