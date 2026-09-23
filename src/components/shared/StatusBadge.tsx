interface Props {
  status: "Completed" | "Building" | "Planned";
}

const colors = {
  Completed:
    "border-neutral-900 bg-neutral-900 text-white",

  Building:
    "border-neutral-400 bg-transparent text-neutral-800",

  Planned:
    "border-neutral-300 bg-neutral-100 text-neutral-600",
};

export default function StatusBadge({
  status,
}: Props) {
  return (
    <span
      className={`inline-flex rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors[status]}`}
    >
      {status}
    </span>
  );
}
