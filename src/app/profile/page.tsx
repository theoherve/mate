"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileSchema } from "@/lib/validations/profile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { updateProfile, updatePassword } from "@/services/profile"
import { useUserStore } from "@/store/user-store"

type FormData = {
  name: string
  email: string
  currentPassword: string
  password: string
  confirmPassword: string
}

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true)
  const { data: session, status } = useSession()
  const router = useRouter()
  const { name, setUser } = useUserStore()

  const form = useForm<FormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: name || session?.user?.name || "",
      email: session?.user?.email || "",
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  })

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    } else if (status === "authenticated") {
      setIsLoading(false)
    }
  }, [status, router])

  const onSubmit = async (data: FormData) => {
    try {
      if (data.name !== (name || session?.user?.name)) {
        const response = await updateProfile({
          name: data.name,
          email: data.email,
        })

        if (response.updated) {
          setUser({
            name: response.user.name,
            email: response.user.email,
          })
        }
      }

      if (data.password) {
        await updatePassword(data.currentPassword, data.password)
      }

      toast.success("Profil mis à jour avec succès")
      form.reset({
        name: data.name,
        email: data.email,
        currentPassword: "",
        password: "",
        confirmPassword: "",
      })
    } catch (error) {
      console.error(error)
      toast.error("Une erreur est survenue lors de la mise à jour du profil")
    }
  }

  // Mise à jour des valeurs par défaut du formulaire quand la session change
  useEffect(() => {
    if (session?.user?.name) {
      form.setValue("name", session.user.name)
    }
  }, [session, form])

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Mon profil</CardTitle>
          <CardDescription>
            Modifiez vos informations personnelles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom complet" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        defaultValue={session?.user?.email || ""}
                        placeholder="Votre email"
                        disabled
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Changer le mot de passe</h3>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe actuel</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Votre mot de passe actuel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nouveau mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Nouveau mot de passe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmer le nouveau mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirmer le nouveau mot de passe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  "Enregistrer les modifications"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
} 
