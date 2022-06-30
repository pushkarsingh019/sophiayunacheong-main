// importing images
import googlePodcast from "../images/googlePodcastLogo.svg";
import spotify from "../images/spotifyLogo.svg";
import applePodcast from "../images/applePodcastLogo.svg";



const podcastApps = [
  {
    alt: "Google Podcast",
    redirectLink:
      "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82NzMyN2VjNC9wb2RjYXN0L3Jzcw==",
    imageSource: googlePodcast,
  },
  {
    alt: "Spotify",
    redirectLink: "https://open.spotify.com/show/0XgTokV4MiYVSONlnOuOIR",
    imageSource: spotify,
  },
  {
    alt: "Apple Podcast",
    redirectLink:
      "https://podcasts.apple.com/us/podcast/the-good-question-podcast/id1581196749",
    imageSource: applePodcast,
  }
];



export default podcastApps;
