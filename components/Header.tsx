import Link from 'next/link';

export function Header() {
  return (
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
  );
}
