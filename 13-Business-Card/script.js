// document.addEventListener('DOMContentLoaded', function() {
//     // Get GitHub URL from the link
//     const githubLink = document.getElementById('github-link').href;
    
//     // Generate QR Code
//     new QRCode(document.getElementById('qrcode'), {
//         text: githubLink,
//         width: 128,
//         height: 128,
//         colorDark: "#000000",
//         colorLight: "#ffffff",
//         correctLevel: QRCode.CorrectLevel.H
//     });
// });




// // ...existing code...

// // Contact Form Toggle
// document.querySelector('.contact-toggle').addEventListener('click', function() {
//     document.querySelector('.contact-form').classList.toggle('hidden');
// });

// // Print Button
// document.querySelector('.download-btn').addEventListener('click', function() {
//     window.print();
// });

// // vCard Download Button (dummy example)
// document.querySelector('.vcard-download button').addEventListener('click', function() {
//     const vcardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:Samad Mehboob
// EMAIL:samadmehboob940@gmail.com
// TEL:+92 3707405911
// ORG:CodexCrafters
// TITLE:Data Scientist & AI Engineer
// END:VCARD
//     `.trim();
//     const blob = new Blob([vcardData], { type: 'text/vcard' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'SamadMehboob.vcf';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
// });

// // Current Year in Footer
// document.getElementById('current-year').textContent = new Date().getFullYear();

// // ...existing code...

// document.addEventListener('DOMContentLoaded', function() {
//     // ...existing code...

//     // Contact Form Toggle
//     const contactBtn = document.querySelector('.contact-toggle');
//     const contactForm = document.querySelector('.contact-form');
//     if (contactBtn && contactForm) {
//         contactBtn.addEventListener('click', function() {
//             contactForm.classList.toggle('hidden');
//         });
//     }

//     // ...existing code...
// });



document.addEventListener('DOMContentLoaded', function() {
    // QR Code
    const githubLink = document.getElementById('github-link').href;
    new QRCode(document.getElementById('qrcode'), {
        text: githubLink,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Contact Form Toggle
    const contactBtn = document.querySelector('.contact-toggle');
    const contactForm = document.querySelector('.contact-form');
    if (contactBtn && contactForm) {
        contactBtn.addEventListener('click', function() {
            contactForm.classList.toggle('hidden');
        });
    }

    // Print Button
    const printBtn = document.querySelector('.download-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // vCard Download Button
    const vcardBtn = document.querySelector('.vcard-download button');
    if (vcardBtn) {
        vcardBtn.addEventListener('click', function() {
            const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Samad Mehboob
EMAIL:samadmehboob940@gmail.com
TEL:+92 3707405911
ORG:CodexCrafters
TITLE:Data Scientist & AI Engineer
END:VCARD
            `.trim();
            const blob = new Blob([vcardData], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'SamadMehboob.vcf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    // Current Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});