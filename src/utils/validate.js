export const validator = (name, email, password) => {
    const errors = { name: "", email: "", password: "" };
  
    if (name !== undefined && (!name || name.trim().length < 3)) {
      errors.name = "Name must be at least 3 characters.";
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Email is not valid.";
    }
     const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
    if (!password || !passwordRegex.test(password)) {
      errors.password = "Password must be valid.";
    }
  
    return errors; // ✅ always return an object
  };
  