
const jobList = [
    {
        company: 'The Weitz Company',
        date: 'July 2018 - Current',
        title: 'Estimator',
        description: [
            "Estimate pricing from technical plans and specifications",
            "Solicit pricing and input from subcontractors on projects around the United States",
            "Assist owners in value analysis and cost efficient alternatives",
            "Maintain accurate historical analysis of project pricing to use for future projects",
            "Draft contracts for buy-out of trades for projects"
        ]
    },
    {
        company: 'Cornerstone Commercial Contractors',
        date: 'May 2017 - August 2017',
        title: 'Estimator Intern',
        description: [
            "Developed an understanding of the process of maintaining a record set of estimating documents",
            "Reviewed architectural plans for upcoming projects for accurate pricing",
            "Proposed detailed breakdowns based on architectural plans",
            "Estimated construction costs for future projects",
        ]
    },
    {
        company: 'Cornerstone Commercial Contractors',
        date: 'May 2016 - August 2016',
        title: 'Project Manager Intern',
        description: [
            "Managed job sites and employees until completion of project",
            "Maintained relationships with all subcontractors on and off jobsite for scheduling and work expectations",
            "Reported weekly updates on projects status to upper management",
            "Reviewed architectural plans for current projects to assure completion to specifications within budget",
        ]
    },
];

const resume = new Vue({
    el: '#jobs',
    data: {
        jobs: jobList,
    },

    methods: {

    }
})