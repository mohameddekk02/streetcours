-- ============================================================
-- StreetCours — Seed Script
-- Exact 1:1 mapping from data/mockData.ts
-- ============================================================

-- =========================
-- 1. SUBJECTS  (subjectsData — 8 rows)
-- =========================

INSERT INTO subjects (id, name, code, coefficient, icon, color, total_chapters, mastery_percentage) VALUES
  ('maths',          'Mathématiques',              'MATH-S', 7, 'functions',   '#034565', 12, 84),
  ('physique-chimie','Physique-Chimie',             'PC-S',   6, 'science',     '#285d7e', 10, 76),
  ('svt',            'Sciences de la Vie & Terre',  'SVT-S',  6, 'psychology',  '#10b981',  8, 68),
  ('philosophie',    'Philosophie',                 'PHILO',  3, 'auto_stories','#825505',  6, 58),
  ('francais',       'Français & Littérature',      'FRAN',   3, 'history_edu', '#ba1a1a',  8, 80),
  ('histoire-geo',   'Histoire-Géographie',         'HG',     3, 'public',      '#5b3900',  7, 72),
  ('anglais',        'Anglais (LV1)',               'ANG',    2, 'translate',   '#0f4b6b',  6, 88),
  ('arabe',          'Langue Arabe',                'ARA',    2, 'menu_book',   '#006492',  6, 85);


-- =========================
-- 2. COMPETENCES  (mockCompetences — 8 rows)
-- =========================

INSERT INTO competences (id, title, subject_id, status, score, questions_count, last_practiced) VALUES
  ('comp-1', 'Nombres complexes & Géométrie du plan',                'maths',          'MAITRISE', 92, 45, 'Hier'),
  ('comp-2', 'Équations différentielles & Primitives',               'maths',          'EN_COURS', 74, 38, 'Il y a 2 jours'),
  ('comp-3', 'Probabilités conditionnelles & Variables aléatoires',  'maths',          'MAITRISE', 88, 32, 'Il y a 3 jours'),
  ('comp-4', 'Suites numériques & Raisonnement par récurrence',      'maths',          'A_REVOIR', 48, 20, 'Il y a 5 jours'),
  ('comp-5', 'Cinématique & Lois de Newton',                         'physique-chimie', 'MAITRISE', 85, 40, 'Hier'),
  ('comp-6', 'Réactions Acido-Basiques & Titrage pH-métrique',       'physique-chimie', 'EN_COURS', 70, 28, 'Il y a 4 jours'),
  ('comp-7', 'Génétique mendélienne & Méiose',                       'svt',            'A_REVOIR', 52, 25, 'Il y a 6 jours'),
  ('comp-8', 'Dissertation philosophique : La Liberté et l''État',   'philosophie',    'A_REVOIR', 45, 12, 'La semaine dernière');


-- =========================
-- 3. EXAM PAPERS  (mockExamsList — 5 rows)
-- =========================

INSERT INTO exam_papers (id, title, code, subject_id, level, year, session, duration_minutes, coefficient, pages_count, difficulty, instructions) VALUES
  (
    'dj-bac-2024-math-s',
    'Baccalauréat 2024 — Mathématiques (Série Scientifique)',
    'DJ-BAC-2024-M-S1',
    'maths',
    'BAC_S',
    2024,
    'Normale',
    240,
    7,
    4,
    'Excellence',
    '["L''usage de la calculatrice scientifique non programmable est autorisé.","La clarté des raisonnements et la qualité de la rédaction entreront pour une part importante dans l''appréciation des copies.","Le sujet comporte 4 exercices indépendants notés sur 20 points."]'::jsonb
  ),
  (
    'dj-bac-2024-pc-s',
    'Baccalauréat 2024 — Physique-Chimie (Série Scientifique)',
    'DJ-BAC-2024-PC-S',
    'physique-chimie',
    'BAC_S',
    2024,
    'Normale',
    210,
    6,
    3,
    'Approfondi',
    '["Calculatrice autorisée.","Constantes physiques fournies en annexe."]'::jsonb
  ),
  (
    'dj-bac-2023-math-s',
    'Baccalauréat 2023 — Mathématiques (Série Scientifique)',
    'DJ-BAC-2023-M-S1',
    'maths',
    'BAC_S',
    2023,
    'Normale',
    240,
    7,
    4,
    'Standard',
    '["Sujet officiel MENFOP session 2023."]'::jsonb
  ),
  (
    'dj-bac-2024-philo-l',
    'Baccalauréat 2024 — Philosophie (Séries L & ES)',
    'DJ-BAC-2024-PH-LES',
    'philosophie',
    'BAC_L',
    2024,
    'Normale',
    240,
    5,
    2,
    'Approfondi',
    '["Le candidat traitera l''un des trois sujets au choix."]'::jsonb
  ),
  (
    'dj-bem-2024-math-3e',
    'Brevet BEM 2024 — Épreuve de Mathématiques (Classe de 3ème)',
    'DJ-BEM-2024-M-3E',
    'maths',
    'BEF_3EME',
    2024,
    'Normale',
    120,
    4,
    2,
    'Standard',
    '["Épreuve obligatoire du Brevet d''Enseignement Moyen de Djibouti."]'::jsonb
  );


