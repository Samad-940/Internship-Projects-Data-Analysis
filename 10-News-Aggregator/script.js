const apiKey = 'a488e2469ae94312a7ddd612ecb504c0';
const defaultUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(url = defaultUrl) {
    const newsContainer = document.getElementById('news-container');
    const loadingSpinner = document.getElementById('loading');
    
    // Show loading spinner
    loadingSpinner.classList.remove('d-none');
    newsContainer.innerHTML = '';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            newsContainer.innerHTML = `<div class="alert alert-danger text-center animate__animated animate__shakeX">Error: ${data.message}</div>`;
        }
    } catch (error) {
        newsContainer.innerHTML = `<div class="alert alert-danger text-center animate__animated animate__shakeX">Failed to fetch news. Please ensure you're running on localhost and check your connection.</div>`;
    } finally {
        loadingSpinner.classList.add('d-none');
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach((article, index) => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card news-card animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
                    ${article.urlToImage ? `<img src="${article.urlToImage}" class="card-img-top" alt="News Image">` : ''}
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description || 'No description available.'}</p>
                        <p class="card-text"><small class="text-muted">Source: ${article.source.name}</small></p>
                        <p class="card-text"><small class="text-muted">Published: ${new Date(article.publishedAt).toLocaleDateString()}</small></p>
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += card;
    });
}

function searchNews() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        const searchUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
        fetchNews(searchUrl);
    } else {
        fetchNews(); // Fallback to default headlines
    }
}

// Fetch news when the page loads
fetchNews();

// Search on Enter key press
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchNews();
    }
});