// type Sponsors = {
//   slug: string;
//   name: string;
//   bioGR: string;
//   bioEN: string;
//   infoLinks: {};
// };

const PLATINUM_SPONSORS = [
  {
    slug: 'dei',
    name: 'ΔΕΗ',
    bioGR: '',
    bioEN: '',
    infoLinks: {website: ['https://www.ppcgroup.com/el']}
  },
  {
    slug: 'the-american-college-of-greece',
    name: 'The American College of Greece',
    bioGR: '',
    bioEN:
      'Located in Athens, and originally founded in 1875 in Smyrna, The American College of Greece is the oldest American-accredited college in Europe and the largest private college in Greece. ACG is an independent, not for profit, nonsectarian, co-educational academic institution. It consists of 3 schools: Pierce, Deree (undergraduate & graduate) and Alba Graduate Business Schools. At ACG you can study for a bachelor’s, master’s or Minor, in a vast variety of cutting-edge, and market relevant programs. At ACG, we combine legacy with innovation to shape future-ready professionals.',
    infoLinks: {website: ['https://www.acg.edu/request-information/']}
  },
  {
    slug: 'oliver-wyman',
    name: 'Oliver Wyman',
    bioGR: '',
    bioEN:
      'Oliver Wyman, a business of Marsh McLennan (NYSE: MMC), is a management consulting firm combining deep industry knowledge with specialized expertise to help clients optimize their business, improve operations and accelerate performance. Marsh McLennan is a global leader in risk, strategy and people, advising clients in 130 countries across four businesses: Marsh, Guy Carpenter, Mercer and Oliver Wyman. With annual revenue of over $24 billion and more than 90,000 colleagues, Marsh McLennan helps build the confidence to thrive through the power of perspective. For more information, visit marshmclennan.com, follow us on LinkedIn and X. Oliver Wyman: Impact-Driven Strategy And Consulting”',
    infoLinks: {
      linkedIn: ['https://www.linkedin.com/company/marshmclennan/'],
      website: ['https://www.oliverwyman.com/index.html']
    }
  },
  {
    slug: 'archidoron',
    name: 'Archidoron',
    bioGR:
      'Κατασκευάζουμε το Μέλλον. Μαζί.Οι άνθρωποί μας βρίσκονται στο επίκεντρο όλων όσων κάνουμε. Η Archirodon είναι ένας κορυφαίος διεθνής EPC εργολάβος, αφοσιωμένος στη βιωσιμότητα. Με δραστηριότητες στη Μέση Ανατολή, την Αφρική, τις χώρες της ΚΑΚ και την Ευρώπη, οι 10.000+ άνθρωποί μας είναι η κινητήριος δύναμη της επιτυχίας μας. Είμαστε περήφανοι για την υποστηρικτική, οικογενειακή μας κουλτούρα, όπου η ομαδικότητα και η αφοσίωση μας χαρακτηρίζουν. Πολλές από τις ομάδες μας εργάζονται μαζί για πάνω από μια δεκαετία, αποδεικνύοντας ότι η Archirodon είναι κάτι περισσότερο από ένας εργοδότης—είναι ένας χώρος εξέλιξης. Κάθε μέρα, καινοτομούμε, ξεπερνάμε προκλήσεις και παραδίδουμε αριστεία. Γίνε μέλος της ομάδας μας και έλα σε μια εταιρεία που εκτιμά τους ανθρώπους της και χτίζει έναν καλύτερο κόσμο.',
    bioEN:
      'Building the Future. Together. Our People are at the heart of everything we do. Archirodon is a leading international EPC contractor dedicated to sustainability. With operations across the Middle East, Africa, CIS countries, and Europe, our 10,000+ people drive our success. We take pride in our supportive, family-like culture, where teamwork and dedication define us. Many of our teams have worked together for over a decade, proving that Archirodon is more than just an employer—it’s a place to grow. Every day, we innovate, overcome challenges, and deliver excellence. Join us and be part of a company that values its people and builds a better world.',
    infoLinks: {
      website: ['https://careers.smartrecruiters.com/ArchirodonGroup']
    }
  },
  {
    slug: 'be-wise',
    name: 'Be Wise',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  }
];

