export const goToSetlist = (navigate) => {
    navigate('/setlist')
}

export const goToTranslation = (navigate) => {
    navigate('/translation')
}

export const goToSpecificTranslation = (navigate, id) => {
    navigate(`/translation/${id}`)
}

export const goToPlaylists = (navigate) => {
    navigate('/playlists')
}

export const goToArtists = (navigate) => {
    navigate('/artists')
}