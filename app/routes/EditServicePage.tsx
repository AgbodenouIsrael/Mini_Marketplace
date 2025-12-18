import React, { useState } from 'react';
import { Upload, ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

export default function EditServicePage() {
  const navigate = useNavigate();
  
  const { id } = useParams<{ id: string }>();
  
  const [formData, setFormData] = useState({
    title: 'Développement Web & App',
    description: 'Création de sites web responsive, applications web modernes avec React, Node.js',
    price: '50€/h',
    category: 'Informatique',
    location: 'Paris 13e',
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
    alert('Service modifié avec succès !');
    navigate('/my-services');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/my-services')}
            className="text-[#1D4ED8] hover:underline mb-4 flex items-center gap-2"
          >
            ← Retour à mes services
          </button>
          <h1 className="mb-2 text-gray-900">Modifier le service</h1>
          <p className="text-[#6B7280]">
            Mettez à jour les informations de votre service
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
                rows={6}
                className="input-field resize-none"
                required
              />
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
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-900">
                Images du service
              </label>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjQ5NDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Service"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="border-2 border-dashed border-[#D1D5DB] rounded-lg p-8 text-center hover:border-[#1D4ED8] transition-colors cursor-pointer">
                <Upload className="mx-auto mb-4 text-[#6B7280]" size={40} />
                <p className="text-[#6B7280] mb-2">
                  Ajouter des images
                </p>
                <p className="text-[#9CA3AF]">
                  PNG, JPG jusqu&apos;à 5MB
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/my-services')}
                className="flex-1 px-6 py-3 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
              >
                Annuler
              </button>
              <button type="submit" className="btn-primary flex-1">
                Enregistrer les modifications
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
