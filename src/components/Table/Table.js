import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Button} from '@material-ui/core';
import {removeCar} from '../../app/carSlice';



export default function Table() {
	const rows = useSelector(state=>state.cars);
	const dispatch = useDispatch();

	const buttonRenderer = props => {
		return (
			<Button onClick={() =>	dispatch(removeCar(props.data.id))}>
				Delete
			</Button>
		)
	}
	return (
		<div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
			<AgGridReact
				frameworkComponents={{
					buttonRenderer: buttonRenderer
				}}
				rowData={rows}>
				<AgGridColumn field="id"  sortable></AgGridColumn>
				<AgGridColumn field="model" sortable></AgGridColumn>
				<AgGridColumn field="brand" sortable></AgGridColumn>
				<AgGridColumn field="type" sortable></AgGridColumn>
				<AgGridColumn cellRenderer='buttonRenderer' ></AgGridColumn>
			</AgGridReact>
		</div>
	);
	
}
