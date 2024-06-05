// App.js
import React from 'react';
import './App.css';

const videos = [
  { id: 1, title: 'Video 1', src: 'output.mp4' },
  { id: 2, title: 'Video 2', src: 'output.mp4' },
  { id: 3, title: 'Video 3', src: 'output.mp4' },
  // Add more videos as needed
];
function componentDidMount()
{
  fetch('http://localhost:8000/')
  .then((response) => response.json())
  .then((findresponse)=>{
    console.log(findresponse.url)
    fetch(findresponse.url)
      .then((urlResp) => urlResp.text())
      .then((response) => {
          this.setState({
            data:findresponse.url,
          });
        });
  });
}
function App() {
  return (
    <div className="App">
      <h1>Video Streaming Platform</h1>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-tile">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
