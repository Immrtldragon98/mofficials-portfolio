import { ReactNode } from "react";

interface SectionProps {
  number?: string;
  label?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function Section({
  number,
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 lg:px-12 lg:py-20 ${className}`}
    >
      {(number || label || title || description) && (
        <div className="grid gap-6 border-b border-neutral-200 pb-8 lg:grid-cols-[180px_1fr]">
          <div className="flex items-start gap-4">
            {number && (
              <span className="font-mono text-xs text-neutral-400">
                {number}
              </span>
            )}

            {label && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                {label}
              </span>
            )}
          </div>

          <div>
            {title && (
              <h2 className="text-3xl font-black tracking-[-0.04em] text-neutral-950 md:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      {children && <div className="pt-8">{children}</div>}
    </section>
  );
}