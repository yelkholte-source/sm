class StudentService {
  private students: any[] = [];
  private nextId = 1;

  addStudent(student: any) {
    const s = { id: this.nextId++, ...student };
    this.students.push(s);
    return s;
  }

  getAllStudents() {
    return this.students;
  }

  getStudent(id: number) {
    return this.students.find((s) => s.id === id);
  }

  updateStudent(id: number, data: any) {
    const idx = this.students.findIndex((s) => s.id === id);
    if (idx === -1) return null;
    this.students[idx] = { ...this.students[idx], ...data };
    return this.students[idx];
  }

  deleteStudent(id: number) {
    const idx = this.students.findIndex((s) => s.id === id);
    if (idx === -1) return null;
    const deleted = this.students.splice(idx, 1);
    return deleted[0];
  }
}

export const studentService = new StudentService();
