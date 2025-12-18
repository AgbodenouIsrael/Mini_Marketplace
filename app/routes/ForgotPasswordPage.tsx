import React, { useState } from 'react';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center py-12">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-[#6B7280] hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          <span>Retour à la connexion</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1D4ED8] rounded-full mb-4">
            <Mail className="text-white" size={32} />
          </div>
          <h1 className="mb-2 text-gray-900">Mot de passe oublié</h1>
          <p className="text-[#6B7280]">
            Entrez votre email pour réinitialiser votre mot de passe
          </p>
        </div>

        <div className="card">
          {!submitted ? (
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@example.com"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#1D4ED8] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>Envoyer le lien de réinitialisation</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Email envoyé !</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                Consultez votre boîte mail pour réinitialiser votre mot de passe
              </p>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[#1D4ED8] hover:underline font-medium transition-colors"
              >
                Retour à la connexion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
