import React, { useEffect, useState } from 'react';
import { GalleryPhoto } from '../types';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, photos.length, onClose]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-slate-950/98 backdrop-blur-2xl select-none overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Viewer"
    >
      
      {/* Top Header Bar - High Contrast with Clear "Back to Gallery" */}
      <div className="relative w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/90 z-30">
        
        {/* Left: Prominent, High-Visibility "Back to Gallery" Button */}
        <button
          onClick={onClose}
          aria-label="Back to gallery overview"
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/25 transition-all active:scale-95 cursor-pointer shrink-0"
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          <span>Back to Gallery</span>
        </button>

        {/* Center: Photo Category and Counter */}
        <div className="hidden md:flex items-center gap-3 text-xs sm:text-sm text-slate-300">
          <span className="text-amber-400 font-semibold">{currentPhoto.category}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{currentPhoto.date}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="font-mono text-slate-400">
            Photo {currentIndex + 1} of {photos.length}
          </span>
        </div>

        {/* Right: Controls & Exit Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label="Toggle image zoom"
            className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            title="Toggle zoom"
          >
            {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>

          <button
            onClick={onClose}
            aria-label="Close photo view and return to gallery"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
          >
            <X size={18} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>

      {/* Center Image Display with Left/Right Arrows */}
      <div className="relative flex-1 w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        
        {/* Navigation Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-slate-900/90 text-white border border-slate-700 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all shadow-xl active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Navigation Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-slate-900/90 text-white border border-slate-700 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all shadow-xl active:scale-95 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        {/* Main Photo Frame */}
        <div
          className={`relative max-w-5xl max-h-[70vh] transition-transform duration-300 flex items-center justify-center ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            className="max-h-[66vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-800"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom Metadata & Mobile Back Button Bar */}
      <div className="relative w-full px-4 sm:px-8 py-4 sm:py-5 border-t border-slate-800/80 bg-slate-950/95 z-30 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Caption & Context */}
        <div className="text-center sm:text-left max-w-2xl">
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <span>{currentPhoto.title}</span>
            <span className="text-xs text-amber-400 font-mono font-normal">({currentPhoto.date})</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-2">
            {currentPhoto.caption}
          </p>
          <p className="text-[11px] text-slate-400 mt-1 font-mono">
            Location: {currentPhoto.context}
          </p>
        </div>

        {/* Desktop Thumbnail Strip + Secondary Back Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            {photos.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex(index);
                }}
                className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === index
                    ? 'border-amber-400 scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                title={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer shadow-md shrink-0"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            <span>Back to Gallery</span>
          </button>
        </div>
      </div>

    </div>
  );
};
