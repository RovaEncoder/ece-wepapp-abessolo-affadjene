// import { useUser } from "@supabase/auth-helpers-react";
// import Avatar from "../components/Avatar/Avatar";
// import { supabase } from "../utils/supabase";
// import { useState } from "react";

export default function ProfilePage() {
	// 	const user = useUser();
	// 	const [loading, setLoading] = useState(true);
	// 	const [username, setUsername] = useState(null);
	// 	const [website, setWebsite] = useState(null);
	// 	const [avatar_url, setAvatarUrl] = useState(null);

	// 	async function updateProfile({ username, website, avatar_url }) {
	// 		try {
	// 			setLoading(true);

	// 			const updates = {
	// 				id: user?.id,
	// 				username,
	// 				website,
	// 				avatar_url,
	// 				updated_at: new Date().toISOString(),
	// 			};

	// 			let { error } = await supabase.from("profiles").upsert(updates);
	// 			if (error) throw error;
	// 			alert("Profile updated!");
	// 		} catch (error) {
	// 			alert("Error updating the data!");
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	}

	// 	return (
	// 		<div className="form-widget">
	// 			<div className="form-widget">
	// 				<Avatar
	// 					uid={user?.id}
	// 					url={user.avatar_url}
	// 					size={150}
	// 					onUpload={(url) => {
	// 						setAvatarUrl(url);
	// 						updateProfile({ username, website, avatar_url: url });
	// 					}}
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label htmlFor="email">Email</label>
	// 				{/* <input id="email" type="text" value={session.user.email} disabled /> */}
	// 			</div>
	// 			<div>
	// 				<label htmlFor="username">Username</label>
	// 				<input
	// 					id="username"
	// 					type="text"
	// 					value={username || ""}
	// 					onChange={(e) => setUsername(e.target.value)}
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label htmlFor="website">Website</label>
	// 				<input
	// 					id="website"
	// 					type="website"
	// 					value={website || ""}
	// 					onChange={(e) => setWebsite(e.target.value)}
	// 				/>
	// 			</div>

	// 			<div>
	// 				<button
	// 					className="button primary block"
	// 					onClick={() => updateProfile({ username, website, avatar_url })}
	// 					disabled={loading}
	// 				>
	// 					{loading ? "Loading ..." : "Update"}
	// 				</button>
	// 			</div>

	// 			<div>
	// 				<button
	// 					className="button block"
	// 					onClick={() => supabase.auth.signOut()}
	// 				>
	// 					Sign Out
	// 				</button>
	// 			</div>
	// 		</div>
	// 	);

	return <h1>Hello !</h1>;
}
