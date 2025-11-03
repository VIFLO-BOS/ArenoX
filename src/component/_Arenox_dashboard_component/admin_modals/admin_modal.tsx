"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function Admin_modal({
  isOpen,
  onClose,
  children,
}: AdminModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false); // this is to cleanup onmount
  }, []);

  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;
  
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
