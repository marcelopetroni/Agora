export const isValidName = (name) => {
	const nameRegex = /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$/;
	return nameRegex.test(name);
};

export const isValidEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

export const isValidPassword = (password) => {
	const passwordRegex = /^(?=.*\d).{6,30}$/;
	return passwordRegex.test(password);
};
