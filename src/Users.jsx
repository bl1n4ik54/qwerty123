import React, {useState} from 'react';
import { User } from './User';

const initUsers = [
  { id: '12e23', name: 'user1', surname: 'surn1', age: 30, isEdit: false},
  { id: '123412', name: 'user2', surname: 'surn2', age: 31, isEdit: false},
  { id: '123241251', name: 'user3', surname: 'surn3', age: 32, isEdit: false},
];

export function Users() {
	const [prods, setProds] = useState(initUsers);
	
	function toggleMode(id) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod.isEdit = !prod.isEdit;
			}
			
			return prod;
		}));
	}
	
	function editProd(id, field, event) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod[field] = event.target.value;
			}
			
			return prod;
		}));
	}
	
	const result = prods.map(prod => {
		return <User
			key ={prod.id}
      age ={prod.age}
			id  ={prod.id}
			name={prod.name}
			surname={prod.surname}
			isEdit={prod.isEdit}
			toggleMode={toggleMode}
			editProd={editProd}
		/>;
	});
	
	return <div>
		{result}
	</div>;
}