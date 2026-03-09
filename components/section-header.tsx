import { FadeInUp } from "./motion-wrapper"

export function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <FadeInUp>
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
          {description}
        </p>
      </FadeInUp>
    </div>
  )
}
