db.produtos.countDocuments({
  infredientes: { $size: 4 },
});