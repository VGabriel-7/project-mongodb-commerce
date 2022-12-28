db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $push: {
    vendasPorDia: {
      $each: [60],
      $position: 3,
    }
  } },
);

db.produtos.updateMany(
  { tags: { $in: "bovino" } },
  { $push: {
    vendasPorDia: {
      $each: [120],
      $position: 6,
    }
  } },
);

db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });