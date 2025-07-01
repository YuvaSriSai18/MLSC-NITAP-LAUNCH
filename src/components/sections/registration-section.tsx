"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, ">> System Error: Name requires at least 2 characters."),
  email: z
    .string()
    .email(">> System Error: Invalid email format.")
    .refine((email) => email.endsWith("@nitandhra.ac.in"), {
      message: ">> Access Denied: Only @nitandhra.ac.in domains are authorized.",
    }),
});

export const RegistrationSection = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Registration data:", values);
    toast({
      title: "Registration Successful!",
      description: `Welcome aboard, ${values.name}. Your confirmation has been sent to ${values.email}.`,
      className: "bg-accent text-accent-foreground border-accent",
    });
    form.reset();
  }

  return (
    <section id="register" className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-glow">Boarding Pass Registration</h2>
        <p className="text-lg text-muted-foreground mt-2">Now Boarding Future Leaders...</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <Alert className="border-accent/50 text-accent">
              <Terminal className="h-4 w-4" />
              <AlertTitle className="font-headline text-accent">Domain Restriction Active</AlertTitle>
              <AlertDescription>
                Only students with a <strong className="text-foreground">nitandhra.ac.in</strong> email can register. Other domains will be rejected.
              </AlertDescription>
            </Alert>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline text-lg text-primary">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          className="bg-background/50 border-primary/30 focus:border-accent focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive font-code" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline text-lg text-primary">Institute Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="yourname@nitandhra.ac.in"
                          {...field}
                          className="bg-background/50 border-primary/30 focus:border-accent focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive font-code" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full font-headline text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg py-6 transition-all duration-300 ease-in-out
                            shadow-[0_0_15px_hsl(var(--accent))] 
                            hover:shadow-[0_0_25px_hsl(var(--accent))]
                            hover:scale-105"
                >
                  Confirm Registration
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