-- =========================
-- 4. EXAM SECTIONS  (nested in mockExamsList)
-- Using deterministic UUIDs for FK references in exam_questions
-- =========================

-- Exam: dj-bac-2024-math-s  (4 sections)
INSERT INTO exam_sections (id, exam_paper_id, title, points, description, sort_order) VALUES
  (
    'a0000001-0000-0000-0000-000000000001',
    'dj-bac-2024-math-s',
    'Exercice 1 : Nombres Complexes & Transformations (4 points)',
    4,
    'Dans le plan complexe rapporté au repère orthonormé direct (O; u, v), on considère les points A, B, C d''affixes respectives...',
    1
  ),
  (
    'a0000001-0000-0000-0000-000000000002',
    'dj-bac-2024-math-s',
    'Exercice 2 : Probabilités & Lois Binomiales (4 points)',
    4,
    'Une fabrique de pièces mécaniques à la zone franche de Djibouti teste un lot de composants...',
    2
  ),
  (
    'a0000001-0000-0000-0000-000000000003',
    'dj-bac-2024-math-s',
    'Exercice 3 : Équations Différentielles & Suites (5 points)',
    5,
    'On considère l''équation différentielle (E) : y'' + 2y = 4e^(-2x)...',
    3
  ),
  (
    'a0000001-0000-0000-0000-000000000004',
    'dj-bac-2024-math-s',
    'Problème : Étude de Fonction Logarithme & Calcul d''Aire (7 points)',
    7,
    'Soit f la fonction définie sur ]0; +∞[ par f(x) = x - ln(x) / x...',
    4
  );

-- Exam: dj-bac-2024-pc-s  (3 sections)
INSERT INTO exam_sections (id, exam_paper_id, title, points, description, sort_order) VALUES
  (
    'a0000002-0000-0000-0000-000000000001',
    'dj-bac-2024-pc-s',
    'Chimie : Titrage du vinaigre commercial et équilibres (6 points)',
    6,
    'Dosage pH-métrique de l''acide éthanoïque par une solution d''hydroxyde de sodium...',
    1
  ),
  (
    'a0000002-0000-0000-0000-000000000002',
    'dj-bac-2024-pc-s',
    'Physique 1 : Satellite d''observation au-dessus de la Corne de l''Afrique (7 points)',
    7,
    'Mouvement circulaire uniforme et 3ème loi de Kepler...',
    2
  ),
  (
    'a0000002-0000-0000-0000-000000000003',
    'dj-bac-2024-pc-s',
    'Physique 2 : Circuit RLC et oscillations électriques amorties (7 points)',
    7,
    'Étude temporelle de la décharge d''un condensateur dans une bobine...',
    3
  );

-- Exam: dj-bac-2024-philo-l  (1 section)
INSERT INTO exam_sections (id, exam_paper_id, title, points, description, sort_order) VALUES
  (
    'a0000003-0000-0000-0000-000000000001',
    'dj-bac-2024-philo-l',
    'Sujet 1 (Dissertation) : L''obéissance aux lois limite-t-elle la liberté ?',
    20,
    'Analyse critique du contrat social et des obligations citoyennes.',
    1
  );

-- Exams dj-bac-2023-math-s and dj-bem-2024-math-3e have empty sections[] in mockData


-- =========================
-- 5. EXAM QUESTIONS  (nested in sections[].questions[])
-- =========================

