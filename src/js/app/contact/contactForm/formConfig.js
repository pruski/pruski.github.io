const formConfig = [
    {
        id: "name",
        InputType: "input",
        placeholder: "Your name",
        autofocus: true,
        validation: {
            type: "required",
            errorMessage: "Name cannot be empty"
        }
    },
    {
        id: "email",
        InputType: "input",
        placeholder: "Your email",
        validation: {
            type: "email",
            errorMessage: "Please provide a valid email address"
        }
    },
    {
        id: "message",
        InputType: "textarea",
        placeholder: "Your message",
        validation: {
            type: "required",
            errorMessage: "Message cannot be empty"
        }
    }
];

export default formConfig;

export const getField = id => formConfig.filter(field => field.id === id)[0];