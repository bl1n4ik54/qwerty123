export function List({ id, isChecked, isEdit, toggleMode, editProd}) {
	return <div>
		Tasks: {
			isEdit
				? <input value={tasks} onChange={event => editProd(id, 'name', event)} />
				: <span>{tasks}</span>
		}
		<button onClick={() => toggleMode(id)}>
			{isEdit ? 'save' : 'edit'}
		</button>
	</div>;
}

