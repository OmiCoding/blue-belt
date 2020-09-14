db.createUser({
  user: "useromi",
  pwd: "omipublic123",
  roles: [
    { role: "readWrite", db: "blubelt" },
    { role: "dbAdmin", db: "blubelt" },
  ],
  mechanisms: ["SCRAM-SHA-256"],
})
