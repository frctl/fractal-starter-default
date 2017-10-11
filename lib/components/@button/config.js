module.exports = {

  id: 'generic-button',

  label: 'Generic Button',

  variants: [
    {
      id: 'primary',
      classes: ['button--primary'],
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
      classes: ['button--secondary'],
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
    }
  ]

};
