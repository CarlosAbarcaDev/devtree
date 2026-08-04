import bcript from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcript.genSalt(10);
  return await bcript.hash(password, salt);
};

export const checkPassword = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcript.compare(password, hashedPassword);
};
