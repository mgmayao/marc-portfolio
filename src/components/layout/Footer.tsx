import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-200/60 py-10 dark:border-white/5">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-ink-500 dark:text-ink-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.</p>
      </Container>
    </footer>
  );
}
