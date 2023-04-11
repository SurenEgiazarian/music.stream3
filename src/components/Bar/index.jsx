/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { useRef, useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { currentTrackFileSelector, allTracksIds, currentTrackIdSelector, playlistSizeSelector } from '../../store/selectors/catalog';
// import { currentTrackFileSelector, playlistSizeSelector, currentTrackIndexSelector } from '../../store/selectors/catalog';
import { setActiveTrackById } from '../../store/actions/thunks/catalog';
import Controls from '../Controls';
import TrackPlay from '../TrackPlay';
import Volume from '../Volume';
import * as S from './styles';

function Bar() {
    console.log('Bar');

    const dispatch = useDispatch();

    const trackFile = useSelector(currentTrackFileSelector);
    const tracksIds = useSelector(allTracksIds);
    const currentTrackId = useSelector(currentTrackIdSelector);
    const playlistSizeSe = useSelector(playlistSizeSelector);
    console.log(trackFile);
    console.log(tracksIds);
    console.log(currentTrackId);
    console.log(playlistSizeSe);
    // const trackIndex = useSelector(currentTrackIndexSelector);
    // const tracksLength = useSelector(playlistSizeSelector);

    // const trackDuration = useSelector(currentTrackDurationSelector);

    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    // const [currentTime, setCurrentTime] = useState(0);
    // const [progressWidth, setProgressWidth] = useState(0);
    const progressWidth = null;
    // const [progressClick, setProgressClick] = useState(0);
    const audioRef = useRef(null);

    const startTimer = () => {
        const newIntervalId = setInterval(() => {
            const time = audioRef.current.currentTime;
            console.log(`setCurrentTime(time); ${  time}`);
            // setCurrentTime(time);
            if (audioRef.current.ended) {
                clearInterval(newIntervalId);
                setIsPlaying(false);
            }
        }, 1000);
        setIntervalId(newIntervalId);
        console.log(intervalId);
    }
    
    useEffect(() => {
        if(isPlaying) {
            audioRef.current.pause();
            audioRef.current = new Audio(trackFile);
            audioRef.current.play();
        } else {
            audioRef.current = new Audio(trackFile);
            setIsPlaying(true);
        }
    },[trackFile]);

    useEffect(() => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.play();
            startTimer();
            // audioRef.current.loop = repeat;
            // audioRef.current.volume = volume / 100;
          } else {
            audioRef.current.pause();
            clearInterval(intervalId);
          }
        }
      }, [isPlaying]);

    // const stop = (audio = audioRef.current) => {
    //     console.log('stop');
    //     console.log(`isPlaying before pause ${isPlaying}`);
    //     audio.pause();
    //     console.log(`isPlaying after pause ${isPlaying}`);
    //     clearInterval(intervalId);
    //     setIsPlaying(false);
    // };

    const handleStop = () => {
        console.log('handleStop');
        setIsPlaying(false);
    };

    // const start = (audio = audioRef.current) => {
    //     console.log('start');
    //     console.log(`isPlaying  ${isPlaying}`);
    //     audio.play();
    //     const newIntervalId = setInterval(() => {
    //         const time = audio.currentTime;
    //         // console.log(`setCurrentTime(time); ${  time}`);
    //         setCurrentTime(time);
    //         if (audio.ended) {
    //             clearInterval(newIntervalId);
    //             setIsPlaying(false);
    //         }
    //     }, 1000);
    //     setIntervalId(newIntervalId);

    //     setIsPlaying(true);
    //     console.log(`isPlaying  after setIsPlaying ${isPlaying}`);
    // }

    

    const handleStart = () => {
        console.log('handleStart');
        setIsPlaying(true);
    };

    // useEffect(() => {
    //     setProgressWidth((currentTime / trackDuration) * 100);
    // }, [currentTime, trackDuration]);

    // useEffect(() => {
    //     // console.log('audioRef.current');
    //     // console.log(audioRef.current);
    //     // console.log('audioRef.current.currentTime');
    //     // console.log(audioRef.current.currentTime);
    //     // console.log(`progressClick ${progressClick} * trackDuration ${trackDuration}`);
    //     audioRef.current.currentTime = progressClick * trackDuration;
    //     setProgressWidth(progressClick * 100);
    // }, [progressClick, trackDuration]);

    // useEffect(() => {
    //     console.log(`useEffect isPlaying ${isPlaying}`);
    // }, [isPlaying]);

    

    const togglePlay = isPlaying ? handleStop : handleStart;

    const handleNext = () => {
        console.log('handleNext');
        const currentIndex = tracksIds.indexOf(currentTrackId);
        if(currentIndex === -1) {
            return;
        }
        if(currentIndex === tracksIds.length - 1) { // если трек последний, 
            dispatch(setActiveTrackById(tracksIds[0])); // то следующим пусть играет первый
        } else {
            dispatch(setActiveTrackById(tracksIds[currentIndex + 1]));
        }
        setIsPlaying(true);
    };

    const handlePrevious = () => {
        console.log('handlePrevious');
        const currentIndex = tracksIds.indexOf(currentTrackId);
        if(currentIndex === -1) {
            return;
        }
        if(currentIndex === 0) { // если трек первый, 
            dispatch(setActiveTrackById(tracksIds[tracksIds.length - 1])); // то следующим пусть играет последний
        } else {
            dispatch(setActiveTrackById(tracksIds[currentIndex - 1]));
        }
        setIsPlaying(true);
    };

    // const handleMove = (event) => {
    //     const rect = event.currentTarget.getBoundingClientRect();
    //     const { left, width } = rect;
    //     const leftClick = event.clientX;
    //     setProgressClick((leftClick - left) / width);
    //     setProgressWidth((currentTime / trackDuration) * 100);
    // };

    const handleMove = null;



    return (
        <S.Content>
            <S.PlayerProgressWrap onClick={handleMove}>
                <S.PlayerProgress width={progressWidth} />
            </S.PlayerProgressWrap>
            <S.PlayerBlock>
                <S.Player>
                    <Controls
                        togglePlay={togglePlay}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        isPlaying={isPlaying}
                    />
                    <TrackPlay />
                </S.Player>
                <Volume />
            </S.PlayerBlock>
        </S.Content>
    );
}

export default Bar;
