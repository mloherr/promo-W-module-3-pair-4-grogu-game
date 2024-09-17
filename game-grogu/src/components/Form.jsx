function Form({ nameUser, nameInputUser }) {
	const handleNameUser = (event) => {
		nameInputUser(event.target.value);
	};

	return (
		<form className="form">
			<label className="namePlayer" htmlFor="name">
				Introduce tu nombre para jugar
			</label>
			<input type="text" id="name" value={nameUser} onChange={handleNameUser} />
		</form>
	);
}

export default Form;
