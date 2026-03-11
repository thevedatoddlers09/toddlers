# Supabase Integration for Careers Page

This guide explains how to configure your Supabase project to accept career applications.

## Step 1: Run the Database Setup SQL
You need to create a table to store the applications and a storage bucket for the resumes.

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Go to the **SQL Editor** down the left sidebar
3. Click **New Query**
4. Paste the following SQL and click **Run**:

```sql
-- 1. Create the career_applications table
CREATE TABLE IF NOT EXISTS public.career_applications (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    position text NOT NULL,
    message text,
    resume_url text NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create the Storage Bucket for resumes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Set up Storage Security Policies (RLS)
-- Allow anyone to upload resumes
CREATE POLICY "Allow public uploads to resumes" 
ON storage.objects FOR INSERT 
TO public 
WITH CHECK (bucket_id = 'resumes');

-- Allow anyone to view resumes (needed for the dashboard/admin to view them easily)
CREATE POLICY "Allow public viewing of resumes" 
ON storage.objects FOR SELECT 
TO public 
USING (bucket_id = 'resumes');
```

## Step 2: Environment Variables
Ensure your `.env` file has these variables (already configured if you followed the automated setup):

```env
NEXT_PUBLIC_SUPABASE_URL=https://avualejzhajiqegesbej.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

## How It Works
When a user submits an application:
1. The frontend form `FormData` is POSTed to `/api/careers`
2. The server-side route handles the request.
3. The resume file is uploaded to the Supabase `resumes` bucket.
4. A permanent public URL is generated for the resume.
5. The applicant's details (name, email, etc.) along with the `resume_url` are inserted into the `career_applications` table.
6. You can view all applications directly in your Supabase **Table Editor**.
