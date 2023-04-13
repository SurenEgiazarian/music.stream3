import {
    ICON_PREV,
    ICON_PLAY,
    ICON_PAUSE,
    ICON_NEXT,
    ICON_REPEAT,
    ICON_SHUFFLE,
    CONTROLS_SIZES,
} from '../../constants';
import PlayerBtn from '../PlayerBtn';

function Controls({ togglePlay, isPlaying }) {
    const playPauseBtn = isPlaying
        ? {
              name: 'pause',
              alt: 'пауза',
              xlinkHref: ICON_PAUSE,
              cursor: true,
              onClick: togglePlay,
          }
        : {
              name: 'play',
              alt: 'проигрывать',
              xlinkHref: ICON_PLAY,
              cursor: true,
              onClick: togglePlay,
          };

    const controlBtnsValues = [
        { name: 'prev', alt: 'предыдущий трек', xlinkHref: ICON_PREV },
        playPauseBtn,
        { name: 'next', alt: 'следующий трек', xlinkHref: ICON_NEXT },
        {
            name: 'repeat',
            alt: 'повторить',
            xlinkHref: ICON_REPEAT,
        },
        {
            name: 'shuffle',
            alt: 'перемешать',
            xlinkHref: ICON_SHUFFLE,
        },
    ];

    return (
        <>
            {controlBtnsValues.map(
                ({ name, alt, xlinkHref, cursor, onClick }) => (
                    <PlayerBtn
                        name={name}
                        alt={alt}
                        xlinkHref={xlinkHref}
                        width={CONTROLS_SIZES[name].width}
                        heght={CONTROLS_SIZES[name].height}
                        cursor={cursor}
                        onClick={onClick}
                        key={name}
                    />
                )
            )}
        </>
    );
}

export default Controls;
