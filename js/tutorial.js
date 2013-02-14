"use strict";
window.onload = function() {
    var sp = getSpotifyApi();
    var models = sp.require('$api/models');
    var views = sp.require("$api/views");

    var playlist_url = 'spotify:user:djbobbydrake:playlist:7HMi4L1Bvaf9o6Rme3wYOf';

    var playlist = models.Playlist.fromURI(playlist_url);
    var list = new views.List(playlist);
    list.node.classList.add('sp-light');
    document.getElementById('playlist').appendChild(list.node);
};
