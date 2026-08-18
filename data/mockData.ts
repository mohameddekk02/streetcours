import { Subject, ExamPaper, StudentProfile, ClassStudent, Flashcard, CompetenceItem, SocraticStep } from '@/types';

export const mockStudent: StudentProfile = {
  id: 'stu-dj-0982',
  fullName: 'Ali Youssouf Farah',
  email: 'ali.youssouf@lyceedetat.dj',
  avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=AYF&backgroundColor=1a6b3c',
  level: 'BAC_S',

  schoolName: "Lycée d'État de Djibouti (LED)",
  targetMention: 'Très Bien',
  readinessScore: 78,
  streakDays: 14,
  completedExamsCount: 18,
  hoursStudied: 86,
  strongSubjects: ['maths', 'physique-chimie'],
  weakSubjects: ['philosophie', 'svt'],
};

export const subjectsData: Subject[] = [
  {
    id: 'maths',
    name: 'Mathématiques',
    code: 'MATH-S',
    coefficient: 7,
    icon: 'functions',
    color: '#034565',
    totalChapters: 12,
    masteryPercentage: 84,
  },
  {
    id: 'physique-chimie',
    name: 'Physique-Chimie',
    code: 'PC-S',
    coefficient: 6,
    icon: 'science',
    color: '#285d7e',
    totalChapters: 10,
    masteryPercentage: 76,
  },
  {
    id: 'svt',
    name: 'Sciences de la Vie & Terre',
    code: 'SVT-S',
    coefficient: 6,
    icon: 'psychology',
    color: '#10b981',
    totalChapters: 8,
    masteryPercentage: 68,
  },
  {
    id: 'philosophie',
    name: 'Philosophie',
    code: 'PHILO',
    coefficient: 3,
    icon: 'auto_stories',
    color: '#825505',
    totalChapters: 6,
    masteryPercentage: 58,
  },
  {
    id: 'francais',
    name: 'Français & Littérature',
    code: 'FRAN',
    coefficient: 3,
    icon: 'history_edu',
    color: '#ba1a1a',
    totalChapters: 8,
    masteryPercentage: 80,
  },
  {
    id: 'histoire-geo',
    name: 'Histoire-Géographie',
    code: 'HG',
    coefficient: 3,
    icon: 'public',
    color: '#5b3900',
    totalChapters: 7,
    masteryPercentage: 72,
  },
  {
    id: 'anglais',
    name: 'Anglais (LV1)',
    code: 'ANG',
    coefficient: 2,
    icon: 'translate',
    color: '#0f4b6b',
    totalChapters: 6,
    masteryPercentage: 88,
  },
  {
    id: 'arabe',
    name: 'Langue Arabe',
    code: 'ARA',
    coefficient: 2,
    icon: 'menu_book',
    color: '#006492',
    totalChapters: 6,
    masteryPercentage: 85,
  }
];

export const mockCompetences: CompetenceItem[] = [
  {
    id: 'comp-1',
    title: 'Nombres complexes & Géométrie du plan',
    subjectId: 'maths',
    status: 'MAITRISE',
    score: 92,
    questionsCount: 45,
    lastPracticed: 'Hier',
  },
  {
    id: 'comp-2',
    title: 'Équations différentielles & Primitives',
    subjectId: 'maths',
    status: 'EN_COURS',
    score: 74,
    questionsCount: 38,
    lastPracticed: 'Il y a 2 jours',
  },
  {
    id: 'comp-3',
    title: 'Probabilités conditionnelles & Variables aléatoires',
    subjectId: 'maths',
    status: 'MAITRISE',
    score: 88,
    questionsCount: 32,
    lastPracticed: 'Il y a 3 jours',
  },
  {
    id: 'comp-4',
    title: 'Suites numériques & Raisonnement par récurrence',
    subjectId: 'maths',
    status: 'A_REVOIR',
    score: 48,
    questionsCount: 20,
    lastPracticed: 'Il y a 5 jours',
  },
  {
    id: 'comp-5',
    title: 'Cinématique & Lois de Newton',
    subjectId: 'physique-chimie',
    status: 'MAITRISE',
    score: 85,
    questionsCount: 40,
    lastPracticed: 'Hier',
  },
  {
    id: 'comp-6',
    title: 'Réactions Acido-Basiques & Titrage pH-métrique',
    subjectId: 'physique-chimie',
    status: 'EN_COURS',
    score: 70,
    questionsCount: 28,
    lastPracticed: 'Il y a 4 jours',
  },
  {
    id: 'comp-7',
    title: 'Génétique mendélienne & Méiose',
    subjectId: 'svt',
    status: 'A_REVOIR',
    score: 52,
    questionsCount: 25,
    lastPracticed: 'Il y a 6 jours',
  },
  {
    id: 'comp-8',
    title: "Dissertation philosophique : La Liberté et l'État",
    subjectId: 'philosophie',
    status: 'A_REVOIR',
    score: 45,
    questionsCount: 12,
    lastPracticed: 'La semaine dernière',
  },
];

