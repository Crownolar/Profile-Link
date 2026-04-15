// import { useEffect, useState, useMemo } from "react";
// import {
//   Github,
//   Linkedin,
//   Instagram,
//   Twitter,
//   Globe,
//   FileText,
//   Mail,
//   Facebook,
//   Sun,
//   Moon,
// } from "lucide-react";

// const LinkHub = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     document.title = "Oriade Yusuf | Profile";

//     const favicon = document.getElementById("favicon") as HTMLLinkElement;
//     if (favicon) {
//       favicon.href = "/Profile2.jpg";
//     } else {
//       const newFavicon = document.createElement("link");
//       newFavicon.id = "favicon";
//       newFavicon.rel = "icon";
//       newFavicon.type = "image/png";
//       newFavicon.href = "/Profile2.jpg";
//       document.head.appendChild(newFavicon);
//     }
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       const isDark = savedTheme === "dark";
//       setDarkMode(isDark);
//       document.documentElement.classList.toggle("dark", isDark);
//     } else {
//       const prefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       setDarkMode(prefersDark);
//       document.documentElement.classList.toggle("dark", prefersDark);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const profile = useMemo(
//     () => ({
//       name: "Oriade Yusuf",
//       title: "Frontend Engineer • React / TS",
//       location: "Lagos, Nigeria",
//       email: "oriadeyusuf34@gmail.com",
//       avatarUrl: "./Profile2.jpg",
//       links: [
//         {
//           label: "🌐 Portfolio",
//           href: "https://crownolar-portfolio.surge.sh/",
//           icon: Globe,
//           accent: "from-indigo-500 to-violet-500",
//         },
//         {
//           label: "📄 Resume / CV",
//           href: "/OriadeYusufCV.pdf",
//           icon: FileText,
//           accent: "from-emerald-500 to-teal-500",
//         },
//         {
//           label: "GitHub",
//           href: "https://github.com/Crownolar?tab=repositories",
//           icon: Github,
//           accent: "from-zinc-600 to-slate-700",
//         },
//         {
//           label: "LinkedIn",
//           href: "https://www.linkedin.com/in/oriade-yusuf-50t50/r",
//           icon: Linkedin,
//           accent: "from-sky-500 to-blue-600",
//         },
//         {
//           label: "X (Twitter)",
//           href: "https://x.com/yusuforiade1",
//           icon: Twitter,
//           accent: "from-neutral-700 to-black",
//         },
//         {
//           label: "Facebook",
//           href: "https://web.facebook.com/olamilekanoriade500",
//           icon: Facebook,
//           accent: "from-blue-500 to-blue-700",
//         },
//         {
//           label: "Instagram",
//           href: "https://www.instagram.com/olar_crown/",
//           icon: Instagram,
//           accent: "from-pink-500 to-rose-500",
//         },
//         {
//           label: "Contact",
//           href: "mailto:oriadeyusuf34@gmail.com",
//           icon: Mail,
//           accent: "from-amber-500 to-orange-500",
//         },
//       ],
//     }),
//     []
//   );

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/OriadeYusufCV.pdf";
//     link.download = "Oriade_Yusuf_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCVClick = () => {
//     setShowPopup(true);
//     setTimeout(() => {
//       handleDownload();
//       setShowPopup(false);
//     }, 3000);
//   };

//   return (
//     <main className="min-h-screen bg-white text-black dark:bg-[radial-gradient(1200px_600px_at_100%_-10%,hsl(250_85%_10%/.35),transparent),radial-gradient(800px_500px_at_-10%_0%,hsl(270_85%_15%/.35),transparent),linear-gradient(180deg,hsl(248_64%_6%),hsl(248_64%_6%))] dark:text-white transition-colors">
//       <section className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="mb-6 p-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10 transition"
//         >
//           {darkMode ? (
//             <Sun className="h-5 w-5" />
//           ) : (
//             <Moon className="h-5 w-5" />
//           )}
//         </button>

