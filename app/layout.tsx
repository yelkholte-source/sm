import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestion des Étudiants",
  description: "Application de gestion complète des étudiants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <nav style={{ backgroundColor: "#333", color: "white", padding: "1rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <a href="/" style={{ color: "white", marginRight: "2rem", textDecoration: "none" }}>
              Accueil
            </a>
            <a href="/students" style={{ color: "white", marginRight: "2rem", textDecoration: "none" }}>
              Étudiants
            </a>
            <a href="/login" style={{ color: "white", textDecoration: "none" }}>
              Connexion
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
