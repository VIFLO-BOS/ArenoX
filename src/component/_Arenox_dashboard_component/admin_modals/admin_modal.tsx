"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/* @ modal-props-interface : define props for reusable admin modal component */

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
/* @ admin-modal-component : reusable modal component using React portal */

export default function Admin_modal({
  isOpen,
  onClose,
  children,
}: AdminModalProps){ /* @ mount-state : track component mount status for portal rendering */
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  /* @ render-check : only render if modal is open and component is mounted */
  
  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  /* @ portal-render : render modal using React portal to modal-root element */
  
  return createPortal(
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

