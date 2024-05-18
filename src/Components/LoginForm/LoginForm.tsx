import styles from "./LoginForm.module.css";
import { useMutation, gql } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WellcomeMessage } from "./WellcomeMessage/WellcomeMessage";
import { useTranslation } from "react-i18next";
const LOGIN = gql`
	mutation Login($email: String, $password: String) {
		login(email: $email, password: $password) {
			id
			name
			email
			token
		}
	}
`;
const REGISTER = gql`
	mutation Mutation($name: String, $email: String, $password: String) {
		register(name: $name, email: $email, password: $password) {
			token
			password
			name
			id
			email
		}
	}
`;
export const LoginForm = ({ form }: { form: string }) => {
	const { t } = useTranslation();
	const [login, { data, loading, error }] = useMutation(LOGIN);
	const [
		register,
		{ data: registerData, loading: registerLoading, error: registerError },
	] = useMutation(REGISTER);
	// const notify = () => {
	//   toast.error("🦄 Wow so easy!", {
	//     position: "top-center",
	//     autoClose: 5000,
	//     hideProgressBar: false,
	//     closeOnClick: true,
	//     pauseOnHover: true,
	//     draggable: true,
	//     progress: undefined,
	//     theme: "light",
	//   });
	// };
	const handleSubmitform = (evt: any) => {
		evt.preventDefault();
		console.log(evt.currentTarget.elements.email);
		const name =
			form === "register" ? evt.currentTarget.elements.name.value : "";
		const email = evt.currentTarget.elements.email.value;
		const password = evt.currentTarget.elements.password.value;
		switch (form) {
			case "login":
				login({ variables: { email: email, password: password } });
				break;
			case "register":
				register({
					variables: { name: name, email: email, password: password },
				});
				break;
			default:
				return;
		}
	};
	if (
		data ||
		(registerData && !loading && !registerLoading && !error && !registerError)
	) {
		localStorage.setItem(
			"token",
			data ? data.login.token : registerData.register.token,
		);
		localStorage.setItem(
			"user",
			data ? JSON.stringify(data.login) : JSON.stringify(registerData.register),
		);
	}

	if (data || registerData) {
		toast.success(`${data ? "Login" : "Register"}` + " successful", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
	if (error || registerError) {
		console.log(error);
		toast.error(`${error?.message || registerError?.message}`, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
	// if (!loading && !error ) {

	// }
	return (
		<>
			<div className={styles.container}>
				{localStorage.getItem("token") ? (
					<WellcomeMessage />
				) : (
					<form onSubmit={handleSubmitform} className={styles.form}>
						{form === "register" && (
							<label className={styles.label}>
								{t("Auth.Forms.name")}
								<input
									placeholder={t("Auth.Forms.placeholderName")}
									className={styles.input}
									name="name"
									type="text"
								/>
							</label>
						)}
						<label className={styles.label}>
							{t("Auth.Forms.email")}
							<input
								placeholder={t("Auth.Forms.placeholderEmail")}
								className={styles.input}
								name="email"
								type="email"
							/>
						</label>
						<label className={styles.label}>
							{t("Auth.Forms.password")}
							<input
								placeholder={t("Auth.Forms.placeholderPassword")}
								className={styles.input}
								name="password"
								type="password"
							/>
						</label>
						<button className={styles.button} type="submit">
							<span>{t("Auth.Forms.submit")}</span>
						</button>
					</form>
				)}
			</div>
			{loading && <div>Loading...</div>}
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};
