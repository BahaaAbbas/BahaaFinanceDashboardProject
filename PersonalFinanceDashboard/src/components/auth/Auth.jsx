const USERS_KEY = "users";

// Save user to localStorage
export const signUp = (fullName, email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  if (users.some(user => user.email === email)) {
    throw new Error("User already exists!");
  }
  users.push({ fullName, email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Validate login credentials
export const logIn = (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    throw new Error("Invalid email or password!");
  }
};

// Check if the user exists
export const userExists = (email) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  return users.some(user => user.email === email);
};
