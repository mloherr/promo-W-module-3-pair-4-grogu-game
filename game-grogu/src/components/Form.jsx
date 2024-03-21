function Form({ nameUser, nameInputUser }) {
	const handleNameUser = (event) => {
		nameInputUser(event.target.value);
	};

	return (
		<form className="form">
			<label htmlFor="name">Escribe tu nombre</label>
			<input type="text" id="name" value={nameUser} onChange={handleNameUser} />
		</form>
	);
}

export default Form;