const GRAND_SPONSORS = [
  {
    slug: 'uniperfect',
    name: 'Uniperfect',
    bioGR:
      'To UNIPERFECT είναι ένα υπερσύγχρονο κέντρο προετοιμασίας σπουδών, με έμφαση στη διαφορετικότητα του κάθε σπουδαστή. Στηρίζει τους μαθητές του στην επιλογή του κατάλληλου Προπτυχιακού, Μεταπτυχιακού ή Διδακτορικού, με βάση τα δικά τους κριτήρια και τους βοηθάει στο να κάνουν την τέλεια αίτηση. Επιπλέον προσφέρει τις καλύτερες και αποτελεσματικότερες μεθόδους για τα standardized tests GMAT, GRE, IELTS, TOEFL και USMLE. Οι instructors του είναι εξειδικευμένοι, με πολυετή εμπειρία και top ratings στο ενεργητικό τους. Διαθέτει σύγχρονες εγκαταστάσεις με εξειδικευμένους χώρους για προσομοιώσεις των tests, σε συνθήκες ίδιες των εξετάσεων. Όλα του τα μαθήματα είναι hybrid, με την επιλογή για ιδιαίτερα μαθήματα ή συμμετοχή σε ολιγομελή τμήματα, με προσοχή και φροντίδα στον κάθε σπουδαστή. Ακόμα, παρέχει ολοκληρωμένη υποστήριξη μέσω των υπηρεσιών του Mentoring και του Academic and Career Counseling.',
    bioEN:
      'UNIPERFECT is a state-of-the-art, award-winning education center that helps students be accepted at the top universities in the world. We offer Academic & Career counseling, Application Support, Mentoring as well as Tutoring for standardized tests such as the GMAT, GRE, IELTS and USMLE. Our business was selected for funding by "The People`s Trust" of the LASKARIDIS Charitable Foundation and received the 2023 ELT Excellence Silver Award for Online Educator of the year.',
    infoLinks: {
      instagram: ['https://www.instagram.com/uniperfect.gr/'],
      linkedIn: ['https://gr.linkedin.com/company/uniperfect'],
      website: ['https://www.uniperfect.gr/'],
      facebook: ['https://www.facebook.com/uniperfect.gr/']
    }
  },
  {
    slug: 'elpedison',
    name: 'Elpedison',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'thenamaris',
    name: 'Thenamaris',
    bioGR: '',
    bioEN:
      'Thenamaris is a global ship manager of high specification modern ocean-going vessels. We help deliver goods to people around the world, enriching their lives. We do this by safely managing a world class fleet of ships, providing the highest levels of service to our principals and clients. Thenamaris (Ships Management) Inc. manages Tanker vessels, Thenamaris ConBulk Inc. manages bulk carriers and containerships, while Thenamaris LNG Inc. manages LNG and LPG carriers.',
    infoLinks: {}
  },
  {
    slug: 'space',
    name: 'Space',
    bioGR:
      'H Space Hellas είναι ένας κορυφαίος System Integrator και Value Added Solutions Provider στο χώρο των τηλεπικοινωνιών, της πληροφορικής και της ασφάλειας. Μελετά, σχεδιάζει, προμηθεύει, εγκαθιστά, υποστηρίζει και συντηρεί ολοκληρωμένες λύσεις τόσο στον ιδιωτικό όσο και στον δημόσιο τομέα. Η Space Hellas αναπτύσσεται διαρκώς και στις κύριες δραστηριότητές της περιλαμβάνονται η σχεδίαση και υλοποίηση ενσύρματων και ασύρματων δικτύων επικοινωνιών, η σχεδίαση και υλοποίηση λύσεων Πληροφορικής, η ανάπτυξη λύσεων τηλεφωνίας, η ανάπτυξη και υλοποίηση εφαρμογών ασφάλειας πληροφορικής και συστημάτων ασφάλειας, η παροχή λύσεων audio & video conference, OSS-BSS και τηλεματικής, καθώς και έργα δομημένης καλωδίωσης, computer rooms και υποδομών. Επίσης, προσφέρει υψηλού επιπέδου τηλεπικοινωνιακές υπηρεσίες σε εθνικό και διεθνές επίπεδο, υπηρεσίες τεχνικής υποστήριξης, εκπαίδευσης και μεταφοράς τεχνογνωσίας, υπηρεσίες κινητής και σταθερής τηλεφωνίας και συνδέσεις Interne',
    bioEN: '',
    infoLinks: {}
  }
];

