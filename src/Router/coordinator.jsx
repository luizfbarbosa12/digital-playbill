export const goToSetlist = (navigate) => {
    navigate('./setlist')
}

export const goToTranslation = (navigate) => {
    navigate('./translation')
}

export const goToSpecificTranslation = (navigate, songName) => {
    navigate(`./translations/${songName}`)
}

export const goToPlaylists = (navigate) => {
    navigate('./playlists')
}

export const goToArtists = (navigate) => {
    navigate('./artists')
}