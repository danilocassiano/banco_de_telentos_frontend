import React, { useRef, useEffect, useCallback } from 'react';

interface Props {
  children: React.ReactNode;
  exceptionRef?: React.RefObject<HTMLElement>;
  onClick: () => void;
  className?: string;
}

const ClickOutside: React.FC<Props> = ({
  children,
  exceptionRef,
  onClick,
  className = '',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickListener = useCallback((event: MouseEvent) => {
    const clickedInside =
      wrapperRef.current?.contains(event.target as Node) ||
      exceptionRef?.current?.contains(event.target as Node);

    if (!clickedInside) onClick();
  }, [exceptionRef, onClick]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickListener);

    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, [handleClickListener]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ClickOutside;
