
const en = {
    general: {
        downloadButtonLabel: "Download",
    },
    bottomMenu: {
        home: "Home",
        aboutUs: "About Us",
        updatesAndFAQ: "Updates & FAQ",
        exit: "Exit"
    },
    header: {
        downloadFromPlayStore: "Get it on Google Play"
    },
    footer: {
        privacyPolicy: "Privacy Policy",
        termsAndConditions: "Terms and Conditions"
    },
    feedback: {
        title: "Still have questions?",
        subtitle: "Contact us directly",
        emailButton: "Email",
        feedbackButton: "Feedback"
    },
    exit: {
        banner: {
            title: "Thank you for your interest in Keycount!",
            image: () => import("./../assets/images/info-grafics/analysis_0.svg") // TODO
        },
        sections: [
            {
                id: 1,
                text: "Since our inception, we've been at the forefront as an innovative banking platform. However, we've recently made the decision to discontinue our product in the market. Thanks to our public beta phase and invaluable feedback, we've identified synergies with market peers and are now eager to leverage our expertise in a fresh context.",
            },
            {
                id: 2,
                text: "A big thanks to you and our partners for your unwavering support.",
            },
            {
                id: 3,
                text: "or any inquiries, feel free to drop us an email at {emailLink}",
            }
        ],
        buttonText: "Explore keycount"
    },
    home: {
        banner: {
            title: "Unlimited freedom with one login",
            videoButton: "Explained in 60 seconds",
            image: () => import("./../assets/images/info-grafics/analysis_0.svg") // TODO
        },
        safety: {
            title: "Absolute security",
            text: "Your data is uncompromisingly protected at every level! To protect your data as much as possible, we rely on a comprehensive 3-step security concept. We use certified and globally recognized security standards.",
            button: "Security Levels"
        },
        payments: {
            title: "Social Payments",
            text: "With keycount, you can send money to friends without knowing their bank details. Simply connect your social media profiles to keycount and select the desired contact. With one click, you can send or request money.",
            button: "More Info",
            image: () => import("./../assets/images/screenshots/home_1_de.svg")
        },
        eBanking: {
            title: "E-Banking on steroids",
            text: "Use all the familiar payment functions from your e-banking without having to register separately with each bank. In addition, you can scan invoices instead of entering them manually and request money from friends.",
            button: "More Info",
            image: () => import("./../assets/images/screenshots/home_2_de.svg")
        },
        analysis: {
            title: "Comprehensive analysis",
            text: "Keycount links all your bank accounts, giving you the clean and simple overview you've always wanted. Connect more than 1500 banks and track your expenses and income across all your different accounts in one app. Find out exactly what you're spending your money on through our detailed categorization and analysis, and stay in control of your finances.",
            button: "More Info",
            image: () => import("./../assets/images/screenshots/home_3_de.svg")
        },
        crypto: {
            title: "All your cryptos at a glance",
            text: "Analyze which cryptocurrencies you hold in which wallets and exchanges and see the percentage composition of your portfolio.",
            button: "More Info",
            image: () => import("./../assets/images/screenshots/home_4_de.svg")
        },
        vision: {
            title: "Vision",
            text: "At keycount, we build bridges between the countless islands in the financial sector - clear, interoperable, connected.",
            video: () => import("./../assets/videos/Vision.mp4")
        }
    },
    aboutUs: {
        banner: {
            title: "At keycount, we build bridges between the countless islands in the financial sector - clear, interoperable, connected.",
            image: () => import("./../assets/images/screenshots/screenshot_example.png") // TODO
        },
        team: {
            title: "Our Team",
            text: "We are a team of experts with years of experience in the banking sector, IT development, law, and compliance. We use these skills at keycount to develop the best and safest financial app for you."
        },
        partner: {
            title: "Our Partners"
        }
    },
    updatesAndFAQ: {
        bannerTitle: "Everything you need to know about keycount",
        searchField: "Search...",
        noMatchingEntries: "No results for your search"
    },
    analysis: {
        banner: {
            title: "Your finances at a glance",
            image: () => import("./../assets/images/info-grafics/analysis_0.svg")
        },
        sections: [
            {
                id: 1,
                title: "Fits perfectly with all your accounts",
                text: "You always have full control, whether you have one or multiple accounts, and regardless of which banks and financial service providers they are with.",
                image: () => import("./../assets/images/info-grafics/analysis_1.svg")
            },
            {
                id: 2,
                title: "The complete overview of all accounts",
                text: "No more Excel spreadsheets and dozens of logins. With keycount, you have all your accounts and transactions in one place and can see exactly where you have how much money and how your assets are developing at any time.",
                image: () => import("./../assets/images/screenshots/analysis_2_de.svg")
            },
            {
                id: 3,
                title: "Analyze all your transactions",
                text: "This way you can get insights into how much of your income you spend monthly on restaurant visits, or how your monthly expenses for online shopping develop/change over time.",
                image: () => import("./../assets/images/screenshots/analysis_3_de.svg")
            },
        ]
    },
    crypto: {
        banner: {
            title: "Cryptos have never been so easy to manage",
            image: () => import("./../assets/images/info-grafics/crypto_0.svg")
        },
        sections: [
            {
                id: 1,
                title: "The whole portfolio at a glance",
                text: "With keycount, you automatically have everything in view, instead of having to log in separately to dozens of wallets and exchanges and manually create a portfolio overview. Whether you want a percentage overview of your entire portfolio or a breakdown of your currencies on specific wallets and exchanges, keycount shows it to you in real time and converts it into your preferred fiat currency.",
                image: () => import("./../assets/images/screenshots/crypto_1_de.svg")
            },
            {
                id: 2,
                title: "Always in control of changes",
                text: "With keycount, you always have an overview of the total value and percentage distribution of your portfolio. This way, you can see the effects of market fluctuations on your portfolio and make informed investment decisions.",
                image: () => import("./../assets/images/screenshots/crypto_2_de.svg")
            },
        ]
    },
    payments: {
        banner: {
            title: "You've never enjoyed paying so much",
            image: () => import("./../assets/images/info-grafics/payments_0_de.svg")
        },
        sections: [
            {
                id: 1,
                title: "Send money without headaches",
                text: "Connect your social media accounts with keycount and send money to friends easily, regardless of their bank or payment provider. You don't even have to enter your friends' bank details, as we already know them and keycount works across platforms.",
                image: () => import("./../assets/images/screenshots/payments_1_de.svg")
            },
            {
                id: 2,
                title: "Request money with one click",
                text: "Does a friend owe you money? With keycount, you can simply send requests for payments to friends on social media or in your address book, without your friends having to enter their bank details. Instead, they can confirm the payment with a click of a button.",
                image: () => import("./../assets/images/screenshots/payments_2_de.svg")
            },
            {
                id: 3,
                title: "Easily share bills with friends",
                text: "Did you pay for the entire bill at the restaurant and now want to share it with your friends? With keycount, you can easily enter the total bill amount and automatically send your friends a request for their share. Since we already have your bank details, your friends don't have to enter them themselves and can confirm the payment to you with a click of a button.",
                image: () => import("./../assets/images/screenshots/payments_3_de.svg")
            },
        ]
    },
    safety: {
        sections: [
            {
                id: 1,
                title: "Our safe for your data. Server location Switzerland.",
                text: "Your data is encrypted and stored in a Swiss data center, protected by the highest security standards in the industry. The data center is physically protected, among other things, by several security gates and solid concrete walls, so that no one can enter or leave unnoticed.",
                image: () => import("./../assets/images/info-grafics/safety_1.svg")
            },
            {
                id: 2,
                title: "Secure data transport. No access for third parties.",
                text: "The keycount app is protected by state-of-the-art authentication methods against unauthorized access by third parties. These include the OAuth2 process, firewalls, and SSL protection for all connections. Similar to a armored door, no one can access the valuable contents of your safe without appropriate authorization.",
                image: () => import("./../assets/images/info-grafics/safety_2.svg")
            },
            {
                id: 3,
                title: "Your safe. Only you can open it.",
                text: "In the heart of our safe, your data is encrypted and stored in your personal safe. We use the world's most secure AES encryption method for encryption. No one but you can access your bank data.",
                image: () => import("./../assets/images/info-grafics/safety_3.svg")
            },
        ]
    },
    eBanking: {
        banner: {
            title: "E-banking has never been so easy",
            image: () => import("./../assets/images/screenshots/screenshot_example.png") // TODO
        },
        sections: [
            {
                id: 1,
                title: "Everything in one place",
                text: "With keycount, you have all your e-banking functions in one place. You can enter, pay bills and initiate transactions as usual - not just for one account, but for all accounts. You only need to log in to one place to manage everything.",
                image: () => import("./../assets/images/screenshots/banking_1_de.svg")
            },
            {
                id: 2,
                title: "Scan bills instead of typing them",
                text: "Manually entering bills is a thing of the past, today is keycount. Simply enter bills with the keycount app. Scan them and all transaction data will be filled in automatically. Then just select the account from which you want to pay.",
                image: () => import("./../assets/images/screenshots/banking_2_de.svg")
            },
        ]
    },
    waitingList: {
        title: "Join Waiting List",
        text: "Be the first to know when we release our latest features and updates! Our team is working around the clock to bring you the best possible experience. We have many exciting things in store, including an iOS implementation that is currently in the works. Sign up for our waiting list now to be the first to receive updates and notifications when we release our newest features.",
        email: "E-Mail",
        join: "Join"
    },
    contact: {
        title: "Write us an email",
        text: "We'd love to hear from you! Share your feedback, report any bugs, or simply reach out to connect with our team. Reach us directly via mail",
        mail: "company@key-count.com"
    },
    supportRequest: {
        title: "Support & Feedback",
        text: "We'd love to hear from you! Share your feedback, report any bugs, or simply reach out to connect with our team.",
        name: "Name",
        surname: "Surname",
        email: "Email",
        submit: "Submit",
    },
    privacyPolicy: {
        title: "Privacy Policy",
        contentFile: "/blog_posts/privacy-policy-en.html"
    },
    termsAndConditions: {
        title: "Terms and Conditions",
        contentFile: "/blog_posts/terms-and-conditions-en.html"
    },
    mostAskedQuestions: {
        title: "Most asked Questions",
        contentFile: "/blog_posts/most-asked-questions-en.html"
    },
    blogPosts: [
        {
            id: 1,
            title: "Most asked questions",
            icon: "question_mark",
            subtitle: "Get the answers to all your questions",
            component: 'MostAskedQuestions',
            route: '/most-asked-questions'
        },
        {
            id: 2,
            title: "Terms & Conditions",
            icon: "gavel",
            subtitle: "Read our detailed terms and conditions",
            component: 'TermsAndConditions',
            route: '/terms-and-conditions'
        },
        {
            id: 3,
            title: "Privacy Policy",
            icon: "privacy_tip",
            subtitle: "We value your privacy. Get all the details",
            component: 'PrivacyPolicy',
            route: '/privacy-policy',
        },
        {
            id: 6,
            title: "Summer-Internship IT",
            icon: "sensor_occupied",
            subtitle: "Open position: Summer-Internship IT Development in Fintech-Startup",
            component: 'InternshipIt',
            route: '/internship-it',
        },
        {
            id: 7,
            title: "Trainee (Online-)Marketing",
            icon: "add_reaction",
            subtitle: "Open position: Trainee (Online-)Marketing",
            component: 'InternshipMarketing',
            route: '/internship-marketing',
        },
        {
            id: 8,
            title: "keycount NFT-Drop",
            icon: "photo_camera_back",
            subtitle: "Community News: keycount NFT-Drop – We want you to be a part of keycount!",
            component: 'NftDrop',
            route: '/nft-drop',
        },
        {
            id: 9,
            title: "Partnership: keycount and Genify",
            icon: "escalator_warning",
            subtitle: "Partnership: keycount and Genify",
            component: 'PartnershipGenify',
            route: '/partnership-genify',
        },
        {
            id: 10,
            title: "Partnership: keycount and Vezgo",
            icon: "blind",
            subtitle: "Partnership: keycount and Vezgo",
            component: 'PartnershipVezgo',
            route: '/partnership-vezgo',
        },
        {
            id: 11,
            title: "Podcast: Arman (CEO) bei Grou Online",
            icon: "headset_mic",
            subtitle: "Podcast: Arman (CEO) bei Grou Online",
            component: 'PodcastArman',
            route: '/podcast-arman',
        }
    ],
    internshipIt: {
        title: "Summer-Internship IT",
        contentFile: "/blog_posts/it-internship-en.html"
    },
    internshipMarketing: {
        title: "Open position: Trainee (Online-)Marketing",
        contentFile: "/blog_posts/marketing-internship-en.html"
    },
    nftDrop: {
        title: "keycount NFT-Drop",
        contentFile: "/blog_posts/nft-drop-en.html"
    },
    partnershipGenify: {
        title: "Partnership: keycount and Genify",
        contentFile: "/blog_posts/partnership-genify-en.html"
    },
    partnershipVezgo: {
        title: "Partnership: keycount and Vezgo",
        contentFile: "/blog_posts/partnership-vezgo-en.html"
    },
    podcastArman: {
        title: "Podcast: Arman (CEO) bei Grou Online",
        contentFile: "/blog_posts/podcast-arman-en.html"
    }
};

export default en;