"use client";
import { useState, useEffect, useCallback } from "react";

// @ contact-type : define contact structure
export interface Contact {
  id: string;
  name: string;
  email?: string;
  image?: string;
  role?: string;
  online?: boolean;
}

export function useContacts(currentUserId: string, role?: string) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // @ fetch-contacts : load contacts from API
  const fetchContacts = useCallback(async () => {
    if (!currentUserId) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/data/contacts?currentUserId=${currentUserId}&role=${role || ""}`,
      );

      const result = await response.json();

      if (result.status === "success") {
        setContacts(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to fetch contacts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [currentUserId, role]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return { contacts, loading, error, refetch: fetchContacts };
}
