import {
	useSession,
	useSupabaseClient,
	useUser,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Update() {
	const supabase = useSupabaseClient();
	const user = useUser();
	const router = useRouter();
	const session = useSession();
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState(null);
	const [website, setWebsite] = useState(null);
	const [avatar_url, setAvatarUrl] = useState(null);

	useEffect(() => {
		getProfile();
	}, [session]);

	async function getProfile() {
		try {
			setLoading(true);

			let { data, error, status } = await supabase
				.from("profiles")
				.select(`username, website, avatar_url`)
				.eq("user_id", user?.id)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setUsername(data.username);
				setWebsite(data.website);
				setAvatarUrl(data.avatar_url);
			}
		} catch (error) {
			alert("Error loading user data!");
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function updateProfile({ username, website, avatar_url }) {
		try {
			setLoading(true);

			const updates = {
				id: user?.id,
				username,
				website,
				avatar_url,
				updated_at: new Date().toISOString(),
			};

			let { error } = await supabase.from("profiles").upsert(updates);
			if (error) throw error;
			alert("Profile updated!");
		} catch (error) {
			alert("Error updating the data!");
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="form-widget flex items-center justify-center flex-col pt-20 dark:text-white">
			<div className="dark:text-white">
				<label htmlFor="email">Email</label>
				<input id="email" type="text" value={user?.email} disabled />
			</div>
			<div>
				<label htmlFor="username">Username</label>
				<input
					className="bg-gray-300"
					id="username"
					type="text"
					value={username || ""}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="website">Website</label>
				<input
					className="bg-gray-300"
					id="website"
					type="website"
					value={website || ""}
					onChange={(e) => setWebsite(e.target.value)}
				/>
			</div>

			<div>
				<button
					className="button primary block bg-gray-300"
					onClick={() => updateProfile({ username, website, avatar_url })}
					disabled={loading}
				>
					{loading ? "Loading ..." : "Update"}
				</button>
			</div>

			<div>
				<button
					className="button block bg-gray-300"
					onClick={() => {
						router.push("/");
						supabase.auth.signOut();
					}}
				>
					Sign Out
				</button>
			</div>
		</div>
	);
}
