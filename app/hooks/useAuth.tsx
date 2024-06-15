// useAuth.tsx
'use client';  // Ensure that this module runs in the client

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for Next.js router hook
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface CustomJwtPayload extends JwtPayload {
    role: string;
}

const useAuth = (expectedRole: string) => {
    const router = useRouter();  // Using useRouter from next/navigation

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded: CustomJwtPayload = jwtDecode(token);
            if (!decoded || decoded.role !== expectedRole) {
                router.replace('/');  // Redirect to home or appropriate URL
            }
        } else {
            router.replace('/login');  // No token found, redirect to login
        }
    }, [router, expectedRole]);

    // return { isAuthenticated: Boolean(token) };  // Optionally return authentication status
};

export default useAuth;

