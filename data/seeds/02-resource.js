
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: "Need Ad tool to get job done", description_resource: 'Will be using FB ads', resource_id:2},
        {name: "Using Canvas", description_resource: 'Learning how to use Canvas ', resource_id:3},
        {name: "Shopify theme creator", description_resource: 'Understand how to design a shopfiy theme ', resource_id:1},
   
      ]);
    });
};
