import bcrypt from "bcrypt";

const password = "123";
const passwordComparison = "123";
const saltRounds = 14;

// /auth/signup /auth/register
const hashedPassword = await bcrypt.hash(password, saltRounds);

// /auth/login
const passwordIsSame = await bcrypt.compare(passwordComparison, hashedPassword);

console.log(hashedPassword);
console.log(passwordIsSame);
