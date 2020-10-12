
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description_task: "Run a FB ad Campaign", Notes: 'Ran a FB Ad', completed: true, task_id:2},
        {description_task: "Create a Landing Page for Shopify", Notes: 'Buy a domain name', completed:false, task_id:1}
      ]);
    });
};
