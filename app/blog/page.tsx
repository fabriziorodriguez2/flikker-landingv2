import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

type Post = {
  slug?: string;
  category: string;
  readMin: number;
  date: string;
  title: string;
  excerpt: string;
  imageSrc?: string;
  imageBg?: string;
  href: string;
  visual?: React.ReactNode;
};

/* ── Ilustraciones para los 3 posts ── */

function VisualNegativeReview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="w-full max-w-[210px] space-y-2">
        {/* Reseña negativa */}
        <div className="rounded-xl bg-white/10 px-4 py-3">
          <div className="flex gap-0.5 text-[15px] leading-none">
            <span className="text-yellow-400">★</span>
            <span className="text-white/20">★★★★</span>
          </div>
          <p className="mt-1.5 text-[10px] leading-[1.5] text-white/50">
            "El servicio tardó más de lo esperado..."
          </p>
        </div>
        {/* Respuesta */}
        <div className="ml-4 rounded-xl border border-white/10 bg-white/6 px-4 py-3">
          <p className="text-[9px] font-bold uppercase tracking-wider text-periwinkle">
            Tu respuesta
          </p>
          <p className="mt-1 text-[10px] leading-[1.5] text-white/55">
            "Gracias por el feedback. Ya tomamos nota y te contactamos para resolverlo."
          </p>
        </div>
      </div>
    </div>
  );
}

function VisualRecurrence() {
  const bars = [38, 52, 61, 74, 90];
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-end px-8 pb-7">
      <div className="flex w-full items-end justify-center gap-2.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-lg transition-all"
            style={{
              height: h,
              background:
                i === bars.length - 1
                  ? "#4ade80"
                  : `rgba(255,255,255,${0.1 + i * 0.05})`,
            }}
          />
        ))}
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-white/30">
        Recurrencia mensual
      </p>
    </div>
  );
}

function VisualGoogleReviews() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <p className="font-display text-[64px] font-black leading-none tracking-tight text-white">
          4.9
        </p>
        <div className="mt-1 flex justify-center gap-0.5 text-[20px] leading-none text-yellow-400">
          ★★★★★
        </div>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
          Google Reviews
        </p>
      </div>
    </div>
  );
}

/* ── Datos ── */

const FEATURED: Post = {
  slug: "gains",
  category: "Casos de Éxito",
  readMin: 4,
  date: "16 May 2026",
  title: "Gains: de 8 a 55 reseñas, +37% de conversión y 3.5x ROI en 30 días",
  excerpt:
    "Cómo una tienda de ropa deportiva de Montevideo automatizó su reputación en Google sin cambiar nada de su operación diaria.",
  imageSrc: "/gains-logo.png",
  imageBg: "#0a0a0a",
  href: "/casos/gains",
};

const POSTS: Post[] = [
  {
    category: "Estrategia",
    readMin: 5,
    date: "10 May 2026",
    title: "Cómo responder reseñas negativas sin perder clientes",
    excerpt:
      "Una mala reseña no es el fin. Con la respuesta correcta, podés convertirla en prueba de que tu negocio sabe escuchar y mejorar.",
    imageBg: "#1a1a2e",
    href: "/blog/resenas-negativas",
    visual: <VisualNegativeReview />,
  },
  {
    category: "Guía",
    readMin: 6,
    date: "2 May 2026",
    title: "5 formas de aumentar la recurrencia en tu local sin descuentos",
    excerpt:
      "La fidelización no siempre pasa por bajar precios. Acá van cinco tácticas que funcionan en negocios físicos de Latinoamérica.",
    imageBg: "#0a1f0a",
    href: "/blog/recurrencia",
    visual: <VisualRecurrence />,
  },
  {
    category: "Estrategia",
    readMin: 4,
    date: "28 Abr 2026",
    title: "Por qué Google Reviews es el activo más subestimado de tu negocio",
    excerpt:
      "El 87% de los consumidores lee reseñas antes de visitar un local. Acá te explicamos cómo sacarle el máximo partido.",
    imageBg: "#1c0f00",
    href: "/blog/google-reviews",
    visual: <VisualGoogleReviews />,
  },
];

