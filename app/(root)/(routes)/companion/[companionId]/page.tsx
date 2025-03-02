import { CompanionForm } from "@/app/components/CompanionForm";
import prismadb from "@/lib/prismadb";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  //Check for Subscription

//   const companion = await prismadb.companion.findUnique({
//     where: {
//       id: params.companionId,
//     },
//   });

//   const categories = await prismadb.category.findMany();

//   return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
