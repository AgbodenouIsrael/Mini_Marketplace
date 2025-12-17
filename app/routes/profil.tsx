import { Camera, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ConfirmModal from '../components/ConfirmModal';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Marc',
    lastName: 'Dubois',
    email: 'marc.dubois@email.fr',
    phone: '+33 6 12 34 56 78',
    bio: 'Étudiant en informatique passionné par le développement web. 3 ans d\'expérience en freelance.',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profil mis à jour avec succès !');
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    alert('Votre compte a été supprimé.');
    navigate('home');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-[#6B7280] hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour au dashboard</span>
        </button>

        <div className="mb-6">
          <h1 className="mb-2 text-gray-900">Mon profil</h1>
          <p className="text-[#6B7280]">
            Gérez vos informations personnelles
          </p>
        </div>

        <div className="card">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0ODYyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#1D4ED8] text-white rounded-full flex items-center justify-center hover:bg-[#1E40AF] transition-colors">
                  <Camera size={20} />
                </button>
              )}
            </div>
          </div>

          {!isEditing ? (
            /* View Mode */
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#6B7280] mb-1">Prénom</label>
                  <p className="text-gray-900">{formData.firstName}</p>
                </div>
                <div>
                  <label className="block text-[#6B7280] mb-1">Nom</label>
                  <p className="text-gray-900">{formData.lastName}</p>
                </div>
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">Email</label>
                <p className="text-gray-900">{formData.email}</p>
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">Téléphone</label>
                <p className="text-gray-900">{formData.phone}</p>
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">Bio</label>
                <p className="text-gray-900">{formData.bio}</p>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="btn-primary w-full"
              >
                Modifier mon profil
              </button>
            </div>
          ) : (
            /* Edit Mode */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-gray-900">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-gray-900">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-900">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="bio" className="block mb-2 text-gray-900">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="input-field resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-6 py-3 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
                >
                  Annuler
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Additional Settings */}
        <div className="card mt-6">
          <h3 className="mb-4 text-gray-900">Paramètres du compte</h3>
          <div className="space-y-3">
            <button 
              onClick={() => setShowPasswordModal(true)}
              className="w-full text-left px-4 py-3 bg-[#F3F4F6] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-900"
            >
              Changer le mot de passe
            </button>
            <button 
              onClick={() => navigate('/notification')}
              className="w-full text-left px-4 py-3 bg-[#F3F4F6] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-900"
            >
              Notifications
            </button>
            <button 
              onClick={() => setShowDeleteModal(true)}
              className="w-full text-left px-4 py-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-red-600"
            >
              Supprimer mon compte
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteAccount}
        title="Supprimer mon compte"
        message="Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible et toutes vos données seront définitivement supprimées."
        confirmText="Supprimer mon compte"
        cancelText="Annuler"
      />

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowPasswordModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
            <h2 className="mb-4 text-gray-900">Changer le mot de passe</h2>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Mot de passe modifié avec succès !');
              setShowPasswordModal(false);
            }} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block mb-2 text-gray-900">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block mb-2 text-gray-900">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-gray-900">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="input-field"
                  required
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-3 border border-[#D1D5DB] rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}