//         <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 shadow-lg backdrop-blur-md">
//           <div className="p-4 sm:p-6 md:p-8">
//             <div className="flex flex-wrap items-center gap-2 sm:gap-4">
//               {profile.avatarUrl ? (
//                 <img
//                   src={profile.avatarUrl}
//                   alt={profile.name}
//                   className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl sm:rounded-2xl object-cover ring-1 ring-black/10 dark:ring-white/20"
//                 />
//               ) : (
//                 <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 ring-1 ring-black/10 dark:ring-white/20 grid place-items-center text-lg sm:text-2xl md:text-3xl font-bold text-white">
//                   {initials(profile.name)}
//                 </div>
//               )}
//               <div className="min-w-0">
//                 <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
//                   {profile.name}
//                 </h1>
//                 <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 dark:text-white/70">
//                   {profile.title}
//                 </p>
//                 <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-white/50">
//                   {profile.location}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <ul className="mt-6 grid gap-2 sm:gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {profile.links.map((link) => (
//             <li key={link.label}>
//               {link.label === "📄 Resume / CV" ? (
//                 <button
//                   onClick={handleCVClick}
//                   className="group w-full text-left block rounded-xl sm:rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-[1px] sm:p-[2px] focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//                 >
//                   <div
//                     className={`relative overflow-hidden rounded-lg sm:rounded-[14px] bg-gradient-to-r ${link.accent}`}
//                   >
//                     <div className="relative flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4">
//                       <div className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg sm:rounded-xl bg-white/15 ring-1 ring-black/10 dark:ring-white/20">
//                         <link.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <p className="text-sm sm:text-base font-medium truncate">
//                           {link.label}
//                         </p>
//                         <p className="text-[10px] sm:text-xs text-white/80 truncate">
//                           {cleanUrl(link.href)}
//                         </p>
//                       </div>
//                       <span className="ml-auto text-[10px] sm:text-xs opacity-0 transition-opacity group-hover:opacity-100">
//                         Download ↗
//                       </span>
//                     </div>
//                   </div>
//                 </button>
//               ) : (
//                 <a
//                   href={link.href}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="group block rounded-xl sm:rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-[1px] sm:p-[2px] focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//                 >
//                   <div
//                     className={`relative overflow-hidden rounded-lg sm:rounded-[14px] bg-gradient-to-r ${link.accent}`}
//                   >
//                     <div className="relative flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4">
//                       <div className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg sm:rounded-xl bg-white/15 ring-1 ring-black/10 dark:ring-white/20">
//                         <link.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <p className="text-sm sm:text-base font-medium truncate">
//                           {link.label}
//                         </p>
//                         <p className="text-[10px] sm:text-xs text-white/80 truncate">
//                           {cleanUrl(link.href)}
//                         </p>
//                       </div>
//                       <span className="ml-auto text-[10px] sm:text-xs opacity-0 transition-opacity group-hover:opacity-100">
//                         Open ↗
//                       </span>
//                     </div>
//                   </div>
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>

//         {showPopup && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
//               <p className="text-gray-700 dark:text-gray-200">
//                 Your CV will start downloading in <b>3 seconds</b>.
//               </p>
//               <p className="mt-2">Do you want to download now?</p>
//               <div className="mt-4 flex gap-3 justify-center">
//                 <button
//                   onClick={handleDownload}
//                   className="px-3 py-1 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
//                 >
//                   Download Now
//                 </button>
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <footer className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-white/50">
//           <p>
//             © {new Date().getFullYear()} {profile.name}
//           </p>
//           <p className="hidden sm:block">Built with React + Tailwind</p>
//         </footer>
//       </section>
//     </main>
//   );
// };

// const initials = (name: string) => {
//   const parts = name.trim().split(/\s+/);
//   const first = parts[0]?.[0] ?? "C";
//   const last = parts.length > 1 ? parts[parts.length - 1][0] : "O";
//   return (first + last).toUpperCase();
// };

// const cleanUrl = (url: string) => {
//   try {
//     const u = new URL(url, window.location.origin);
//     return u.host + (u.pathname !== "/" ? u.pathname : "");
//   } catch {
//     return url;
//   }
// };

// export default LinkHub;



// import { useEffect, useMemo, useState } from "react";
// import {
//   Github,
//   Linkedin,
//   Instagram,
//   Twitter,
//   Globe,
//   FileText,
//   Mail,
//   Facebook,
//   Sun,
//   Moon,
//   MapPin,
//   ArrowUpRight,
//   FolderKanban,
//   Sparkles,
// } from "lucide-react";

// const LinkHub = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     document.title = "Oriade Yusuf | Profile";

