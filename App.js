import './App.css';
import Appbar from './Components/Appbar'
import {Box} from '@mui/material';

function App() {
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
        <Appbar/>
    </Box>
  );
}

export default App;
