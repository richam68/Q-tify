import { useState } from "react";
import "./musicplayer.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = () => {
  const musicTracks = [
    {
      name: "Memories",
      image: "https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
    {
      name: "Creative Minds",
      image: "https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    },
    {
      name: "Acoustic Breeze",
      image: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    },
    {
      name: "Sunny",
      image: "https://images.pexels.com/photos/2762673/pexels-photo-2762673.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    },
    {
      name: "Tenderness",
      image: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      image: "https://images.pexels.com/photos/1493004/pexels-photo-1493004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    },
    {
      name: "Once Again",
      image: "https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    },
    {
      name: "Sweet",
      image: "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
    },
    {
      name: "Love",
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-love.mp3",
    },
    {
      name: "Piano Moment",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
    },
    {
      name: "E.R.F",
      image: "https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3",
    },
    {
      name: "Dreams",
      image: "https://images.pexels.com/photos/2108232/pexels-photo-2108232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
    },
    {
      name: "A Day To Remember",
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music",
    },
    {
      name: "Adventure",
      image: "https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3",
    },
    {
      name: "Photo Album",
      image: "https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3",
    },
    {
      name: "November",
      image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
    },
  ];


  const [trackIndex, setTrackIndex] = useState(0);

//   const handleClickPrevious = () => {
//     // Check if the current track is the first track in the playlist
//     if (currentTrackIndex === 0) {
//       // If it is, set the current track index to the last track in the playlist
//       currentTrackIndex = musicTracks.length - 1;
//     } else {
//       // If it's not the first track, just move to the previous track
//       currentTrackIndex--;
//     }
//   };
const handleClickPrevious = () => {
    setTrackIndex((currentTrack) => 
        currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    )
}

const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
}

  return (
  <div className="musicplayer-container">
     <img src={musicTracks[trackIndex].image} alt="Track Cover" className="track-image" width={80} height={80}/>
    <AudioPlayer
    className="audio"
     autoPlay={false}
     src={musicTracks[trackIndex].src}
     onPlay={e => console.log("onPlay")}
     autoPlayAfterSrcChange={true}
     showSkipControls={true}
     showJumpControls={false}
     //header={`Now playing: ${musicTracks[trackIndex].image}`}
     footer={`Song Name - ${musicTracks[trackIndex].name}`}
     onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
    />
    
    </div>
  )
};

export default MusicPlayer;
