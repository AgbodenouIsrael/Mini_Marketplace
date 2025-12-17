import { ClipboardList, Calendar, User, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ConfirmModal from '../components/ConfirmModal';

export default function MyRequestsPage() {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [requestToCancel, setRequestToCancel] = useState<number | null>(null);
  const [requests, setRequests] = useState([
    {
      id: 1,
      serviceTitle: 'Cours de Mathématiques',
      serviceImage: 'https://images.unsplash.com/photo-1589995635011-078e0bb91d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvcmluZyUyMHRlYWNoaW5nfGVufDF8fHx8MTc2NDk3NjcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Sophie M.',
      providerRating: 4.8,
      status: 'En attente',
      date: '2024-12-05',
      price: '25€/h',
      message: 'Bonjour, je souhaiterais des cours de maths niveau prépa pour préparer mes examens.',
    },
    {
      id: 2,
      serviceTitle: 'Design Graphique',
      serviceImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Léa R.',
      providerRating: 4.9,
      status: 'Acceptée',
      date: '2024-12-04',
      price: '35€',
      message: 'Je cherche quelqu\'un pour créer un logo pour mon projet étudiant.',
    },
    {
      id: 3,
      serviceTitle: 'Traduction FR-EN',
      serviceImage: 'https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY0OTc0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Clara B.',
      providerRating: 4.7,
      status: 'En attente',
      date: '2024-12-03',
      price: '20€/page',
      message: 'Besoin de traduire mon rapport de stage en anglais.',
    },
    {
      id: 4,
      serviceTitle: 'Impression & Reliure',
      serviceImage: 'https://images.unsplash.com/photo-1715059120691-d6b06c275d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjQ5NzY3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Ahmed K.',
      providerRating: 4.6,
      status: 'Acceptée',
      date: '2024-12-02',
      price: '0.10€/page',
      message: 'J\'ai besoin d\'imprimer et relier mon mémoire (150 pages).',
    },
    {
      id: 5,
      serviceTitle: 'Montage Vidéo',
      serviceImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Alex M.',
      providerRating: 4.5,
      status: 'Refusée',
      date: '2024-12-01',
      price: '40€/vidéo',
      message: 'Montage vidéo pour mon projet universitaire.',
    },
    {
      id: 6,
      serviceTitle: 'Correction de Mémoires',
      serviceImage: 'https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY0OTc0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Thomas L.',
      providerRating: 4.8,
      status: 'En attente',
      date: '2024-11-30',
      price: '15€/h',
      message: 'Relecture et correction de mon mémoire de fin d\'études.',
    },
    {
      id: 7,
      serviceTitle: 'Dépannage Informatique',
      serviceImage: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjQ5NDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      provider: 'Kevin P.',
      providerRating: 4.7,
      status: 'Terminée',
      date: '2024-11-28',
      price: '30€/h',
      message: 'Mon ordinateur portable ne démarre plus.',
    },
  ]);

  const handleCancelClick = (requestId: number) => {
    setRequestToCancel(requestId);
    setShowCancelModal(true);
  };

  const handleCancelConfirm = () => {
    if (requestToCancel !== null) {
      setRequests(requests.filter(r => r.id !== requestToCancel));
      setRequestToCancel(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Acceptée':
        return 'bg-green-100 text-green-700';
      case 'En attente':
        return 'bg-orange-100 text-[#F97316]';
      case 'Refusée':
        return 'bg-red-100 text-red-700';
      case 'Terminée':
        return 'bg-blue-100 text-[#1D4ED8]';
      default:
        return 'bg-gray-100 text-[#6B7280]';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Acceptée':
        return '✓';
      case 'En attente':
        return '⏱';
      case 'Refusée':
        return '✕';
      case 'Terminée':
        return '✓✓';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-[#1D4ED8] hover:underline mb-4 flex items-center gap-2"
          >
            ← Retour au tableau de bord
          </button>
          <h1 className="mb-2 text-gray-900">Mes demandes de services</h1>
          <p className="text-[#6B7280]">
            Suivez l'état de vos demandes et communiquez avec les prestataires
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card">
            <p className="text-[#6B7280] mb-1">Total</p>
            <p className="text-2xl text-gray-900">{requests.length}</p>
          </div>
          <div className="card">
            <p className="text-[#6B7280] mb-1">En attente</p>
            <p className="text-2xl text-[#F97316]">
              {requests.filter((r) => r.status === 'En attente').length}
            </p>
          </div>
          <div className="card">
            <p className="text-[#6B7280] mb-1">Acceptées</p>
            <p className="text-2xl text-green-600">
              {requests.filter((r) => r.status === 'Acceptée').length}
            </p>
          </div>
          <div className="card">
            <p className="text-[#6B7280] mb-1">Terminées</p>
            <p className="text-2xl text-[#1D4ED8]">
              {requests.filter((r) => r.status === 'Terminée').length}
            </p>
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <img
                  src={request.serviceImage}
                  alt={request.serviceTitle}
                  className="w-full md:w-48 h-48 object-cover rounded-lg"
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-gray-900 mb-2">{request.serviceTitle}</h3>
                      <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>{request.provider}</span>
                          <span className="text-yellow-500">★ {request.providerRating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{request.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(request.status)}`}>
                        {getStatusIcon(request.status)} {request.status}
                      </span>
                      <span className="text-[#1D4ED8]">{request.price}</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="bg-[#F3F4F6] rounded-lg p-4 mb-4">
                    <p className="text-sm text-[#6B7280] mb-1">Votre message :</p>
                    <p className="text-gray-900">{request.message}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {request.status === 'Acceptée' && (
                      <>
                        <button
                          onClick={() => navigate('/messagerie')}
                          className="btn-primary flex items-center gap-2"
                        >
                          <MessageCircle size={18} />
                          <span>Contacter</span>
                        </button>
                        <button className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
                          Voir les détails
                        </button>
                      </>
                    )}
                    {request.status === 'En attente' && (
                      <>
                        <button
                          onClick={() => navigate('/messagerie')}
                          className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors flex items-center gap-2"
                        >
                          <MessageCircle size={18} />
                          <span>Envoyer un message</span>
                        </button>
                        <button 
                          onClick={() => handleCancelClick(request.id)}
                          className="px-4 py-2 border border-red-300 rounded-lg text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                        >
                          <X size={18} />
                          <span>Annuler la demande</span>
                        </button>
                      </>
                    )}
                    {request.status === 'Refusée' && (
                      <button className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
                        Voir d'autres prestataires
                      </button>
                    )}
                    {request.status === 'Terminée' && (
                      <button className="btn-primary">
                        Laisser un avis
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConfirmModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelConfirm}
        title="Annuler la demande"
        message="Êtes-vous sûr de vouloir annuler cette demande ?"
      />
    </div>
  );
}