export const mockExamsList: ExamPaper[] = [
  {
    id: 'dj-bac-2024-math-s',
    title: 'Baccalauréat 2024 — Mathématiques (Série Scientifique)',
    code: 'DJ-BAC-2024-M-S1',
    subjectId: 'maths',
    level: 'BAC_S',
    year: 2024,
    session: 'Normale',
    durationMinutes: 240, // 4 hours
    coefficient: 7,
    pagesCount: 4,
    difficulty: 'Excellence',
    instructions: [
      "L'usage de la calculatrice scientifique non programmable est autorisé.",
      "La clarté des raisonnements et la qualité de la rédaction entreront pour une part importante dans l'appréciation des copies.",
      "Le sujet comporte 4 exercices indépendants notés sur 20 points."
    ],
    sections: [
      {
        title: 'Exercice 1 : Nombres Complexes & Transformations (4 points)',
        points: 4,
        description: "Dans le plan complexe rapporté au repère orthonormé direct $(O; \\vec{u}, \\vec{v})$, on considère les points A, B, C d'affixes respectives...",
        questions: [
          {
            id: 'q1-1',
            number: '1.a',
            text: 'Résoudre dans $\\mathbb{C}$ l’équation : $z^2 - 2\\sqrt{3} z + 4 = 0$. Donner les solutions sous forme exponentielle.',
            points: 1,
            hints: ['Calculer le discriminant $\\Delta = b^2 - 4ac$', 'Identifier le module et l’argument principal.'],
            modelAnswer: '$\\Delta = (2\\sqrt{3})^2 - 16 = 12 - 16 = -4 = (2i)^2$. Donc $z_1 = \\sqrt{3} - i = 2 e^{-i\\pi/6}$ et $z_2 = \\sqrt{3} + i = 2 e^{i\\pi/6}$.'
          },
          {
            id: 'q1-2',
            number: '1.b',
            text: 'Déterminer la nature du triangle OAB et calculer son aire.',
            points: 1,
            hints: ['Calculer le rapport $\\frac{z_B - z_O}{z_A - z_O}$', 'Interpréter géométriquement le module et l’argument.'],
            modelAnswer: '$OA = OB = 2$ et l’angle $(\\vec{OA}, \\vec{OB}) = \\frac{\\pi}{3}$. Il s’agit d’un triangle équilatéral de côté 2. $\\text{Aire} = \\frac{c^2\\sqrt{3}}{4} = \\sqrt{3}$.'
          }
        ]
      },
      {
        title: 'Exercice 2 : Probabilités & Lois Binomiales (4 points)',
        points: 4,
        description: "Une fabrique de pièces mécaniques à la zone franche de Djibouti teste un lot de composants...",
        questions: [
          {
            id: 'q2-1',
            number: '2.a',
            text: 'Calculer la probabilité qu’au moins un composant soit défectueux sur un échantillon de 20 pièces.',
            points: 2,
            hints: ['Utiliser l’événement contraire : $1 - P(X = 0)$'],
            modelAnswer: '$P(X \\ge 1) = 1 - (1 - p)^{20} = 1 - (0.98)^{20} \\approx 0.332$.'
          }
        ]
      },
      {
        title: 'Exercice 3 : Équations Différentielles & Suites (5 points)',
        points: 5,
        description: "On considère l'équation différentielle $(E) : y' + 2y = 4e^{-2x}$...",
        questions: [
          {
            id: 'q3-1',
            number: '3.a',
            text: 'Déterminer une solution particulière $g$ de la forme $g(x) = ax e^{-2x}$.',
            points: 2,
            hints: ['Dériver $g(x)$ avec la règle du produit $(u \\cdot v)\' = u\'v + uv\'$'],
            modelAnswer: '$g\'(x) = a e^{-2x} - 2ax e^{-2x}$. En injectant : $a = 4$. Donc $g(x) = 4x e^{-2x}$.'
          }
        ]
      },
      {
        title: 'Problème : Étude de Fonction Logarithme & Calcul d’Aire (7 points)',
        points: 7,
        description: "Soit $f$ la fonction définie sur $]0; +\\infty[$ par $f(x) = x - \\frac{\\ln(x)}{x}$...",
        questions: [
          {
            id: 'q4-1',
            number: '4.a',
            text: 'Étudier les limites de $f$ aux bornes de son ensemble de définition.',
            points: 2,
            hints: ['En $0^+$, $\\ln(x)$ tend vers $-\\infty$. En $+\\infty$, croissance comparée : $\\frac{\\ln(x)}{x} \\to 0$.'],
            modelAnswer: '$\\lim_{x \\to 0^+} f(x) = +\\infty$ (asymptote verticale $x=0$). $\\lim_{x \\to +\\infty} f(x) = +\\infty$ avec asymptote oblique $y=x$.'
          }
        ]
      }
    ]

  },
  {
    id: 'dj-bac-2024-pc-s',
    title: 'Baccalauréat 2024 — Physique-Chimie (Série Scientifique)',
    code: 'DJ-BAC-2024-PC-S',
    subjectId: 'physique-chimie',
    level: 'BAC_S',
    year: 2024,
    session: 'Normale',
    durationMinutes: 210,
    coefficient: 6,
    pagesCount: 3,
    difficulty: 'Approfondi',
    instructions: ["Calculatrice autorisée.", "Constantes physiques fournies en annexe."],
    sections: [
      {
        title: 'Chimie : Titrage du vinaigre commercial et équilibres (6 points)',
        points: 6,
        description: 'Dosage pH-métrique de l’acide éthanoïque par une solution d’hydroxyde de sodium...',
        questions: []
      },
      {
        title: 'Physique 1 : Satellite d’observation au-dessus de la Corne de l’Afrique (7 points)',
        points: 7,
        description: 'Mouvement circulaire uniforme et 3ème loi de Kepler...',
        questions: []
      },
      {
        title: 'Physique 2 : Circuit RLC et oscillations électriques amorties (7 points)',
        points: 7,
        description: 'Étude temporelle de la décharge d’un condensateur dans une bobine...',
        questions: []
      }
    ]
  },
  {
    id: 'dj-bac-2023-math-s',
    title: 'Baccalauréat 2023 — Mathématiques (Série Scientifique)',
    code: 'DJ-BAC-2023-M-S1',
    subjectId: 'maths',
    level: 'BAC_S',
    year: 2023,
    session: 'Normale',
    durationMinutes: 240,
    coefficient: 7,
    pagesCount: 4,
    difficulty: 'Standard',
    instructions: ["Sujet officiel MENFOP session 2023."],
    sections: []
  },
  {
    id: 'dj-bac-2024-philo-l',
    title: 'Baccalauréat 2024 — Philosophie (Séries L & ES)',
    code: 'DJ-BAC-2024-PH-LES',
    subjectId: 'philosophie',
    level: 'BAC_L',
    year: 2024,
    session: 'Normale',
    durationMinutes: 240,
    coefficient: 5,
    pagesCount: 2,
    difficulty: 'Approfondi',
    instructions: ["Le candidat traitera l'un des trois sujets au choix."],
    sections: [
      {
        title: "Sujet 1 (Dissertation) : L'obéissance aux lois limite-t-elle la liberté ?",
        points: 20,
        description: "Analyse critique du contrat social et des obligations citoyennes.",
        questions: []
      }
    ]
  },
  {
    id: 'dj-bem-2024-math-3e',
    title: 'Brevet BEM 2024 — Épreuve de Mathématiques (Classe de 3ème)',
    code: 'DJ-BEM-2024-M-3E',
    subjectId: 'maths',
    level: 'BEF_3EME',
    year: 2024,
    session: 'Normale',
    durationMinutes: 120,
    coefficient: 4,
    pagesCount: 2,
    difficulty: 'Standard',
    instructions: ["Épreuve obligatoire du Brevet d'Enseignement Moyen de Djibouti."],
    sections: []
  }
];

