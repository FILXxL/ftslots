document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('backgroundVideo');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const videoParam = urlParams.get('video');

    if (videoParam) {
        videoElement.innerHTML = `<source src="video/${videoParam}" type="video/webm">`;
    } else {
        videoElement.innerHTML = `<source src="video/bg1.webm" type="video/webm">`;
    }
});