"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "react-day-picker";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  }; 
};
  
export const JoinWorkspaceForm = ({
    initialValues,
}: JoinWorkspaceFormProps) => {
    return (
      <Card className="w-full h-full border-none shadow-none">
        <CardHeader className="p-7">
          <CardTitle className="text-xl font-bold">
            Join workspace
          </CardTitle>
          <CardDescription>
            You&apos;ve been invited to join <strong>{initialValues.name}</strong> workspace
          </CardDescription>
        </CardHeader>
        <div className="px-7">
          <DottedSeparator />
        </div>
        <CardContent className="p-7">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <Button>
               Cancel
            </Button>
            <Button>
               Join Workspace
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };