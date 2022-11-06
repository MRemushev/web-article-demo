const submitArticle = document.querySelector('.article-input__submit')

submitArticle.addEventListener('click', () => {
	console.log('work')
	const articleTitle = document.querySelector('.article-input__title')
	const articleContent = document.querySelector('.article-input__content')
	if (articleTitle.value && articleContent.value)
	{
		articleInstance(articleTitle.value, articleContent.value)
		articleTitle.value = ''
		articleContent.value = ''
	}
})

function articleInstance(title, content, votes = 0) {
	article = document.querySelector(
		'.articles-container'
	).innerHTML += `<article class="article">
			<header class="article__title">${title}</header>
			<main class="article__text">${content}</main>
			<footer class="article__votes">${votes}+</footer>
		</article>`
}
