import { Search, Send, ArrowLeft, Check, X, MapPin, Tag, Clock, Euro } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface ServiceRequest {
  id: number;
  serviceName: string;
  category: string;
  location: string;
  price: string;
  duration?: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface Message {
  id: number;
  sender: string;
  content: string;
  isMine: boolean;
  time: string;
  isAutomatic?: boolean;
  serviceRequest?: ServiceRequest;
}

export default function MessagesPage() {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [messagesList, setMessagesList] = useState<Message[]>([
    { 
      id: 1, 
      sender: 'Sophie Martin', 
      content: 'Bonjour, je suis intéressée par votre service de développement web', 
      isMine: false, 
      time: '10:30' 
    },
    { 
      id: 2, 
      sender: 'Moi', 
      content: 'Bonjour Sophie ! Je serais ravi de vous aider. Quel type de projet avez-vous en tête ?', 
      isMine: true, 
      time: '10:32' 
    },
    { 
      id: 3, 
      sender: 'Sophie Martin', 
      content: 'Je souhaite créer un site vitrine pour mon activité de photographe', 
      isMine: false, 
      time: '10:35' 
    },
    { 
      id: 4, 
      sender: 'Moi', 
      content: 'Excellent ! Je peux tout à fait vous aider avec ça. Je vous prépare un devis rapidement.', 
      isMine: true, 
      time: '10:40' 
    },
    { 
      id: 5, 
      sender: 'Sophie Martin', 
      content: 'Merci pour votre réponse rapide !', 
      isMine: false, 
      time: '10:45' 
    },
  ]);

  const conversations = [
    {
      id: 1,
      name: 'Sophie Martin',
      avatar: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0ODYyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: 'Merci pour votre réponse rapide !',
      time: '10:45',
      unread: 2,
    },
    {
      id: 2,
      name: 'Ahmed Khalil',
      avatar: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0ODYyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: 'Le service est disponible quand ?',
      time: 'Hier',
      unread: 1,
      hasServiceRequest: true,
    },
    {
      id: 3,
      name: 'Léa Robert',
      avatar: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0ODYyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: 'Parfait, à bientôt alors',
      time: '12/04',
      unread: 0,
    },
    {
      id: 4,
      name: 'Thomas Laurent',
      avatar: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0ODYyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: 'Pouvez-vous m\'envoyer un devis ?',
      time: '11/04',
      unread: 2,
    },
  ];

  // Messages pour la conversation avec Ahmed (qui a une demande de service)
  const conversationWithRequest: Message[] = [
    {
      id: 1,
      sender: 'Ahmed Khalil',
      content: 'Bonjour, je suis intéressé par ce service : Développement Web & App.',
      isMine: false,
      time: '14:20',
      isAutomatic: true,
      serviceRequest: {
        id: 1,
        serviceName: 'Développement Web & App',
        category: 'Informatique',
        location: 'Paris 13e',
        price: '50€/h',
        duration: '2-4 semaines',
        status: 'pending',
      },
    },
    {
      id: 2,
      sender: 'Ahmed Khalil',
      content: 'Le service est disponible quand ?',
      isMine: false,
      time: 'Hier',
    },
  ];

  const handleAcceptRequest = (messageId: number) => {
    setMessagesList(prev => prev.map(msg => {
      if (msg.id === messageId && msg.serviceRequest) {
        return {
          ...msg,
          serviceRequest: {
            ...msg.serviceRequest,
            status: 'accepted' as const,
          },
        };
      }
      return msg;
    }));

    // Add automatic response
    const autoResponse: Message = {
      id: Date.now(),
      sender: 'Moi',
      content: 'Votre demande a été acceptée.',
      isMine: true,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      isAutomatic: true,
    };
    setMessagesList(prev => [...prev, autoResponse]);
  };

  const handleRejectRequest = (messageId: number) => {
    setMessagesList(prev => prev.map(msg => {
      if (msg.id === messageId && msg.serviceRequest) {
        return {
          ...msg,
          serviceRequest: {
            ...msg.serviceRequest,
            status: 'rejected' as const,
          },
        };
      }
      return msg;
    }));

    // Add automatic response
    const autoResponse: Message = {
      id: Date.now(),
      sender: 'Moi',
      content: 'Votre demande a été refusée.',
      isMine: true,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      isAutomatic: true,
    };
    setMessagesList(prev => [...prev, autoResponse]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        sender: 'Moi',
        content: newMessage,
        isMine: true,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessagesList([...messagesList, message]);
      setNewMessage('');
    }
  };

  const currentMessages = selectedConversation === 2 ? conversationWithRequest : messagesList;
  const currentConversation = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <button
          onClick={() => navigate('/dashboard')}
          className="text-[#1D4ED8] hover:underline mb-6 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span>Retour au tableau de bord</span>
        </button>

        <h1 className="mb-6 text-gray-900">Messagerie</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="card">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une conversation..."
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                />
              </div>

              {/* Conversation List */}
              <div className="space-y-2">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedConversation === conv.id
                        ? 'bg-[#1D4ED8] bg-opacity-10 border border-[#1D4ED8]'
                        : 'hover:bg-[#F3F4F6]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <img
                          src={conv.avatar}
                          alt={conv.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conv.unread > 0 && (
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F97316] text-white text-xs rounded-full flex items-center justify-center">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-gray-900 truncate">{conv.name}</p>
                          <span className="text-xs text-[#6B7280]">{conv.time}</span>
                        </div>
                        <p className="text-sm text-[#6B7280] truncate">{conv.lastMessage}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <div className="card flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="border-b border-[#E5E7EB] pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={currentConversation?.avatar}
                    alt={currentConversation?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{currentConversation?.name}</p>
                    <p className="text-sm text-[#6B7280]">En ligne</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {currentMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${msg.isMine ? 'order-2' : 'order-1'}`}>
                      {msg.serviceRequest ? (
                        <div className="bg-white border-2 border-[#1D4ED8] rounded-lg p-4 mb-2">
                          <div className="flex items-start gap-2 mb-3">
                            <div className="w-8 h-8 bg-[#1D4ED8] rounded-full flex items-center justify-center flex-shrink-0">
                              <Tag size={16} className="text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-[#6B7280] mb-1">Demande de service</p>
                              <h3 className="text-gray-900 mb-3">{msg.serviceRequest.serviceName}</h3>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4 bg-[#F3F4F6] rounded-lg p-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Tag size={16} className="text-[#6B7280]" />
                              <span className="text-[#6B7280]">Catégorie:</span>
                              <span className="text-gray-900">{msg.serviceRequest.category}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin size={16} className="text-[#6B7280]" />
                              <span className="text-[#6B7280]">Lieu:</span>
                              <span className="text-gray-900">{msg.serviceRequest.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Euro size={16} className="text-[#6B7280]" />
                              <span className="text-[#6B7280]">Prix:</span>
                              <span className="text-gray-900">{msg.serviceRequest.price}</span>
                            </div>
                            {msg.serviceRequest.duration && (
                              <div className="flex items-center gap-2 text-sm">
                                <Clock size={16} className="text-[#6B7280]" />
                                <span className="text-[#6B7280]">Durée:</span>
                                <span className="text-gray-900">{msg.serviceRequest.duration}</span>
                              </div>
                            )}
                          </div>

                          {msg.serviceRequest.status === 'pending' && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAcceptRequest(msg.id)}
                                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                              >
                                <Check size={18} />
                                <span>Accepter</span>
                              </button>
                              <button
                                onClick={() => handleRejectRequest(msg.id)}
                                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                              >
                                <X size={18} />
                                <span>Refuser</span>
                              </button>
                            </div>
                          )}
                          {msg.serviceRequest.status === 'accepted' && (
                            <div className="bg-green-100 text-green-700 py-2 px-4 rounded-lg text-center">
                              ✓ Demande acceptée
                            </div>
                          )}
                          {msg.serviceRequest.status === 'rejected' && (
                            <div className="bg-red-100 text-red-700 py-2 px-4 rounded-lg text-center">
                              ✗ Demande refusée
                            </div>
                          )}
                        </div>
                      ) : null}

                      {msg.content && (
                        <div
                          className={`px-4 py-3 rounded-lg ${
                            msg.isMine
                              ? 'bg-[#1D4ED8] text-white'
                              : 'bg-white border border-[#E5E7EB] text-gray-900'
                          } ${msg.isAutomatic ? 'italic' : ''}`}
                        >
                          <p>{msg.content}</p>
                          <p className={`text-xs mt-1 ${msg.isMine ? 'text-blue-200' : 'text-[#9CA3AF]'}`}>
                            {msg.time}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-[#E5E7EB] pt-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Écrivez votre message..."
                    className="flex-1 px-4 py-3 border border-[#D1D5DB] rounded-lg text-gray-900 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="btn-primary px-6 flex items-center gap-2"
                  >
                    <Send size={20} />
                    <span>Envoyer</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
