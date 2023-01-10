const apiconfig={
    baseurl:'https://api.themoviedb.org/3/',
    apikey: '939d727d92ac61e2734a05beb937ca96',
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiconfig;