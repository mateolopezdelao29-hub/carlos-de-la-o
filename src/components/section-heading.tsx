import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/** Encabezado de sección con eyebrow naranja + título display. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow", align === "center" && "justify-center")}>
        {eyebrow}
      </p>
      <h2 className="heading-display mt-5 text-3xl leading-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-tinta-mute">
          {description}
        </p>
      )}
    </Reveal>
  );
}
