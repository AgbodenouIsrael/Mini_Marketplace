import { Bell, Check, MessageCircle, Package, UserCheck, X, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ConfirmModal from '../components/ConfirmModal';

interface NotificationItem {
  id: number;
  type: 'message' | 'request' | 'service' | 'system';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState<number | null>(null);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    { id: 1, type: 'request', title: 'Nouvelle demande de service', message: 'Julie H. a demandé votre service "Développement Web & App"', time: 'Il y a 2 minutes', isRead: false },
    { id: 2, type: 'message', title: 'Nouveau message', message: 'Sophie M. vous a envoyé un message', time: 'Il y a 15 minutes', isRead: false },
    { id: 3, type: 'request', title: 'Demande acceptée', message: 'Léa R. a accepté votre demande pour "Design Graphique"', time: 'Il y a 1 heure', isRead: false },
  ]);

  const markAsRead = (id: number) => setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  const markAllAsRead = () => setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  const handleDeleteClick = (id: number) => { setNotificationToDelete(id); setShowDeleteModal(true); };
  const handleDeleteConfirm = () => { if (notificationToDelete !== null) setNotifications(notifications.filter(n => n.id !== notificationToDelete)); setNotificationToDelete(null); };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button onClick={() => navigate('/dashboard')} className="text-[#1D4ED8] hover:underline mb-4 flex items-center gap-2">← Retour au tableau de bord</button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-gray-900">Notifications</h1>
              <p className="text-[#6B7280]">{unreadCount} notification{unreadCount > 1 ? 's' : ''} non lue{unreadCount > 1 ? 's' : ''}</p>
            </div>
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="text-[#1D4ED8] hover:underline flex items-center gap-2"><Check size={18} /> <span>Tout marquer comme lu</span></button>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {notifications.length === 0 ? (
            <div className="card text-center py-12">
              <Bell size={48} className="mx-auto text-[#E5E7EB] mb-4" />
              <p className="text-[#6B7280]">Aucune notification</p>
            </div>
          ) : (
            notifications.map(notification => (
              <div key={notification.id} className={`card hover:shadow-lg transition-all cursor-pointer ${!notification.isRead ? 'bg-blue-50 border-l-4 border-[#1D4ED8]' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${!notification.isRead ? 'bg-white' : 'bg-[#F3F4F6]'}`}>{/* icon placeholder */}
                    <Bell size={24} className="text-[#1D4ED8]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1">{notification.title}</h3>
                    <p className="text-[#6B7280] mb-2">{notification.message}</p>
                    <p className="text-sm text-[#9CA3AF]">{notification.time}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!notification.isRead && (
                      <button onClick={(e) => { e.stopPropagation(); markAsRead(notification.id); }} className="p-2 text-[#1D4ED8] hover:bg-blue-100 rounded-lg transition-colors" title="Marquer comme lu"><Check size={20} /></button>
                    )}
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteClick(notification.id); }} className="p-2 text-[#6B7280] hover:bg-[#E5E7EB] rounded-lg transition-colors" title="Supprimer"><Trash2 size={20} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <ConfirmModal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={handleDeleteConfirm} title="Supprimer la notification" message="Voulez-vous vraiment supprimer cette notification ?" confirmText="Supprimer" cancelText="Annuler" />
      </div>
    </div>
  );
}
