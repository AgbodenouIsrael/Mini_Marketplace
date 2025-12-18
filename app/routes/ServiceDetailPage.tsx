import { MapPin, Tag, Mail, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

export default function ServiceDetailPage() {
  const navigate = useNavigate();
  
  const { id } = useParams<{ id: string }>();
  
  const serviceId = id ? parseInt(id, 10) : 1;
  const service = {
    id: serviceId,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjQ5NDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Développement Web & App',
    price: '50€/h',
    category: 'Informatique',
    location: 'Paris 13e',
    description: `Je propose mes services de développement web et d'applications. Fort de 3 années d'expérience en développement, je peux vous aider à créer :

• Sites web responsive (HTML, CSS, JavaScript, React)
• Applications web modernes (React, Vue.js, Next.js)
• APIs et backends (Node.js, Express, MongoDB)
• Intégrations et migrations de données
• Optimisation de performances

Que ce soit pour un projet personnel, académique ou professionnel, je m'adapte à vos besoins et votre budget.

Tarif horaire : 50€/h
Devis gratuit sur demande
Délais selon le projet`,
    provider: {
      name: 'Marc Dubois',
      photo: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0ODYyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      phone: '+33 6 12 34 56 78',
      email: 'marc.dubois@email.fr',
    },
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/services')}
          className="text-[#1D4ED8] hover:underline mb-4 flex items-center gap-2"
        >
          ← Retour aux services
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-xl overflow-hidden mb-6">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="card mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={18} className="text-[#1D4ED8]" />
                    <span className="text-[#1D4ED8]">{service.category}</span>
                  </div>
                  <h1 className="mb-3 text-gray-900">{service.title}</h1>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <MapPin size={18} />
                    <span>{service.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-[#F97316] text-white px-4 py-2 rounded-lg inline-block">
                    {service.price}
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="mb-4 text-gray-900">Description détaillée</h2>
              <div className="text-[#6B7280] whitespace-pre-line">
                {service.description}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="mb-4 text-gray-900">Prestataire</h3>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
                <img
                  src={service.provider.photo}
                  alt={service.provider.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 mb-1">{service.provider.name}</p>
                  <p className="text-[#6B7280]">Étudiant vérifié</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>{service.provider.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <Mail size={18} className="flex-shrink-0" />
                  <span className="truncate">{service.provider.email}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/messagerie')}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>Envoyer un message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