export const mockFlashcards: Flashcard[] = [
  {
    id: 'fc-1',
    subjectId: 'maths',
    chapter: 'Nombres Complexes',
    title: 'Formules d’Euler & Moivre',
    formulaOrConcept: 'cos(θ) = (e^(iθ) + e^(-iθ))/2  ;  sin(θ) = (e^(iθ) - e^(-iθ))/(2i)',
    explanation: "Permet de linéariser des puissances trigonométriques cos^n(x) et d'exprimer cos(nx) en fonction de cos(x).",
    tips: "Attention au facteur '2i' au dénominateur pour le sinus !"
  },
  {
    id: 'fc-2',
    subjectId: 'maths',
    chapter: 'Analyse & Intégration',
    title: 'Intégration par parties (IPP)',
    formulaOrConcept: '∫[a..b] u(x)v\'(x) dx = [u(x)v(x)][a..b] - ∫[a..b] u\'(x)v(x) dx',
    explanation: "Méthode 'ALPES' pour choisir u(x) : Arcsin/Arccos, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus.",
    tips: "Toujours vérifier que u et v sont de classe C1 sur l’intervalle [a, b]."
  },
  {
    id: 'fc-3',
    subjectId: 'physique-chimie',
    chapter: 'Mécanique Newtonienne',
    title: 'Deuxième Loi de Newton (PFD)',
    formulaOrConcept: 'Σ F_ext = m · a_G = m · (dv/dt)',
    explanation: "La somme vectorielle des forces extérieures appliquées à un système fermé est égale au produit de sa masse par son accélération dans un référentiel galiléen.",
    tips: "Toujours préciser le système et le référentiel galiléen avant d'appliquer la loi."
  },
  {
    id: 'fc-4',
    subjectId: 'physique-chimie',
    chapter: 'Chimie Acido-Basique',
    title: 'pH et Diagramme de Prédominance',
    formulaOrConcept: 'pH = pKa + log([A-] / [AH])',
    explanation: "Si pH < pKa - 1, la forme acide [AH] prédomine à plus de 90%. Si pH > pKa + 1, la forme basique [A-] prédomine.",
    tips: "À la demi-équivalence d'un titrage : pH = pKa car [AH] = [A-]."
  },
  {
    id: 'fc-5',
    subjectId: 'philosophie',
    chapter: "La Liberté & L'État",
    title: 'Rousseau — Du Contrat Social',
    formulaOrConcept: "« L'obéissance à la loi qu'on s'est prescrite est liberté. »",
    explanation: "La véritable liberté (autonomie) ne consiste pas à suivre ses pulsions anarchiques, mais à obéir aux lois que la volonté générale a démocratiquement établies.",
    tips: "Idéal pour introduire la conciliation entre autorité de l'État et liberté citoyenne."
  },
  {
    id: 'fc-6',
    subjectId: 'svt',
    chapter: 'Génétique & Méiose',
    title: 'Brassage Interchromosomique',
    formulaOrConcept: '2^n combinaisons possibles de gamètes (pour n paires de chromosomes)',
    explanation: "Disjonction aléatoire et indépendante des chromosomes homologues lors de l'anaphase I de la méiose.",
    tips: "Chez l'être humain (n=23), il y a 2^23 soit plus de 8 millions de gamètes génétiquement uniques sans compter le crossing-over !"
  }
];

