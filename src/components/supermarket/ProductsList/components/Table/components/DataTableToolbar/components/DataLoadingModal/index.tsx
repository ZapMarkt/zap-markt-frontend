import ImportLoading from '@/components/ui/import-loading';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface LoadingImportProductsModalProps {
  onClick: () => void;
}

const LoadingImportProductsModal: React.FC<LoadingImportProductsModalProps> = ({
  onClick,
}) => {
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    let start: number | null = null;
    let frameId: number;

    const updateProgress = (timestamp: number) => {
      if (!start) start = timestamp;
      const progressPercentage = Math.round(((timestamp - start) / 2000) * 100); // 5 segundos para completar

      if (progressPercentage < 100) {
        setProgress(progressPercentage);
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        cancelAnimationFrame(frameId);
      }
    };

    if (animate) {
      frameId = requestAnimationFrame(updateProgress);
    }

    return () => cancelAnimationFrame(frameId);
  }, [animate]);

  if (!animate) return null;

  return (
    <div
      className="flex justify-center items-center w-[548px] h-[182px] flex-col text-center mb-6"
      onClick={onClick}
    >
      <ImportLoading />
      <p className="text-lg font-medium leading-customNormal mb-3">
        {progress}% concluída
      </p>
      <div
        id="slider"
        className="w-full h-2 bg-customMkt-whiteF0 rounded-[11px]"
      >
        <div
          className={cn(
            'w-0 h-2 bg-customMkt-primary rounded-[11px]',
            animate && 'animate-[width_2s_linear_forwards]',
          )}
        />
      </div>
    </div>
  );
};

export default LoadingImportProductsModal;
