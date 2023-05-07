import * as SQLite from 'expo-sqlite';

// create or open a SQLite database
const db = SQLite.openDatabase('mydatabase.db');

// create the category table
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, logo TEXT, type TEXT);'
  );
});

// CRUD operations on the category table

// create a new category
const addCategory = (name, logo, type) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO category (name, logo, type) VALUES (?, ?, ?);',
      [name, logo, type],
      (_, { insertId }) => {
        console.log(`New category added with ID: ${insertId}`);
      },
      (_, error) => {
        console.log(`Failed to add category: ${error}`);
      }
    );
  });
};

// read all categories
const getCategories = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM category;',
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

// update a category by id
const updateCategory = (id, name, logo, type) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE category SET name = ?, logo = ?, type = ? WHERE id = ?;',
      [name, logo, type, id],
      () => {
        console.log(`Category with ID ${id} updated successfully`);
      },
      (_, error) => {
        console.log(`Failed to update category with ID ${id}: ${error}`);
      }
    );
  });
};

// delete a category by id
const deleteCategory = (id) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM category WHERE id = ?;',
      [id],
      () => {
        console.log(`Category with ID ${id} deleted successfully`);
      },
      (_, error) => {
        console.log(`Failed to delete category with ID ${id}: ${error}`);
      }
    );
  });
};
export {deleteCategory,updateCategory,}