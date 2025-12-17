import { useNavigate } from 'react-router';

export default function ProfileEdit() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/profil')} className="text-[#1D4ED8] hover:underline mb-4">← Retour au profil</button>
        <h1 className="text-2xl font-semibold mb-2">Modifier mon profil</h1>
        <p className="text-[#6B7280]">Formulaire d'édition (simulé côté front).</p>
      </div>
    </div>
  );
}
