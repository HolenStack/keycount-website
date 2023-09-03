const de = {
    general: {
        downloadButtonLabel: "Download",
    },
    bottomMenu: {
        home: "Home",
        aboutUs: "Über Uns",
        updatesAndFAQ: "Updates & FAQ",
        exit: "Exit"
    },
    header: {
        downloadFromPlayStore: "Jetzt bei Google Play"
    },
    footer: {
        privacyPolicy: "Datenschutzerklärung",
        termsAndConditions: "Geschäftsbedingungen"
    },
    feedback: {
        title: "Noch Fragen?",
        subtitle: "Kontaktiere uns direkt",
        emailButton: "E-Mail",
        feedbackButton: "Feedback"
    },
    exit: {
        banner: {
            title: "Danke für dein Interesse an Keycount!",
            image: () => import("./../assets/images/info-grafics/analysis_0.svg") // TODO
        },
        sections: [
            {
                id: 1,
                text: "Seit unserer Gründung haben wir uns als innovative Banking-Plattform positioniert. Dennoch haben wir uns kürzlich entschieden, unser Produkt nicht weiter am Markt zu betreiben. Dank unserer öffentlichen Beta-Phase und dem wertvollen Feedback konnten wir Synergien mit anderen Marktteilnehmern erkennen und planen nun, unser Know-how in einem neuen Kontext einzusetzen.",
            },
            {
                id: 2,
                text: "Ein herzlicher Dank geht an dich und unsere Partner für die durchweg positive Unterstützung.",
            },
            {
                id: 3,
                text: "Bei Fragen sind wir nur eine E-Mail entfernt: {emailLink}.",
            }
        ],
        buttonText: "Zur Website"
    },
    home: {
        banner: {
            title: "Vielen Dank für dein Interesse an keycount",
            videoButton: "Erklärt in 60 Sekunden",
            image: () => import("./../assets/images/info-grafics/analysis_0.svg") // TODO
        },
        safety: {
            title: "Absolute Sicherheit",
            text: "Deine Daten sind auf jeder Ebende kompromisslos geschützt! Um Deine Daten bestmöglich zu schützen, setzen wir auf ein umfangreiches 3-Stufen-Sicherheitskonzept. Dabei nutzen wir zertifizierte sowie weltweit anerkannte Sicherheitsstandards.",
            button: "Sicherheitsstufen"
        },
        payments: {
            title: "Social Payments",
            text: "Mit keycount kannst du Geld an Freunde senden, ohne ihre Bankdaten zu kennen. Verbinde einfach deine Social-Media-Profile mit keycount und wähle den gewünschten Kontakt aus. Mit einem Klick kannst du Geld senden oder anfordern.",
            button: "Mehr Info",
            image: () => import("./../assets/images/screenshots/home_1_de.svg")
        },
        eBanking: {
            title: "E-Banking auf Steroiden",
            text: "Nutze alle bekannten Zahlungsfunktionen aus deinem E-Banking, ohne dich separat bei jeder Bank anzumelden. Zusätzlich kannst du Rechnungen scannen anstatt sie manuell einzugeben und Geld von Freunden anfordern.",
            button: "Mehr Info",
            image: () => import("./../assets/images/screenshots/home_2_de.svg")
        },
        analysis: {
            title: "Umfassende Analysen",
            text: "Keycount verknüpft all Deine Bankkonten, damit Du den einfachen Überblick erhältst, den Du Dir schon immer gewünscht hast. Verbinde mehr als 1500 Banken und verfolge Deine Ausgaben und Einnahmen auf all Deinen verschiedenen Konten in einer App. Erfahre durch unsere detaillierte Kategorisierung und Analyse genau, wofür Du Dein Geld ausgibst, und behalte Deine Finanzen im Griff.",
            button: "Mehr Info",
            image: () => import("./../assets/images/screenshots/home_3_de.svg")
        },
        crypto: {
            title: "All Deine Kryptos im Blick",
            text: "Analysiere, welche Kryptowährungen du auf welchen Wallets und Exchanges hältst und wie sich dein Portfolio prozentual zusammensetzt.",
            button: "Mehr Info",
            image: () => import("./../assets/images/screenshots/home_4_de.svg")
        },
        vision: {
            title: "Vision",
            text: "Wir bei keycount bauen Brücken zwischen den unzähligen Inseln im Finanzsektor – übersichtlich, interoperabel, vernetzt.",
            video: () => import("./../assets/videos/Vision.mp4")
        }
    },
    aboutUs: {
        banner: {
            title: "Wir bei keycount bauen Brücken zwischen den unzähligen Inseln im Finanzsektor – übersichtlich, interoperabel, vernetzt.",
            image: () => import("./../assets/images/screenshots/screenshot_example.png") // TODO
        },
        team: {
            title: "Unser Team",
            text: "Wir sind ein Team von Experten mit langjähriger Erfahrung im Bankensektor, IT-Development, Recht und Compliance. Wir nutzen diese Fähigkeiten bei keycount, um für dich die beste und sicherste Finanzapp zu entwickeln."
        },
        partner: {
            title: "Unsere Partner"
        }
    },
    updatesAndFAQ: {
        bannerTitle: "Alles, was Du über keycount wissen solltest",
        searchField: "Suchen...",
        noMatchingEntries: "Keine Ergebnisse für deine Suche"
    },
    analysis: {
        banner: {
            title: "Deine Finanzen auf einen Blick",
            image: () => import("./../assets/images/info-grafics/analysis_0.svg")
        },
        sections: [
            {
                id: 1,
                title: "Passt perfekt zu all Deinen Konten",
                text: "Du behältst immer volle Kontrolle, egal ob es sich um ein oder mehrere Konten handelt und unabhängig davon, bei welchen Banken und Finanzdienstleistern sie sind.",
                image: () => import("./../assets/images/info-grafics/analysis_1.svg")
            },
            {
                id: 2,
                title: "Der komplette Überblick über alle Konten",
                text: "Schluss mit der Übersicht im Excel und dutzenden Logins. Mit keycount hast Du alle Deine Konten und Transaktionen an einem Ort und siehst jederzeit genau wo Du wie viel Geld hast und wie sich dein Vermögen entwickelt.",
                image: () => import("./../assets/images/screenshots/analysis_2_de.svg")
            },
            {
                id: 3,
                title: "Analysiere all Deine Transaktionen",
                text: "So bekommst du beispielsweise Einblicke darüber, wie viel Prozent deines Einkommens du monatlich für Restaurantbesuche ausgibst oder wie sich deine monatlichen Ausgaben für Online-Shopping im Laufe der Zeit entwickeln/verändern.",
                image: () => import("./../assets/images/screenshots/analysis_3_de.svg")
            },
        ]
    },
    crypto: {
        banner: {
            title: "Kryptos waren noch nie so übersichtlich",
            image: () => import("./../assets/images/info-grafics/crypto_0.svg")
        },
        sections: [
            {
                id: 1,
                title: "Das ganze Portfolio im Blick",
                text: "Mit keycount hast Du automatisch alles im Blick, anstatt Dich bei dutzenden Wallets und Exchanges separat anmelden und manuell eine Portfolioübersicht erstellen zu müssen. Ob Du eine prozentuale Übersicht Deines gesamten Portfolios oder eine Aufschlüsselung Deiner Währungen auf bestimmten Wallets und Exchanges sehen möchtest, keycount zeigt es Dir in Echtzeit und konvertiert es in Deine bevorzugte Fiat-Währung.",
                image: () => import("./../assets/images/screenshots/crypto_1_de.svg")
            },
            {
                id: 2,
                title: "Veränderungen jederzeit im Griff",
                text: "Mit keycount behältst Du jederzeit den Überblick über den Gesamtwert und die prozentuale Aufteilung Deines Portfolios. So kannst Du die Auswirkungen von Marktschwankungen auf Dein Portfolio sehen und fundierte Investitionsentscheidungen treffen.",
                image: () => import("./../assets/images/screenshots/crypto_2_de.svg")
            },
        ]
    },
    payments: {
        banner: {
            title: "Du hast noch nie so gerne gezahlt",
            image: () => import("./../assets/images/info-grafics/payments_0_de.svg")
        },
        sections: [
            {
                id: 1,
                title: "Geld senden ohne Kopfschmerzen",
                text: "Verbinde Deine sozialen Medien mit keycount und sende unkompliziert Geld an Freunde, unabhängig von deren Bank oder Zahlungsanbieter. Du musst die Bankdaten Deiner Freunde nicht einmal eingeben, da wir sie bereits kennen und keycount plattformübergreifend funktioniert.",
                image: () => import("./../assets/images/screenshots/payments_1_de.svg")
            },
            {
                id: 2,
                title: "Geld mit einem Klick anfordern",
                text: "Ein Freund schuldet Dir noch Geld? Mit keycount kannst Du einfach Forderungen an Freunde aus sozialen Medien oder Deinem Adressbuch senden, ohne dass Deine Freunde ihre Bankdaten eingeben müssen. Stattdessen können sie die Zahlung mit einem Knopfdruck bestätigen.",
                image: () => import("./../assets/images/screenshots/payments_2_de.svg")
            },
            {
                id: 3,
                title: "Rechnung einfach mit Freunden teilen",
                text: "Du hast im Restaurant die ganze Rechnung bezahlt und möchtest diese nun mit Deinen Freunden teilen? Mit keycount kannst Du ganz einfach den Rechnungsbetrag eingeben und Deinen Freunden automatisch eine Forderung für ihren Anteil senden. Da wir Deine Bankdaten bereits kennen, müssen Deine Freunde diese nicht selbst eingeben sondern können die Zahlung an Dich mit einem Knopfdruck bestätigen.",
                image: () => import("./../assets/images/screenshots/payments_3_de.svg")
            },
        ]
    },
    safety: {
        sections: [
            {
                id: 1,
                title: "Unser Tresor für Deine Daten. Serverstandort Schweiz.",
                text: "Deine Daten liegen verschlüsselt in einem Rechenzentrum der Schweiz, geschützt durch die höchsten Sicherheitsstandards der Industrie. Das Rechenzentrum ist unter anderem durch mehrere Sicherheitsschleusen und feste Betonmauern physisch geschützt, sodass niemand ungesehen rein- oder rauskommt.",
                image: () => import("./../assets/images/info-grafics/safety_1.svg")
            },
            {
                id: 2,
                title: "Sicherer Datentransport. Kein Zugang für Dritte.",
                text: "Die keycount App ist durch modernste Authentifizierungsverfahren vor dem Zugriff von Dritten geschützt. Hierzu zählen das OAuth2-Verfahren, Firewalls und SSL-Schutz für alle Verbindungen. Ähnlich einer gepanzerten Türe erhält niemand ohne eine entsprechende Berechtigung Zutritt zum wertvollen Inneren Deines Tresors.",
                image: () => import("./../assets/images/info-grafics/safety_2.svg")
            },
            {
                id: 3,
                title: "Dein Schliessfach. Nur Du kannst es öffnen.",
                text: "Im Herzen unseres Tresors liegen deine Daten verschlüsselt in Deinem persönlichen Schliessfach. Für die Verschlüsselung nutzen wir das weltweit sicherste AES-Verschlüsselungsverfahren. Niemand außer Dir kann keiner auf Deine Bankdaten zugreifen.",
                image: () => import("./../assets/images/info-grafics/safety_3.svg")
            },
        ]
    },
    eBanking: {
        banner: {
            title: "E-Banking war noch nie so einfach",
            image: () => import("./../assets/images/screenshots/screenshot_example.png") // TODO
        },
        sections: [
            {
                id: 1,
                title: "Alles an einem Ort",
                text: "Mit keycount hast Du alle Deine E-Bankingfunktionen an einem Ort. Du kannst wie gewohnt Rechnungen erfassen, bezahlen und Transaktionen auslösen - nicht nur für ein Konto, sondern für alle Konten. Du musst Dich nur an einem einzigen Ort einloggen, um alles zu verwalten.",
                image: () => import("./../assets/images/screenshots/banking_1_de.svg")
            },
            {
                id: 2,
                title: "Rechnungen scannen statt abtippen",
                text: "Rechnungen von Hand zu erfassen war gestern, heute ist keycount. Erfasse Rechnungen einfach mit der keycount App. Scanne sie ein und alle Transaktionsdaten werden automatisch ausgefüllt. Dann musst du nur noch das Konto auswählen, von dem du bezahlen möchtest.",
                image: () => import("./../assets/images/screenshots/banking_2_de.svg")
            },
        ]
    },
    waitingList: {
        title: "In die Warteliste eintragen",
        text: "Sei der Erste, der erfährt, wenn wir unsere neuesten Funktionen und Updates veröffentlichen! Unser Team arbeitet rund um die Uhr, um Dir das bestmögliche Erlebnis zu bieten. Wir haben viele spannende Dinge auf Lager, einschließlich einer iOS-Implementierung, die derzeit in Arbeit ist. Trage Dich jetzt in unsere Warteliste ein, um als Erstes Updates und Benachrichtigungen zu erhalten, wenn wir unsere neuesten Funktionen veröffentlichen.",
        email: "E-Mail",
        join: "Eintragen"
    },
    contact: {
        title: "Schreibe uns direkt an",
        text: "Wir freuen uns, von Dir zu hören! Teile Sie uns Dein Feedback mit, melde einen Bug oder nimm einfach Kontakt zu unserem Team auf. Schreib uns direkt per email an",
        mail: "company@key-count.com"
    },
    supportRequest: {
        title: "Support & Feedback",
        text: "Wir freuen uns, von Dir zu hören! Teile Sie uns Dein Feedback mit, melde einen Bug oder nimm einfach Kontakt zu unserem Team auf.",
        name: "Nachname",
        surname: "Vorname",
        email: "Email",
        submit: "Senden",
    },
    privacyPolicy: {
        title: "Datenschutzerklärung",
        contentFile: "/blog_posts/privacy-policy-de.html"
    },
    termsAndConditions: {
        title: "Allgemeine Geschäftsbedingungen",
        contentFile: "/blog_posts/terms-and-conditions-de.html"
    },
    mostAskedQuestions: {
        title: "Most asked Questions",
        contentFile: "/blog_posts/most-asked-questions-de.html"
    },
    blogPosts: [
        {
            id: 1,
            title: "Häufig gestellte Fragen",
            icon: "question_mark",
            subtitle: "Alle antworten auf alle Fragen",
            component: 'MostAskedQuestions',
            route: '/most-asked-questions'   
        },
        {
            id: 2,
            title: "Podcast: Arman (CEO) bei Grou Online",
            icon: "headset_mic",
            subtitle: "Podcast: Arman (CEO) bei Grou Online",
            component: 'PodcastArman',
            route: '/podcast-arman',
        },
        {
            id: 3,
            title: "keycount NFT-Drop",
            icon: "photo_camera_back",
            subtitle: "Swiss Fintech start-up keycount lanciert erstes NFT-Crowdfunding projekt",
            component: 'NftDrop',
            route: '/nft-drop',
        },
        {
            id: 4,
            title: "Partnerschaft: keycount und Genify",
            icon: "escalator_warning",
            subtitle: "Partnerschaft: keycount und Genify",
            component: 'PartnershipGenify',
            route: '/partnership-genify',
        },
        {
            id: 5,
            title: "Partnerschaft: keycount und Vezgo",
            icon: "blind",
            subtitle: "Partnerschaft: keycount und Vezgo",
            component: 'PartnershipVezgo',
            route: '/partnership-vezgo',
        },
        {
            id: 6,
            title: "Geschäftsbedingungen",
            icon: "gavel",
            subtitle: "Schau dir unsere detaillierten Geschäftsbedingungen an",
            component: 'TermsAndConditions',
            route: '/terms-and-conditions'
        },
        {
            id: 7,
            title: "Datenschutzerklärung",
            icon: "privacy_tip",
            subtitle: "Wir schätzen Deine Privatsphäre. Erhalte alle Details dazu",
            component: 'PrivacyPolicy',
            route: '/privacy-policy',
        },
    ],
    nftDrop: {
        title: "keycount NFT-Drop",
        contentFile: "/blog_posts/nft-drop-de.html"
    },
    partnershipGenify: {
        title: "Partnerschaft: keycount und Genfiy",
        contentFile: "/blog_posts/partnership-genify-de.html"
    },
    partnershipVezgo: {
        title: "Partnerschaft: keycount und Vezgo",
        contentFile: "/blog_posts/partnership-vezgo-de.html"
    },
    podcastArman: {
        title: "Podcast: Arman (CEO) bei Grou Online",
        contentFile: "/blog_posts/podcast-arman-de.html"
    }
};

export default de;
