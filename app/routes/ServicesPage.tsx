import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ServiceCard } from '../components/ServiceCard';

export default function ServicesPage() {
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'Tous',
    'Informatique',
    'Cours',
    'Impression',
    'Design',
    'Traduction',
    'Autre',
  ];

  const services = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjQ5NDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Développement Web & App',
      description: 'Création de sites web responsive, applications web modernes avec React, Node.js',
      price: '50€/h',
      category: 'Informatique',
      location: 'Paris 13e',
      provider: 'Marc D.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1589995635011-078e0bb91d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvcmluZyUyMHRlYWNoaW5nfGVufDF8fHx8MTc2NDk3NjcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cours de Mathématiques',
      description: 'Soutien scolaire en mathématiques niveau lycée et prépa, méthodologie et exercices',
      price: '25€/h',
      category: 'Cours',
      location: 'Lyon 3e',
      provider: 'Sophie M.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1715059120691-d6b06c275d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjQ5NzY3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Impression & Reliure',
      description: 'Service d\'impression de documents, rapports, mémoires avec reliure professionnelle',
      price: '0.10€/page',
      category: 'Impression',
      location: 'Toulouse Centre',
      provider: 'Ahmed K.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Design Graphique',
      description: 'Création de logos, flyers, affiches, identité visuelle pour projets étudiants',
      price: '35€',
      category: 'Design',
      location: 'Bordeaux',
      provider: 'Léa R.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY0OTc0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Traduction FR-EN-ES',
      description: 'Traduction de documents académiques, CV, lettres de motivation en 3 langues',
      price: '20€/page',
      category: 'Traduction',
      location: 'Marseille 6e',
      provider: 'Clara B.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY0OTc0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Correction de Mémoires',
      description: 'Relecture et correction orthographique, syntaxe, cohérence pour mémoires et thèses',
      price: '15€/h',
      category: 'Cours',
      location: 'Lille Centre',
      provider: 'Thomas L.',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjQ5NDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Dépannage Informatique',
      description: 'Réparation PC/Mac, installation logiciels, assistance technique à distance ou sur place',
      price: '30€/h',
      category: 'Informatique',
      location: 'Paris 15e',
      provider: 'Kevin P.',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1589995635011-078e0bb91d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvcmluZyUyMHRlYWNoaW5nfGVufDF8fHx8MTc2NDk3NjcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cours de Physique-Chimie',
      description: 'Aide aux devoirs et préparation aux examens, niveau collège et lycée',
      price: '22€/h',
      category: 'Cours',
      location: 'Nantes',
      provider: 'Julie H.',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Montage Vidéo',
      description: 'Montage et édition vidéo pour projets personnels, YouTube, réseaux sociaux',
      price: '40€/vidéo',
      category: 'Design',
      location: 'Lyon 7e',
      provider: 'Alex M.',
    },
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="bg-white border-b border-[#E5E7EB] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-gray-900">Tous les services</h1>
          
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280]" size={20} />
              <input
                type="text"
                placeholder="Rechercher un service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D1D5DB] text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 text-[#6B7280] flex-shrink-0">
            <Filter size={20} />
            <span>Catégories :</span>
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'Tous' ? 'all' : category)}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  (category === 'Tous' && selectedCategory === 'all') ||
                  category.toLowerCase() === selectedCategory.toLowerCase()
                    ? 'bg-[#1D4ED8] text-white'
                    : 'bg-white text-[#6B7280] hover:bg-[#E5E7EB]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[#6B7280] mb-6">
          {filteredServices.length} service{filteredServices.length > 1 ? 's' : ''} trouvé{filteredServices.length > 1 ? 's' : ''}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
              category={service.category}
              location={service.location}
              provider={service.provider}
              onViewDetails={(id) => navigate(`/services/${id}`)}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6B7280] mb-4">Aucun service trouvé</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-[#1D4ED8] hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
