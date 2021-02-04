SELECT DISTINCT(cohorts.name) AS cohort_name, COUNT(*) AS student_count
FROM students
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohort_id, cohorts.name
HAVING COUNT(*) >= 18
ORDER BY COUNT(*);