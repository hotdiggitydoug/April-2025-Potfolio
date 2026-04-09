import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Avoid webpack occasionally referencing a missing `vendor-chunks/tailwind-merge.js` on
  // server routes that import `@/lib/utils` (e.g. `/work/[slug]` via Enterprise AI case study).
  // `lucide-react` cannot be listed here — it conflicts with Next's default transpilation.
  serverExternalPackages: ['tailwind-merge'],
}

export default nextConfig
