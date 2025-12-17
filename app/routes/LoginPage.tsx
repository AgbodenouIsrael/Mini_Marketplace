import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center py-12">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1D4ED8] rounded-full mb-4">
            <LogIn className="text-white" size={32} />
          </div>
          <h1 className="mb-2 text-gray-900">Connexion</h1>
          <p className="text-[#6B7280]">
            Accédez à votre compte Mini Marketplace
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" size={18} />
                <input 
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="votre.email@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" size={18} />
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-[#D1D5DB] text-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-0 cursor-pointer transition-colors" 
                />
                <span className="text-sm text-[#6B7280] group-hover:text-gray-900 transition-colors">Se souvenir de moi</span>
              </label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-[#1D4ED8] hover:underline font-medium transition-colors"
              >
                Mot de passe oublié ?
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1D4ED8] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#E5E7EB] text-center">
            <p className="text-sm text-[#6B7280]">
              Pas encore de compte ?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-[#1D4ED8] hover:underline font-medium transition-colors"
              >
                S&apos;inscrire
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
