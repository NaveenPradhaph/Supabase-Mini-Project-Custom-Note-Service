
# 2-Hour Supabase Mini–Project – Custom Note Service


a minimal Supabase backend for a personal “notes” service


## Setup and Deploy
## Installation

Install node packages with npm

```bash
  npm install

```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SUPABASE_URL`

`SUPABASE_ANON_KEY`

## Run Locally

To run this backend Locally

```bash
node server.js

```


## Demo CURL commands

*This is only demo data*

#### For Post '/notes'

``` bash
curl -X POST http://localhost:3000/notes   -H "Content-Type: application/json"   -d '{
    "user_id":0,
    "title": "Meeting Notes",
    "content": "Discuss project goals",
    "label": "Work",
    "reminder_time": "2025-05-01T10:00:00Z",
    "collaborators": ["collab1@example.com", "collab2@example.com"]
  }'
```

#### For Get '/notes'

```bash
curl "http://localhost:3000/notes?user_id=0"
```

## Why this schema?

#### Schema

```sql
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
```

* I chose a ***UUID-based*** *primary key (id)* and ***foreign key*** *(user_id)* for scalability and security.
* ***TEXT[]*** for collaborators allows storing *multiple emails*.
* ***JSONB*** for *version_history* enables structured, versioned content. 
* ***TIMESTAMP*** fields track edits/reminders
* ***BOOLEAN*** *(is_archived)* is optimal for binary state.
* Defaults reduce insert friction and ensure data consistency.
* Where reminder_time, collaborators, is_archived are not compulsory.


#### POST /notes – Create a new note

    POST is used to create resources; body is used to send note data.

#### GET /notes?user_id=... – Get all notes for a user

    GET is used to retrieve data; query is used to pass user_id.