export const mockSocraticSteps: SocraticStep[] = [
  {
    stepNumber: 1,
    title: 'Identification de la méthode d’intégration',
    hintLevel1: 'Quelle est la nature du produit dans l’intégrale $I = \\int_1^e x \\cdot \\ln(x) \\, dx$ ?',
    hintLevel2: 'Peut-on trouver directement une primitive évidente, ou faut-il dériver une partie et primitiver l’autre ?',
    hintLevel3: 'Appliquez la règle ALPES : $\\ln(x)$ est un Logarithme (priorité pour $u$), $x$ est un Polynôme (priorité pour $v\'$). Posez $u(x) = \\ln(x)$ et $v\'(x) = x$.'
  },
  {
    stepNumber: 2,
    title: 'Calcul des dérivées et primitives intermédiaires',
    hintLevel1: 'Que valent $u\'(x)$ et $v(x)$ avec les choix définis ?',
    hintLevel2: 'La dérivée de $\\ln(x)$ est $1/x$, et une primitive de $x$ est $x^2/2$.',
    hintLevel3: '$u\'(x) = 1/x$ et $v(x) = x^2/2$. Le produit $u(x) \\cdot v(x)$ vaut donc $(x^2/2) \\cdot \\ln(x)$.'
  },
  {
    stepNumber: 3,
    title: 'Application de la formule d’intégration par parties',
    hintLevel1: 'Écrivez la formule d’intégration par parties et remplacez les termes.',
    hintLevel2: '$I = \\left[ \\frac{x^2}{2} \\ln(x) \\right]_1^e - \\int_1^e \\frac{1}{x} \\cdot \\frac{x^2}{2} \\, dx$. Que donne la simplification sous la deuxième intégrale ?',
    hintLevel3: 'L’intégrale restante est $\\int_1^e \\frac{x}{2} \\, dx = \\left[ \\frac{x^2}{4} \\right]_1^e$. Le résultat final s’écrit : $I = \\frac{e^2}{2} - \\left( \\frac{e^2}{4} - \\frac{1}{4} \\right) = \\frac{e^2 + 1}{4}$.'
  }
];


