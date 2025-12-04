import { LightningElement } from 'lwc';

export default class PortfolioContainer extends LightningElement {

    isLoading = true;

    connectedCallback() {
        
        setTimeout(() => {
        const carousel = this.template.querySelector('[data-carousel]');
        const next = this.template.querySelector('[data-next]');
        const prev = this.template.querySelector('[data-prev]');

        const carouselCert = this.template.querySelector('[data-carousel-cert]');
        const nextCert = this.template.querySelector('[data-next-cert]');
        const prevCert = this.template.querySelector('[data-prev-cert]');
        if (carousel && next && prev){
            next.addEventListener('click', () => {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            });
            prev.addEventListener('click', () => {
                carousel.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }

        if (carouselCert && nextCert && prevCert){   
            nextCert.addEventListener('click', () => {
                carouselCert.scrollBy({ left: 150, behavior: 'smooth' });
            });
            prevCert.addEventListener('click', () => {
                carouselCert.scrollBy({ left: -150, behavior: 'smooth' });
            });
        }
        

        }, 0);

        this.isLoading = true;
        //you can add a .then().catch() if you'd like, as loadStyle() returns a promise
    }

    name = "Ayush Kothari";
    title = "Software Engineer – Salesforce";
    email = "mailto:ayush.kotharift@gmail.com";
    linkedinUrl = "https://www.linkedin.com/in/ayush-kothari";
    githubUrl = "https://github.com/Ayushft";
    profilePic = "/resource/profile_pic"; // replace with actual static resource

    experience = [
        {
            id: 1,
            role: "Senior Engineer - Salesforce",
            company: "Holman",
            period: "Nov 2025 – present",
            summary: "Working on third-party to Salesforce Integrations"
        },
        {
            id: 2,
            role: "Software Engineer – Salesforce",
            company: "Castlight Health",
            period: "Nov 2024 – Nov 2025",
            summary: "Working on scalable product architecture, platform events, API integrations and modular LWC."
        },
        {
            id: 3,
            role: "Salesforce Developer",
            company: "Accenture",
            period: "Sept 2021 – Nov 2024",
            summary: "Developed LWC, Apex, CI/CD automation and custom Experience Cloud portals."
        },
    ];

    sfdcSkills = [
        "Service Cloud", "Sales Cloud", "Experience Cloud", "Health Cloud", "CPQ", "Agentforce", "CRMA" 
    ];

    toolsSkills = [
        "Git", "Jenkins", "CI/CD", "Unlocked Packaging", "SFDX", "WorkBench", "DataLoader", "Postman"
    ];

    programmingSkills = [
        "Apex", "LWC",  "Python", "Integrations", "SOQL", "SOSL", "RESTful", "SOAP"
    ];

    designSkills = [

    ]

    certifications = [
        "Salesforce JavaScript Developer 1",
        "Salesforce Platform Developer 1",
        "Salesforce Platform App Builder",
        "Salesforce AI Specialist",
        "Salesforce AI Associate",
        "Salesforce Administrator",
        "AWS Cloud Practitioner"
    ];
}