'use client';

import { useState } from 'react';
import { useLoginWithEmail } from '@privy-io/react-auth';

interface EmailVerificationProps {
  title?: string;
  onVerified: () => void;
}

export function EmailVerification({ title, onVerified }: EmailVerificationProps) {
  const { sendCode, loginWithCode } = useLoginWithEmail();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async () => {
    setIsLoading(true);
    try {
      await sendCode({ email });
      setIsCodeSent(true);
    } catch (error) { 
      setError(error instanceof Error ? error.message : 'Failed to send code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await loginWithCode({ code });
      onVerified();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isCodeSent) {
        handleLogin();
      } else {
        handleSendCode();
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">{title || 'Create a Crypto Gift'}</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {isCodeSent && (
          <input
            type="text"
            placeholder="Enter the code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}

        {!isCodeSent ? (
          <button
            type="button"
            onClick={handleSendCode}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Sending code...' : 'Send code'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify code'}
          </button>
        )}
      </form>
    </div>
  );
} 