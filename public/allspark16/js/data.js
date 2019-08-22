var EVENT_TIMES = {
    1: "09:00 AM - 10:15 AM",
    2: "10:20 AM - 11:15 AM",
    3: "11:30 AM - 12:10 PM",
    4: "12:15 PM - 01:00 PM",
    5: "02:20 PM - 03:00 PM",
    6: "03:05 PM - 03:45 PM",
    7: "04:00 PM - 04:40 PM",
    8: "04:45 PM - 05:30 PM",
    9: "05:45 PM - 09:00 PM" 
}

var EVENTS2016 = {
    A : [
        {
            "timeId" : EVENT_TIMES["1"],
            "status" : "busy",
            "topic" : "Keynote Address",
            "kind":"joint",
            "category" : "",
            "color":"orange",
            "desc":"Listen to the Sirius Executive team as they share the business updates for 2016 and detail on growth strategies for 2017 and beyond.",
            "presenters": ["Joe Mertens","Rick Bailer","Stephen Morris","Paul Bucalo"],
            "subitems": [],
            "hall":"A"
        }
    ],
    B : [
        {
            "timeId" :  EVENT_TIMES["2"],
            "status" : "busy",
            "topic" : "Unveiling the Future of Commerce", 
            "kind":"joint",
            "category" : "Commerce",
            "color":"blue",
            "desc":"Join us for an exciting ride into the future to witness the revolution as Artifical Intelligence, Internet of Things and Gamification are set to rule the world of Commerce for the millennials.",
            "presenters":["Gopala Krishnan Srinivasan"," Bhuvaneshwari Rajasekar"," Veeraraghavan Ramachandran"," Monica Ramireddi","Manikanta Tankala","Gabriela Jennifer"," Sapna Jayavel"],
            "subitems":[],
            "hall":"A"
        }
    ],
    C : [
         {
             "timeId" :  EVENT_TIMES["3"],
             "status" : "busy",
             "topic" : "QA - What's Next? OneSource & Beyond",
              "kind":"breakout",
             "category" : "QA",
             "color":"orange",
             "desc":"Come & learn about the top trends that are shaping the overall testing services landscape, and how we are future-proofing ourselves with technological investments of today and tomorrow.",
             "presenters": ["Vignesh Marthandan"],
             "subitems":[],
             "hall":"A"
         }, {
             "timeId" :  EVENT_TIMES["3"],
             "status" : "busy",
             "topic" : "Mobile Makeover for Mainframe DevOps",
              "kind":"breakout",
             "category" : "",
             "color":"red",
             "desc":"Mainframes continue to have a very real place in modern application delivery. However, mainframes have the potential to hamper even the most agile DevOps teams. Explore how the DevOps for the Mainframe world can be modernized with the power of Mobile solutions.",
             "presenters": ["Dinesh Balaji", "Akshay Deshpande"],
             "subitems":[],
             "hall":"B"
         }
     ],
     D : [
		{
		    "timeId" :  EVENT_TIMES["4"],
		    "status" : "busy",
		    "topic" : "Cross Platform Apps using Electron",
		     "kind":"breakout",
		    "category" : "",
		    "color":"green",
		    "desc":"Be prepared for the comeback of Desktop Apps by learning about the Electron framework to ease the development of Cross-platform desktop apps. Native Desktop App Development can be costly and here is Electron to your rescue!",
		    "presenters":["Arun Shanmugam Jawahar", "Manikanta Tankala", "Sharan Ainapurapu"],
		    "subitems":[],
		    "hall":"A"
		},
		{
		      "timeId" :  EVENT_TIMES["4"],
			  "status" : "busy",
			  "topic" : "Why I love Drupal?",
			   "kind":"breakout",
			  "category" : "",
			  "color":"blue",
			  "desc":"If you’ve been designing and developing web sites for very long, chances are you’ve already got your favourite go-to platform that you always use. And if your go-to content management system isn’t already Drupal, maybe it’s time to take another look. So what makes Drupal stand out so much? Join us and learn!",
			  "presenters":["Raguraman Krishnamoorthy", "Ramakrishnan Kuppusami","Gabriela Jennifer"],
			  "subitems":[],
			  "hall":"B"
		},
    ],
     E : [
         {
            "timeId" :  EVENT_TIMES["5"],
            "status" : "busy",
            "topic" : "Extending Adobe Experience Manager (AEM) Capabilities",
             "kind":"breakout",
            "category" : "",
            "color":"red",
            "desc":"Come & learn about innovative ways to accelerate development of mobile applications powered by AEM. The session also dovetails into exploring the test accelerators for AEM testing to speed up time to market for AEM deployments.",
            "presenters":["Utkarsh Agnihotri", "Chintan Shah", "Sujan"],
            "subitems":[],
            "hall":"A"
        },
        {
            "timeId" :  EVENT_TIMES["5"],
            "status" : "busy",
            "topic" : "Beyond Conventional Testing",
             "kind":"breakout",
            "category" : "QA",
            "color":"orange",
            "desc":"Join for a test jam session where we rewind into the past and explore ways to modernize and automate legacy application testing and fast forward into the future to discuss the future of automated testing via optimized test case generation.",
            "presenters": ["Siddhartha PTDV","Mohit Rathi","Vivekanandan Raju","Deepika Narayanasamy","Harish Pandalangatt","Sathish Sugavanam","Koti Syamala"],
            "subitems":[],
            "hall":"B"
        }
    ],
     
     F : [
          {
              "timeId" :  EVENT_TIMES["6"],
              "status" : "busy",
              "topic" : "Where is Big Data headed in 2016 & Beyond?",
               "kind":"breakout",
              "category" : "Analytics",
              "color":"green",
              "desc":"This session will unravel the path traversed by Big Data so far and discuss the trends that are shaping the industry for the future.",
              "presenters": ["Abhishek Sakhuja"],
              "subitems":[],
              "hall":"A"
          },{
              "timeId" :  EVENT_TIMES["6"],
              "status" : "busy",
              "topic" : "Mobile Jam - Instant Mobile Browsing using AMP & Sirius Mobile Cloud",
               "kind":"breakout",
              "category" : "",
              "color":"blue",
              "desc":"Mobile browsing must be fast and seamless. When a page does not load in a couple of seconds, people move on to the competitors' sites. Learn how AMP can be an anti-dote for this problem. AMP is an open source industry collaborative approach that makes mobile web faster. It embodies the vision that publishers can create mobile optimized content once and have it load instantly everywhere.",
              "presenters": ["Dinesh Balaji", "MadhanKumar Ramu", "Sumana Ammaiyappan", "Yashwanth Balaji"],
              "subitems":[],
              "hall":"B"
          }
    ],
    G : [
		{
		    "timeId" :  EVENT_TIMES["7"],
		    "status" : "busy",
		    "topic" : "Blockchain: Bits and Blocks of future",
		     "kind":"breakout",
		    "category" : "",
		    "color":"orange",
		    "desc":"If trust is no longer needed to enable transactions, then by implication neither are trust authorities. In theory this can then lead to a frictionless world where transactions can happen much more transparently, quickly and cheaply. In a nutshell, this is the revolutionary idea that makes the Blockchain so interesting. Lets catch up to see what are the bits and blocks of it.",
		    "presenters":["Muralidhar Dhandapani","Ashwin Ravichandran"],
		    "subitems":[],
		    "hall":"A"
		},
        {
            "timeId" :  EVENT_TIMES["7"],
            "status" : "busy",
            "topic" : "Advanced Testing for Digital Enterprise",
             "kind":"breakout",
            "category" : "",
            "color":"red",
            "desc":"Undoubtedly, Security & Performance have become the Top 2 areas of focus for the CIO of any digital organization. Learn about advanced techniques and best practices of Security and Performance testing.",
            "presenters": ["Chandrakanth Gangaram","Jeyanthi Veeramani","Gautham Mukesh", "Tamilarasi Kalimuthu", "Gayathri Karunakaran", "Porkalai Arunan"],
            "subitems":[],
            "hall":"B"
        }
    ],
    H : [
        {
            "timeId" :  EVENT_TIMES["8"],
            "status" : "busy",
            "topic" : "Latest Trends in Enterprise App Development",
             "kind":"breakout",
            "category" : "",
            "color":"blue",
            "desc":"Join us for an exciting discussion about the latest trends in Enterprise App Development: Microservices, APIs and more.",
            "presenters":["John Eipe", "Amirtha Shankari", "Roopavathi Kumaravel"],
            "subitems":[],
            "hall":"A"
        },
        {
            "timeId" :  EVENT_TIMES["8"],
            "status" : "busy",
            "topic" : "MEAN vs. LAMP: Alternate Server Stack Evaluation",
             "kind":"breakout",
            "category" : "",
            "color":"green",
            "desc":"Learn how MEAN & LAMP can be used as an alternate Server Stack Evaluation.",
            "presenters":["Sivanandham Perumalsamy","Raguraman Krishnamoorthy"],
            "subitems":[],
            "hall":"B"
        }
    ],
    I: [
        {
            "timeId" :  EVENT_TIMES["9"],
            "status" : "busy",
            "topic" : "Awards & Culturals",
             "kind":"joint",
            "category" : "",
            "color":"red",
            "desc":"It's time for Party! Sirius Rthyms, Sirius Steps and other cultural events.",
            "presenters": ["Sirius Rythms", "Sirius Steps"],
            "subitems":[],
            "hall":"A"
        }
    ]
}


