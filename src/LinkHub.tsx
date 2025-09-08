import {
  Github,
  Linkedin,
  Link as LinkIcon,
  Instagram,
  Twitter,
  Globe,
  FileText,
  Mail,
  Facebook,
} from "lucide-react";
import { useMemo } from "react";

export default function LinkHub() {
  const profile = useMemo(
    () => ({
      name: "Oriade Yusuf",
      title: "Frontend Engineer • React / TS",
      location: "Lagos, Nigeria",
      email: "oriadeyusuf34@gmail.com",
      avatarUrl: "",
      links: [
        {
          label: "🌐 Portfolio",
          href: "https://crownolar-portfolio.surge.sh/",
          icon: Globe,
          accent: "from-indigo-500 to-violet-500",
        },
        {
          label: "📄 Resume / CV",
          href: "#",
          icon: FileText,
          accent: "from-emerald-500 to-teal-500",
        },
        {
          label: "GitHub",
          href: "https://github.com/Crownolar?tab=repositories",
          icon: Github,
          accent: "from-zinc-600 to-slate-700",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/oriade-yusuf-50t50/r",
          icon: Linkedin,
          accent: "from-sky-500 to-blue-600",
        },
        {
          label: "X (Twitter)",
          href: "https://x.com/yusuforiade1",
          icon: Twitter,
          accent: "from-neutral-700 to-black",
        },
        {
          label: "Facebook",
          href: "https://web.facebook.com/olamilekanoriade500",
          icon: Facebook,
          accent: "from-blue-600 to-blue",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/olar_crown/",
          icon: Instagram,
          accent: "from-pink-500 to-rose-500",
        },
        {
          label: "Contact",
          href: "mailto:oriadeyusuf34@gmail.com",
          icon: Mail,
          accent: "from-amber-500 to-orange-500",
        },
      ],
    }),
    []
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_100%_-10%,hsl(250_85%_10%/.35),transparent),radial-gradient(800px_500px_at_-10%_0%,hsl(270_85%_15%/.35),transparent),linear-gradient(180deg,hsl(248_64%_6%),hsl(248_64%_6%))] text-white">
      <section className="max-w-xl mx-auto px-6 pt-16 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr from-indigo-600/40 to-violet-600/40 blur-3xl" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/20"
                />
              ) : (
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 ring-1 ring-white/20 grid place-items-center text-2xl font-bold">
                  {initials(profile.name)}
                </div>
              )}
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-1 text-sm sm:text-base text-white/70">
                  {profile.title}
                </p>
                <p className="mt-1 text-xs text-white/50">{profile.location}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={profile.links[0].href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <LinkIcon className="h-4 w-4" />
                <span className="truncate">{profile.links[0].label}</span>
              </a>
            </div>
          </div>
        </div>
        <ul className="mt-8 grid gap-4">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-2xl border border-white/10 bg-white/5 p-[2px] focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <div
                  className={`relative overflow-hidden rounded-[14px] bg-gradient-to-r ${link.accent}`}
                >
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(1200px_200px_at_0%_0%,white,transparent)]" />
                  <div className="relative flex items-center gap-3 px-4 py-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-medium tracking-tight drop-shadow-sm">
                        {link.label}
                      </p>
                      <p className="text-xs text-white/80 truncate">
                        {cleanUrl(link.href)}
                      </p>
                    </div>
                    <span className="ml-auto text-sm opacity-0 transition-opacity group-hover:opacity-100">
                      Open ↗
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <footer className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="hidden sm:block">Built with React + Tailwind</p>
        </footer>
      </section>
    </main>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "C";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "O";
  return (first + last).toUpperCase();
}

function cleanUrl(url: string) {
  try {
    const u = new URL(url);
    return u.host + (u.pathname !== "/" ? u.pathname : "");
  } catch {
    return url;
  }
}
