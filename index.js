import { ITDepartment } from './ITDepartment.js';

const departments = [
  new ITDepartment('Разработка', 25, true, false),
  new ITDepartment('Техподдержка', 10, true, true),
];

departments.forEach((d) => d.show());
