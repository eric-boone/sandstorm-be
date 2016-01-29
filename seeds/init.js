
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('sandyclean').insert({
      name: "alex",
      email: "alex@gmail.com",
      quantity: "3"
    }),
    knex('sandyclean').insert({
      name: "eric",
      email: "eric@gmail.com",
      quantity: "5"
    })
  ]);
};
