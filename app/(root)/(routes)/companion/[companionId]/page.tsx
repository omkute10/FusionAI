import { CompanionForm } from "@/app/(root)/(routes)/companion/[companionId]/components/CompanionForm";
import prismadb from "@/lib/prismadb";
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({
  params
}: CompanionIdPageProps) => {
  const { userId } = await auth();

  if(!userId) {
    return RedirectToSignIn;
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
}

export default CompanionIdPage;