-- Section: Exercice 1 — Nombres Complexes (2 questions)
INSERT INTO exam_questions (id, section_id, number, text, points, hints, model_answer) VALUES
  (
    'q1-1',
    'a0000001-0000-0000-0000-000000000001',
    '1.a',
    'Résoudre dans C l''équation : z² - 2√3 z + 4 = 0. Donner les solutions sous forme exponentielle.',
    1,
    '["Calculer le discriminant Δ = b² - 4ac","Identifier le module et l''argument principal."]'::jsonb,
    'Δ = (2√3)² - 16 = 12 - 16 = -4 = (2i)². Donc z1 = √3 - i = 2 e^(-iπ/6) et z2 = √3 + i = 2 e^(iπ/6).'
  ),
  (
    'q1-2',
    'a0000001-0000-0000-0000-000000000001',
    '1.b',
    'Déterminer la nature du triangle OAB et calculer son aire.',
    1,
    '["Calculer le rapport (zB - zO) / (zA - zO)","Interpréter géométriquement le module et l''argument."]'::jsonb,
    'OA = OB = 2 et l''angle (OA, OB) = π/3. Il s''agit d''un triangle équilatéral de côté 2. Aire = (c²√3)/4 = √3.'
  );

-- Section: Exercice 2 — Probabilités (1 question)
INSERT INTO exam_questions (id, section_id, number, text, points, hints, model_answer) VALUES
  (
    'q2-1',
    'a0000001-0000-0000-0000-000000000002',
    '2.a',
    'Calculer la probabilité qu''au moins un composant soit défectueux sur un échantillon de 20 pièces.',
    2,
    '["Utiliser l''événement contraire : 1 - P(X = 0)"]'::jsonb,
    'P(X >= 1) = 1 - (1 - p)^20 = 1 - (0.98)^20 ≈ 0.332.'
  );

-- Section: Exercice 3 — Équations Différentielles (1 question)
INSERT INTO exam_questions (id, section_id, number, text, points, hints, model_answer) VALUES
  (
    'q3-1',
    'a0000001-0000-0000-0000-000000000003',
    '3.a',
    'Déterminer une solution particulière g de la forme g(x) = ax e^(-2x).',
    2,
    '["Dériver g(x) avec la règle du produit (u·v)'' = u''v + uv''"]'::jsonb,
    'g''(x) = a e^(-2x) - 2ax e^(-2x). En injectant : a = 4. Donc g(x) = 4x e^(-2x).'
  );

-- Section: Problème — Étude de Fonction (1 question)
INSERT INTO exam_questions (id, section_id, number, text, points, hints, model_answer) VALUES
  (
    'q4-1',
    'a0000001-0000-0000-0000-000000000004',
    '4.a',
    'Étudier les limites de f aux bornes de son ensemble de définition.',
    2,
    '["En 0+, ln(x) tend vers -∞. En +∞, croissance comparée : ln(x)/x -> 0."]'::jsonb,
    'lim (x->0+) f(x) = +∞ (asymptote verticale x=0). lim (x->+∞) f(x) = +∞ avec asymptote oblique y=x.'
  );

-- Sections from dj-bac-2024-pc-s and dj-bac-2024-philo-l have empty questions[] in mockData


-- =========================
-- 6. STUDENTS  (mockStudent — 1 row)
-- =========================

INSERT INTO students (id, full_name, email, avatar_url, level, school_name, target_mention, readiness_score, streak_days, completed_exams_count, hours_studied, weak_subjects, strong_subjects) VALUES
  (
    'stu-dj-0982',
    'Ali Youssouf Farah',
    'ali.youssouf@lyceedetat.dj',
    'https://api.dicebear.com/7.x/initials/svg?seed=AYF&backgroundColor=1a6b3c',
    'BAC_S',

    'Lycée d''État de Djibouti (LED)',
    'Très Bien',
    78,
    14,
    18,
    86,
    '["philosophie","svt"]'::jsonb,
    '["maths","physique-chimie"]'::jsonb
  );


-- =========================
-- 7. CLASSES  (mockClassReport — 1 row)
-- Using a deterministic UUID for FK reference in class_students
-- =========================

