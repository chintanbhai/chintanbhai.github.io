document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');

    const projectDetails = {
        'Project 1': 'Detailed description of Project 1.',
        'Project 2': 'Detailed description of Project 2.'
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.removeAttribute('aria-current'));
            link.setAttribute('aria-current', 'page');
        });
    });

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectName = project.querySelector('h3').textContent;
            modalTitle.textContent = projectName;
            modalDescription.textContent = projectDetails[projectName];
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
            closeModal.focus();
        });

        project.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                project.click();
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    closeModal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            closeModal.focus();
        }
    });

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal.click();
        }
    });
});