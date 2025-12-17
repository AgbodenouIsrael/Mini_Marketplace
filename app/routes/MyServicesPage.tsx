import React, { useState } from 'react';
import { Edit, Trash2, Eye, Plus, ArrowLeft, PauseCircle, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import ConfirmModal from '../components/ConfirmModal';

export default function MyServicesPage() {
  const navigate = useNavigate();
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<number | null>(null);
  
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Développement Web & App',
      category: 'Informatique',
      price: '50€/h',
      views: 45,
      status: 'actif',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjQ5NDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Traduction FR-EN-ES',
      category: 'Traduction',
      price: '20€/page',
      views: 32,
      status: 'actif',
      image: 'https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY0OTc0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Design Graphique',
      category: 'Design',
      price: '35€',
      views: 50,
      status: 'en_pause',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ]);

  const handleDeleteClick = (serviceId: number) => {
    setServiceToDelete(serviceId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (serviceToDelete !== null) {
      setServices(services.filter(s => s.id !== serviceToDelete));
      setServiceToDelete(null);
    }
  };

  const handleToggleStatus = (serviceId: number) => {
    setServices(services.map(s => 
      s.id === serviceId 
        ? { ...s, status: s.status === 'actif' ? 'en_pause' : 'actif' }
        : s
    ));
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-[#1D4ED8] hover:underline mb-4 flex items-center gap-2"
          >
            ← Retour au tableau de bord
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-gray-900">Mes services</h1>
              <p className="text-[#6B7280]">
                Gérez tous vos services publiés
              </p>
            </div>
            <button
              onClick={() => navigate('/create-service')}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              <span>Nouveau service</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="flex items-center gap-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 text-gray-900">{service.title}</h3>
                  <div className="flex items-center gap-4 text-[#6B7280]">
                    <span>{service.category}</span>
                    <span>•</span>
                    <span>{service.price}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>{service.views} vues</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`px-3 py-1 rounded-md ${
                    service.status === 'actif' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-[#F97316]'
                  }`}>
                    {service.status === 'actif' ? 'Actif' : 'En pause'}
                  </span>
                  
                  <button
                    onClick={() => handleToggleStatus(service.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      service.status === 'actif'
                        ? 'text-orange-500 hover:bg-orange-50'
                        : 'text-green-500 hover:bg-green-50'
                    }`}
                    title={service.status === 'actif' ? 'Mettre en pause' : 'Activer'}
                  >
                    {service.status === 'actif' ? <PauseCircle size={20} /> : <PlayCircle size={20} />}
                  </button>
                  
                  <button
                    onClick={() => navigate(`/edit-service/${service.id}`)}
                    className="p-2 text-[#1D4ED8] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Edit size={20} />
                  </button>
                  
                  <button
                    onClick={() => handleDeleteClick(service.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="card text-center py-16">
            <p className="text-[#6B7280] mb-4">
              Vous n'avez pas encore publié de service
            </p>
            <button
              onClick={() => navigate('/create-service')}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Plus size={20} />
              <span>Publier mon premier service</span>
            </button>
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
        title="Confirmer la suppression"
        message="Voulez-vous vraiment supprimer ce service ? Cette action est irréversible."
        confirmText="Confirmer"
        cancelText="Annuler"
      />
    </div>
  );
}
