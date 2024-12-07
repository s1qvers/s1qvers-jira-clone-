import { 
Card,
CardContent,
CardHeader,   
CardTitle
}from "@/components/ui/card";

export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487] border-none shadow-none">
            <CardHeader>
                <CardTitle>
                    Welcome back!
                </CardTitle>
            </CardHeader>
        </Card>
    );
};
