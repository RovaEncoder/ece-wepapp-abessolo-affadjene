import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";

export default function Login() {
	const router = useRouter();
	const user = useUser();
	const supabase = useSupabaseClient();

	if (user) router.push(`/profile${user.id}`);
	return (
		<div className="w-full h-full flex justify-center items-center bg-slate-900">
			<div className="w-1/3 p-10 bg-white rounded-md">
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
					providers={["github"]}
					theme="dark"
				/>
			</div>
		</div>
	);
}