INSERT INTO classes (id, class_name, academic_year, head_teacher, total_students, class_average, readiness_rate, target_mention_rates, subject_averages, identified_misconceptions) VALUES
  (
    'b0000001-0000-0000-0000-000000000001',
    'Terminale S1 — Lycée d''État de Djibouti',
    '2024-2025',
    'Prof. Abdillahi Guelleh (Inspecteur MENFOP)',
    34,
    14.1,
    72,
    '{"tresBien": 28, "bien": 42, "assezBien": 22, "passable": 8}'::jsonb,
    '[
      {"subject": "Mathématiques",   "average": 14.6, "coefficient": 7, "delta": "+1.2"},
      {"subject": "Physique-Chimie", "average": 13.8, "coefficient": 6, "delta": "+0.8"},
      {"subject": "SVT",            "average": 14.2, "coefficient": 6, "delta": "-0.3"},
      {"subject": "Philosophie",     "average": 11.9, "coefficient": 3, "delta": "+0.4"},
      {"subject": "Français",       "average": 15.1, "coefficient": 3, "delta": "+1.0"}
    ]'::jsonb,
    '[
      {
        "topic": "Limites de fonctions avec formes indéterminées (0/0 et ∞/∞)",
        "impactedStudentsCount": 14,
        "severity": "High",
        "suggestedRemediation": "Séance de rappel sur le théorème des croissances comparées et la règle de l''Hôpital."
      },
      {
        "topic": "Incertitudes de mesure & chiffres significatifs en TP de Physique",
        "impactedStudentsCount": 11,
        "severity": "Medium",
        "suggestedRemediation": "Devoir maison sur l''incertitude-type et la propagation des erreurs."
      },
      {
        "topic": "Problématique de dissertation en Philosophie",
        "impactedStudentsCount": 16,
        "severity": "High",
        "suggestedRemediation": "Atelier de rédaction : distinguer le paradoxe de la simple question descriptive."
      }
    ]'::jsonb
  );


-- =========================
-- 8. CLASS STUDENTS  (mockClassStudents — 6 rows)
-- =========================

INSERT INTO class_students (id, class_id, full_name, matricule, level, average_score, readiness_score, last_activity, status, strong_subjects, weak_areas, submitted_copies_count) VALUES
  (
    'cls-1',
    'b0000001-0000-0000-0000-000000000001',
    'Ali Youssouf Farah',
    'LED-2024-0412',
    'BAC_S',
    16.4,
    78,
    'Il y a 2h',
    'Excellence',
    '["Mathématiques","Physique-Chimie"]'::jsonb,
    '["Philosophie (Méthodologie)"]'::jsonb,
    12
  ),
  (
    'cls-2',
    'b0000001-0000-0000-0000-000000000001',
    'Fatouma Hassan Gouled',
    'LED-2024-0391',
    'BAC_S',
    17.8,
    92,
    'Hier',
    'Excellence',
    '["SVT","Mathématiques","Français"]'::jsonb,
    '["Cinématique relativiste"]'::jsonb,
    15
  ),
  (
    'cls-3',
    'b0000001-0000-0000-0000-000000000001',
    'Mohamed Omar Moussa',
    'LED-2024-0518',
    'BAC_S',
    13.2,
    64,
    'Il y a 3j',
    'Régulier',
    '["Physique-Chimie"]'::jsonb,
    '["Suites récurrentes","Probabilités"]'::jsonb,
    8
  ),
  (
    'cls-4',
    'b0000001-0000-0000-0000-000000000001',
    'Ayan Daher Barkhad',
    'LED-2024-0205',
    'BAC_S',
    10.5,
    48,
    'Il y a 5j',
    'Besoin de soutien',
    '["Anglais","SVT"]'::jsonb,
    '["Nombres complexes","Calcul d''intégrales"]'::jsonb,
    4
  ),
  (
    'cls-5',
    'b0000001-0000-0000-0000-000000000001',
    'Ibrahim Warsama Aden',
    'LED-2024-0114',
    'BAC_S',
    8.8,
    35,
    'Il y a 1 semaine',
    'En difficulté',
    '["Langue Arabe"]'::jsonb,
    '["Mathématiques (Analyse)","Physique-Chimie"]'::jsonb,
    2
  ),
  (
    'cls-6',
    'b0000001-0000-0000-0000-000000000001',
    'Kaltoun Farah Rayaleh',
    'LED-2024-0672',
    'BAC_S',
    14.9,
    75,
    'Il y a 4h',
    'Régulier',
    '["Mathématiques","Anglais"]'::jsonb,
    '["Titrage pH-métrique"]'::jsonb,
    10
  );


-- =========================
-- 9. FLASHCARDS  (mockFlashcards — 6 rows)
-- =========================

