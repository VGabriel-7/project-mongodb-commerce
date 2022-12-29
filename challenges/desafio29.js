db.produtos.updateOne(
  { nome: "" },
  { $rename: { descricao: "descricaoSite" } },
);