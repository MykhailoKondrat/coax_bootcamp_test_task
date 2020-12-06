import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import {useDispatch} from 'react-redux';
import {addCar} from '../../app/carSlice';

const AddCarModal = ({showModal,toggleModal}) => {
	
	const [type, setType] = useState('');
	const [model, setModel] = useState('');
	const [brand, setBrand] = useState('');
	
	const dispatch = useDispatch();
	
	const handleChange = (event) => {
		setType(event.target.value);
	};
	const handleInputChange = (e, inputType) => {
		if( inputType === 'model'){
			setModel(e.target.value)
		} else{
			setBrand(e.target.value)
		}
	}
	const handleSubmit = () => {
		dispatch(addCar({
			id: Math.floor(Math.random()*90000) + 10000,
			model,
			brand,
			type
		}));
		toggleModal();
	}
	return (
	
	<Dialog open={showModal} onClose={toggleModal} aria-labelledby="form-dialog-title">
		<DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
		<DialogContent>
			<DialogContentText>
				Please Fill data below. Id will be generated automatically.
			</DialogContentText>
			<FormControl fullWidth margin='normal'>
				<InputLabel id="vehicleType">Select Type</InputLabel>
					<Select
						labelId="vehicleType"
						id="vehicleType" value={type} onChange={handleChange}
					>
					<MenuItem value='Car'>Car</MenuItem>
					<MenuItem value='Motorcycle'>Motorcycle</MenuItem>
					</Select>
			</FormControl>
			<TextField
				autoFocus
				margin="dense"
				id="model"
				label="Car model"
				type="text"
				fullWidth
				onChange={(e)=>{handleInputChange(e, 'model')}}
			/>
			<TextField
				autoFocus
				margin="dense"
				id="brand"
				label="Car Brand"
				type="text"
				fullWidth
				onChange={(e)=>{handleInputChange(e, 'brand')}}
			/>
		</DialogContent>
		<DialogActions>
			<Button onClick={toggleModal} color="primary" >
				Cancel
			</Button>
			<Button onClick={handleSubmit} color="primary" disabled={!model.length || !brand.length || !type.length}>
				Add Car
			</Button>
		</DialogActions>
	</Dialog>
	);
};

export default AddCarModal;