INSERT INTO flashcards (id, subject_id, chapter, title, formula_or_concept, explanation, tips, is_mastered) VALUES
  (
    'fc-1',
    'maths',
    'Nombres Complexes',
    'Formules d''Euler & Moivre',
    'cos(θ) = (e^(iθ) + e^(-iθ))/2  ;  sin(θ) = (e^(iθ) - e^(-iθ))/(2i)',
    'Permet de linéariser des puissances trigonométriques cos^n(x) et d''exprimer cos(nx) en fonction de cos(x).',
    'Attention au facteur ''2i'' au dénominateur pour le sinus !',
    false
  ),
  (
    'fc-2',
    'maths',
    'Analyse & Intégration',
    'Intégration par parties (IPP)',
    '∫[a..b] u(x)v''(x) dx = [u(x)v(x)][a..b] - ∫[a..b] u''(x)v(x) dx',
    'Méthode ''ALPES'' pour choisir u(x) : Arcsin/Arccos, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus.',
    'Toujours vérifier que u et v sont de classe C1 sur l''intervalle [a, b].',
    false
  ),
  (
    'fc-3',
    'physique-chimie',
    'Mécanique Newtonienne',
    'Deuxième Loi de Newton (PFD)',
    'Σ F_ext = m · a_G = m · (dv/dt)',
    'La somme vectorielle des forces extérieures appliquées à un système fermé est égale au produit de sa masse par son accélération dans un référentiel galiléen.',
    'Toujours préciser le système et le référentiel galiléen avant d''appliquer la loi.',
    false
  ),
  (
    'fc-4',
    'physique-chimie',
    'Chimie Acido-Basique',
    'pH et Diagramme de Prédominance',
    'pH = pKa + log([A-] / [AH])',
    'Si pH < pKa - 1, la forme acide [AH] prédomine à plus de 90%. Si pH > pKa + 1, la forme basique [A-] prédomine.',
    'À la demi-équivalence d''un titrage : pH = pKa car [AH] = [A-].',
    false
  ),
  (
    'fc-5',
    'philosophie',
    'La Liberté & L''État',
    'Rousseau — Du Contrat Social',
    '« L''obéissance à la loi qu''on s''est prescrite est liberté. »',
    'La véritable liberté (autonomie) ne consiste pas à suivre ses pulsions anarchiques, mais à obéir aux lois que la volonté générale a démocratiquement établies.',
    'Idéal pour introduire la conciliation entre autorité de l''État et liberté citoyenne.',
    false
  ),
  (
    'fc-6',
    'svt',
    'Génétique & Méiose',
    'Brassage Interchromosomique',
    '2^n combinaisons possibles de gamètes (pour n paires de chromosomes)',
    'Disjonction aléatoire et indépendante des chromosomes homologues lors de l''anaphase I de la méiose.',
    'Chez l''être humain (n=23), il y a 2^23 soit plus de 8 millions de gamètes génétiquement uniques sans compter le crossing-over !',
    false
  );


-- =========================
-- 10. SOCRATIC STEPS  (mockSocraticSteps — 3 rows)
-- =========================

INSERT INTO socratic_steps (step_number, title, hint_level_1, hint_level_2, hint_level_3) VALUES
  (
    1,
    'Identification de la méthode d''intégration',
    'Quelle est la nature du produit dans l''intégrale I = ∫[1..e] x · ln(x) dx ?',
    'Peut-on trouver directement une primitive évidente, ou faut-il dériver une partie et primitiver l''autre ?',
    'Appliquez la règle ALPES : ln(x) est un Logarithme (priorité pour u), x est un Polynôme (priorité pour v''). Posez u(x) = ln(x) et v''(x) = x.'
  ),
  (
    2,
    'Calcul des dérivées et primitives intermédiaires',
    'Que valent u''(x) et v(x) avec les choix définis ?',
    'La dérivée de ln(x) est 1/x, et une primitive de x est x²/2.',
    'u''(x) = 1/x  et  v(x) = x²/2. Le produit u(x)·v(x) vaut donc (x²/2) · ln(x).'
  ),
  (
    3,
    'Application de la formule d''intégration par parties',
    'Écrivez la formule d''intégration par parties et remplacez les termes.',
    'I = [ (x²/2) ln(x) ] de 1 à e - ∫[1..e] (1/x) · (x²/2) dx. Que donne la simplification sous la deuxième intégrale ?',
    'L''intégrale restante est ∫[1..e] (x/2) dx = [x²/4] de 1 à e. Le résultat final s''écrit : I = (e²/2) - (e²/4 - 1/4) = (e² + 1) / 4.'
  );
