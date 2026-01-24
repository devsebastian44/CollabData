
'use client';

import { useState, useEffect } from 'react';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { UserNav } from '@/components/layout/user-nav';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@/firebase';
import { updateProfile } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Camera } from 'lucide-react';

export default function SettingsPage() {
    const { user, loading } = useUser();
    const { toast } = useToast();

    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isSaving, setIsSaving] = useState(false);

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
                photoURL: photoURL,
            });
            toast({
                title: 'Profile Updated',
                description: 'Your changes have been saved successfully.',
            });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Error updating profile',
                description: error.message,
            });
        } finally {
            setIsSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen w-full bg-background-dark">
                <DashboardSidebar />
                 <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div><span className="text-white text-lg font-bold leading-normal">Settings</span></div>
                            <div className="flex items-center gap-3"><UserNav /></div>
                        </div>
                    </header>
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                        <div className="max-w-2xl mx-auto">
                            <Card className="bg-surface-dark border-border-dark">
                                <CardHeader><Skeleton className="h-8 w-48" /></CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <Skeleton className="h-24 w-24 rounded-full" />
                                        <div className="space-y-2"><Skeleton className="h-6 w-32" /><Skeleton className="h-4 w-48" /></div>
                                    </div>
                                    <div className="space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-10 w-full" /></div>
                                    <div className="space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-10 w-full" /></div>
                                </CardContent>
                                <CardFooter><Skeleton className="h-11 w-32" /></CardFooter>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="flex h-screen w-full bg-background-dark">
            <DashboardSidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div><span className="text-white text-lg font-bold leading-normal">Settings</span></div>
                        <div className="flex items-center gap-3"><UserNav /></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-surface-dark border-border-dark">
                            <CardHeader>
                                <CardTitle className="text-xl">Profile Settings</CardTitle>
                                <CardDescription>Update your photo and personal details.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <Image src={photoURL} alt="Profile picture" width={96} height={96} className="rounded-full object-cover" />
                                        <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8 cursor-pointer">
                                            <Camera size={16}/>
                                            <span className="sr-only">Change photo</span>
                                        </Button>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Profile Picture</h3>
                                        <p className="text-sm text-text-secondary">PNG, JPG, or GIF.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="photo-url" className="text-white">Photo URL</Label>
                                        <Input
                                            id="photo-url"
                                            placeholder="https://example.com/photo.jpg"
                                            className="bg-[#111722] border-border-dark"
                                            value={photoURL}
                                            onChange={(e) => setPhotoURL(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="full-name" className="text-white">Full Name</Label>
                                        <Input
                                            id="full-name"
                                            placeholder="e.g., John Doe"
                                            className="bg-[#111722] border-border-dark"
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            className="bg-[#111722] border-border-dark disabled:opacity-70 disabled:cursor-not-allowed"
                                            value={user?.email || ''}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t border-border-dark pt-6 justify-end">
                                <Button className="h-11 font-bold shadow-lg shadow-primary/20" onClick={handleSaveChanges} disabled={isSaving}>
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
