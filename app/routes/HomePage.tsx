import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ServiceCard } from '../components/ServiceCard';

export default function HomePage() {
  const navigate = useNavigate();
  const popularServices = [
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
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Design Graphique',
      description: 'Création de logos, flyers, affiches, identité visuelle pour projets étudiants',
      price: '35€',
      category: 'Design',
      location: 'Bordeaux',
      provider: 'Léa R.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-white">
            Trouvez vos services étudiants facilement
          </h1>
          <p className="text-blue-100 mb-8 text-lg">
            Des services de qualité proposés par des étudiants, pour des étudiants
          </p>
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="bg-white text-[#1D4ED8] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            <span>Voir tous les services</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="mb-2 text-gray-900">Services populaires</h2>
            <p className="text-[#6B7280]">
              Découvrez les services les plus demandés
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="text-[#1D4ED8] hover:underline flex items-center gap-2"
          >
            <span>Voir tout</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onViewDetails={(id) => navigate(`/services/${id}`)}
            />
          ))}
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-gray-900">Catégories de services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Informatique', 'Cours', 'Impression', 'Design', 'Traduction', 'Autre'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => navigate('/services')}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-900">{category}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="mb-4 text-white">Proposez vos services</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Vous avez des compétences à partager ? Créez votre profil et commencez à proposer vos services dès maintenant
          </p>
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="bg-white text-[#1D4ED8] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Commencer gratuitement
          </button>
        </div>
      </div>
    </div>
  );
}
