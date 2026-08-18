-- ============================================================
-- StreetCours — Migration 002: Submissions & Results
-- ============================================================

CREATE TABLE IF NOT EXISTS exam_submissions (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id     TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  exam_paper_id  TEXT NOT NULL REFERENCES exam_papers(id) ON DELETE CASCADE,
  title          TEXT NOT NULL,
  type           TEXT NOT NULL DEFAULT 'Examen Blanc',
  score          NUMERIC NOT NULL,
  max_score      NUMERIC NOT NULL DEFAULT 20,
  mention        TEXT NOT NULL,
  delta          TEXT NOT NULL DEFAULT '+0.0 pt',
  answers        JSONB NOT NULL DEFAULT '{}'::jsonb,
  criteria_breakdown JSONB NOT NULL DEFAULT '[]'::jsonb,
  submitted_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS exercise_attempts (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id     TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  competence_id  TEXT NOT NULL REFERENCES competences(id) ON DELETE CASCADE,
  score          INTEGER NOT NULL DEFAULT 100,
  steps_completed INTEGER NOT NULL DEFAULT 3,
  completed_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE exam_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read: exam_submissions" ON exam_submissions FOR SELECT USING (true);
CREATE POLICY "Public write: exam_submissions" ON exam_submissions FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Public read: exercise_attempts" ON exercise_attempts FOR SELECT USING (true);
CREATE POLICY "Public write: exercise_attempts" ON exercise_attempts FOR ALL USING (true) WITH CHECK (true);
