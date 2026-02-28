export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Bienvenue!</h1>
        <p>Application de gestion des étudiants - Version 1.0</p>
        <a href="/students" style={{display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#0070f3", color: "white", textDecoration: "none", borderRadius: "4px"}}>
          Vers la liste des étudiants
        </a>
      </div>
    </main>
  );
}
