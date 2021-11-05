import SpotifyPlayer from 'react-spotify-player'

const Listen=(props) => {
  const size = {
    width: '89%',
    height: 300,
    
  };
  const view = 'list'; 
  const theme = 'black'; 
  
  return (
    <>
    <div>
      <img src="https://i.imgur.com/ruWZI7e.jpg?1" alt="" className="listenImage"/>
    </div>
    <div className="player">
    <SpotifyPlayer
      uri= "https://open.spotify.com/album/3UrUNyumXYfBUynAvcyMC9"
      size={size}
      view={view}
      theme={theme}
    />
    </div>
    </>
  )
};




export default Listen