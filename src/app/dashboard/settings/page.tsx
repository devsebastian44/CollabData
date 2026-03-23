'use client';

import { useState, useEffect } from 'react';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { UserNav } from '@/components/layout/user-nav';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@/firebase';
import { updateProfile, deleteUser } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Camera, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const { user, loading } = useUser();
  const { toast } = useToast();
  const router = useRouter();

  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || 'https://picsum.photos/seed/1/96/96');
    }
  }, [user]);

  const handleSaveChanges = async () => {
    if (!user) return;

    setIsSaving(true);
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      toast({
        title: 'Profile Updated',
        description: 'Your changes have been saved successfully.',
      });
    } catch (error: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error updating profile',
        description:
          error instanceof Error ? error.message : 'An unknown error occurred',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    setIsDeleting(true);
    try {
      await deleteUser(user);
      toast({
        title: 'Account Deleted',
        description: 'Your account has been permanently deleted.',
      });
      router.push('/login');
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.message === 'auth/requires-recent-login'
      ) {
        toast({
          variant: 'destructive',
          title: 'Error deleting account',
          description:
            'This is a sensitive operation and may require a recent login. Please log out and log in again before retrying.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error deleting account',
          description:
            error instanceof Error
              ? error.message
              : 'An unknown error occurred',
        });
      }
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-background-dark">
        <DashboardSidebar />
        <main className="relative flex h-full flex-1 flex-col overflow-hidden">
          <header className="z-10 flex-none border-b border-border-dark/50 bg-background-dark/50 px-8 py-6 backdrop-blur-sm">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <span className="text-lg font-bold leading-normal text-white">
                  Settings
                </span>
              </div>
              <div className="flex items-center gap-3">
                <UserNav />
              </div>
            </div>
          </header>
          <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
            <div className="mx-auto max-w-2xl">
              <Card className="border-border-dark bg-surface-dark">
                <CardHeader>
                  <Skeleton className="h-8 w-48" />
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center gap-6">
                    <Skeleton className="h-24 w-24 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-11 w-32" />
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <header className="z-10 flex-none border-b border-border-dark/50 bg-background-dark/50 px-8 py-6 backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-lg font-bold leading-normal text-white">
                Settings
              </span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-2xl space-y-8">
            <Card className="border-border-dark bg-surface-dark">
              <CardHeader>
                <CardTitle className="text-xl">Profile Settings</CardTitle>
                <CardDescription>
                  Update your photo and personal details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    {photoURL && (
                      <Image
                        src={photoURL}
                        alt="Profile picture"
                        width={96}
                        height={96}
                        className="aspect-square rounded-full object-cover"
                      />
                    )}
                    <Button
                      size="icon"
                      className="absolute bottom-0 right-0 h-8 w-8 cursor-pointer rounded-full"
                    >
                      <Camera size={16} />
                      <span className="sr-only">Change photo</span>
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Profile Picture
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Click the camera to change.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full-name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="full-name"
                      placeholder="e.g., John Doe"
                      className="border-border-dark bg-[#111722]"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="border-border-dark bg-[#111722] disabled:cursor-not-allowed disabled:opacity-70"
                      value={user?.email || ''}
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end border-t border-border-dark pt-6">
                <Button
                  className="h-11 font-bold shadow-lg shadow-primary/20"
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-destructive/50 bg-surface-dark">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">
                  Danger Zone
                </CardTitle>
                <CardDescription>
                  These actions are permanent and cannot be undone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-lg bg-destructive/10 p-4">
                  <div className="pr-6">
                    <h4 className="font-semibold text-white">Delete Account</h4>
                    <p className="text-sm text-text-secondary">
                      Permanently delete your account and all associated data.
                    </p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Account
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          onClick={handleDeleteAccount}
                          disabled={isDeleting}
                        >
                          {isDeleting ? 'Deleting...' : 'Continue'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
