const authenticateUser = (req, res, next) => {
  const users = [
    { username: "21ce117", password: "123" },
    { username: "21ce", password: "456" },
  ];

  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send("Unauthorized user.");
  }
};

module.exports = { authenticateUser };
