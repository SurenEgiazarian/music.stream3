/* eslint-disable no-console */
import { useRef, useState, useEffect } from 'react';
import Controls from '../Controls';
import TrackPlay from '../TrackPlay';
import Volume from '../Volume';
import * as S from './styles';

function Bar() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [trackDuration, setTrackDuration] = useState(120);
  const [progressWidth, setProgressWidth] = useState(0);
  const [progressClick, setProgressClick] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setProgressWidth((currentTime / trackDuration) * 100);
  },[currentTime, trackDuration]);

  useEffect(() => {
    audioRef.current.currentTime = progressClick * trackDuration;
    setProgressWidth(progressClick * 100);
  },[progressClick, trackDuration]);

  const handleStart = () => {
    console.log('start');
    audioRef.current.play();
    setTrackDuration(audioRef.current.duration);
    const newIntervalId = setInterval(() => {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);
      console.log(time);
      console.log(audioRef.current.ended);
      if(audioRef.current.ended) {
        clearInterval(newIntervalId);
        setIsPlaying(false);
      }
    },1000);
    setIntervalId(newIntervalId);

    setIsPlaying(true);
  }

  const handleStop = () => {
    console.log('stop');
    audioRef.current.pause();
    console.log(intervalId);
    clearInterval(intervalId);
    console.log(currentTime);

    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleMove = (event) => {
    // console.log(event);
    // console.log('clientX', event.clientX);
    // console.log('movementX', event.movementX);
    // console.log('pageX', event.pageX);
    // console.log('screenX', event.screenX);
    // console.log('clientWidth', event.target.clientWidth);
    // console.log('offsetWidth', event.target.offsetWidth);
    // console.log('getBoundingClientRect', event.target.getBoundingClientRect());
    const rect = event.currentTarget.getBoundingClientRect();
    const {left, width} = rect;
    const leftClick = event.clientX;
    setProgressClick((leftClick - left) / width);
    setProgressWidth((currentTime / trackDuration) * 100);
  }


  return (
    <>
      <S.Audio controls ref={audioRef}>
          <track kind="captions"/>
          <source src="/music/song.mp3" type="audio/mpeg" />
      </S.Audio>
      <S.Content>
        <S.PlayerProgressWrap onClick={handleMove}>
        <S.PlayerProgress width={progressWidth} />
        </S.PlayerProgressWrap>
        <S.PlayerBlock>
          <S.Player>
            <Controls togglePlay={togglePlay}/>
            <TrackPlay />
          </S.Player>
          <Volume />
        </S.PlayerBlock>
      </S.Content>
    </>
  );
}

export default Bar;
