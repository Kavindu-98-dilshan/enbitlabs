import React from 'react';
import { XIcon } from 'lucide-react';
interface ServiceModalProps {
  title: string;
  description: string;
  detailedDescription: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export function ServiceModal({
  title,
  description,
  detailedDescription,
  isOpen,
  onClose
}: ServiceModalProps) {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity">
      <div className="bg-white dark:bg-dark-purple rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-mid-purple">
          <h3 className="text-2xl font-bold text-dark-purple dark:text-white">
            {title}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-dark-purple dark:hover:text-white transition-colors" aria-label="Close">
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            {description}
          </p>
          <div className="text-gray-700 dark:text-gray-200">
            {detailedDescription}
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-mid-purple flex justify-end">
          <button onClick={onClose} className="bg-teal hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
            Close
          </button>
        </div>
      </div>
    </div>;
}