-- Fix RLS policies for contact_requests table to prevent public access
-- Drop existing permissive policies that might allow public access
DROP POLICY IF EXISTS "Contact requests are viewable by everyone" ON public.contact_requests;
DROP POLICY IF EXISTS "Anyone can create contact requests" ON public.contact_requests;

-- Create proper RLS policies for contact_requests
-- Only allow inserts (for contact form submissions)
CREATE POLICY "Anyone can submit contact requests" 
ON public.contact_requests 
FOR INSERT 
WITH CHECK (true);

-- Only allow admins to view contact requests (no public SELECT access)
CREATE POLICY "Only admins can view contact requests" 
ON public.contact_requests 
FOR SELECT 
USING (false); -- This denies all public access, admin policy already exists for admin access

-- Ensure RLS is enabled on contact_requests
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;