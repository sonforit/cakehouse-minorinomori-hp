// eslint-disable-next-line no-undef
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        message: `
What is the name of component?
ex. Button  // without category
ex. Links/BaseLink  // with category
`,
        name: 'path_name',
        type: 'input',
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return false;
        },
      },
      {
        message: 'Which is the type of component?',
        name: 'component_type',
        type: 'select',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { path_name } = answers;
      const dirs = path_name.split('/');
      const component_name = dirs[dirs.length - 1];
      return { ...answers, component_name };
    });
  },
};
