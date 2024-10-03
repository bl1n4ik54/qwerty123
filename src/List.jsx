export function List({ id, isChecked, isEdit, toggleMode, editProd}) {
	return <div>
		Tasks: {
			isEdit
				? <input value={text} onChange={event => editProd(text)} />
				: <span>{text}</span>
		}
		<button onClick={() => toggleMode(id)}>
			{isEdit ? 'save' : 'edit'}
		</button>
	</div>;
}

