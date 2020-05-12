import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "Happy bday", duration: '3:05' },
    { title: "twinkle twinkle", duration: '2:30' },
    { title: "mary had a little lamb", duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});