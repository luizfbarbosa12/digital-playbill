export const goToSetlist = (navigate) => {
    navigate('/setlist')
}

export const goToTranslation = (navigate, id = 1) => {
    navigate(`/translation/${id}`)
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

export const goToSpecificArtist = (navigate, id) => {
    navigate(`/artists/${id}`)
}