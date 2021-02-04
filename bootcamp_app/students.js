const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

const input = process.argv.slice(2);
const cohort = input[0];
const numberOfResults = input[1];

pool.query(`
SELECT cohorts.name AS cohort_name, students.name AS name, students.id AS student_id
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${numberOfResults || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort_name} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));
