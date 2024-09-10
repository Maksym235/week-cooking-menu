import "./Toggler.css";
export const Toggler = ({ toggleTheme, isChecked }: any) => {
	const handleChange = (evt: any) => {
		const isLight = evt.target.checked;
		toggleTheme(isLight);
	};
	return (
		<>
			<label className="switch">
				<input onChange={handleChange} checked={isChecked} type="checkbox" />
				<span className="slider"></span>
			</label>
		</>
	);
};