var INDIA_EVENTS = {
    "2013" : [
        {
            title:'UI Hackathon',
            location:'Chennai India',
            date:{
                day: '', mon: 'Aug' , year: '2013'
            },
            desc:[
                'Exploring the world of JQuery, Bootstrap, Backbone, CSS3, HTML5, Responsive Design'
            ]
        },{
            title:'Mini Tech Xchange',
            location:'Hyatt Regency, Chennai India',
            date:{
                day: '', mon: 'Sep' , year: '2013'
            },
            desc:[
                'Talks & Sessions on Portal, Commerce, Mobile, QA, MASS',
                'Solution Space on Innovative Ideas & Assets'
            ]
        }
    ],
    "2014" : [
        {
            title:'Ignite',
            location:'Hyatt Regency, Chennai India',
            date:{
                day: '', mon: 'Oct' , year: '2014'
            },
            desc:[
                'Talks & Sessions on Business',
                'Solution Space on Innovative Ideas & Assets'
            ]
        },{
            title:'Codes & Gears 2014',
            location:'Chennai India',
            date:{
                day: '', mon: 'Feb' , year: '2014'
            },
            desc:[
                'Theme: Technology 2020',
                'Brainstorming the non-existent than settling down with the existent'
            ]
        },
    ],
    "2015" : [
        {
            title:'Codes & Gears 2015',
            location:'Chennai India',
            date:{
                day: '', mon: 'Mar' , year: '2015'
            },
            desc:[
                'Next Generation Shopping experience',
                'Internet of Things in Enterprises',
                'Innovations for eGovernance in India',
                'Smarter SDLC'
            ]
        },{
            title:'AllSpark 2015',
            location:'Hilton, Chennai',
            date:{
                day: '', mon: 'Nov' , year: '2015'
            },
            desc:[
                'All Spark is for Developers, QA and MASS who want to make the world a better place',
                'Innovative Talks & Ideas'
            ]
        }
    ],
    "2016" : [
        {
            title:'Codes & Gears 2016',
            location:'Chennai India',
            date:{
                day: '', mon: 'Apr' , year: '2016'
            },
            desc:[
                "It's happening now!",
                "Smarter Healthcare & Commerce Ideas",
                "Ideas on DevOps, Future Technologies"
            ]
        },{
            title:'AllSpark 2016',
            location:'Hilton, Chennai',
            date:{
                day: '', mon: 'Sep' , year: '2016'
            },
            desc:[
                'All Spark is for Developers, QA and MASS who want to make the world a better place',
                'Innovative Talks & Ideas'
            ]
        }
    ]
};

