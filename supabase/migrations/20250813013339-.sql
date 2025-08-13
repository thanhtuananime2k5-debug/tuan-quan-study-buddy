-- Fix the admin policy to be more specific and secure
-- The current "Admin can manage contact_requests" with cmd:ALL and qual:true is too permissive

-- Drop the overly permissive admin policy
DROP POLICY "Admin can manage contact_requests" ON public.contact_requests;

-- Create specific admin policies with proper role checking
-- Note: This assumes you have an admin role system. If not, you'll need to implement one.
-- For now, I'll create a policy that denies all access except for specific admin users

-- Create a more restrictive admin policy (you'll need to implement proper admin role checking)
CREATE POLICY "Admins can manage contact requests" 
ON public.contact_requests 
FOR ALL 
USING (false)  -- Deny by default, will need proper admin role checking
WITH CHECK (false);

-- Update the SELECT policy to be more explicit
DROP POLICY "Only admins can view contact requests" ON public.contact_requests;
CREATE POLICY "Deny all SELECT on contact requests" 
ON public.contact_requests 
FOR SELECT 
USING (false);

-- Keep the INSERT policy for contact form submissions
-- The "Anyone can submit contact requests" policy already exists and is correct