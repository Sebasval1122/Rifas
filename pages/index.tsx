import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mi Boleta - Rifas</title>
      </Head>
      <header className="site-header">
        <h1>Mi Boleta</h1>
        <nav>
          <Link href="/">Dashboard</Link>
          {' | '}
          <Link href="/tickets">Tickets</Link>
          {' | '}
          <Link href="/auth/login">Login</Link>
        </nav>
      </header>
      <main className="container">
        <section>
          <h2>Dashboard</h2>
          <p>Resumen rápido: próximos sorteos, juegos pendientes, estadísticas.</p>
        </section>
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Mi Boleta</footer>
    </div>
  );
}
