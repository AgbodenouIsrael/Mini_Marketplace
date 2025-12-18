import React, { useState } from 'react';
import { User, Mail, Lock, Phone, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function RegisterPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    alert('Inscription réussie !');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center py-12">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1D4ED8] rounded-full mb-4">
            <UserPlus className="text-white" size={32} />
          </div>
          <h1 className="mb-2 text-gray-900">Inscription</h1>
          <p className="text-[#6B7280]">
            Créez votre compte gratuitement
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Marc"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Dubois"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

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
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                Téléphone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" size={18} />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+33 6 12 34 56 78"
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

            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" size={18} />
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1D4ED8] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              S&apos;inscrire
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#E5E7EB] text-center">
            <p className="text-sm text-[#6B7280]">
              Vous avez déjà un compte ?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[#1D4ED8] hover:underline font-medium transition-colors"
              >
                Se connecter
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
