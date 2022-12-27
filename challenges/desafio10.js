db.produtos.find({
  valoresNutricionais: { $elemMatch: {
    tipo: "proteínas",
    $and: [{ quantidade: { $gte: 30 } }, { quantidade: { $lte: 40 } }],
  } } },
  { nome: 1, _id: 0 });
