import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1D4ED8] rounded-full mb-4">
            <Mail className="text-white" size={32} />
          </div>
          <h1 className="mb-3 text-gray-900">Contactez-nous</h1>
          <p className="text-[#6B7280]">
            Une question ? Un problème ? N&apos;hésitez pas à nous écrire
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-900">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom"
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre.email@example.com"
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Décrivez votre demande..."
                rows={6}
                className="input-field resize-none"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={20} />
              <span>Envoyer le message</span>
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#6B7280]">
            Vous pouvez aussi nous contacter directement par email à{' '}
            <a href="mailto:contact@minimarketplace.fr" className="text-[#1D4ED8] hover:underline">
              contact@minimarketplace.fr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
