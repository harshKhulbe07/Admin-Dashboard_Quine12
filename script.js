document.addEventListener('DOMContentLoaded', () => {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'shadow-md bg-purple-dark custom-shepherd',
            scrollTo: { behavior: 'smooth', block: 'center' },
            highlightClass: 'highlight'
        }
    });

    const steps = [
        {
            id: 'Step1',
            text: 'New to our website? Don\'t worry! Just use this button to start a user tour of the website.',
            attachTo: {
                element: '#start-tour',
                on: 'bottom'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        },
        {
            id: 'Home',
            text: 'Click here to visit the home page of the Dashboard.',
            attachTo: {
                element: '.sidebar ul li:nth-child(1) a',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Previous',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Next',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        },
        {
            id: 'Analytics',
            text: 'This tile contains visual analysis of views and subs in the form of charts.',
            attachTo: {
                element: '.sidebar ul li:nth-child(2) a',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Previous',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Next',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        },
        {
            id: 'summary',
            text: 'Here is the summary section.',
            attachTo: {
                element: '.sidebar ul li:nth-child(3) a',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Previous',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Next',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        },
        {
            id: 'revenue',
            text: 'Know how much revenue you have made so far.',
            attachTo: {
                element: '.sidebar ul li:nth-child(4) a',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Previous',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Next',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        },
        {
            id: 'browse',
            text: 'Know channel analytics of any channel using "Channel-ID" and "Video-ID".',
            attachTo: {
                element: '.sidebar ul li:nth-child(5) a',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Previous',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Finish',
                    action: tour.complete,
                    classes: 'shepherd-button-primary'
                }
            ]
        }
    ];

    steps.forEach(step => tour.addStep(step));

    document.getElementById('start-tour').addEventListener('click', () => {
        tour.start();
    });

    // Update progress bar on step change
    tour.on('show', function() {
        const currentStepIndex = tour.steps.indexOf(tour.getCurrentStep());
        updateProgressBar(currentStepIndex, tour.steps.length);
    });

    function updateProgressBar(stepIndex, totalSteps) {
        const progressBar = document.getElementById('tour-progress-bar');
        const progressPercentage = ((stepIndex + 1) / totalSteps) * 100;
        progressBar.style.width = progressPercentage + '%';
    }
});
