import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return <><Navbar /><main className="mx-auto max-w-4xl px-6 py-24"><p className="font-mono text-sm text-neutral-500">404 / Page not found</p><h1 className="mt-6 text-5xl font-black tracking-tight">This page isn&apos;t available.</h1><p className="mt-6 text-lg text-neutral-600">The link may be outdated. Browse the current project catalog or return home.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/projects" className="inline-flex min-h-12 items-center rounded-lg bg-black px-6 font-semibold text-white">Browse projects →</Link><Link href="/" className="inline-flex min-h-12 items-center rounded-lg border border-neutral-300 px-6 font-semibold">Back to home</Link></div></main><Footer /></>;
}