export const mockClassStudents: ClassStudent[] = [
  {
    id: 'cls-1',
    fullName: 'Ali Youssouf Farah',
    matricule: 'LED-2024-0412',
    level: 'BAC_S',
    averageScore: 16.4,
    readinessScore: 78,
    lastActivity: 'Il y a 2h',
    status: 'Excellence',
    strongSubjects: ['Mathématiques', 'Physique-Chimie'],
    weakAreas: ['Philosophie (Méthodologie)'],
    submittedCopiesCount: 12,
  },
  {
    id: 'cls-2',
    fullName: 'Fatouma Hassan Gouled',
    matricule: 'LED-2024-0391',
    level: 'BAC_S',
    averageScore: 17.8,
    readinessScore: 92,
    lastActivity: 'Hier',
    status: 'Excellence',
    strongSubjects: ['SVT', 'Mathématiques', 'Français'],
    weakAreas: ['Cinématique relativiste'],
    submittedCopiesCount: 15,
  },
  {
    id: 'cls-3',
    fullName: 'Mohamed Omar Moussa',
    matricule: 'LED-2024-0518',
    level: 'BAC_S',
    averageScore: 13.2,
    readinessScore: 64,
    lastActivity: 'Il y a 3j',
    status: 'Régulier',
    strongSubjects: ['Physique-Chimie'],
    weakAreas: ['Suites récurrentes', 'Probabilités'],
    submittedCopiesCount: 8,
  },
  {
    id: 'cls-4',
    fullName: 'Ayan Daher Barkhad',
    matricule: 'LED-2024-0205',
    level: 'BAC_S',
    averageScore: 10.5,
    readinessScore: 48,
    lastActivity: 'Il y a 5j',
    status: 'Besoin de soutien',
    strongSubjects: ['Anglais', 'SVT'],
    weakAreas: ['Nombres complexes', 'Calcul d’intégrales'],
    submittedCopiesCount: 4,
  },
  {
    id: 'cls-5',
    fullName: 'Ibrahim Warsama Aden',
    matricule: 'LED-2024-0114',
    level: 'BAC_S',
    averageScore: 8.8,
    readinessScore: 35,
    lastActivity: 'Il y a 1 semaine',
    status: 'En difficulté',
    strongSubjects: ['Langue Arabe'],
    weakAreas: ['Mathématiques (Analyse)', 'Physique-Chimie'],
    submittedCopiesCount: 2,
  },
  {
    id: 'cls-6',
    fullName: 'Kaltoun Farah Rayaleh',
    matricule: 'LED-2024-0672',
    level: 'BAC_S',
    averageScore: 14.9,
    readinessScore: 75,
    lastActivity: 'Il y a 4h',
    status: 'Régulier',
    strongSubjects: ['Mathématiques', 'Anglais'],
    weakAreas: ['Titrage pH-métrique'],
    submittedCopiesCount: 10,
  }
];

export const mockClassReport = {
  className: 'Terminale S1 — Lycée d’État de Djibouti',
  academicYear: '2024-2025',
  headTeacher: 'Prof. Idriss Farah (Professeur Référent)',
  totalStudents: 34,

  classAverage: 14.1,
  readinessRate: 72,
  targetMentionRates: {
    tresBien: 28,
    bien: 42,
    assezBien: 22,
    passable: 8
  },
  subjectAverages: [
    { subject: 'Mathématiques', average: 14.6, coefficient: 7, delta: '+1.2' },
    { subject: 'Physique-Chimie', average: 13.8, coefficient: 6, delta: '+0.8' },
    { subject: 'SVT', average: 14.2, coefficient: 6, delta: '-0.3' },
    { subject: 'Philosophie', average: 11.9, coefficient: 3, delta: '+0.4' },
    { subject: 'Français', average: 15.1, coefficient: 3, delta: '+1.0' },
  ],
  identifiedMisconceptions: [
    {
      topic: 'Limites de fonctions avec formes indéterminées (0/0 et ∞/∞)',
      impactedStudentsCount: 14,
      severity: 'High',
      suggestedRemediation: 'Séance de rappel sur le théorème des croissances comparées et la règle de l’Hôpital.'
    },
    {
      topic: 'Incertitudes de mesure & chiffres significatifs en TP de Physique',
      impactedStudentsCount: 11,
      severity: 'Medium',
      suggestedRemediation: 'Devoir maison sur l’incertitude-type et la propagation des erreurs.'
    },
    {
      topic: 'Problématique de dissertation en Philosophie',
      impactedStudentsCount: 16,
      severity: 'High',
      suggestedRemediation: 'Atelier de rédaction : distinguer le paradoxe de la simple question descriptive.'
    }
  ]
};
