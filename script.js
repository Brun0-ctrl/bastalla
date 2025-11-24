document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentPageIndex = 0;

    // Function to update the page view and button visibility
    function updatePage() {
        // 1. Remove 'active' class from all pages
        pages.forEach(page => {
            page.classList.remove('active');
            // Reset transform for pages that are not current, so the next transition is correct
            if (page !== pages[currentPageIndex]) {
                page.style.transform = (page.id > pages[currentPageIndex].id) ? 'translateX(100%)' : 'translateX(-100%)';
            }
        });

        // 2. Add 'active' class to the current page
        const currentPage = pages[currentPageIndex];
        currentPage.classList.add('active');
        currentPage.style.transform = 'translateX(0)';

        // 3. Update button visibility
        if (currentPageIndex === 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        if (currentPageIndex === pages.length - 1) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }

    // Next button logic
    nextBtn.addEventListener('click', () => {
        if (currentPageIndex < pages.length - 1) {
            // Set current page to slide out to the left (-100%)
            pages[currentPageIndex].style.transform = 'translateX(-100%)';
            
            currentPageIndex++;
            updatePage();
        }
    });

    // Previous button logic
    prevBtn.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            // Set current page to slide out to the right (100%)
            pages[currentPageIndex].style.transform = 'translateX(100%)';
            
            currentPageIndex--;
            updatePage();
        }
    });

    // Initialize the first page view
    updatePage();
});
