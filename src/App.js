import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
