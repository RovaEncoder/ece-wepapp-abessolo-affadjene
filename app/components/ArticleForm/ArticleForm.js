export default function ArticleForm({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit} className="form-add">
			<input
				className="dark:bg-slate-800"
				required
				type="text"
				name="title"
				placeholder="Tapez le titre de votre article"
			/>
			<input
				className="dark:bg-slate-800"
				type="url"
				name="url"
				placeholder="Inserez l'url de l'image representatrice de votre article"
			/>
			<input
				className="dark:bg-slate-800"
				required
				type="text"
				name="description"
				placeholder="Tapez la description"
			/>
			<textarea
				className="dark:bg-slate-800"
				required
				name="content"
				rows="10"
				cols="1"
				placeholder="Tapez le contenu de votre article"
			></textarea>

			<button className="buttonsend">Poster</button>
		</form>
	);
}
