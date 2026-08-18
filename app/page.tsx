import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  TrendingUp,
  Brain,
  FileText,
  Star,
  Users,
  Compass,
  Target,
} from 'lucide-react';
import { LandingNav } from '@/components/navigation/LandingNav';
import { Cachet } from '@/components/ui/Cachet';
import { TextureOverlay } from '@/components/ui/TextureOverlay';



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-on-background relative selection:bg-primary-fixed selection:text-on-primary-fixed">
      <TextureOverlay />
      <LandingNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-outline-variant/60 bg-gradient-to-b from-surface to-surface-container-low">
        {/* Decorative Notebook Margin on Left */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-[2px] bg-error/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 lg:pl-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/40 text-secondary text-xs font-mono font-bold tracking-wide">
                <GraduationCap className="w-4 h-4" />
                CONFORME AUX PROGRAMMES OFFICIELS DU MENFOP DJIBOUTI
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-[1.1]">
                Préparez et Décrochez votre{' '}
                <span className="text-secondary underline decoration-error/60 decoration-wavy underline-offset-8">
                  Baccalauréat
                </span>{' '}
                avec Mention.
              </h1>

              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                La plateforme de référence pour les lycéens et collégiens de Djibouti. Annales officielles corrigées pas-à-pas, simulateur d&apos;examen blanc chronométré et tuteur socratique intelligent.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/connexion"
                  className="px-7 py-3.5 rounded-xl bg-primary text-on-primary font-mono text-sm font-bold hover:bg-primary-container transition-all shadow-md flex items-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Créer mon Espace Élève Gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/eleve/examens"
                  className="px-6 py-3.5 rounded-xl bg-surface-container-lowest border-2 border-primary/20 text-primary font-mono text-sm font-bold hover:bg-surface-container-high hover:border-primary transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Consulter les Annales</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/60">
                <div>
                  <div className="font-headline font-black text-2xl text-primary">94.6%</div>
                  <div className="font-body text-xs text-on-surface-variant">Taux d&apos;admission Bac</div>
                </div>
                <div>
                  <div className="font-headline font-black text-2xl text-secondary">+150</div>
                  <div className="font-body text-xs text-on-surface-variant">Sujets d&apos;annales MENFOP</div>
                </div>
                <div>
                  <div className="font-headline font-black text-2xl text-emerald-700">100%</div>
                  <div className="font-body text-xs text-on-surface-variant">Conforme Djibouti</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-surface-container-lowest rounded-2xl p-6 border-2 border-outline-variant paper-shadow-hover rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Floating Stamp */}
                <div className="absolute -top-6 -right-6 z-10">
                  <Cachet
                    mention="SESSION 2025"
                    code="DJ-BAC-EXCELLENCE"
                    variant="error"
                    rotation="right"
                    size="sm"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
                    <div>
                      <span className="font-mono text-xs font-bold text-secondary uppercase">
                        Copie d&apos;Examen Blanc
                      </span>
                      <h3 className="font-headline font-bold text-primary text-lg">
                        Mathématiques Série S1
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                      18.5 / 20
                    </span>
                  </div>

                  <div className="p-3 bg-surface-container-low rounded-xl border-l-4 border-primary space-y-1.5">
                    <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-secondary" />
                      Observation du Tuteur Socratique :
                    </span>
                    <p className="font-body text-xs text-on-surface leading-relaxed">
                      « Démonstration du théorème des valeurs intermédiaires rigoureuse. Continuité et stricte monotonie parfaitement justifiées. »
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-on-surface-variant">Préparation Globale</span>
                      <span className="font-bold text-primary">88%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: '88%' }} />
                    </div>
                  </div>

                  <Link
                    href="/eleve/dashboard"
                    className="block w-full py-2.5 text-center bg-surface-container-low hover:bg-surface-container-high rounded-xl text-xs font-mono font-bold text-primary transition-colors border border-outline-variant"
                  >
                    Tester le Tableau de Bord en Démo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Section (Défi 1 & Architecture Pédagogique) */}
      <section id="piliers" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-outline-variant/60 relative">
        {/* Decorative Notebook Margin */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-[2px] bg-error/70 pointer-events-none" />

        <div className="lg:pl-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
              Architecture Pédagogique MENFOP
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-primary">
              Les 4 Piliers de l&apos;Excellence Académique
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant">
              Une méthode structurée et éprouvée pour accompagner chaque candidat vers l&apos;admission avec mention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pilier 1: Annales & Sujets */}
            <div id="annales" className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4 relative overflow-hidden group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline font-bold text-lg text-primary">
                  1. Annales & Sujets Officiels
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Annales authentiques du Baccalauréat et Brevet djiboutien classées par matière, filière et niveau de difficulté avec barèmes complets.
                </p>
              </div>
              <Link
                href="/eleve/examens"
                className="text-xs font-mono font-bold text-primary hover:text-primary-container inline-flex items-center gap-1 pt-2 border-t border-outline-variant/40"
              >
                <span>Consulter les annales</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pilier 2: Diagnostic Adaptatif & Parcours Recommandé (DÉFI 1) */}
            <div id="parcours" className="bg-surface-container-lowest border-2 border-secondary/40 rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4 relative overflow-hidden group ring-1 ring-secondary/20">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-headline font-bold text-lg text-primary">
                    2. Diagnostic Adaptatif
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-secondary text-on-secondary uppercase">
                    Défi 1
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  À partir des lacunes détectées sur les exercices et copies de l&apos;élève, la plateforme génère un parcours d&apos;exercices personnalisé, plutôt qu&apos;une liste de contenus identique pour tous.
                </p>
              </div>
              <Link
                href="/eleve/parcours"
                className="text-xs font-mono font-bold text-secondary hover:underline inline-flex items-center gap-1 pt-2 border-t border-outline-variant/40"
              >
                <span>Découvrir le parcours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pilier 3: Tuteur Socratique IA */}
            <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4 relative overflow-hidden group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-headline font-bold text-lg text-primary">
                  3. Tuteur Socratique IA
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Pédagogie active guidée par le questionnement : l&apos;IA fournit des indices méthodologiques sans dévoiler la solution brute pré-mâchée.
                </p>
              </div>
              <Link
                href="/eleve/tuteur"
                className="text-xs font-mono font-bold text-primary hover:text-primary-container inline-flex items-center gap-1 pt-2 border-t border-outline-variant/40"
              >
                <span>Tester le tuteur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pilier 4: Résultats & Mentions */}
            <div id="statistiques" className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4 relative overflow-hidden group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-headline font-bold text-lg text-primary">
                  4. Résultats & Mentions
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Mesure continue du score de préparation au Bac, projection de mention et simulation sur copies officielles au lignage Séyès.
                </p>
              </div>
              <Link
                href="/eleve/historique"
                className="text-xs font-mono font-bold text-primary hover:text-primary-container inline-flex items-center gap-1 pt-2 border-t border-outline-variant/40"
              >
                <span>Voir la progression</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Series Covered Section */}
      <section id="series" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Toutes les filières nationales
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Une préparation sur-mesure pour chaque épreuve
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Chaque série dispose de ses annales dédiées, coefficients officiels et grilles d&apos;évaluation conformes aux exigences du jury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bac S */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-1">
              Bac Scientifique (S)
            </h3>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              Séries S1 (Maths-Physique) et S2 (SVT-Physique). Analyse approfondie, mécanique et biologie.
            </p>
            <ul className="space-y-2 text-xs font-body text-on-surface mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Maths (Coef. 7) & Physique (Coef. 6)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                48 annales corrigées pas-à-pas
              </li>
            </ul>
            <Link
              href="/eleve/examens"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:text-primary-container"
            >
              Explorer les épreuves S →
            </Link>
          </div>

          {/* Bac L */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-1">
              Bac Littéraire (L)
            </h3>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              Séries L1 (Lettres Classiques) et L2 (Langues vivantes & Arabe). Méthodologie de dissertation.
            </p>
            <ul className="space-y-2 text-xs font-body text-on-surface mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Philosophie, Français & Arabe
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Plans détaillés de dissertations
              </li>
            </ul>
            <Link
              href="/eleve/examens"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:text-primary-container"
            >
              Explorer les épreuves L →
            </Link>
          </div>

          {/* Bac ES & STG */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-blue-800" />
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-1">
              Bac Éco & STG (ES)
            </h3>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              Sciences Économiques et Sociales, Mathématiques appliquées et Gestion commerciale.
            </p>
            <ul className="space-y-2 text-xs font-body text-on-surface mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Économie générale & Sociologie
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Études de cas & calculs d&apos;élasticité
              </li>
            </ul>
            <Link
              href="/eleve/examens"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:text-primary-container"
            >
              Explorer les épreuves ES →
            </Link>
          </div>

          {/* Brevet BEM */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-emerald-800" />
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-1">
              Brevet BEM (3ème)
            </h3>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              Brevet d&apos;Enseignement Moyen de Djibouti. Socle fondamental en Maths, Français et Sciences.
            </p>
            <ul className="space-y-2 text-xs font-body text-on-surface mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sujets complets sessions 2020–2024
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Fiches mémo adaptées collège
              </li>
            </ul>
            <Link
              href="/eleve/examens"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:text-primary-container"
            >
              Explorer le Brevet →
            </Link>
          </div>
        </div>
      </section>

      {/* Socratic Tutor Showcase */}
      <section id="tuteur" className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/40 text-secondary text-xs font-mono font-bold">
                <Sparkles className="w-4 h-4" />
                PÉDAGOGIE SOCRATIQUE SANS CORRIGÉ PRÉ-MÂCHÉ
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                Un tuteur IA qui vous apprend à raisonner par vous-même.
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Le Tuteur StreetCours ne vous donne jamais la solution brute. Il décompose le problème, vous pose la question clé qui débloque votre raisonnement et renforce durablement vos automatismes mathématiques et littéraires.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm">Indices progressifs à 3 niveaux</h4>
                    <p className="font-body text-xs text-on-surface-variant">Du simple rappel de cours à la structure complète du calcul.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm">Support complet des formules KaTeX</h4>
                    <p className="font-body text-xs text-on-surface-variant">Rendu parfait des intégrales, matrices, vecteurs et réactions chimiques.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/eleve/tuteur"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-all"
              >
                Tester une session avec le Tuteur IA →
              </Link>
            </div>

            {/* Chat Illustration */}
            <div className="lg:col-span-6">
              <div className="bg-surface-container-lowest rounded-2xl border-2 border-outline-variant p-5 paper-shadow space-y-4">
                <div className="flex items-center justify-between border-b border-outline-variant pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                      IA
                    </div>
                    <div>
                      <div className="font-headline font-bold text-xs text-primary">Tuteur Socratique StreetCours</div>
                      <div className="font-mono text-[10px] text-emerald-700 font-bold">● En ligne • Session Bac S</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-on-surface-variant">LED-2025</span>
                </div>

                <div className="space-y-3 font-body text-xs">
                  <div className="p-3 bg-surface-container-low rounded-xl rounded-tl-none max-w-[85%] border border-outline-variant/40">
                    <span className="font-bold text-primary block mb-1">Élève :</span>
                    « Je bloque sur l&apos;intégrale I = ∫[1..e] x·ln(x) dx de l&apos;épreuve 2024. Comment démarrer ? »
                  </div>

                  <div className="p-3 bg-primary/10 rounded-xl rounded-tr-none max-w-[90%] ml-auto border border-primary/20 space-y-1">
                    <span className="font-bold text-primary block">Tuteur Socratique :</span>
                    <p>
                      « Très bon exercice ! Regarde la nature du produit : tu as un polynôme <em>x</em> et un logarithme <em>ln(x)</em>. Quelle règle mnémonique te permet de choisir qui poser en <em>u(x)</em> et qui poser en <em>v&apos;(x)</em> ? »
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-serif font-bold text-lg">
              S
            </div>
            <div>
              <span className="font-headline font-bold text-primary">StreetCours Djibouti</span>
              <p className="font-body text-xs text-on-surface-variant">Plateforme d&apos;excellence académique et de préparation aux examens nationaux.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-on-surface-variant">
            <Link href="/connexion" className="hover:text-primary transition-colors">Espace Élève</Link>
            <Link href="/enseignant/connexion" className="hover:text-primary transition-colors">Espace Enseignant</Link>
            <Link href="/eleve/examens" className="hover:text-primary transition-colors">Annales</Link>
          </div>

          <div className="text-xs font-mono text-on-surface-variant text-center md:text-right">
            © 2025 StreetCours Djibouti • Ministère de l&apos;Éducation Nationale (MENFOP)
          </div>
        </div>
      </footer>
    </div>
  );
}
