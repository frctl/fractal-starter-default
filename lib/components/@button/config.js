module.exports = {

  id: 'generic-button',

  label: 'Generic Button',

  variants: [
    {
      id: 'primary',
      classNames: ['button--primary'],
      scenarios: [
        {
          label: 'English',
          context: {
            text: 'Submit this form'
          }
        },
        {
          label: 'French',
          context: {
            text: 'Envoyer ce formulaire'
          }
        }
      ]
    },
    {
      id: 'secondary',
      classNames: ['button--secondary'],
      scenarios: [
        {
          label: 'English',
          context: {
            text: 'Undo changes'
          }
        },
        {
          label: 'French',
          context: {
            text: 'Annuler les changements'
          }
        }
      ]
    },
    {
      id: 'next',
      classNames: ['button--next'],
      next: true,
      scenarios: [
        {
          label: 'English',
          context: {
            text: 'Go to the next step'
          }
        },
        {
          label: 'French',
          context: {
            text: 'Passer à l\'étape suivante'
          }
        }
      ]
    }
  ]

};
