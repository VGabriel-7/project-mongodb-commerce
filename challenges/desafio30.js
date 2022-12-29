db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

db.produtos.find(
  { nome: { $nin: ["Big Mac"] } },
  { nome: 1, curtidas: 1, _id: 0 },
);