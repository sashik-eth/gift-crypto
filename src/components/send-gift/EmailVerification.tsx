'use client';

import { useState } from 'react';
import { useLogin } from '@privy-io/react-auth';

interface EmailVerificationProps {
  title?: string;
  onVerified: () => void;
}

export function EmailVerification({ title, onVerified }: EmailVerificationProps) {
  const { login } = useLogin();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">{title || 'Create a Crypto Gift'}</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={login}
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
} 