import { NextRequest, NextResponse } from "next/server";
import { studentService } from "@/app/services/studentService";

export async function GET() {
  try {
    const students = studentService.getAllStudents();
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address, enrollmentDate } = body;

    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "Prénom et nom sont requis" },
        { status: 400 }
      );
    }

    const student = studentService.addStudent({
      firstName,
      lastName,
      email: email || "",
      phone: phone || "",
      address: address || "",
      enrollmentDate: enrollmentDate || new Date().toISOString().split("T")[0],
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("Erreur POST:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création" },
      { status: 500 }
    );
  }
}