const PARTNERS = [
  {
    slug: 'q-project',
    name: 'QPROJECT',
    bioGR:
      'QPROJECT – Χτίζοντας το Αύριο, Σήμερα Με πολυετή εμπειρία στον κλάδο και την υποστήριξη μιας άρτια καταρτισμένης ομάδας, η QPROJECT προσφέρει ολοκληρωμένες λύσεις υψηλής ποιότητας στον τομέα των κατασκευών. Η άψογη οργάνωση και η συνέπεια αποτελούν τον πυρήνα της φιλοσοφίας μας, ενώ κάθε έργο μας υλοποιείται με απόλυτο επαγγελματισμό και σεβασμό στις ανάγκες του πελάτη. Η ομάδα μας, αποτελούμενη από έμπειρους μηχανικούς και διακοσμητές, συνεργάζεται για την επιτυχημένη παράδοση έργων σε οικιστικούς, εμπορικούς, ξενοδοχειακούς, βιομηχανικούς και γραφειακούς τομείς.  Η QPROJECT επενδύει στη βιωσιμότητα. Εφαρμόζουμε σύγχρονες πρακτικές, αξιοποιούμε φιλικά προς το περιβάλλον υλικά και δεσμευόμαστε στη δημιουργία έργων με θετικό αποτύπωμα τόσο για τους ανθρώπους όσο και για τις κοινότητες στις οποίες δραστηριοποιούμαστε. Για εμάς, η κατασκευή δεν αφορά μόνο το χτίσιμο, αλλά την εμπιστοσύνη, τις σχέσεις και το μέλλον. Χτίζουμε σταθερά θεμέλια – για τα έργα και τους ανθρώπους.',
    bioEN:
      "QPROJECT – Building Tomorrow, Today With many years of experience in the industry and the support of a highly skilled team, QPROJECT offers high quality integrated solutions in the construction sector. Impeccable organization and consistency are the core of our philosophy, while every project is implemented with absolute professionalism and respect for the client's needs. Our team of experienced engineers and decorators collaborate to successfully deliver projects in residential, commercial, hotel, industrial and office sectors.  At QPROJECT, sustainability is at the heart of our operations. We implement modern practices, utilize environmentally friendly materials and are committed to creating projects with a positive footprint for both people and the communities in which we operate. For us, construction is not just about building, but about trust, relationships and the future. We build solid foundations - for projects and people.",
    infoLinks: {}
  },
  {
    slug: 'gdm-assets',
    name: 'GDM Assets',
    bioGR:
      'GDM Assets You envision it. We build it. Η GDM Assets πρωταγωνιστεί στον κατασκευαστικό κλάδο της Αθήνας, έχοντας μέχρι στιγμής περισσότερα από 30 ολοκληρωμένα έργα στο ενεργητικό της. Ιδρύθηκε το 2018 με αντικείμενο την κατασκευή και διαχείριση ιδιωτικών και δημόσιων έργων μεγάλης κλίμακας, και επεκτάθηκε το 2023 στην ανάπτυξη ακινήτων. Σήμερα βρίσκεται μεταξύ των 20 ταχύτερα αναπτυσσόμενων εταιρειών του κατασκευαστικού κλάδου και αφήνει το στίγμα της με επιτυχημένη παράδοση έργων μεγάλης εμβέλειας. Η εκτεταμένη τεχνογνωσία του προσωπικού, σε συνδυασμό με την νεανική αλλά ιδιαίτερα έμπειρη διοικητική ομάδα, πετυχαίνει εντυπωσιακές επιδόσεις με αναγνωρίσιμα κατασκευαστικά έργα και σύγχρονα ‘πράσινα’ κτίρια. Με προτεραιότητα την ασφάλεια και τη βιωσιμότητα, και τη συνεργασία και το σεβασμό να διέπουν την κουλτούρα της, στοχεύει στη δημιουργία διαχρονικής αξίας για τους ανθρώπους της, τους πελάτες της και την κοινότητα που εξυπηρετεί. Σημαντικά έργα της GDM Assets είναι η αποκατάσταση του ιστορικού και διατηρητέου κτιρίου επί της οδού Πατησίων, που θα στεγάσει την Ακαδημία Λυρικής Τέχνης Maria Callas, το πρόσφατα ολοκληρωμένο κτίριο γραφείων υψηλών προδιαγραφών Office Building Kifisias 268 και η ανακαίνιση και ενεργειακή αναβάθμιση των Τμημάτων Επειγόντων Περιστατικών σε τέσσερα νοσοκομεία της Αθήνας.',
    bioEN: '',
    infoLinks: {website: ['https://gdmassets.gr/']}
  },
  {
    slug: 'coca-cola',
    name: 'Coca Cola 3E',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'frenzyderm',
    name: 'Frenzyderm',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'papoutsanis',
    name: 'Papoutsanis',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'red-bull',
    name: 'Reb Bull',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  }
];

