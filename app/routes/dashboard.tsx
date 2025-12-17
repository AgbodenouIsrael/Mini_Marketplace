import { Package, MessageCircle, User, Plus, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router';

// Le route loader de la nouvelle version de `react-router` s'attend
// à trouver une `default` export pour pouvoir rendre la page
// lorsque le fichier est référencé depuis `app/routes.ts`.
//
// On rend `onNavigate` optionnel ici : si vous avez un layout
// parent qui passe cette callback, elle sera utilisée, sinon
// le composant fonctionnera sans provoquer d'erreur.
interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

// Export par défaut requis par la config des routes
export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const navigate = useNavigate();
  const stats = [
    { label: 'Services actifs', value: '3', color: 'bg-[#1D4ED8]' },
    { label: 'Demandes envoyées', value: '7', color: 'bg-[#F97316]' },
    { label: 'Messages non lus', value: '5', color: 'bg-green-500' },
  ];

  const myServices = [
    {
      id: 1,
      title: 'Développement Web & App',
      status: 'Actif',
      requests: 3,
    },
    {
      id: 2,
      title: 'Dépannage Informatique',
      status: 'Actif',
      requests: 2,
    },
    {
      id: 3,
      title: 'Formation React.js',
      status: 'En pause',
      requests: 0,
    },
  ];

  const myRequests = [
    {
      id: 1,
      serviceTitle: 'Cours de Mathématiques',
      provider: 'Sophie M.',
      status: 'En attente',
      date: '2024-12-05',
    },
    {
      id: 2,
      serviceTitle: 'Design Graphique',
      provider: 'Léa R.',
      status: 'Acceptée',
      date: '2024-12-04',
    },
    {
      id: 3,
      serviceTitle: 'Traduction FR-EN',
      provider: 'Clara B.',
      status: 'En attente',
      date: '2024-12-03',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-gray-900">Tableau de bord</h1>
          <p className="text-[#6B7280]">
            Bienvenue Marc ! Gérez vos services et demandes
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#6B7280] mb-1">{stat.label}</p>
                  <p className="text-3xl text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg opacity-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* My Services */}
          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/mes-demandes')}>
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-[#1D4ED8] rounded-full flex items-center justify-center mb-4">
                <Package className="text-white" size={28} />
              </div>
              <h3 className="mb-2 text-gray-900">Mes services</h3>
              <p className="text-[#6B7280] mb-4">
                Gérez vos services publiés
              </p>
              <span className="text-[#1D4ED8]">Voir →</span>
            </div>
          </div>

          {/* My Requests */}
          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/mes-demandes')}>
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mb-4">
                <ClipboardList className="text-white" size={28} />
              </div>
              <h3 className="mb-2 text-gray-900">Mes demandes</h3>
              <p className="text-[#6B7280] mb-4">
                Services demandés
              </p>
              <span className="text-[#F97316]">Voir →</span>
            </div>
          </div>

          {/* Messages */}
          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/messagerie')}>
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 relative">
                <MessageCircle className="text-white" size={28} />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                  5
                </span>
              </div>
              <h3 className="mb-2 text-gray-900">Messagerie</h3>
              <p className="text-[#6B7280] mb-4">
                Vos conversations
              </p>
              <span className="text-green-600">Voir →</span>
            </div>
          </div>

          {/* Profile */}
          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/profil')}>
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-[#6B7280] rounded-full flex items-center justify-center mb-4">
                <User className="text-white" size={28} />
              </div>
              <h3 className="mb-2 text-gray-900">Mon profil</h3>
              <p className="text-[#6B7280] mb-4">
                Vos informations
              </p>
              <span className="text-[#6B7280]">Voir →</span>
            </div>
          </div>
        </div>

        {/* Services & Requests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* My Published Services */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Services publiés</h2>
              <button
                onClick={() => navigate('/mes-demandes')}
                className="text-[#1D4ED8] hover:underline text-sm"
              >
                Voir tout
              </button>
            </div>
            <div className="space-y-3">
              {myServices.map((service) => (
                <div
                  key={service.id}
                  className="p-4 bg-[#F3F4F6] rounded-lg hover:bg-[#E5E7EB] transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{service.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className={`${
                          service.status === 'Actif' 
                            ? 'text-green-600' 
                            : 'text-[#6B7280]'
                        }`}>
                          {service.status}
                        </span>
                        <span className="text-[#6B7280]">
                          {service.requests} demande{service.requests > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                    <Package size={20} className="text-[#1D4ED8]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Service Requests */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Mes demandes de services</h2>
              <button 
                onClick={() => navigate('/mes-demandes')}
                className="text-[#F97316] hover:underline text-sm"
              >
                Voir tout
              </button>
            </div>
            <div className="space-y-3">
              {myRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 bg-[#F3F4F6] rounded-lg hover:bg-[#E5E7EB] transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{request.serviceTitle}</h3>
                      <p className="text-sm text-[#6B7280]">
                        Prestataire : {request.provider}
                      </p>
                    </div>
                    <ClipboardList size={20} className="text-[#F97316]" />
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className={`px-2 py-1 rounded ${
                      request.status === 'Acceptée' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-[#F97316]'
                    }`}>
                      {request.status}
                    </span>
                    <span className="text-[#6B7280]">{request.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Action */}
        <div className="mt-8">
          <button
            onClick={() => navigate('create-service')}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            <span>Publier un nouveau service</span>
          </button>
        </div>
      </div>
    </div>
  );
}