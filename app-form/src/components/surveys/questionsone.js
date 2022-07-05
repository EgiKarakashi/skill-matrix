const json = {
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your name:",
            placeHolder: "Jon Snow",
            isRequired: true
        },
        {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthday:",
            isRequired: true

        },
        {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail",
            placeHolder: "jon.snow@nightwatch.org",
            isRequired: true,
            validators: [{
                type: "email"
            }
            ]
            
        }
    ]
};

export default json;