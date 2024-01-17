import SignUpForm from "@/components/shared/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/authOptions";

const SignUpPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <SignUpForm />;
};

export default SignUpPage;
