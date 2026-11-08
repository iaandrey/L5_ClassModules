
export class Department {

  #name;
  #employeeCount;
  #isActive;
  #deleted = false;

  constructor(name, employeeCount, isActive) {
    this.#name = name;
    this.#employeeCount = employeeCount;
    this.#isActive = isActive;
  }

  get name() {
    this.#assertAlive();
    return this.#name;
  }
  set name(value) {
    this.#assertAlive();
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError('name должен быть непустой строкой');
    }
    this.#name = value;
  }

  get employeeCount() {
    this.#assertAlive();
    return this.#employeeCount;
  }
  set employeeCount(value) {
    this.#assertAlive();
    if (!Number.isInteger(value) || value < 0) {
      throw new TypeError('employeeCount должен быть целым числом >= 0');
    }
    this.#employeeCount = value;
  }

  get isActive() {
    this.#assertAlive();
    return this.#isActive;
  }
  set isActive(value) {
    this.#assertAlive();
    if (typeof value !== 'boolean') {
      throw new TypeError('isActive должен быть boolean');
    }
    this.#isActive = value;
  }

  show() {
    this.#assertAlive();
    console.log(
      `Отдел: name=${this.#name}, employeeCount=${this.#employeeCount}, isActive=${this.#isActive}`
    );
  }

  delete() {
    this.#assertAlive();
    this.#name = undefined;
    this.#employeeCount = undefined;
    this.#isActive = undefined;
    this.#deleted = true;
  }

  copy() {
    this.#assertAlive();
    return this;
  }

  #close() {
    this.#isActive = false;
    this.#employeeCount = 0;
  }

  closeDepartment() {
    this.#assertAlive();
    this.#close();
  }

  #assertAlive() {
    if (this.#deleted) {
      throw new Error('Экземпляр удалён, доступ невозможен');
    }
  }

  get isDeleted() {
    return this.#deleted;
  }

  static clone(department) {
    return new Department(department.name, department.employeeCount, department.isActive);
  }
}
