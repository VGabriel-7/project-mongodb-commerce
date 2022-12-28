db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: { $type: "date" } } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, avaliacao: 1, _id: 0 },
);