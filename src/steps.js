const buttonsConfig = [
      {
        classes: 'shepherd-button-secondary',
        text: 'Back',
        type: 'back'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next'
      }
]
export const steps = [
    {
      id: 'step-1',
      attachTo: { element: '.item-0', on: 'bottom' },
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            window.scrollTo({behavior: 'smooth'});
            resolve();
          }, 500);
        });
      },
      buttons: buttonsConfig,
      exitOnEsc: true,
      keyboardNavigation: true,
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 1!',
      text: ['Click next to discover more!.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
    {
      id: 'step-2',
      attachTo: { element: '.item-2', on: 'bottom' },
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            window.scrollTo({behavior: 'smooth'});
            resolve();
          }, 500);
        });
      },
      buttons: buttonsConfig,
      exitOnEsc: true,
      keyboardNavigation: true,
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 2!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
    {
      id: 'step-3',
      attachTo: { element: '.item-6', on: 'top' },
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            window.scrollTo({behavior: 'smooth'});
            resolve();
          }, 500);
        });
      },
      buttons: buttonsConfig,
      exitOnEsc: true,
      keyboardNavigation: true,
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 3!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
    {
      id: 'step-4',
      attachTo: { element: '.item-8', on: 'top' },
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            window.scrollTo({behavior: 'smooth'});
            resolve();
          }, 500);
        });
      },
      buttons: buttonsConfig,
      exitOnEsc: true,
      keyboardNavigation: true,
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      title: 'Step 4!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
  ];