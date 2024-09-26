export function User({ id, name, age, surname, isEdit, toggleMode, editProd}) {
	return <div>
		name: {
			isEdit
				? <input value={name} onChange={event => editProd(id, 'name', event)} />
				: <span>{name}</span>
		}
		surname: {
			isEdit
				? <input value={surname} onChange={event => editProd(id, 'surname', event)} />
				: <span>{surname}</span>
		}
		age: {
			isEdit
				? <input value={age} onChange={event => editProd(id, 'age', event)} />
				: <span>{age}</span>
		}

		<button onClick={() => toggleMode(id)}>
			{isEdit ? 'save' : 'edit'}
		</button>
	</div>;
}

