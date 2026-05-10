interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gold ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
