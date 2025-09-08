import DemoTypes from "@/interfaces/demoTypes";

const DemoContent: DemoTypes[] = [
    {
        id: 1,
        description: "First Demo Type",
        demoData: [
            {
                title: "First Card",
                newDemoDescription: false,
                active: true,
                description: "This is the description for the first card."
            },
            {
                title: "Second Card",
                newDemoDescription: true,
                active: true,
                description: "Each card is built to be displayed within the demo table system and is customizable."
            },
            {
                title: "Third Card",
                newDemoDescription: false,
                active: true,
                description: "Cards can be active or inactive, and can be marked as new to highlight recent additions."
            }
        ]
    },
    {
        id: 2,
        description: "Second Demo Type",
        demoData: [
            {
                title: "Fourth Card",
                newDemoDescription: true,
                active: true,
                description: "This is the description for the fourth card."
            },
            {
                title: "Fifth Card",
                newDemoDescription: false,
                active: false,
                description: "This card is currently inactive and won't be displayed in the demo table."
            },
            {
                title: "Sixth Card",
                newDemoDescription: true,
                active: true,
                description: "Active cards are displayed prominently to users. While there is a fifth card its active status is set to false so it will not show up."
            }
        ]
    },
]

export default DemoContent;