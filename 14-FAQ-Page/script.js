// document.addEventListener('DOMContentLoaded', () => {
//     const faqItems = document.querySelectorAll('.faq-item');
    
//     // Handle FAQ item clicks
//     const handleFaqClick = (clickedItem) => {
//         const isExpanded = clickedItem.getAttribute('aria-expanded') === 'true';
        
//         // Close all items first (accordion behavior)
//         faqItems.forEach(item => {
//             item.setAttribute('aria-expanded', 'false');
//             const answer = item.querySelector('.faq-answer');
//             answer.style.maxHeight = null;
//         });
        
//         // Toggle clicked item if it wasn't already expanded
//         if (!isExpanded) {
//             clickedItem.setAttribute('aria-expanded', 'true');
//             const answer = clickedItem.querySelector('.faq-answer');
//             answer.style.maxHeight = answer.scrollHeight + 'px';
//         }
//     };
    
//     // Add event listeners with event delegation
//     document.querySelector('.faq-list').addEventListener('click', (e) => {
//         const questionBtn = e.target.closest('.faq-question');
//         if (questionBtn) {
//             const faqItem = questionBtn.parentElement;
//             handleFaqClick(faqItem);
//         }
//     });
    
//     // Keyboard navigation support
//     document.querySelectorAll('.faq-question').forEach(button => {
//         button.addEventListener('keydown', (e) => {
//             if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 const faqItem = e.currentTarget.parentElement;
//                 handleFaqClick(faqItem);
//             }
//         });
//     });
// });





/* Add these new animation styles to your existing CSS */
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add staggered delay for entrance animation
    faqItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    const handleFaqClick = (clickedItem) => {
        const isExpanded = clickedItem.getAttribute('aria-expanded') === 'true';
        
        // Add ripple effect
        const questionBtn = clickedItem.querySelector('.faq-question');
        questionBtn.classList.add('animating');
        setTimeout(() => questionBtn.classList.remove('animating'), 600);
        
        // Close all items first
        faqItems.forEach(item => {
            if (item !== clickedItem && item.getAttribute('aria-expanded') === 'true') {
                item.setAttribute('aria-expanded', 'false');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = null;
            }
        });
        
        // Toggle clicked item
        if (!isExpanded) {
            clickedItem.setAttribute('aria-expanded', 'true');
            const answer = clickedItem.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    };
    
    // Event delegation
    document.querySelector('.faq-list').addEventListener('click', (e) => {
        const questionBtn = e.target.closest('.faq-question');
        if (questionBtn) {
            const faqItem = questionBtn.parentElement;
            handleFaqClick(faqItem);
        }
    });
    
    // Keyboard support
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const faqItem = e.currentTarget.parentElement;
                handleFaqClick(faqItem);
            }
        });
    });
});