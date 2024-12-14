import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



import { createWorkspaceSchema } from "./schemas";

interface CreateWorkspaceFormProps {
  onCancel: () => void;
};

export const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceForm) => {
  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "", 
    },
  });

  const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    console.log({ values });
  };

  return (
    <Card>

    </Card>
  )
};