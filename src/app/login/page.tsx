'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { BrandLogo } from '@/components/icons/brand-logo';
import { GoogleIcon } from '@/components/icons/google-icon';
import { GithubIcon } from '@/components/icons/github-icon';
import { Lock, EyeOff, Eye, User, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useAuth } from '@/firebase';

export default function LoginPage() {
  const auth = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpPasswordVisible, setSignUpPasswordVisible] = useState(false);
  const [signUpConfirmPasswordVisible, setSignUpConfirmPasswordVisible] =
    useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    if (!loginEmail || !loginPassword) {
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión',
        description: 'Por favor, ingrese su correo y contraseña.',
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toast({
        title: 'Inicio de sesión exitoso',
        description: 'Redirigiendo al dashboard...',
      });
      router.push('/dashboard');
    } catch (error: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión',
        description:
          error instanceof Error ? error.message : 'An unknown error occurred',
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    if (signupPassword !== signupConfirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Las contraseñas no coinciden.',
      });
      return;
    }
    if (!signupName || !signupEmail || !signupPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Todos los campos son obligatorios.',
      });
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      await updateProfile(userCredential.user, { displayName: signupName });
      toast({
        title: 'Registro exitoso',
        description: 'Redirigiendo al dashboard...',
      });
      router.push('/dashboard');
    } catch (error: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error en el registro',
        description:
          error instanceof Error ? error.message : 'An unknown error occurred',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión con Google',
        description:
          error instanceof Error ? error.message : 'An unknown error occurred',
      });
    }
  };

  const handleGithubSignIn = async () => {
    if (!auth) return;
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión con GitHub',
        description:
          error instanceof Error ? error.message : 'An unknown error occurred',
      });
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden transition-colors duration-200">
      <Link href="/" passHref>
        <Button variant="ghost" className="absolute left-8 top-8 z-20">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-[480px] px-4 py-6">
        <Card className="overflow-hidden rounded-2xl border-slate-200 bg-white/80 shadow-xl backdrop-blur-sm dark:border-border-dark dark:bg-surface-dark/80">
          <CardHeader className="items-center pb-2 text-center">
            <BrandLogo />
            <CardTitle className="font-headline text-2xl font-bold tracking-tight">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-sm">
              Collaborate on datasets and automate your EDA.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-2 rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="login"
                  className="rounded-none bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
                >
                  Log In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="rounded-none bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        className="text-sm font-medium text-primary transition-colors hover:text-blue-500"
                        href="#"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative w-full">
                      <Input
                        id="password"
                        placeholder="Enter your password"
                        type={passwordVisible ? 'text' : 'password'}
                        className="pr-12"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-4"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <Eye size={20} />
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="mt-2 h-12 w-full font-bold shadow-lg shadow-primary/20"
                  >
                    <Lock size={20} />
                    Log In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form className="flex flex-col gap-5" onSubmit={handleSignUp}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      placeholder="John Doe"
                      type="text"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input
                      id="signup-email"
                      placeholder="name@example.com"
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative w-full">
                      <Input
                        id="signup-password"
                        placeholder="Create a password"
                        type={signUpPasswordVisible ? 'text' : 'password'}
                        className="pr-12"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-4"
                        onClick={() =>
                          setSignUpPasswordVisible(!signUpPasswordVisible)
                        }
                      >
                        {signUpPasswordVisible ? (
                          <Eye size={20} />
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="signup-confirm-password">
                      Confirm Password
                    </Label>
                    <div className="relative w-full">
                      <Input
                        id="signup-confirm-password"
                        placeholder="Confirm your password"
                        type={
                          signUpConfirmPasswordVisible ? 'text' : 'password'
                        }
                        className="pr-12"
                        value={signupConfirmPassword}
                        onChange={(e) =>
                          setSignupConfirmPassword(e.target.value)
                        }
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-4"
                        onClick={() =>
                          setSignUpConfirmPasswordVisible(
                            !signUpConfirmPasswordVisible
                          )
                        }
                      >
                        {signUpConfirmPasswordVisible ? (
                          <Eye size={20} />
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="mt-2 h-12 w-full font-bold shadow-lg shadow-primary/20"
                  >
                    <User size={20} />
                    Sign Up
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="px-0 pb-0 pt-8">
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t"></div>
                <span className="mx-4 flex-shrink-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Or continue with
                </span>
                <div className="flex-grow border-t"></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-11"
                  onClick={handleGoogleSignIn}
                >
                  <GoogleIcon />
                  <span className="ml-2 text-sm font-medium">Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-11"
                  onClick={handleGithubSignIn}
                >
                  <GithubIcon />
                  <span className="ml-2 text-sm font-medium">GitHub</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="mt-4 w-full text-center text-xs text-slate-500">
              By clicking continue, you agree to our{' '}
              <Link
                className="text-slate-700 underline transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
                href="#"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                className="text-slate-700 underline transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
                href="#"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
