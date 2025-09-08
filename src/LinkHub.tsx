import { useEffect, useState, useMemo } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  FileText,
  Mail,
  Facebook,
  Sun,
  Moon,
} from "lucide-react";

export default function LinkHub() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.title = "Oriade Yusuf | Profile";

    const favicon = document.getElementById("favicon") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/Profile2.jpg";
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.id = "favicon";
      newFavicon.rel = "icon";
      newFavicon.type = "image/png";
      newFavicon.href = "/Profile2.jpg";
      document.head.appendChild(newFavicon);
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const profile = useMemo(
    () => ({
      name: "Oriade Yusuf",
      title: "Frontend Engineer • React / TS",
      location: "Lagos, Nigeria",
      email: "oriadeyusuf34@gmail.com",
      avatarUrl: "./Profile2.jpg",
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
          accent: "from-blue-500 to-blue-700",
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
    <main className="min-h-screen bg-white text-black dark:bg-[radial-gradient(1200px_600px_at_100%_-10%,hsl(250_85%_10%/.35),transparent),radial-gradient(800px_500px_at_-10%_0%,hsl(270_85%_15%/.35),transparent),linear-gradient(180deg,hsl(248_64%_6%),hsl(248_64%_6%))] dark:text-white transition-colors">
      <section className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 p-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10 transition"
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 shadow-lg backdrop-blur-md">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl sm:rounded-2xl object-cover ring-1 ring-black/10 dark:ring-white/20"
                />
              ) : (
                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 ring-1 ring-black/10 dark:ring-white/20 grid place-items-center text-lg sm:text-2xl md:text-3xl font-bold text-white">
                  {initials(profile.name)}
                </div>
              )}
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 dark:text-white/70">
                  {profile.title}
                </p>
                <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-white/50">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-6 grid gap-2 sm:gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-xl sm:rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-[1px] sm:p-[2px] focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <div
                  className={`relative overflow-hidden rounded-lg sm:rounded-[14px] bg-gradient-to-r ${link.accent}`}
                >
                  <div className="relative flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4">
                    <div className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg sm:rounded-xl bg-white/15 ring-1 ring-black/10 dark:ring-white/20">
                      <link.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-medium truncate">
                        {link.label}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/80 truncate">
                        {cleanUrl(link.href)}
                      </p>
                    </div>
                    <span className="ml-auto text-[10px] sm:text-xs opacity-0 transition-opacity group-hover:opacity-100">
                      Open ↗
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-white/50">
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
