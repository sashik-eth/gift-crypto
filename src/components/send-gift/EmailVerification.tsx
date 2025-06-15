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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 lg:h-full h-full">
          {/* Left side - Info */}
          <div className="lg:w-1/2 p-6 sm:p-8 relative flex items-center justify-center overflow-hidden min-h-[400px] lg:h-full h-full">
            <div className="absolute inset-0 z-0">
              <img src="/gift-bg.png" alt="Gift" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-indigo-700/70" />
            </div>
            <div className="text-white text-center max-w-md relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to Crypto Gift</h2>
              <p className="text-indigo-100 text-sm sm:text-base">
                Sign in to create and manage your crypto gifts. We'll send you a verification code to get started.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-6 sm:p-8 lg:h-full h-full min-h-[400px] flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6">{title || 'Sign In'}</h1>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 sm:p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-sm sm:text-base"
                  />
                </div>

                {isCodeSent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Verification Code</label>
                    <input
                      type="text"
                      placeholder="Enter the code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-sm sm:text-base"
                    />
                  </div>
                )}

                {!isCodeSent ? (
                  <button
                    type="button"
                    onClick={handleSendCode}
                    className="w-full bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors font-medium text-sm sm:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending code...' : 'Send Verification Code'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors font-medium text-sm sm:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify Code'}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 