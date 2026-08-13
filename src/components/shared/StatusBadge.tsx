interface Props {
  status: "Completed" | "Building" | "Planned";
}

const colors = {
  Completed:
    "bg-green-100 text-green-700",

  Building:
    "bg-blue-100 text-blue-700",

  Planned:
    "bg-neutral-200 text-neutral-700",
};

export default function StatusBadge({
  status,
}: Props) {
  return (
    <span
      className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider ${colors[status]}`}
    >
      {status}
    </span>
  );
}