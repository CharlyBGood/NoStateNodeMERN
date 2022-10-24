export const getUsers = async (req, res) => await res.json({ message: [] });

export const createUser = async (req, res) =>
  await res.json({ message: "User created!!" });

export const deleteUser = async (req, res) =>
  await res.json({ message: "User deleted" });
