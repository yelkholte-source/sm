"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  enrollmentDate: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/students");
      if (!response.ok) throw new Error("Erreur lors de la récupération");
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id: number) => {
    if (!confirm("Supprimer cet étudiant?")) return;

    try {
      const response = await fetch(`/api/students/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Erreur lors de la suppression");
      setStudents(students.filter((s) => s.id !== id));
      alert("Étudiant supprimé");
    } catch (err) {
      alert("Erreur lors de la suppression");
    }
  };

  return (
    <main>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1>Liste des Étudiants</h1>
          <Link href="/students/new">
            <button>Ajouter un étudiant</button>
          </Link>
        </div>

        {error && <div className="alert error">{error}</div>}

        {loading ? (
          <p>Chargement...</p>
        ) : students.length === 0 ? (
          <p>Aucun étudiant à afficher.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <div className="action-buttons">
                      <Link href={`/students/${student.id}/edit`}>
                        <button>Modifier</button>
                      </Link>
                      <button className="danger" onClick={() => deleteStudent(student.id)}>
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
