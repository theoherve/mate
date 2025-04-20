import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSessionUpdate() {
  const { data: session, update: updateSession } = useSession();
  const router = useRouter();

  const updateUserSession = useCallback(
    async (newData: { name?: string; email?: string }) => {
      if (!session) return;

      try {
        // Mise à jour de la session avec les nouvelles données
        await updateSession({
          ...session,
          user: {
            ...session.user,
            ...newData,
          },
        });

        // Forcer un rechargement complet de la page
        window.location.reload();
      } catch (error) {
        console.error("Failed to update session:", error);
        throw error;
      }
    },
    [session, updateSession]
  );

  return { updateUserSession };
}
