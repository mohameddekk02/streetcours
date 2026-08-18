-- ============================================================
-- StreetCours — Supabase Schema Migration
-- Generated from types/index.ts
-- ============================================================

-- =========================
-- 1. CUSTOM ENUM TYPES
-- =========================

CREATE TYPE exam_level AS ENUM (
  'BAC_S',
  'BAC_L',
  'BAC_ES',
  'BAC_STG',
  'BEF_3EME'
);

CREATE TYPE exam_session AS ENUM (
  'Normale',
  'Rattrapage'
);

CREATE TYPE exam_difficulty AS ENUM (
  'Standard',
  'Approfondi',
  'Excellence'
);

CREATE TYPE competence_status AS ENUM (
  'MAITRISE',
  'EN_COURS',
  'A_REVOIR'
);

CREATE TYPE target_mention AS ENUM (
  'Passable',
  'Assez Bien',
  'Bien',
  'Très Bien',
  'Félicitations'
);

CREATE TYPE student_class_status AS ENUM (
  'Excellence',
  'Régulier',
  'Besoin de soutien',
  'En difficulté'
);


-- =========================
-- 2. TABLES
-- =========================

-- -------------------------------------------------------
-- subjects  (from: Subject / SubjectId)
-- -------------------------------------------------------
CREATE TABLE subjects (
  id            TEXT PRIMARY KEY,              -- SubjectId slug: 'maths', 'physique-chimie', etc.
  name          TEXT        NOT NULL,
  code          TEXT        NOT NULL,
  coefficient   INTEGER     NOT NULL DEFAULT 1,
  icon          TEXT        NOT NULL DEFAULT '',
  color         TEXT        NOT NULL DEFAULT '#000000',
  total_chapters     INTEGER NOT NULL DEFAULT 0,
  mastery_percentage INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE subjects IS 'Matières scolaires du système éducatif djiboutien';
COMMENT ON COLUMN subjects.id IS 'Slug identifiant unique (SubjectId)';


-- -------------------------------------------------------
-- competences  (from: CompetenceItem)
-- -------------------------------------------------------
CREATE TABLE competences (
  id               TEXT PRIMARY KEY,
  title            TEXT              NOT NULL,
  subject_id       TEXT              NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  status           competence_status NOT NULL DEFAULT 'A_REVOIR',
  score            INTEGER           NOT NULL DEFAULT 0 CHECK (score >= 0 AND score <= 100),
  questions_count  INTEGER           NOT NULL DEFAULT 0,
  last_practiced   TEXT,                        -- human-readable label ('Hier', 'Il y a 2 jours', etc.)
  created_at       TIMESTAMPTZ       NOT NULL DEFAULT now()
);

COMMENT ON TABLE competences IS 'Compétences par matière avec score de maîtrise';


-- -------------------------------------------------------
-- exam_papers  (from: ExamPaper — header only)
-- -------------------------------------------------------
CREATE TABLE exam_papers (
  id               TEXT PRIMARY KEY,
  title            TEXT            NOT NULL,
  code             TEXT            NOT NULL,      -- e.g. 'DJ-BAC-2024-M-S1'
  subject_id       TEXT            NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  level            exam_level      NOT NULL,
  year             INTEGER         NOT NULL,
  session          exam_session    NOT NULL DEFAULT 'Normale',
  duration_minutes INTEGER         NOT NULL DEFAULT 120,
  coefficient      INTEGER         NOT NULL DEFAULT 1,
  pages_count      INTEGER         NOT NULL DEFAULT 1,
  difficulty       exam_difficulty NOT NULL DEFAULT 'Standard',
  instructions     JSONB           NOT NULL DEFAULT '[]'::jsonb,   -- text[]
  created_at       TIMESTAMPTZ     NOT NULL DEFAULT now()
);

COMMENT ON TABLE exam_papers IS 'Copies d''examen (BAC / BEM) du MENFOP Djibouti';


-- -------------------------------------------------------
-- exam_sections  (from: ExamPaper.sections[])
-- -------------------------------------------------------
CREATE TABLE exam_sections (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_paper_id  TEXT    NOT NULL REFERENCES exam_papers(id) ON DELETE CASCADE,
  title          TEXT    NOT NULL,
  points         NUMERIC NOT NULL DEFAULT 0,
  description    TEXT    NOT NULL DEFAULT '',
  sort_order     INTEGER NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE exam_sections IS 'Sections / exercices composant une copie d''examen';


-- -------------------------------------------------------
-- exam_questions  (from: sections[].questions[])
-- -------------------------------------------------------
CREATE TABLE exam_questions (
  id           TEXT PRIMARY KEY,
  section_id   UUID    NOT NULL REFERENCES exam_sections(id) ON DELETE CASCADE,
  number       TEXT    NOT NULL,                 -- '1.a', '2.a', etc.
  text         TEXT    NOT NULL,
  points       NUMERIC NOT NULL DEFAULT 0,
  hints        JSONB   DEFAULT '[]'::jsonb,      -- string[]
  model_answer TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE exam_questions IS 'Questions individuelles d''une section d''examen';


-- -------------------------------------------------------
-- students  (from: StudentProfile)
-- -------------------------------------------------------
CREATE TABLE students (
  id                    TEXT PRIMARY KEY,
  full_name             TEXT           NOT NULL,
  email                 TEXT           NOT NULL,
  avatar_url            TEXT           NOT NULL DEFAULT '',
  level                 exam_level     NOT NULL,
  school_name           TEXT           NOT NULL DEFAULT '',
  target_mention        target_mention NOT NULL DEFAULT 'Passable',
  readiness_score       INTEGER        NOT NULL DEFAULT 0 CHECK (readiness_score >= 0 AND readiness_score <= 100),
  streak_days           INTEGER        NOT NULL DEFAULT 0,
  completed_exams_count INTEGER        NOT NULL DEFAULT 0,
  hours_studied         NUMERIC        NOT NULL DEFAULT 0,
  weak_subjects         JSONB          NOT NULL DEFAULT '[]'::jsonb,    -- SubjectId[]
  strong_subjects       JSONB          NOT NULL DEFAULT '[]'::jsonb,    -- SubjectId[]
  created_at            TIMESTAMPTZ    NOT NULL DEFAULT now()
);

COMMENT ON TABLE students IS 'Profils élèves avec métriques de progression';


-- -------------------------------------------------------
-- classes  (from: mockClassReport)
-- -------------------------------------------------------
CREATE TABLE classes (
  id                        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_name                TEXT        NOT NULL,
  academic_year             TEXT        NOT NULL,
  head_teacher              TEXT        NOT NULL DEFAULT '',
  total_students            INTEGER     NOT NULL DEFAULT 0,
  class_average             NUMERIC     NOT NULL DEFAULT 0,
  readiness_rate            INTEGER     NOT NULL DEFAULT 0,
  target_mention_rates      JSONB       NOT NULL DEFAULT '{}'::jsonb,
  subject_averages          JSONB       NOT NULL DEFAULT '[]'::jsonb,
  identified_misconceptions JSONB       NOT NULL DEFAULT '[]'::jsonb,
  created_at                TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE classes IS 'Classes avec rapport agrégé (moyennes, misconceptions)';


-- -------------------------------------------------------
-- class_students  (from: ClassStudent)
-- -------------------------------------------------------
CREATE TABLE class_students (
  id                     TEXT PRIMARY KEY,
  class_id               UUID                 NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  full_name              TEXT                 NOT NULL,
  matricule              TEXT                 NOT NULL,
  level                  exam_level           NOT NULL,
  average_score          NUMERIC              NOT NULL DEFAULT 0,
  readiness_score        INTEGER              NOT NULL DEFAULT 0,
  last_activity          TEXT                 NOT NULL DEFAULT '',
  status                 student_class_status NOT NULL DEFAULT 'Régulier',
  strong_subjects        JSONB                NOT NULL DEFAULT '[]'::jsonb,
  weak_areas             JSONB                NOT NULL DEFAULT '[]'::jsonb,
  submitted_copies_count INTEGER              NOT NULL DEFAULT 0,
  created_at             TIMESTAMPTZ          NOT NULL DEFAULT now()
);

COMMENT ON TABLE class_students IS 'Élèves rattachés à une classe avec performances individuelles';


-- -------------------------------------------------------
-- flashcards  (from: Flashcard)
-- -------------------------------------------------------
CREATE TABLE flashcards (
  id                 TEXT PRIMARY KEY,
  subject_id         TEXT    NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  chapter            TEXT    NOT NULL,
  title              TEXT    NOT NULL,
  formula_or_concept TEXT    NOT NULL DEFAULT '',
  explanation        TEXT    NOT NULL DEFAULT '',
  tips               TEXT    NOT NULL DEFAULT '',
  is_mastered        BOOLEAN NOT NULL DEFAULT false,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE flashcards IS 'Cartes de révision (formules, concepts, citations)';


-- -------------------------------------------------------
-- socratic_steps  (from: SocraticStep)
-- -------------------------------------------------------
CREATE TABLE socratic_steps (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  step_number  INTEGER NOT NULL,
  title        TEXT    NOT NULL,
  hint_level_1 TEXT    NOT NULL DEFAULT '',
  hint_level_2 TEXT    NOT NULL DEFAULT '',
  hint_level_3 TEXT    NOT NULL DEFAULT '',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE socratic_steps IS 'Étapes de guidage socratique (indices progressifs)';


-- =========================
-- 3. INDEXES
-- =========================

CREATE INDEX idx_competences_subject   ON competences(subject_id);
CREATE INDEX idx_exam_papers_subject   ON exam_papers(subject_id);
CREATE INDEX idx_exam_papers_level     ON exam_papers(level);
CREATE INDEX idx_exam_sections_paper   ON exam_sections(exam_paper_id);
CREATE INDEX idx_exam_questions_section ON exam_questions(section_id);
CREATE INDEX idx_flashcards_subject    ON flashcards(subject_id);
CREATE INDEX idx_class_students_class  ON class_students(class_id);


-- =========================
-- 4. ROW LEVEL SECURITY
-- =========================

-- Enable RLS on all tables
ALTER TABLE subjects        ENABLE ROW LEVEL SECURITY;
ALTER TABLE competences     ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_papers     ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_sections   ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_questions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE students        ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes         ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_students  ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcards      ENABLE ROW LEVEL SECURITY;
ALTER TABLE socratic_steps  ENABLE ROW LEVEL SECURITY;

-- Public read access for demo (anon + authenticated)
CREATE POLICY "Public read: subjects"       ON subjects       FOR SELECT USING (true);
CREATE POLICY "Public read: competences"    ON competences    FOR SELECT USING (true);
CREATE POLICY "Public read: exam_papers"    ON exam_papers    FOR SELECT USING (true);
CREATE POLICY "Public read: exam_sections"  ON exam_sections  FOR SELECT USING (true);
CREATE POLICY "Public read: exam_questions" ON exam_questions FOR SELECT USING (true);
CREATE POLICY "Public read: students"       ON students       FOR SELECT USING (true);
CREATE POLICY "Public read: classes"        ON classes        FOR SELECT USING (true);
CREATE POLICY "Public read: class_students" ON class_students FOR SELECT USING (true);
CREATE POLICY "Public read: flashcards"     ON flashcards     FOR SELECT USING (true);
CREATE POLICY "Public read: socratic_steps" ON socratic_steps FOR SELECT USING (true);

-- Unrestricted write for demo (will be tightened later)
CREATE POLICY "Demo write: subjects"       ON subjects       FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: competences"    ON competences    FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: exam_papers"    ON exam_papers    FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: exam_sections"  ON exam_sections  FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: exam_questions" ON exam_questions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: students"       ON students       FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: classes"        ON classes        FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: class_students" ON class_students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: flashcards"     ON flashcards     FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Demo write: socratic_steps" ON socratic_steps FOR ALL USING (true) WITH CHECK (true);
