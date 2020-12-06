import React, {useState} from 'react';
import './App.css';
import { Grid,Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from './components/Table'
import AddCarModal from './components/AddCarModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const handleAddCar = () => {
    setShowModal(!showModal);
  }
  
  return (
    <>
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Typography variant="h6" >
          Car table
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Button variant="contained" color="primary" onClick={handleAddCar}>
          Add Car
        </Button>
      </Grid>
      <Grid container item  xs={12}>
        <Table/>
      </Grid>
    </Grid>
   <AddCarModal showModal={showModal} toggleModal={ () => setShowModal(!showModal)}/>
   </>
  );
}

export default App;