var GUESTS = [
    {
        name: 'Joe Mertens',
        designation: 'President & CEO',
        domain: 'Sirius',
        url: 'joemertens'
    },
    {
        name: 'Rick Bailer',
        designation: 'Senior Vice President',
        domain: 'Sales',
        url: 'rickbailer'
    },
    {
        name: 'Stephen Morris',
        designation: 'Vice President',
        domain: 'Software Solutions & Services',
        url: 'stephenmorris'
    },
    {
        name: 'Paul Bucalo',
        designation: 'Practice Manager',
        domain: 'Digital Experience',
        url: 'paulbucalo'
    }
];

var EVENT_START_TIME = 'Septemeber 9 2016 08:44:59 GMT+05:30';

var FLASHBACK_EVENTS = [
    {
        title:'AllSpark 2016',
        location:'Hilton, Chennai',
        date:{
            day: '', mon: 'Sep' , year: '2016'
        },
        desc:[
        	'Innovations in the fields of Digital Experience, Mobility, Commerce, Quality Assurance, Big Data & Analytics and DevOps'
        ]
    },{
        title:'Codes & Gears 2016',
        location:'Chennai India',
        date:{
            day: '', mon: 'Apr' , year: '2016'
        },
        desc:[
            "Smarter Healthcare & Commerce Ideas",
            "Ideas on DevOps, Future Technologies"
        ]
    },{
        title:'AllSpark 2015',
        location:'Hilton, Chennai',
        date:{
            day: '', mon: 'Nov' , year: '2015'
        },
        desc:[
        	'All Spark is for Developers, QA and MASS who want to make the world a better place',
            'Innovative Talks & Ideas'
        ]
    },{
        title:'Codes & Gears 2015',
        location:'Chennai India',
        date:{
            day: '', mon: 'Mar' , year: '2015'
        },
        desc:[
            'Next Generation Shopping experience',
            'Internet of Things in Enterprises',
            'Innovations for eGovernance in India',
            'Smarter SDLC'
        ]
    },{
        title:'Ignite',
        location:'Hyatt Regency, Chennai India',
        date:{
            day: '', mon: 'Oct' , year: '2014'
        },
        desc:[
            'Talks & Sessions on Business',
            'Solution Space on Innovative Ideas & Assets'
        ]
    },{
        title:'Codes & Gears 2014',
        location:'Chennai India',
        date:{
            day: '', mon: 'Feb' , year: '2014'
        },
        desc:[
            'Theme: Technology 2020',
            'Brainstorming the non-existent than settling down with the existent'
        ]
    },{
        title:'Mini Tech Xchange',
        location:'Hyatt Regency, Chennai India',
        date:{
            day: '', mon: 'Sep' , year: '2013'
        },
        desc:[
            'Talks & Sessions on Portal, Commerce, Mobile, QA, MASS',
            'Solution Space on Innovative Ideas & Assets'
        ]
    },{
        title:'UI Hackathon',
        location:'Chennai India',
        date:{
            day: '', mon: 'Aug' , year: '2013'
        },
        desc:[
            'Exploring the world of JQuery, Bootstrap, Backbone, CSS3, HTML5, Responsive Design'
        ]
    }
];