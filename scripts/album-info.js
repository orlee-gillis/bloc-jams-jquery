{
     $('#album-title').text(album.title);
        $('img#album-cover-art').attr('src', album.albumArtUrl);
        $('img#album-title').attr('src', album.artist);
        $('img#release-info').attr('src', album.releaseInfo);
}
