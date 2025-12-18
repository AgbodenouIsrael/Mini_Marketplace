import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function CreateServicePage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: '',
  });

  const categories = [
    'Informatique',
    'Cours',
    'Impression',
    'Design',
    'Traduction',
    'Autre',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Service publié avec succès !');
    navigate('/my-services');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-[#1D4ED8] hover:underline mb-4 flex items-center gap-2"
          >
            ← Retour au tableau de bord
          </button>
          <h1 className="mb-2 text-gray-900">Publier un service</h1>
          <p className="text-[#6B7280]">
            Remplissez le formulaire pour proposer votre service
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block mb-2 text-gray-900">
                Titre du service
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ex: Développement Web & App"
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-gray-900">
                Description détaillée
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Décrivez votre service en détail..."
                rows={6}
                className="input-field resize-none"
                required
              />
              <p className="text-[#9CA3AF] mt-2">
                Soyez précis : compétences, tarifs, délais, etc.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block mb-2 text-gray-900">
                  Prix
                </label>
                <input
                  type="text"
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Ex: 50€/h ou 35€"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block mb-2 text-gray-900">
                  Catégorie
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="input-field"
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block mb-2 text-gray-900">
                Lieu
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Ex: Paris 13e"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-900">
                Images du service
              </label>
              <div className="border-2 border-dashed border-[#D1D5DB] rounded-lg p-8 text-center hover:border-[#1D4ED8] transition-colors cursor-pointer">
                <Upload className="mx-auto mb-4 text-[#6B7280]" size={40} />
                <p className="text-[#6B7280] mb-2">
                  Cliquez pour ajouter des images ou glissez-déposez
                </p>
                <p className="text-[#9CA3AF]">
                  PNG, JPG jusqu&apos;à 5MB
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex-1 px-6 py-3 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
              >
                Annuler
              </button>
              <button type="submit" className="btn-primary flex-1">
                Publier le service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
