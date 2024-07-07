import React, { useContext } from 'react';
// import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>
        <td><button style={{ backgroundColor: "green", borderRadius:'50%', border: 'none', width: '40px', height: '40px', color: 'white', fontSize: '20px' }} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{ backgroundColor: "red", borderRadius:'50%', border: 'none', width: '40px', height: '40px', color: 'white', fontSize: '20px' }} onClick={handleDeleteExpense}>-</button></td>
        {/* <td><TiDelete  onClick={handleDeleteExpense}></TiDelete></td> */}
        </tr>
    );
};

export default ExpenseItem;
