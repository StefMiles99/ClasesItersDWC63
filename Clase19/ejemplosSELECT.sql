-- Active: 1665537141988@@containers-us-west-94.railway.app@6814@railway
SELECT 
    *
FROM profesores;
-- WHERE ID = 'ABC' TIENE QUE SER ESPECIFICAMENTE ABC
-- WHERE ID LIKE 'A%' INICIA CON A
-- WHERE ID LIKE '%A' TERMINA CON A
-- WHERE ID LIKE '%IPHONE%' CONTIENE A en cualquier posicion


SELECT 
    cursos.*,
    profesores.NOMBRE,
    profesores.APELLIDOS
FROM cursos
JOIN profesores
ON cursos.ID_PROFESOR = profesores.ID;



SELECT 
    profesores.ID,
    profesores.NOMBRE,
    profesores.APELLIDOS,
    SUM(cursos.HORAS) AS `TOTAL DE HORAS`
FROM cursos
JOIN profesores
ON cursos.ID_PROFESOR = profesores.ID
GROUP BY 
    profesores.ID,
    profesores.NOMBRE,
    profesores.APELLIDOS;

SELECT 
    SUM(HORAS)
FROM cursos