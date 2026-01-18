import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Mukesh</h1>
      
      <Link href='/dashboard'>dashboard</Link><br />
      <Link href='/dashboard/settings'>settings</Link>
    </div>
  );
}
