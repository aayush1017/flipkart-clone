import { Box } from '@mui/material';

//Components
import Header from './components/header';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{marginTop: 54}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
