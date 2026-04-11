// Basic JavaScript for interactivity

// Back arrow functionality
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.querySelector('.back-arrow');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.history.back();
        });
    }

    // Search functionality (basic)
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
            } else {
                alert('Please enter a search term.');
            }
        });
    }

    // Book search functionality
    const bookSearchInput = document.getElementById('bookSearch');
    if (bookSearchInput) {
        bookSearchInput.addEventListener('input', filterBooks);
    }

    // Loan button functionality
    const loanButtons = document.querySelectorAll('.loan-btn');
    loanButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Loan request submitted!');
        });
    });

    // Newsletter signup
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`Thank you for subscribing with: ${email}`);
            }
        });
    }
});

// Book filtering function
function filterBooks() {
    const searchInput = document.getElementById('bookSearch');
    const filter = searchInput.value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const author = card.getAttribute('data-author').toLowerCase();
        const isVisible = title.includes(filter) || author.includes(filter);
        card.style.display = isVisible ? 'block' : 'none';
    });
}