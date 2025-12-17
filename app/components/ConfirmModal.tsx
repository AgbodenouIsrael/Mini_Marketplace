import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirmer',
  message = 'Êtes-vous sûr ?',
  confirmText = 'Confirmer',
  cancelText = 'Annuler',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <p className="text-sm text-[#6B7280] mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-[#1D4ED8] text-white rounded-lg hover:bg-[#1E40AF] transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
