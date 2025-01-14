'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import login from '@/assets/ia2.png';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {/* Left side - Image */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-purple-50">
                <Image
                    src={login}
                    alt="Illustration"
                    className="w-2/4 rounded-xl shadow-md"
                />
            </div>

            {/* Right side - Login form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-8 lg:px-16 bg-white">
                <div className="w-full max-w-md">
                    

                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Welcome Back</h1>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="jhondoe@utal.edu.ec"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember" className="text-sm">Remember me</Label>
                            </div>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-purple-600 hover:text-purple-500"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2"
                        >
                            Log In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
