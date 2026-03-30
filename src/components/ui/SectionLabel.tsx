interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-[2px] w-6 bg-[var(--color-accent)]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {label}
      </span>
    </div>
  );
}

