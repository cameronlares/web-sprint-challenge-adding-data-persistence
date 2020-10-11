
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Shopify", description: 'Build a Shopify Site', completed: true},
        {name: "Create an Ad", description: 'Ad Campaign', completed: false},
        {name: "Lambda School", description: 'Finish Lambda School', completed: true}
      ]);
    });
};
