"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Button from "../../UI/components/Button/Button";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        router.push('/auth');
      } else if (session?.user) {
        setUser(session.user);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const checkUser = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      
      if (!session || !session.user) {
        router.push('/auth');
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    } catch (error) {
      router.push('/auth');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto pt-12">
      <div className="p-6 border rounded-lg bg-white">
        <h1 className="text-black font-bold mb-4">Dashboard</h1>
        
        <div className="mb-4">
          <p className="text-black">Welcome!</p>
          <p className="text-black font-medium">{user?.email}</p>
        </div>

        <Button 
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
