export default {
    entities: [
        {
            name: "contact",
            fields: [
                {
                    name: "default",
                    displayName: "Default",
                    type: "string",
                },
                {
                    name: "required",
                    displayName: "Required",
                    type: "string",
                    required: true
                },
                {
                    name: "placeholder",
                    displayName: "Placeholder",
                    type: "string",
                    placeholder: "This is a place holder"
                },
                {
                    name: "addonBefore",
                    displayName: "Addon before",
                    type: "string",
                    addonBefore: "This is something before"
                },
                {
                    name: "addonAfter",
                    displayName: "Addon after",
                    type: "string",
                    addonAfter: "This is something after"
                },
                {
                    name: "help",
                    displayName: "Help",
                    type: "string",
                    help: "This is some help"
                }
            ]
        }
    ]
};