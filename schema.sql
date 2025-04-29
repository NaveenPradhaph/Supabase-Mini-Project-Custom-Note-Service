CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    title TEXT NOT NULL,
    content TEXT,
    label TEXT,
    reminder_time TIMESTAMP,
    collaborators TEXT[],
    edited_at TIMESTAMP DEFAULT now(),
    version_history JSONB DEFAULT '[]',
    is_archived BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT now()
);