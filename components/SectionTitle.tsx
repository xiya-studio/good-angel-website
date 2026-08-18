type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-semibold tracking-[0.25em] text-[#7a8b52]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#304b35]">{title}</h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
