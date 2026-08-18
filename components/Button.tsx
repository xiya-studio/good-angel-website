type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#dbe8b4] text-[#304b35] hover:-translate-y-0.5"
      : "border border-white text-white hover:bg-white hover:text-[#304b35]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
