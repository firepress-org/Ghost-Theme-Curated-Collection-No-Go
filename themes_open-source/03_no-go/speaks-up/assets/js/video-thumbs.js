/*global $*/
'use strict';

$('.video-thumb').each(initVideoThumb);



function initVideoThumb(id, parentElem) {
    var container = $(parentElem);
    var videoId = getVideoId(container);
    addThumbImg(container, videoId);
    initLightbox(container, videoId);
}

function initLightbox(container, videoId) {
    container.find('.video-trigger')
        .featherlight({
            iframe: getEmbedLink(videoId),
            iframeWidth: 640,
            iframeHeight: 360
        });
}

function getEmbedLink(videoId) {
    return 'https://www.youtube.com/embed/'
        + videoId
        + '?rel=0';
}

function getVideoIframe(videoId) {
    return '<iframe width="640" height="360" src="" frameborder="0" allowfullscreen></iframe>';
}

function addThumbImg(container, videoId) {
    container.find('.video-thumb-img')
        .append('<img src="' + getImageURL(videoId) + '">');
}

function getVideoId(container) {
    return container.find('.video-id').text();
}

function getImageURL(videoId) {
    return 'http://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
}


