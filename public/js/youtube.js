const apiKey = 'AIzaSyCmWV2b_RElOJugKno33D8yjgCZoqDwXDg';
const channelID = 'UCvfgOMn6WQOiMfBDHGZT5mA';
const base = `https://www.googleapis.com/youtube/v3/search?channelId=${channelID}&key=${apiKey}&maxResults=10`;
const getVideos = async () => {
    const res = await fetch(base);
    const result = await res.json();
    const videosIds = result.items;
    console.log(videosIds);

    return videosIds;
};
const youtube = document.querySelector('.youtube');
getVideos()
.then(videos => {
    videos.forEach(video => {
        console.log(video.id.videoId);
        youtube.innerHTML  += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
})
.catch(err => console.error(err));

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UnqhyzM-CqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}