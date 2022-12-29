db.produtos.updateOne(
  {},
  { $unset: { curtidas: "" } },
);

db.produtos.find(
  { nome: { $nin: ["Big Mac"] } },
  { nome: 1, curtidas: 1, _id: 0 },
);