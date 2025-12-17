import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

export default function NotificationDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Frontend-only: simplement rediriger après suppression
    alert(`Notification ${id} supprimée`);
    navigate('/notification');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold mb-4">Supprimer la notification #{id} ?</h1>
        <p className="text-[#6B7280] mb-6">Cette action est irréversible dans un vrai backend. Ici elle simule la suppression côté client.</p>
        <div className="flex gap-3">
          <button onClick={() => navigate('/notification')} className="px-4 py-2 border rounded-lg">Annuler</button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg">Supprimer</button>
        </div>
      </div>
    </div>
  );
}
