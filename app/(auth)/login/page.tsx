import LoginForm from "@/components/shared/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/authOptions";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <LoginForm />;
};

export default LoginPage;
