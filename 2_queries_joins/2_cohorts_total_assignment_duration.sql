SELECT SUM(duration)
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON students.id = student_id
WHERE cohorts.name = 'FEB12'
