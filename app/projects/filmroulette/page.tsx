"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Film,
  RotateCw,
  Heart,
  Star,
  CheckCircle2,
  Users,
  Clapperboard,
  Search,
  Check,
  ShieldCheck,
} from "lucide-react";
import { projectsData } from "@/data/projects";

// Sample German film suggestions data for the interactive spin simulator
const MOOD_SUGGESTIONS = [
  {
    label: "Happy",
    emoji: "😄",
    color: "#F0C27F",
    textColor: "#633806",
    desc: "Leichte, fröhliche Filme die gute Laune machen.",
    comment: "Filmkritiker-Tipp: Diese Auswahl sorgt garantiert für Glückshormone und beste Laune! Perfekt für einen entspannten Abend.",
    films: [
      {
        id: "1",
        title: "Die fabelhafte Welt der Amélie",
        year: "2001",
        rating: "8.3",
        genre: "Komödie, Romanze",
        director: "Jean-Pierre Jeunet",
        actors: "Audrey Tautou, Mathieu Kassovitz",
        plot: "Amélie ist eine junge Pariser Kellnerin mit einer blühenden Fantasie. Sie beschließt, das Leben der Menschen in ihrer Umgebung heimlich zum Positiven zu verändern.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWJiODAtYDRlZTIxNDJhN2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
      },
      {
        id: "2",
        title: "Ziemlich beste Freunde",
        year: "2011",
        rating: "8.5",
        genre: "Biografie, Komödie, Drama",
        director: "Olivier Nakache",
        actors: "François Cluzet, Omar Sy",
        plot: "Der querschnittsgelähmte reiche Adlige Philippe engagiert den frisch aus dem Gefängnis entlassenen Senegalesen Driss als Pflegekraft. Eine wunderbare Freundschaft entsteht.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwNw@@._V1_SX300.jpg",
      },
      {
        id: "3",
        title: "Grand Budapest Hotel",
        year: "2014",
        rating: "8.1",
        genre: "Komödie, Abenteuer",
        director: "Wes Anderson",
        actors: "Ralph Fiennes, F. Murray Abraham",
        plot: "Die Abenteuer von Gustave H., dem legendären Concierge eines berühmten europäischen Hotels in den 1930er Jahren, und seinem treuen Hoteljungen Zero.",
        poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
      },
    ],
  },
  {
    label: "Action",
    emoji: "💥",
    color: "#E8896A",
    textColor: "#711B13",
    desc: "Tempo, Explosionen und Adrenalin pur.",
    comment: "Filmkritiker-Tipp: Maximale Energie und atemberaubende Stunts – dreh den Ton auf und genieße beste Action-Unterhaltung!",
    films: [
      {
        id: "4",
        title: "Mad Max: Fury Road",
        year: "2015",
        rating: "8.1",
        genre: "Action, Abenteuer, Sci-Fi",
        director: "George Miller",
        actors: "Tom Hardy, Charlize Theron",
        plot: "In einer wüsten Postapokalypse verbündet sich der Einzelgänger Max mit der furchtlosen Imperator Furiosa auf einer rasanten Flucht durch die Wüste.",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjNzgwMWJhBNjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      },
      {
        id: "5",
        title: "The Dark Knight",
        year: "2008",
        rating: "9.0",
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
        actors: "Christian Bale, Heath Ledger",
        plot: "Batman muss sich in Gotham City seiner bisher größten Bedrohung stellen: Dem kriminellen Genie Joker, der die Stadt in ein anarchisches Chaos stürzt.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      },
      {
        id: "6",
        title: "Inception",
        year: "2010",
        rating: "8.8",
        genre: "Action, Sci-Fi, Thriller",
        director: "Christopher Nolan",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
        plot: "Dom Cobb ist ein Meisterdieb, der Geheimnisse aus dem Unterbewusstsein von Menschen stiehlt, während sie träumen.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      },
    ],
  },
  {
    label: "Abenteuerlich",
    emoji: "🗺️",
    color: "#8BC99A",
    textColor: "#27500A",
    desc: "Epische Reisen und unvergessliche Entdeckungen.",
    comment: "Filmkritiker-Tipp: Schnall dich an für atemberaubende Welten und echtes Entdeckerfieber!",
    films: [
      {
        id: "7",
        title: "Interstellar",
        year: "2014",
        rating: "8.7",
        genre: "Abenteuer, Drama, Sci-Fi",
        director: "Christopher Nolan",
        actors: "Matthew McConaughey, Anne Hathaway",
        plot: "In einer Zukunft, in der die Erde unbewohnbar wird, bricht ein Team von Astronauten durch ein Wurmloch auf, um einen neuen Heimatplaneten zu finden.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      },
      {
        id: "8",
        title: "Der Herr der Ringe: Die Gefährten",
        year: "2001",
        rating: "8.9",
        genre: "Action, Abenteuer, Fantasy",
        director: "Peter Jackson",
        actors: "Elijah Wood, Ian McKellen",
        plot: "Der schüchterne Hobbit Frodo Beutlin erbt den Einen Ring und begibt sich mit seinen Gefährten auf eine Reise zum Schicksalsberg.",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      },
      {
        id: "9",
        title: "Jurassic Park",
        year: "1993",
        rating: "8.2",
        genre: "Abenteuer, Sci-Fi",
        director: "Steven Spielberg",
        actors: "Sam Neill, Laura Dern",
        plot: "Ein Erlebnispark mit geklonten Dinosauriern verwandelt sich in eine tödliche Falle, als die Sicherheitssysteme ausfallen.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
      },
    ],
  },
  {
    label: "Romantisch",
    emoji: "💕",
    color: "#F4A7B9",
    textColor: "#4B1528",
    desc: "Herzklopfen, Sehnsucht und große Gefühle.",
    comment: "Filmkritiker-Tipp: Große Gefühle und unvergessliche Liebesgeschichten – ideal für kuschelige Filmstunden.",
    films: [
      {
        id: "10",
        title: "La La Land",
        year: "2016",
        rating: "8.0",
        genre: "Komödie, Drama, Musical, Romanze",
        director: "Damien Chazelle",
        actors: "Ryan Gosling, Emma Stone",
        plot: "Eine angehende Schauspielerin und ein leidenschaftlicher Jazz-Pianist verlieben sich in Los Angeles, während sie ihren Träumen nachjagen.",
        poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
      },
      {
        id: "11",
        title: "Notting Hill",
        year: "1999",
        rating: "7.2",
        genre: "Komödie, Romanze",
        director: "Roger Michell",
        actors: "Hugh Grant, Julia Roberts",
        plot: "Ein bescheidener Reisebuchhändler verliebt sich überraschend in die weltweit berühmteste US-Schauspielerin.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTE5OTU3Njg2MjZeQTJeQWpwZ15BbWU3MDk1MGYxOTA@._V1_SX300.jpg",
      },
      {
        id: "12",
        title: "Titanic",
        year: "1997",
        rating: "7.9",
        genre: "Drama, Romanze",
        director: "James Cameron",
        actors: "Leonardo DiCaprio, Kate Winslet",
        plot: "Zwei junge Menschen aus unterschiedlichen Gesellschaftsschichten verlieben sich auf der tragischen Jungfernfahrt der Titanic.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWEzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      },
    ],
  },
];

export default function FilmrouletteDetailPage() {
  const project = projectsData.find((p) => p.id === "filmroulette")!;
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);

  const currentMood = MOOD_SUGGESTIONS[activeMoodIndex];

  function handleSpin() {
    setIsSpinning(true);
    setTimeout(() => {
      const nextIdx = Math.floor(Math.random() * MOOD_SUGGESTIONS.length);
      setActiveMoodIndex(nextIdx);
      setIsSpinning(false);
    }, 800);
  }

  function toggleFavorite(id: string) {
    setSavedFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <article className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-16 text-[#1F241F]">
      
      {/* Top Navigation */}
      <div className="space-y-4">
        <Link
          href="/#projekte"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B706B] hover:text-[#1F241F] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Projektübersicht
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#52c452]" />
            React Application · Teamprojekt
          </span>
          <span className="text-xs text-[#6B706B] font-mono">{project.period}</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-sm space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-2">
            🎬 Filmroulette (Moodflix)
          </h1>
          <p className="text-lg sm:text-xl text-[#3d5a3d] font-medium leading-snug">
            Zufällige Filmempfehlungen & Genre-Kataloge mit React & Deutscher Film-API
          </p>
        </div>

        <p className="text-[#555850] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
          {project.longDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-[#e6e2da]">
          <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider mb-3">
            Eingesetzte Technologien & Werkzeuge:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#f4f1ea] text-[#232621] border border-[#e2dcd0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- INTERAKTIVE GLÜCKSRAD & FILMVORSCHLÄGE ERGEBNIS-SIMULATION --- */}
      <section className="rounded-3xl bg-[#141416] border border-[#2c2d30] p-6 sm:p-8 md:p-10 space-y-8 shadow-xl text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2c2d30] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#ff2d55]/20 text-[#ff2d55] border border-[#ff2d55]/40 shrink-0">
              <Clapperboard className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-bold text-white tracking-tight">
                🎲 Interaktiver Glücksrad & Filmvorschläge Simulator
              </h2>
              <p className="text-xs text-slate-400">
                Klicke auf &quot;Glücksrad Drehen&quot;, um die generierten Filmvorschläge mit deutscher Handlung zu testen
              </p>
            </div>
          </div>

          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF2D55] to-[#BF5FFF] hover:opacity-90 transition-all font-bold text-xs sm:text-sm text-white shadow-lg flex items-center gap-2 self-start sm:self-auto shrink-0 disabled:opacity-50"
          >
            <RotateCw className={`w-4 h-4 ${isSpinning ? "animate-spin" : ""}`} />
            {isSpinning ? "Glücksrad dreht sich..." : "Glücksrad Drehen 🎲"}
          </button>
        </div>

        {/* Selected Mood & AI Critic Commentary Box */}
        <div className="bg-[#1c1d22] rounded-2xl p-5 sm:p-6 border border-[#2e2f36] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentMood.emoji}</span>
              <span className="text-lg font-bold" style={{ color: currentMood.color }}>
                Stimmung: {currentMood.label}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff2d55]/10 text-[#ff2d55] border border-[#ff2d55]/30">
              Kostenlose Deutsche Film-API
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{currentMood.desc}</p>

          {/* AI Critic Comment Card */}
          <div className="p-3.5 rounded-xl bg-[#252730] border border-[#383a47] space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#BF5FFF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              KI-Filmkritiker Empfehlung:
            </div>
            <p className="text-xs text-slate-200 italic leading-relaxed">
              &quot;{currentMood.comment}&quot;
            </p>
          </div>
        </div>

        {/* Film Vorschläge Result Cards Grid */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Film className="w-4 h-4 text-[#FF2D55]" />
            Generierte Filmvorschläge für &quot;{currentMood.label}&quot;:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentMood.films.map((film) => {
              const isFav = savedFavorites.includes(film.id);
              return (
                <div
                  key={film.id}
                  className="bg-[#1c1d22] rounded-2xl border border-[#2e2f36] overflow-hidden flex flex-col justify-between hover:border-[#BF5FFF] transition-all shadow-md group"
                >
                  <div className="space-y-3">
                    {/* Poster Image */}
                    <div className="relative aspect-[2/3] w-full bg-[#111215] overflow-hidden">
                      <img
                        src={film.poster}
                        alt={film.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <button
                        onClick={() => toggleFavorite(film.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full border shadow-md backdrop-blur-md transition-all ${
                          isFav
                            ? "bg-[#FF2D55] text-white border-[#FF2D55]"
                            : "bg-black/60 text-white border-white/20 hover:bg-black/80"
                        }`}
                        title="Zu Favoriten hinzufügen"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    {/* Movie Info */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-sm text-white leading-snug">
                          {film.title}
                        </h4>
                        <span className="flex items-center gap-1 text-xs font-bold text-amber-400 shrink-0">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {film.rating}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono text-slate-400">
                        {film.year} · {film.genre}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {film.plot}
                      </p>

                      <div className="pt-2 border-t border-[#2e2f36] text-[10px] text-slate-400 space-y-0.5">
                        <p><strong>Regie:</strong> {film.director}</p>
                        <p><strong>Besetzung:</strong> {film.actors}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshot Showcase Section */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                🖼️ Original Benutzeroberfläche & Screenshots
              </h2>
              <p className="text-xs text-[#787973]">
                Das Moodflix Glücksrad und die Filmdetail-Ansicht im dunklen Design
              </p>
            </div>
          </div>
        </div>

        {/* Display Container for Sharp Screenshot */}
        <div className="bg-[#f8f6f2] rounded-2xl p-4 sm:p-8 border border-[#e8e4db] flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-4xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-2">
              <span>📖 Moodflix Glücksrad Start-Screen</span>
              <span>Original Screenshot</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#d8d2c4] shadow-md bg-[#191919] p-3 sm:p-6 flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
              <img
                src="/images/filmroulette-preview.png"
                alt="Filmroulette Moodflix Glücksrad Vorschau"
                className="max-w-full max-h-[650px] w-auto h-auto object-contain object-center mx-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fdf2e9] text-[#e59866] flex items-center justify-center">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Kernfunktionen & Highlights
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Was die Filmroulette Single Page Application ausmacht
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#fee2e2] text-[#dc2626] flex items-center justify-center">
              <RotateCw className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Interaktives Glücksrad
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Spielerische Auswahl per Drehrad für 6 verschiedene Stimmungen (Happy, Action, Melancholisch, Abenteuerlich, Romantisch, Gruselig).
            </p>
          </div>

          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#e4ebe4] text-[#3d5a3d] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Kostenlose Deutsche Film-API
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Integrierte deutsche Datenquelle liefert verlässliche Filmbeschreibungen, Poster und Metadaten ohne Ausfälle.
            </p>
          </div>

          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#fef08a] text-[#854d0e] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              KI-Filmkritiker Empfehlungen
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Humorvolle, maßgeschneiderte Kurzkommentare zu jeder gezogenen Filmkombination für noch mehr Unterhaltung.
            </p>
          </div>
        </div>
      </section>

      {/* Contributions Box */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
              Teamrolle & Mein eigener Beitrag
            </h2>
            <p className="text-xs text-[#787973]">
              Schwerpunkte im Rahmen der Entwicklungsarbeit
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {project.contributions.map((contribution, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#e4ebe4] text-[#232621] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-xs text-[#232621] leading-relaxed font-medium">{contribution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e6e2da]">
        <Link
          href="/#projekte"
          className="px-6 py-3 rounded-xl bg-[#232621] text-white font-bold text-sm hover:bg-[#363933] transition-colors shadow-sm flex items-center gap-2"
        >
          Zurück zu allen Projekten
        </Link>
      </div>
    </article>
  );
}
