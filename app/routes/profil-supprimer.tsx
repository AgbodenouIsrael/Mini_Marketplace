import { useNavigate } from 'react-router';

export default function ProfileDelete() {
  const navigate = useNavigate();

  const handleDelete = () => {
    alert('Compte supprimé (simulation).');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold mb-4">Supprimer mon compte</h1>
        <p className="text-[#6B7280] mb-6">Cette action est irréversible dans un vrai backend. Ici c'est une simulation.</p>
        <div className="flex gap-3">
          <button onClick={() => navigate('/profil')} className="px-4 py-2 border rounded-lg">Annuler</button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg">Supprimer mon compte</button>
        </div>
      </div>
    </div>
  );
}
