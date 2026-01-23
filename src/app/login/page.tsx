'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { BrandLogo } from '@/components/icons/brand-logo';
import { GoogleIcon } from '@/components/icons/google-icon';
import { GithubIcon } from '@/components/icons/github-icon';
import { Lock, EyeOff, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login and redirect
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>
      
      <main className="relative z-10 w-full max-w-[480px] px-4 py-6">
        <Card className="bg-white/80 dark:bg-surface-dark/80 border-slate-200 dark:border-border-dark rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
          <CardHeader className="text-center items-center pb-2">
            <BrandLogo />
            <CardTitle className="text-2xl font-bold tracking-tight font-headline">Welcome Back</CardTitle>
            <CardDescription className="text-sm">Collaborate on datasets and automate your EDA.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 border-b rounded-none mb-6">
                <TabsTrigger value="login" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent">Log In</TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="name@example.com" type="email" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link className="text-sm font-medium text-primary hover:text-blue-500 transition-colors" href="#">Forgot password?</Link>
                    </div>
                    <div className="relative w-full">
                      <Input id="password" placeholder="Enter your password" type={passwordVisible ? "text" : "password"} className="pr-12"/>
                      <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-4" onClick={() => setPasswordVisible(!passwordVisible)}>
                        {passwordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 font-bold shadow-lg shadow-primary/20 mt-2">
                    <Lock size={20} />
                    Log In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                {/* Signup form can be added here */}
                <p className="text-center text-muted-foreground">Sign up is not yet available.</p>
              </TabsContent>
            </Tabs>

            <div className="px-0 pb-0 pt-8">
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t"></div>
                <span className="flex-shrink-0 mx-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Or continue with</span>
                <div className="flex-grow border-t"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="h-11">
                  <GoogleIcon />
                  <span className="ml-2 text-sm font-medium">Google</span>
                </Button>
                <Button variant="outline" className="h-11">
                  <GithubIcon />
                  <span className="ml-2 text-sm font-medium">GitHub</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="w-full mt-4 text-center text-xs text-slate-500">
              By clicking continue, you agree to our{' '}
              <Link className="text-slate-700 dark:text-slate-400 hover:text-primary dark:hover:text-primary underline transition-colors" href="#">Terms of Service</Link>
              {' '}and{' '}
              <Link className="text-slate-700 dark:text-slate-400 hover:text-primary dark:hover:text-primary underline transition-colors" href="#">Privacy Policy</Link>.
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
