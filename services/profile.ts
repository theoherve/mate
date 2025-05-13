import { z } from "zod";

const profileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type ProfileData = z.infer<typeof profileSchema>;

export type ProfileResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  updated: boolean;
};

export async function updateProfile(
  data: ProfileData
): Promise<ProfileResponse> {
  const response = await fetch("/api/profile", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }

  return response.json();
}

export async function updatePassword(
  currentPassword: string,
  newPassword: string
) {
  const response = await fetch("/api/profile/password", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  if (!response.ok) {
    throw new Error("Failed to update password");
  }

  return response.json();
}
