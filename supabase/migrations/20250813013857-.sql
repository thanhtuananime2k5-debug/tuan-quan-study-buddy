-- Secure customer data by removing public access
-- Drop overly permissive policies
DROP POLICY "Admin can manage customers" ON public.customers;
DROP POLICY "Admin can manage orders" ON public.orders;  
DROP POLICY "Admin can manage order_items" ON public.order_items;

-- Create restrictive policies that deny all public access
-- These will need proper admin authentication to work

-- Customers table - deny all public access
CREATE POLICY "Deny all public access to customers" 
ON public.customers 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Orders table - deny all public access  
CREATE POLICY "Deny all public access to orders" 
ON public.orders 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Order items table - deny all public access
CREATE POLICY "Deny all public access to order_items" 
ON public.order_items 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Ensure RLS is enabled on all tables
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY; 
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;