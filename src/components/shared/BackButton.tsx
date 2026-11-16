import Link from "next/link";

interface BackButtonProps {
  fallback?: string;
  label?: string;
}

export default function BackButton({ fallback = "/", label = "Back to home" }: BackButtonProps) {
  return (
    <Link href={fallback} className="inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 transition hover:text-black">
      <span aria-hidden="true">←</span>{label}
    </Link>
  );
}