const SUPPORTERS = [
  {
    slug: 'deep-sea',
    name: 'Deepsea',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'flexopack',
    name: 'FLEXOPACK',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'kanellakis',
    name: 'Kanellakis AE',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'olympos',
    name: 'ΟΛΥΜΠΟΣ',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'symetal',
    name: 'Symetal',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'melissa',
    name: 'Melissa',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'mega-spileo',
    name: 'Mega Spileo Estate',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'nanou',
    name: 'NANOY',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'ikea',
    name: 'IKEA',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'ahmad-tea',
    name: 'Ahmad Tea',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'atflya',
    name: 'AtFlya',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'cavino',
    name: 'Cavino',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'colgate',
    name: 'Colgate',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'red-raven',
    name: 'Red Raven',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'rodopaki',
    name: 'Ροδοπάκι',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'tefaco',
    name: 'Tefaco',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'impact-hub-athens',
    name: 'Impact Hub Athens',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'to-kati-allo',
    name: 'To Kati Allo',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  },
  {
    slug: 'wowchi',
    name: 'Wowchi',
    bioGR: '',
    bioEN: '',
    infoLinks: {}
  }
  // {
  //   slug: 'charge-me',
  //   name: 'Charge Me',
  //   bioGR: '',
  //   bioEN: '',
  //   infoLinks: {}
  // },
  // {
  //   slug: 'ioniki',
  //   name: 'Ιονική',
  //   bioGR: '',
  //   bioEN: '',
  //   infoLinks: {}
  // },
  // {
  //   slug: 'bakkar',
  //   name: 'Bakkar',
  //   bioGR: '',
  //   bioEN: '',
  //   infoLinks: {}
  // },
  // {
  //   slug: 'glaros',
  //   name: 'Γλάρος',
  //   bioGR: '',
  //   bioEN: '',
  //   infoLinks: {}
  // },
];

export const ALL_PARTNERS = [
  {title: 'Platinum Sponsors', data: PLATINUM_SPONSORS},
  {title: 'Grand Sponsors', data: GRAND_SPONSORS},
  {title: 'Partners', data: PARTNERS},
  {title: 'Supporters', data: SUPPORTERS}
];
