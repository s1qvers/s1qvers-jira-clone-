import { DottedSeparator } from "@/components/dotted-separator";
import { 
Card,
CardContent,
CardHeader,   
CardTitle
}from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
                <DottedSeparator  />
            </div>
        </Card>
    );
};
