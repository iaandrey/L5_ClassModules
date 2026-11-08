
import { Department } from './Department.js';

export class ITDepartment extends Department {
  #isRemote;

  constructor(name, employeeCount, isActive, isRemote) {
    super(name, employeeCount, isActive);
    this.#isRemote = isRemote;
  }

  get isRemote() {
    this.#assertAlive();
    return this.#isRemote;
  }
  set isRemote(value) {
    this.#assertAlive();
    if (typeof value !== 'boolean') {
      throw new TypeError('isRemote должен быть boolean');
    }
    this.#isRemote = value;
  }

  closeDepartment() {
    throw new Error('У ITDepartment нет метода закрытия отдела');
  }

  #assertAlive() {
    if (this.isDeleted) {
      throw new Error('Экземпляр удалён, доступ невозможен');
    }
  }

  show() {
    super.show();
    console.log(`  isRemote=${this.#isRemote}`);
  }

  delete() {
    super.delete();
    this.#isRemote = undefined;
  }

  copy() {
    this.#assertAlive();
    return this;
  }

  static clone(department) {
    return new ITDepartment(
      department.name,
      department.employeeCount,
      department.isActive,
      department.isRemote
    );
  }
}