//     const favicon = document.getElementById("favicon") as HTMLLinkElement;
//     if (favicon) {
//       favicon.href = "/Profile2.jpg";
//     } else {
//       const newFavicon = document.createElement("link");
//       newFavicon.id = "favicon";
//       newFavicon.rel = "icon";
//       newFavicon.type = "image/png";
//       newFavicon.href = "/Profile2.jpg";
//       document.head.appendChild(newFavicon);
//     }
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       const isDark = savedTheme === "dark";
//       setDarkMode(isDark);
//       document.documentElement.classList.toggle("dark", isDark);
//     } else {
//       const prefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       setDarkMode(prefersDark);
//       document.documentElement.classList.toggle("dark", prefersDark);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const profile = useMemo(
//     () => ({
//       name: "Oriade Yusuf",
//       title: "Frontend Engineer • React • TypeScript",
//       subtitle:
//         "Building clean, scalable, and user-focused web applications.",
//       location: "Lagos, Nigeria",
//       email: "oriadeyusuf34@gmail.com",
//       avatarUrl: "./Profile2.jpg",
//       links: [
//         {
//           label: "Portfolio",
//           href: "https://crownolar-portfolio.surge.sh/",
//           icon: Globe,
//           accent:
//             "from-indigo-500 via-violet-500 to-fuchsia-500",
//         },
//         {
//           label: "Resume / CV",
//           href: "/OriadeYusufCV.pdf",
//           icon: FileText,
//           accent: "from-emerald-500 via-teal-500 to-cyan-500",
//           isCV: true,
//         },
//         {
//           label: "GitHub",
//           href: "https://github.com/Crownolar?tab=repositories",
//           icon: Github,
//           accent: "from-zinc-700 to-slate-900",
//         },
//         {
//           label: "LinkedIn",
//           href: "https://www.linkedin.com/in/oriade-yusuf-50t50/r",
//           icon: Linkedin,
//           accent: "from-sky-500 to-blue-700",
//         },
//         {
//           label: "X (Twitter)",
//           href: "https://x.com/yusuforiade1",
//           icon: Twitter,
//           accent: "from-neutral-700 to-black",
//         },
//         {
//           label: "Facebook",
//           href: "https://web.facebook.com/olamilekanoriade500",
//           icon: Facebook,
//           accent: "from-blue-500 to-blue-700",
//         },
//         {
//           label: "Instagram",
//           href: "https://www.instagram.com/olar_crown/",
//           icon: Instagram,
//           accent: "from-pink-500 via-rose-500 to-orange-500",
//         },
//         {
//           label: "Contact",
//           href: "mailto:oriadeyusuf34@gmail.com",
//           icon: Mail,
//           accent: "from-amber-500 to-orange-500",
//         },
//       ],
//       projects: [
//         {
//           name: "LEADCAP",
//           category: "HealthTech Platform",
//           description:
//             "A regulatory and public health platform built to support data collection, monitoring, analysis, and decision-making for health agencies and stakeholders.",
//           href: "#",
//           accent: "from-emerald-500 via-teal-500 to-cyan-500",
//         },
//         {
//           name: "FRED Project",
//           category: "Featured Project",
//           description:
//             "A professional project showcase focused on solving real-world problems with a clean user experience, structured workflows, and scalable frontend architecture.",
//           href: "#",
//           accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
//         },
//       ],
//     }),
//     []
//   );

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/OriadeYusufCV.pdf";
//     link.download = "Oriade_Yusuf_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCVClick = () => {
//     setShowPopup(true);
//     setTimeout(() => {
//       handleDownload();
//       setShowPopup(false);
//     }, 3000);
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-[radial-gradient(1200px_700px_at_100%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(900px_600px_at_-10%_0%,rgba(168,85,247,0.15),transparent),linear-gradient(180deg,#060816,#0b1120)] dark:text-white">
//       <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-14">
//         <div className="mb-8 flex items-center justify-between">
//           <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
//             <Sparkles className="h-4 w-4" />
//             Personal Profile
//           </div>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-[1.03] hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
//             aria-label="Toggle theme"
//           >
//             {darkMode ? (
//               <Sun className="h-5 w-5" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </button>
//         </div>

//         <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_28%)]" />

//           <div className="relative p-6 sm:p-8 md:p-10">
//             <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-start gap-4 sm:gap-5">
//                 {profile.avatarUrl ? (
//                   <img
//                     src={profile.avatarUrl}
//                     alt={profile.name}
//                     className="h-20 w-20 rounded-2xl object-cover ring-1 ring-black/10 sm:h-24 sm:w-24 md:h-28 md:w-28 dark:ring-white/15"
//                   />
//                 ) : (
//                   <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-2xl font-bold text-white ring-1 ring-black/10 sm:h-24 sm:w-24 md:h-28 md:w-28 dark:ring-white/15">
//                     {initials(profile.name)}
//                   </div>
//                 )}

//                 <div className="min-w-0">
//                   <p className="mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-white/10 dark:text-white/70">
//                     Frontend Engineer
//                   </p>

//                   <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
//                     {profile.name}
//                   </h1>

//                   <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-white/75">
//                     {profile.title}
//                   </p>

//                   <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px] dark:text-white/55">
//                     {profile.subtitle}
//                   </p>

//                   <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
//                     <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
//                       <MapPin className="h-4 w-4" />
//                       {profile.location}
//                     </span>

//                     <a
//                       href={`mailto:${profile.email}`}
//                       className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
//                     >
//                       <Mail className="h-4 w-4" />
//                       {profile.email}
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:w-[320px]">
//                 <StatCard label="Projects" value="02+" />
//                 <StatCard label="Stack" value="React / TS" />
//                 <StatCard label="Location" value="Nigeria" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="mt-8">
//           <div className="mb-4 flex items-center justify-between">
//             <div>
//               <h2 className="text-lg font-semibold sm:text-xl">
//                 Quick Links
//               </h2>
//               <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
//                 Socials, portfolio, résumé, and contact.
//               </p>
//             </div>
//           </div>

//           <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//             {profile.links.map((link) => (
//               <li key={link.label}>
//                 {link.isCV ? (
//                   <button
//                     onClick={handleCVClick}
//                     className="group w-full rounded-2xl border border-slate-200 bg-white p-[1px] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
//                   >
//                     <div
//                       className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${link.accent}`}
//                     >
//                       <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />

//                       <div className="relative flex items-center gap-4 px-4 py-4">
//                         <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
//                           <link.icon className="h-5 w-5 text-white" />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="truncate text-sm font-semibold text-white sm:text-base">
//                             {link.label}
//                           </p>
//                           <p className="truncate text-xs text-white/80">
//                             {cleanUrl(link.href)}
//                           </p>
//                         </div>

//                         <ArrowUpRight className="h-4 w-4 text-white/85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                       </div>
//                     </div>
//                   </button>
//                 ) : (
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     rel="noreferrer noopener"
//                     className="group block rounded-2xl border border-slate-200 bg-white p-[1px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
//                   >
//                     <div
//                       className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${link.accent}`}
//                     >
//                       <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />

//                       <div className="relative flex items-center gap-4 px-4 py-4">
//                         <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
//                           <link.icon className="h-5 w-5 text-white" />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="truncate text-sm font-semibold text-white sm:text-base">
//                             {link.label}
//                           </p>
//                           <p className="truncate text-xs text-white/80">
//                             {cleanUrl(link.href)}
//                           </p>
//                         </div>

//                         <ArrowUpRight className="h-4 w-4 text-white/85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                       </div>
//                     </div>
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="mt-10">
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold sm:text-xl">
//               Featured Projects
//             </h2>
//             <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
//               A quick look at selected work and project impact.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2">
//             {profile.projects.map((project) => (
//               <a
//                 key={project.name}
//                 href={project.href}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="group rounded-3xl border border-slate-200 bg-white p-[1px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
//               >
//                 <div className="overflow-hidden rounded-[22px] border border-transparent bg-white dark:bg-white/5">
//                   <div
//                     className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}
//                   />

//                   <div className="p-5 sm:p-6">
//                     <div className="mb-4 flex items-start justify-between gap-4">
//                       <div>
//                         <p className="mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:bg-white/10 dark:text-white/70">
//                           {project.category}
//                         </p>

//                         <h3 className="text-xl font-semibold tracking-tight">
//                           {project.name}
//                         </h3>
//                       </div>

//                       <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:scale-105 dark:bg-white/10 dark:text-white">
//                         <FolderKanban className="h-5 w-5" />
//                       </div>
//                     </div>

//                     <p className="text-sm leading-6 text-slate-600 dark:text-white/65">
//                       {project.description}
//                     </p>

//                     <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-white/85">
//                       View project
//                       <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {showPopup && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//             <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-2xl dark:border-white/10 dark:bg-slate-900">
//               <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
//                 <FileText className="h-6 w-6" />
//               </div>

//               <h3 className="text-lg font-semibold">Resume Download</h3>
//               <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
//                 Your CV will start downloading in <b>3 seconds</b>.
//               </p>

//               <div className="mt-5 flex items-center justify-center gap-3">
//                 <button
//                   onClick={handleDownload}
//                   className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
//                 >
//                   Download Now
//                 </button>
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-white/45 sm:text-sm">
//           <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//             <p>
//               © {new Date().getFullYear()} {profile.name}
//             </p>
//             <p>Built with React + Tailwind CSS</p>
//           </div>
//         </footer>
//       </section>
//     </main>
//   );
// };

// const StatCard = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) => {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
//       <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-white/45">
//         {label}
//       </p>
//       <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
//         {value}
//       </p>
//     </div>
//   );
// };

// const initials = (name: string) => {
//   const parts = name.trim().split(/\s+/);
//   const first = parts[0]?.[0] ?? "O";
//   const last = parts.length > 1 ? parts[parts.length - 1][0] : "Y";
//   return (first + last).toUpperCase();
// };

// const cleanUrl = (url: string) => {
//   try {
//     const u = new URL(url, window.location.origin);
//     return u.host + (u.pathname !== "/" ? u.pathname : "");
//   } catch {
//     return url;
//   }
// };

// export default LinkHub;





// import { useEffect, useMemo, useState } from "react";
// import {
//   Github,
//   Linkedin,
//   Instagram,
//   Twitter,
//   Globe,
//   FileText,
//   Mail,
//   Facebook,
//   Sun,
//   Moon,
//   MapPin,
//   ArrowUpRight,
//   FolderKanban,
//   Sparkles,
//   Code2,
//   Briefcase,
//   BadgeCheck,
//   Layers3,
// } from "lucide-react";

// const LinkHub = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     document.title = "Oriade Yusuf | Profile";

//     const favicon = document.getElementById("favicon") as HTMLLinkElement;
//     if (favicon) {
//       favicon.href = "/Profile2.jpg";
//     } else {
//       const newFavicon = document.createElement("link");
//       newFavicon.id = "favicon";
//       newFavicon.rel = "icon";
//       newFavicon.type = "image/png";
//       newFavicon.href = "/Profile2.jpg";
//       document.head.appendChild(newFavicon);
//     }
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       const isDark = savedTheme === "dark";
//       setDarkMode(isDark);
//       document.documentElement.classList.toggle("dark", isDark);
//     } else {
//       const prefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       setDarkMode(prefersDark);
//       document.documentElement.classList.toggle("dark", prefersDark);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const profile = useMemo(
//     () => ({
//       name: "Oriade Yusuf",
//       title: "Frontend Engineer • React • TypeScript",
//       subtitle:
//         "I build modern, scalable, and user-focused web applications with clean architecture and polished interfaces.",
//       location: "Lagos, Nigeria",
//       email: "oriadeyusuf34@gmail.com",
//       avatarUrl: "./Profile2.jpg",
//       availability: "Open to opportunities",
//       stats: [
//         { label: "Featured Projects", value: "02+" },
//         { label: "Core Stack", value: "React / TS" },
//         { label: "Focus", value: "Frontend UI" },
//       ],
//       skills: [
//         "JavaScript",
//         "TypeScript",
//         "React",
//         "Next.js",
//         "Redux Toolkit",
//         "Tailwind CSS",
//         "Vite",
//         "API Integration",
//         "Responsive Design",
//         "Technical Writing",
//       ],
//       links: [
//         {
//           label: "Portfolio",
//           href: "https://crownolar-portfolio.surge.sh/",
//           icon: Globe,
//           accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
//         },
//         {
//           label: "Resume / CV",
//           href: "/OriadeYusufCV.pdf",
//           icon: FileText,
//           accent: "from-emerald-500 via-teal-500 to-cyan-500",
//           isCV: true,
//         },
//         {
//           label: "GitHub",
//           href: "https://github.com/Crownolar?tab=repositories",
//           icon: Github,
//           accent: "from-zinc-700 to-slate-900",
//         },
//         {
//           label: "LinkedIn",
//           href: "https://www.linkedin.com/in/oriade-yusuf-50t50/r",
//           icon: Linkedin,
//           accent: "from-sky-500 to-blue-700",
//         },
//         {
//           label: "X (Twitter)",
//           href: "https://x.com/yusuforiade1",
//           icon: Twitter,
//           accent: "from-neutral-700 to-black",
//         },
//         {
//           label: "Facebook",
//           href: "https://web.facebook.com/olamilekanoriade500",
//           icon: Facebook,
//           accent: "from-blue-500 to-blue-700",
//         },
//         {
//           label: "Instagram",
//           href: "https://www.instagram.com/olar_crown/",
//           icon: Instagram,
//           accent: "from-pink-500 via-rose-500 to-orange-500",
//         },
//         {
//           label: "Contact",
//           href: "mailto:oriadeyusuf34@gmail.com",
//           icon: Mail,
//           accent: "from-amber-500 to-orange-500",
//         },
//       ],
//       projects: [
//         {
//           name: "LEADCAP",
//           category: "HealthTech Platform",
//           description:
//             "A professional regulatory and public health platform that supports data collection, monitoring, reporting, and decision-making for health stakeholders and institutions.",
//           highlights: [
//             "Role-based dashboards",
//             "Scalable frontend architecture",
//             "Data-driven regulatory workflows",
//           ],
//           href: "https://leadcap.ng",
//           accent: "from-emerald-500 via-teal-500 to-cyan-500",
//         },
//         {
//           name: "FRED Project",
//           category: "Product / Solution Build",
//           description:
//             "A modern solution-focused project designed with clean UI structure, strong user flow, and scalable frontend patterns for real-world application needs.",
//           highlights: [
//             "Clean modern interface",
//             "Reusable component structure",
//             "Professional user experience",
//           ],
//           href: "#",
//           accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
//         },
//       ],
//     }),
//     []
//   );

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/OriadeYusufCV.pdf";
//     link.download = "Oriade_Yusuf_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCVClick = () => {
//     setShowPopup(true);
//     setTimeout(() => {
//       handleDownload();
//       setShowPopup(false);
//     }, 3000);
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-[radial-gradient(1200px_700px_at_100%_-10%,rgba(99,102,241,0.16),transparent),radial-gradient(900px_600px_at_-10%_0%,rgba(16,185,129,0.12),transparent),linear-gradient(180deg,#050816,#0b1120)] dark:text-white">
//       <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
//         <div className="mb-8 flex items-center justify-between">
//           <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
//             <Sparkles className="h-4 w-4" />
//             Personal Portfolio
//           </div>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:scale-105 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
//             aria-label="Toggle theme"
//           >
//             {darkMode ? (
//               <Sun className="h-5 w-5" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </button>
//         </div>

//         <section className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/85 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_30%)]" />
//           <div className="relative grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
//             <div>
//               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-white/10 dark:text-white/70">
//                 <BadgeCheck className="h-4 w-4" />
//                 {profile.availability}
//               </div>

//               <div className="flex items-start gap-4 sm:gap-5">
//                 {profile.avatarUrl ? (
//                   <img
//                     src={profile.avatarUrl}
//                     alt={profile.name}
//                     className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-1 ring-black/10 sm:h-24 sm:w-24 md:h-28 md:w-28 dark:ring-white/15"
//                   />
//                 ) : (
//                   <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-2xl font-bold text-white ring-1 ring-black/10 sm:h-24 sm:w-24 md:h-28 md:w-28 dark:ring-white/15">
//                     {initials(profile.name)}
//                   </div>
//                 )}

//                 <div className="min-w-0">
//                   <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
//                     {profile.name}
//                   </h1>

//                   <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base dark:text-white/75">
//                     {profile.title}
//                   </p>

//                   <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px] dark:text-white/55">
//                     {profile.subtitle}
//                   </p>

//                   <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
//                     <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
//                       <MapPin className="h-4 w-4" />
//                       {profile.location}
//                     </span>

//                     <a
//                       href={`mailto:${profile.email}`}
//                       className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
//                     >
//                       <Mail className="h-4 w-4" />
//                       {profile.email}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
//               {profile.stats.map((stat) => (
//                 <StatCard
//                   key={stat.label}
//                   label={stat.label}
//                   value={stat.value}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
//           <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
//             <div className="mb-5 flex items-center gap-3">
//               <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
//                 <Layers3 className="h-5 w-5" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-semibold">Core Skills</h2>
//                 <p className="text-sm text-slate-500 dark:text-white/50">
//                   Technologies and tools I work with.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               {profile.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
//             <div className="mb-5 flex items-center gap-3">
//               <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
//                 <Code2 className="h-5 w-5" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-semibold">What I Focus On</h2>
//                 <p className="text-sm text-slate-500 dark:text-white/50">
//                   Frontend engineering with structure and clarity.
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <InfoRow
//                 title="Modern UI Development"
//                 text="Building clean, responsive, and user-friendly interfaces with attention to visual hierarchy and usability."
//               />
//               <InfoRow
//                 title="Reusable Architecture"
//                 text="Creating scalable component structures that are easier to maintain, improve, and extend."
//               />
//               <InfoRow
//                 title="Real Product Thinking"
//                 text="Working on practical applications and solutions that align design, functionality, and user needs."
//               />
//             </div>
//           </div>
//         </section>

//         <section className="mt-10">
//           <div className="mb-4 flex items-center gap-3">
//             <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
//               <Briefcase className="h-5 w-5" />
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold sm:text-xl">
//                 Featured Projects
//               </h2>
//               <p className="text-sm text-slate-500 dark:text-white/50">
//                 Selected work and product-focused builds.
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2">
//             {profile.projects.map((project) => (
//               <a
//                 key={project.name}
//                 href={project.href}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="group rounded-[28px] border border-slate-200 bg-white p-[1px] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
//               >
//                 <div className="overflow-hidden rounded-[26px] bg-white dark:bg-white/5">
//                   <div
//                     className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}
//                   />

//                   <div className="p-6">
//                     <div className="mb-5 flex items-start justify-between gap-4">
//                       <div>
//                         <p className="mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:bg-white/10 dark:text-white/70">
//                           {project.category}
//                         </p>

//                         <h3 className="text-xl font-semibold tracking-tight">
//                           {project.name}
//                         </h3>
//                       </div>

//                       <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition duration-300 group-hover:scale-105 dark:bg-white/10 dark:text-white">
//                         <FolderKanban className="h-5 w-5" />
//                       </div>
//                     </div>

//                     <p className="text-sm leading-7 text-slate-600 dark:text-white/65">
//                       {project.description}
//                     </p>

//                     <div className="mt-5 flex flex-wrap gap-2">
//                       {project.highlights.map((item) => (
//                         <span
//                           key={item}
//                           className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-white/75"
//                         >
//                           {item}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white/85">
//                       View project
//                       <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </section>

//         <section className="mt-10">
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold sm:text-xl">Quick Links</h2>
//             <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
//               Portfolio, résumé, socials, and contact channels.
//             </p>
//           </div>

//           <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//             {profile.links.map((link) => (
//               <li key={link.label}>
//                 {link.isCV ? (
//                   <button
//                     onClick={handleCVClick}
//                     className="group w-full rounded-2xl border border-slate-200 bg-white p-[1px] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
//                   >
//                     <div
//                       className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${link.accent}`}
//                     >
//                       <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
//                       <div className="relative flex items-center gap-4 px-4 py-4">
//                         <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
//                           <link.icon className="h-5 w-5 text-white" />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="truncate text-sm font-semibold text-white sm:text-base">
//                             {link.label}
//                           </p>
//                           <p className="truncate text-xs text-white/80">
//                             {cleanUrl(link.href)}
//                           </p>
//                         </div>

//                         <ArrowUpRight className="h-4 w-4 text-white/85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                       </div>
//                     </div>
//                   </button>
//                 ) : (
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     rel="noreferrer noopener"
//                     className="group block rounded-2xl border border-slate-200 bg-white p-[1px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
//                   >
//                     <div
//                       className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${link.accent}`}
//                     >
//                       <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
//                       <div className="relative flex items-center gap-4 px-4 py-4">
//                         <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
//                           <link.icon className="h-5 w-5 text-white" />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="truncate text-sm font-semibold text-white sm:text-base">
//                             {link.label}
//                           </p>
//                           <p className="truncate text-xs text-white/80">
//                             {cleanUrl(link.href)}
//                           </p>
//                         </div>

//                         <ArrowUpRight className="h-4 w-4 text-white/85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                       </div>
//                     </div>
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {showPopup && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//             <div className="w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-2xl dark:border-white/10 dark:bg-slate-900">
//               <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
//                 <FileText className="h-6 w-6" />
//               </div>

//               <h3 className="text-lg font-semibold">Resume Download</h3>
//               <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
//                 Your CV will start downloading in <b>3 seconds</b>.
//               </p>

//               <div className="mt-5 flex items-center justify-center gap-3">
//                 <button
//                   onClick={handleDownload}
//                   className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
//                 >
//                   Download Now
//                 </button>
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-white/45 sm:text-sm">
//           <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//             <p>
//               © {new Date().getFullYear()} {profile.name}
//             </p>
//             <p>Built with React + Tailwind CSS</p>
//           </div>
//         </footer>
//       </section>
//     </main>
//   );
// };

// const StatCard = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) => {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
//       <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-white/45">
//         {label}
//       </p>
//       <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
//         {value}
//       </p>
//     </div>
//   );
// };

// const InfoRow = ({
//   title,
//   text,
// }: {
//   title: string;
//   text: string;
// }) => {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
//       <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
//         {title}
//       </h3>
//       <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/65">
//         {text}
//       </p>
//     </div>
//   );
// };

// const initials = (name: string) => {
//   const parts = name.trim().split(/\s+/);
//   const first = parts[0]?.[0] ?? "O";
//   const last = parts.length > 1 ? parts[parts.length - 1][0] : "Y";
//   return (first + last).toUpperCase();
// };

// const cleanUrl = (url: string) => {
//   try {
//     const u = new URL(url, window.location.origin);
//     return u.host + (u.pathname !== "/" ? u.pathname : "");
//   } catch {
//     return url;
//   }
// };

// export default LinkHub;




import { useEffect, useMemo, useState } from "react";
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
  MapPin,
  ArrowUpRight,
  FolderKanban,
  Sparkles,
  Code2,
  Briefcase,
  BadgeCheck,
  Layers3,
  X,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

type Project = {
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  stack: string[];
  accent: string;
  href?: string;
};

const LinkHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  useEffect(() => {
    if (selectedProject || showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, showPopup]);

  const profile = useMemo(
    () => ({
      name: "Oriade Yusuf",
      title: "Frontend Engineer • React • TypeScript",
      subtitle:
        "I build modern, scalable, and user-focused web applications with clean architecture, polished interfaces, and strong attention to usability.",
      location: "Lagos, Nigeria",
      email: "oriadeyusuf34@gmail.com",
      avatarUrl: "/Profile2.jpg",
      availability: "Open to opportunities",
      stats: [
        { label: "Featured Projects", value: "02+" },
        { label: "Core Stack", value: "React / TS" },
        { label: "Focus", value: "Frontend UI" },
      ],
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Vite",
        "API Integration",
        "Responsive Design",
        "Technical Writing",
      ],
      links: [
        {
          label: "Portfolio",
          href: "https://oriade.vercel.app/",
          icon: Globe,
          accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
        },
        {
          label: "Resume / CV",
          href: "/OriadeYusufCV.pdf",
          icon: FileText,
          accent: "from-emerald-500 via-teal-500 to-cyan-500",
          isCV: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/Crownolar?tab=repositories",
          icon: Github,
          accent: "from-zinc-700 to-slate-900",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/oriade-yusuf-50t50/",
          icon: Linkedin,
          accent: "from-sky-500 to-blue-700",
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
          accent: "from-pink-500 via-rose-500 to-orange-500",
        },
        {
          label: "Contact",
          href: "mailto:oriadeyusuf34@gmail.com",
          icon: Mail,
          accent: "from-amber-500 to-orange-500",
        },
      ],
      projects: [
        {
          name: "LEADCAP",
          category: "HealthTech Platform",
          description:
            "A national-scale health and regulatory platform built to support sample monitoring, contamination tracking, reporting workflows, and policy-facing dashboards.",
          fullDescription:
            "LEADCAP is a professional health and regulatory platform designed to support data collection, monitoring, contamination analysis, reporting workflows, and decision-making for public health and regulatory stakeholders. It focuses on role-based access, operational clarity, and scalable frontend structure for real-world institutional use.",
          highlights: [
            "Role-based dashboards",
            "Scalable frontend architecture",
            "Policy and reporting workflows",
            "Clean, professional user experience",
          ],
          stack: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Tailwind CSS",
            "Vite",
            "API Integration",
          ],
          href: "https://leadcap.ng",
          accent: "from-emerald-500 via-teal-500 to-cyan-500",
        },
        {
          name: "FRED Project",
          category: "Product / Solution Build",
          description:
            "A modern solution-focused project designed with clean UI structure, reusable components, and a professional user flow for practical application needs.",
          fullDescription:
            "FRED Project is a structured frontend solution focused on delivering a clean modern interface, reusable component architecture, and a smooth user experience. It reflects practical product thinking, organized visual design, and scalable implementation for real-world workflows.",
          highlights: [
            "Modern and clean interface",
            "Reusable component structure",
            "Scalable UI architecture",
            "Professional workflow experience",
          ],
          stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Reusable Components",
            "Responsive Design",
          ],
          href: "#",
          accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
        },
      ] as Project[],
    }),
    []
  );

  const CV_URL = "/OriadeYusufCV.pdf";

const isMobileDevice = () => {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
};

const handleDownload = () => {
  const fullUrl = `${window.location.origin}${CV_URL}`;

  if (isMobileDevice()) {
    window.open(fullUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const link = document.createElement("a");
  link.href = fullUrl;
  link.setAttribute("download", "Oriade_Yusuf_CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleCVClick = () => {
  if (isMobileDevice()) {
    handleDownload();
    return;
  }

  setShowPopup(true);

  setTimeout(() => {
    handleDownload();
    setShowPopup(false);
  }, 3000);
};

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/OriadeYusufCV.pdf";
  //   link.download = "Oriade_Yusuf_CV.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // const handleCVClick = () => {
  //   setShowPopup(true);
  //   setTimeout(() => {
  //     handleDownload();
  //     setShowPopup(false);
  //   }, 3000);
  // };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-[radial-gradient(1200px_700px_at_100%_-10%,rgba(99,102,241,0.16),transparent),radial-gradient(900px_600px_at_-10%_0%,rgba(16,185,129,0.12),transparent),linear-gradient(180deg,#050816,#0b1120)] dark:text-white">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <Sparkles className="h-4 w-4" />
            Personal Portfolio
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:scale-105 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        <section className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/85 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_30%)]" />

          <div className="relative grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-white/10 dark:text-white/70">
                <BadgeCheck className="h-4 w-4" />
                {profile.availability}
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-1 ring-black/10 sm:h-24 sm:w-24 md:h-28 md:w-28 dark:ring-white/15"
                  />
                ) : (
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-2xl font-bold text-white ring-1 ring-black/10 sm:h-24 sm:w-24 md:h-28 md:w-28 dark:ring-white/15">
                    {initials(profile.name)}
                  </div>
                )}

                <div className="min-w-0">
                  <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                    {profile.name}
                  </h1>

                  <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base dark:text-white/75">
                    {profile.title}
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px] dark:text-white/55">
                    {profile.subtitle}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </span>

                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
                    >
                      <Mail className="h-4 w-4" />
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {profile.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Core Skills</h2>
                <p className="text-sm text-slate-500 dark:text-white/50">
                  Technologies and tools I work with.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">What I Focus On</h2>
                <p className="text-sm text-slate-500 dark:text-white/50">
                  Frontend engineering with structure and clarity.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <InfoRow
                title="Modern UI Development"
                text="Building clean, responsive, and user-friendly interfaces with strong attention to hierarchy, usability, and visual balance."
              />
              <InfoRow
                title="Reusable Architecture"
                text="Creating scalable component structures that are easier to maintain, improve, and extend as projects grow."
              />
              <InfoRow
                title="Real Product Thinking"
                text="Working on practical applications that align design, interaction, and functionality with real user needs."
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Featured Projects
              </h2>
              <p className="text-sm text-slate-500 dark:text-white/50">
                Selected work and product-focused builds.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {profile.projects.map((project) => (
              <button
                key={project.name}
                onClick={() => setSelectedProject(project)}
                className="group rounded-[28px] border border-slate-200 bg-white p-[1px] text-left shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="overflow-hidden rounded-[26px] bg-white dark:bg-white/5">
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}
                  />

                  <div className="p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:bg-white/10 dark:text-white/70">
                          {project.category}
                        </p>

                        <h3 className="text-xl font-semibold tracking-tight">
                          {project.name}
                        </h3>
                      </div>

                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition duration-300 group-hover:scale-105 dark:bg-white/10 dark:text-white">
                        <FolderKanban className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 dark:text-white/65">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white/85">
                      View details
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-lg font-semibold sm:text-xl">Quick Links</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
              Portfolio, résumé, socials, and contact channels.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {profile.links.map((link) => (
              <li key={link.label}>
                {link.isCV ? (
                  <button
                    onClick={handleCVClick}
                    className="group w-full rounded-2xl border border-slate-200 bg-white p-[1px] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${link.accent}`}
                    >
                      <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                      <div className="relative flex items-center gap-4 px-4 py-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                          <link.icon className="h-5 w-5 text-white" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-white sm:text-base">
                            {link.label}
                          </p>
                          <p className="truncate text-xs text-white/80">
                            {cleanUrl(link.href)}
                          </p>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-white/85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group block rounded-2xl border border-slate-200 bg-white p-[1px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${link.accent}`}
                    >
                      <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                      <div className="relative flex items-center gap-4 px-4 py-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                          <link.icon className="h-5 w-5 text-white" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-white sm:text-base">
                            {link.label}
                          </p>
                          <p className="truncate text-xs text-white/80">
                            {cleanUrl(link.href)}
                          </p>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-white/85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-white/45 sm:text-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Built with React + Tailwind CSS</p>
          </div>
        </footer>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-2xl dark:border-white/10 dark:bg-slate-900">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <FileText className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold">Resume Download</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
              Your CV will start downloading in <b>3 seconds</b>.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={handleDownload}
                className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
              >
                Download Now
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
};

const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-white/45">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
};

const InfoRow = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/65">
        {text}
      </p>
    </div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900">
        <div
          className={`sticky top-0 z-10 h-1.5 w-full bg-gradient-to-r ${project.accent}`}
        />

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-slate-900/95 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45">
              {project.category}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm leading-7 text-slate-600 dark:text-white/70">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.9fr]">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-white/45">
                Key Highlights
              </h4>

              <div className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-white/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-white/45">
                Technology / Stack
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Project Overview
                </h5>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
                  This project reflects practical frontend engineering with
                  emphasis on structure, clarity, responsiveness, and a
                  professional user experience.
                </p>

                {project.href && project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
                  >
                    Visit project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="fixed inset-0 -z-10 cursor-default"
        aria-hidden="true"
      />
    </div>
  );
};

const initials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "O";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "Y";
  return (first + last).toUpperCase();
};

const cleanUrl = (url: string) => {
  try {
    const u = new URL(url, window.location.origin);
    return u.host + (u.pathname !== "/" ? u.pathname : "");
  } catch {
    return url;
  }
};

export default LinkHub;