/* ── Sub-componentes ── */

function CategoryPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-neutral-800 shadow-sm">
      {label}
    </span>
  );
}

function PostMeta({ readMin, date, center }: { readMin: number; date: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 text-[12px] text-neutral-400 ${center ? "justify-center sm:justify-start" : ""}`}>
      <Clock className="h-3 w-3" strokeWidth={2} />
      <span>{readMin} min</span>
      <span>·</span>
      <span>{date}</span>
    </div>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="group grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr]">
      {/* Image */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ background: post.imageBg ?? "#111", minHeight: 280 }}
      >
        <div className="absolute left-3 top-3 z-10">
          <CategoryPill label={post.category} />
        </div>
        {post.imageSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={post.imageSrc}
              alt={post.title}
              width={120}
              height={120}
              className="rounded-2xl object-contain opacity-90"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Content — centered on mobile, left on desktop */}
      <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
        <PostMeta readMin={post.readMin} date={post.date} />
        <h2 className="font-display mt-3 text-[26px] font-black leading-[1.1] tracking-[-0.02em] text-neutral-900 transition-colors group-hover:text-periwinkle md:text-[30px]">
          {post.title}
        </h2>
        {post.slug === "gains" && (
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-[52px] font-black leading-none tracking-tight text-periwinkle">
              3.5x
            </span>
            <span className="text-[14px] font-semibold text-neutral-500">retorno sobre la inversión</span>
          </div>
        )}
        <p className="mt-3 text-[15px] leading-[1.65] text-neutral-500">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-neutral-900 transition-colors group-hover:text-periwinkle">
          Leer artículo
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

function SmallPost({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="group flex flex-col items-center text-center sm:items-start sm:text-left">
      {/* Image */}
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ background: post.imageBg ?? "#111", height: 180 }}
      >
        <div className="absolute left-3 top-3 z-10">
          <CategoryPill label={post.category} />
        </div>
        {post.visual}
        {post.imageSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={post.imageSrc}
              alt={post.title}
              width={80}
              height={80}
              className="rounded-xl object-contain"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 w-full">
        <PostMeta readMin={post.readMin} date={post.date} center />
        <h3 className="mt-2 text-[15px] font-bold leading-[1.3] text-neutral-900 transition-colors group-hover:text-periwinkle">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-[1.6] text-neutral-500">
          {post.excerpt}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-neutral-900 transition-colors group-hover:text-periwinkle">
          Leer más
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

/* ── Página ── */

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-32 pb-24 md:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Header — centered on mobile */}
          <div className="flex flex-col items-center text-center gap-2 md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
                Recursos
              </span>
              <h1 className="font-display mt-2 text-[40px] font-black leading-[1.0] tracking-[-0.02em] text-neutral-900 md:text-[56px]">
                Últimas novedades
              </h1>
            </div>
            <p className="max-w-xs text-[14px] leading-[1.6] text-neutral-400 md:text-right">
              Recursos, guías y estrategias para hacer crecer tu negocio con fidelización.
            </p>
          </div>

          {/* Featured */}
          <div className="mt-12">
            <FeaturedPost post={FEATURED} />
          </div>

          {/* Divider */}
          <hr className="my-14 border-neutral-100" />

          {/* Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <SmallPost key={post.title} post={post} />
            ))}
          </div>

          {/* Pricing teaser */}
          <section id="precios" className="mt-20 scroll-mt-24">
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 px-8 py-10 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
                Precios
              </span>
              <h2 className="font-display mt-3 text-[28px] font-black leading-[1.1] tracking-[-0.02em] text-neutral-900">
                Un solo plan. Todo incluido.
              </h2>
              <p className="mt-2 text-base text-neutral-500">
                Desde <span className="font-bold text-neutral-900">$2.900/mes</span> · Sin instalación · Sin letra chica.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/planes"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 px-6 py-3 text-[14px] font-semibold text-neutral-700 transition-colors hover:bg-white"
                >
                  Ver planes completos
                </Link>
                <Link
                  href="/#precios"
                  className="inline-flex items-center justify-center rounded-2xl bg-periwinkle px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Quiero empezar
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
