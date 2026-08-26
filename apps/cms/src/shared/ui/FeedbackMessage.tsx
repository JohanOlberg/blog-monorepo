import React from 'react';
import './FeedbackMessage.css';

interface FeedbackMessageProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
  duration?: number;
}

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ 
  type, 
  message, 
  onClose, 
  duration 
}) => {


  // Executa a função de fechar após o tempo determinado
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  const isSuccess = type === 'success';

  if (!message) return null;
  return (
    <div className="feedback-overlay">
      <div className={`feedback-box ${isSuccess ? 'success' : 'error'}`}>
        
        <div className="feedback-icon-wrapper">
          {isSuccess ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          )}
        </div>

        <span className="feedback-text">{message}</span>
        
      </div>
    </div>
  );
};
