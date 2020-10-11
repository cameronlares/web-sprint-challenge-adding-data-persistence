exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text("description", 128);
      tbl.boolean("completed").defaultTo(false);
    })

    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("description_resource");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("task", (tbl) => {
      tbl.increments();
      tbl.text("description_task").notNullable();
      tbl.text("Notes");
      tbl.boolean("completed").defaultTo(false).notNullable();
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExist("task")
    .dropTableIfExist("resource")
    .dropTableIfExist("projects");
};
