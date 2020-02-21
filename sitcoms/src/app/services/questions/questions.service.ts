import { Injectable } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: IQuestion[] = [
    {
      question: 'Which instrument did Ted steal for Robin in the first episode of the series?',
      answer: 'French Horn',
      a: 'Trumpet',
      b: 'Tuba',
      c: 'French Horn',
      d: 'Clarinet',
      show: 'How I Met Your Mother'
    },
    {
      question: "What was tattooed on Ted's lower back?",
      answer: 'Butterfly',
      a: 'Butterfly',
      b: 'Rainbow',
      c: 'Dolphin',
      d: 'Eagle',
      show: 'How I Met Your Mother'
    },
    {
      question: 'Barney, Ted, and Marshall all worked for GNB at some point. What does GNB stand for?',
      answer: 'Goliath National Bank',
      a: 'Gigantic National Bank',
      b: 'Global Nutritional Brands',
      c: 'Grant National Brands',
      d: 'Goliath National Bank',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What did Barney have to wear for a year after losing a bet?',
      answer: 'Ducky Tie',
      a: 'Kitten Underwear',
      b: 'Ducky Tie',
      c: 'Bunny Socks',
      d: 'Monkey Shoes',
      show: 'How I Met Your Mother'
    },
    {
      question: "Which of these is NOT one of Barney's theories?",
      answer: 'The Daddy Rule',
      a: 'The Daddy Rule',
      b: 'The Mermaid Theory',
      c: 'The Platinum Rule',
      d: 'The Freeway Theory',
      show: 'How I Met Your Mother'
    },
    {
      question: "Which character was NOT one of Ted's serious girlfriends?",
      answer: 'Quinn',
      a: 'Quinn',
      b: 'Stella',
      c: 'Victoria',
      d: 'Zoey',
      show: 'How I Met Your Mother'
    },
    {
      question: "Who is Robin's arch-enemy at work?",
      answer: 'Patrice',
      a: 'Clarice',
      b: 'Nora',
      c: 'Patrice',
      d: 'Jess',
      show: 'How I Met Your Mother'
    },
    {
      question: "What is the name of Lily's high school boyfriend?",
      answer: 'Scooter',
      a: 'Shooter',
      b: 'Skeeter',
      c: 'Scooter',
      d: 'Skippy',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What did Barney do to get slapped for the second time after Marshall wins their Slap Bet?',
      answer: 'Perform a terrible one man show',
      a: 'Sing a song he wrote about Lily',
      b: 'Insult the Minnesota Vikings',
      c: 'Beat him in a game of Laser Tag',
      d: 'Perform a terrible one man show',
      show: 'How I Met Your Mother'
    },
    {
      question: "What is Marshall and Lily's theory on how to be a happy couple?",
      answer: 'The Olive Theory',
      a: 'The Lemon Theory',
      b: 'The Olive Theory',
      c: 'The Pineapple Theory',
      d: 'The Pickle Theory',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What is the name of the aged scotch that keeps coming up throughout the series?',
      answer: 'Glen McKenna',
      a: 'Glen McKinney',
      b: 'Glen McDonald',
      c: 'Glen McKenna',
      d: 'Glen McKinley',
      show: 'How I Met Your Mother'
    },
    {
      question: "Which song is NOT on Barney's GET PSYCHED mix?",
      answer: 'Def Leppard, "Pour Some Sugar On Me"',
      a: 'Bon Jovi, "You Give Love A Bad Name"',
      b: 'Guns N Roses, "Paradise City"',
      c: 'Def Leppard, "Pour Some Sugar On Me"',
      d: 'Van Halen, "Panama"',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What name did Robin take after ditching her Robin Sparkles persona and embracing an angsty 90s alt-rock vibe?',
      answer: 'Robin Daggers',
      a: 'Robin Sparrow',
      b: 'Robin Sorrow',
      c: 'Robin Daggers',
      d: 'Robin Darkness',
      show: 'How I Met Your Mother'
    },
    {
      question: "Which of Robin's vocal tics is turned into a drinking game after she says it too many times on live television?",
      answer: 'But...ummm...',
      a: 'Uh, yeahhh...',
      b: 'But...ummm...',
      c: 'What...what?',
      d: 'Yeah, so...',
      show: 'How I Met Your Mother'
    },
    {
      question: "What does Lily's doppelganger do for a living?",
      answer: 'Stripper',
      a: 'Cop',
      b: 'Cab Driver',
      c: 'Stripper',
      d: 'Doctor',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What is the name of the character that Ted and Barney hate, but Lily likes?',
      answer: 'Gary Blauman',
      a: 'William Zabka',
      b: 'Gary Blauman',
      c: 'Scotty Rumsen',
      d: 'Terry Neuemann',
      show: 'How I Met Your Mother'
    },
    {
      question: "What is the name of Ted's future daughter?",
      answer: 'Penny',
      a: 'Penny',
      b: 'Robin',
      c: 'Lucy',
      d: 'Leia',
      show: 'How I Met Your Mother'
    },
    {
      question: "What is the name of Ted's future son?",
      answer: 'Luke',
      a: 'Martin',
      b: 'Marshall',
      c: 'Owen',
      d: 'Luke',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What college did Ted, Lily, and Marshall attend?',
      answer: 'Wesleyan University',
      a: 'New York University',
      b: 'Harvard University',
      c: 'Wesleyan University',
      d: 'Columbia University',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What year is it supposed to be when Ted is telling his two kids about how he met their mom?',
      answer: '2030',
      a: '2015',
      b: '2020',
      c: '2025',
      d: '2030',
      show: 'How I Met Your Mother'
    },
    {
      question: 'How many women did Ted date that were NOT the mother?',
      answer: '29',
      a: '12',
      b: '17',
      c: '24',
      d: '29',
      show: 'How I Met Your Mother'
    },
    {
      question: 'Robin was a famous Canadian teen pop star in the 1990s. What was the name of her pop star persona?',
      answer: 'Robin Sparkles',
      a: 'Robin Glitter',
      b: 'Robin Daggars',
      c: 'Robin Sparkles',
      d: 'Robin Scherbatskty',
      show: 'How I Met Your Mother'
    },
    {
      question: 'What was the name of the Canadian kids show Robin Sparkles starred on?',
      answer: 'Space Teens',
      a: 'Teen Glow',
      b: 'Space Teens',
      c: 'Teen Beavers',
      d: 'Space Beavers',
      show: 'How I Met Your Mother'
    },
    {
      question: 'Lily breaks up with Marshall and moves to what city?',
      answer: 'San Francisco',
      a: 'Paris',
      b: 'Rome',
      c: 'San Francisco',
      d: 'Los Angeles',
      show: 'How I Met Your Mother'
    },
    {
      question: 'Who did Barney think was his father?',
      answer: 'Bob Barker',
      a: 'Bob Barker',
      b: 'Regis Philbin',
      c: 'Michael Jackson',
      d: 'Jackie Chan',
      show: 'How I Met Your Mother'
    },
    {
      question: "Which of these was NOT one of Marshall's nicknames?",
      answer: 'Minnesota Marsh',
      a: 'Big Fudge',
      b: 'Vanilla Thunder',
      c: 'Beercules',
      d: 'Minnesota Marsh',
      show: 'How I Met Your Mother'
    },
    {
      question: 'Who did Barney end up marrying?',
      answer: 'Robin',
      a: 'Quinn',
      b: 'Nora',
      c: 'Robin',
      d: 'Wendy the Waitress',
      show: 'How I Met Your Mother'
    },
    {
      question: 'Which of these former girlfriends did Ted NOT propose to?',
      answer: 'Henrietta',
      a: 'Stella',
      b: 'Victoria',
      c: 'Tracy',
      d: 'Henrietta',
      show: 'How I Met Your Mother'
    },
    {
      question: 'The series is set in the parks department of a fictional town called Pawnee. In what state is Pawnee in?',
      answer: 'Indiana',
      a: 'Indiana',
      b: 'Texas',
      c: 'North Carolina',
      d: 'South Dakota',
      show: 'Parks & Rec'
    },
    {
      question: 'What actor plays the character of Andy Dwyer?',
      answer: 'Chris Pratt',
      a: 'Chris Pratt',
      b: 'Nick Offerman',
      c: "Jim O'Heir",
      d: 'Billy Eichner',
      show: 'Parks & Rec'
    },
    {
      question: "Which former Presidential candidate did Leslie encounter in the episode: 'Miss Knope Goes to Washington'?",
      answer: 'John McCain',
      a: 'Mitt Romney',
      b: 'Joe Biden',
      c: 'John McCain',
      d: 'Al Gore',
      show: 'Parks & Rec'
    },
    {
      question: "What is the name of Annabel Porter's internet lifestyle magazine that promotes Ron's handmade chairs?",
      answer: 'Bloosh',
      a: 'Name Your Boo',
      b: 'Rent A Swag',
      c: 'Entertainment 720',
      d: 'Bloosh',
      show: 'Parks & Rec'
    },
    {
      question: "What board game does Ben insist on playing as part of his Bachelor Party?",
      answer: 'Settlers of Catan',
      a: 'The Cones of Dunshire',
      b: 'Settlers of Catan',
      c: 'The Calzone',
      d: 'The Casinos of Tajikistan',
      show: 'Parks & Rec'
    },
    {
      question: 'For what charity does Ben Wyatt work for before accepting the offer City Manager?',
      answer: 'The Sweetums Foundation',
      a: 'Paunch Burger Charities',
      b: 'The Sweetums Foundation',
      c: 'Entertainment 720 Fund',
      d: "Tommy's Tummy Foundation",
      show: 'Parks & Rec'
    },
    {
      question: "Leslie Knope filibusters the meeting called to vote on the proposed new park by reading what children's fantasy book?",
      answer: 'The Phantom Tollbooth',
      a: 'The Phantom Tollbooth',
      b: 'Harry Potter and the Chamber of Secrets',
      c: '50 Shades of Grey',
      d: 'Twilight',
      show: 'Parks & Rec'
    },
    {
      question: "The Parks Department is threatened with closure due to budget cuts. What traditional event did Leslie revive to prove the worth of the department?",
      answer: 'The Harvest Festival',
      a: 'The Unity Concert',
      b: "Galentine's Day",
      c: 'The Harvest Festival',
      d: "Li'l Sebastian Memorial",
      show: 'Parks & Rec'
    },
    {
      question: 'When Andy Dwyer is in London, he mistakes Buckingham Palace for which fictional building?',
      answer: 'Hogwarts',
      a: '221B Baker Street',
      b: 'Hogwarts',
      c: 'Downton Abbey',
      d: 'The Death Star',
      show: 'Parks & Rec'
    },
    {
      question: "What first name is shared by Ron's first two wives and his mother?",
      answer: 'Tammy',
      a: 'Diane',
      b: 'Leslie',
      c: 'Joan',
      d: 'Tammy',
      show: 'Parks & Rec'
    },
    {
      question: 'Leslie Knope and her former best friend Lindsay Shay find themselves at odds over a fence built in which park, built at the border of Pawnee and Eagleton?',
      answer: 'Lafayette Park',
      a: 'Tucker Park',
      b: 'Lafayette Park',
      c: 'Ramsay Park',
      d: 'Wamapokestone Park',
      show: 'Parks & Rec'
    },
    {
      question: 'Leslie finds herself in the headlines of which tabloid newspaper over her supposed affair with Councilman Dexheart?',
      answer: 'The Pawnee Sun',
      a: 'The Pawnee Herald',
      b: 'The Pawnee Star',
      c: 'The Pawnee Sun',
      d: "Ya' Heard with Perd",
      show: 'Parks & Rec'
    },
    {
      question: 'In the final episode, what is the title of the film about his failures that Tom Haverford watches repeatedly?',
      answer: 'Swaggerless',
      a: 'Entertainment 720',
      b: 'Treat Yo Self',
      c: 'Swaggerless',
      d: 'Failure: An American Success Story',
      show: 'Parks & Rec'
    },
    {
      question: 'Where would Ron rather work?',
      answer: 'Chuck E. Cheese',
      a: 'Burger King',
      b: 'Target',
      c: 'Chuck E. Cheese',
      d: 'Whole Foods',
      show: 'Parks & Rec'
    },
    {
      question: 'What does Leslie claim she broke when she fell down the pit?',
      answer: 'her clavicle',
      a: 'her leg',
      b: 'her hip',
      c: 'her ankle',
      d: 'her clavicle',
      show: 'Parks & Rec'
    },
    {
      question: 'Where is Tom actually from?',
      answer: 'South Carolina',
      a: 'South Carolina',
      b: 'Kentucky',
      c: 'Ohio',
      d: 'Missouri',
      show: 'Parks & Rec'
    },
    {
      question: 'What does Leslie equate building her first park to?',
      answer: 'Her Hoover Dam',
      a: 'Her Eiffel Tower',
      b: 'Her Central Park',
      c: 'Her Hoover Dam',
      d: 'Her Panama Canal',
      show: 'Parks & Rec'
    },
    {
      question: 'What does Leslie hear when she is being yelled at?',
      answer: 'people caring at her',
      a: 'small babies crying',
      b: 'a government that needs to change',
      c: 'people caring at her',
      d: 'the voices of past women in politics',
      show: 'Parks & Rec'
    },
    {
      question: 'Which fruit does Ron secretly like?',
      answer: 'plums',
      a: 'peaches',
      b: 'pears',
      c: 'plums',
      d: 'pineapples',
      show: 'Parks & Rec'
    },
    {
      question: 'What inappropriate nickname did Jessica Wicks give Ben?',
      answer: 'Sugar Butt',
      a: 'Honey Bun',
      b: 'Sugar Butt',
      c: 'Cutie Pie',
      d: 'Baby Boy',
      show: 'Parks & Rec'
    },
    {
      question: "Ron's birthday is during which season?",
      answer: 'spring',
      a: 'autumn',
      b: 'winter',
      c: 'spring',
      d: 'summer',
      show: 'Parks & Rec'
    },
    {
      question: 'What kind of car was Jean-Ralphio hit by?',
      answer: 'Lexus',
      a: 'Porsche',
      b: 'Cadillac',
      c: 'Lincoln',
      d: 'Lexus',
      show: 'Parks & Rec'
    },
    {
      question: 'Which of these animals does Leslie NOT call Ann?',
      answer: 'river otter',
      a: 'musk ox',
      b: 'river otter',
      c: 'sunfish',
      d: 'unicorn',
      show: 'Parks & Rec'
    },
    {
      question: "Which classic children's character does Jess write fan fiction about?",
      answer: 'Nancy Drew',
      a: 'Ramona Quimby',
      b: 'Curious George',
      c: 'Nancy Drew',
      d: 'The Hardy Boys',
      show: 'New Girl'
    },
    {
      question: 'What ex-boyfriend did Jess break up with prior to moving in at the loft?',
      answer: 'Spencer',
      a: 'Russell',
      b: 'Spencer',
      c: 'Sam',
      d: 'Paul',
      show: 'New Girl'
    },
    {
      question: 'Who moved out of the loft in season one only to return two years later?',
      answer: 'Coach',
      a: 'Nick',
      b: 'Winston',
      c: 'Coach',
      d: 'Schmidt',
      show: 'New Girl'
    },
    {
      question: "Who is Jess's best friend?",
      answer: 'Cece',
      a: 'Cece',
      b: 'Aly',
      c: 'Reagan',
      d: 'Abby',
      show: 'New Girl'
    },
    {
      question: 'What does Jess do for a living?',
      answer: 'Teacher',
      a: 'Meteorologist',
      b: 'Veterinarian',
      c: 'Teacher',
      d: 'Nurse',
      show: 'New Girl'
    },
    {
      question: 'What history based drinking game do Jess and her friends play?',
      answer: 'True American',
      a: 'Where in the World is Samuel Adams',
      b: 'JFK FDR',
      c: 'Historic Blackout',
      d: 'True American',
      show: 'New Girl'
    },
    {
      question: 'What is the name of the cat Winston stole from an ex-girlfriend?',
      answer: 'Ferguson',
      a: 'Ferguson',
      b: 'Clarissa',
      c: 'Sabrina',
      d: 'Mr.Tibbs',
      show: 'New Girl'
    },
    {
      question: 'On what holiday does Jess initially invite Paul over for dinner?',
      answer: 'Thanksgiving',
      a: 'Easter',
      b: 'Christmas',
      c: 'Thanksgiving',
      d: 'Yom Kippur',
      show: 'New Girl'
    },
    {
      question: 'What niche instrument does Jess teach to delinquent students?',
      answer: 'Handbell',
      a: 'Lute',
      b: 'Musical saw',
      c: 'Glockenspiel',
      d: 'Handbell',
      show: 'New Girl'
    },
    {
      question: 'What specialty perfume does Schmidt create for Cece?',
      answer: 'Cecelia Number 5',
      a: 'Coco Parekh',
      b: "Schmidt's Secret Sauce",
      c: 'Cecelia Number 5',
      d: 'Love Juice',
      show: 'New Girl'
    },
    {
      question: 'Who does Jess believe is an Asian version of her?',
      answer: 'Jenn',
      a: 'Jackie',
      b: 'Jenn',
      c: 'Jules',
      d: 'Jun',
      show: 'New Girl'
    },
    {
      question: 'Which ex-girlfriend did Nick consider leaving the loft to live with?',
      answer: 'Caroline',
      a: 'Kim',
      b: 'Reagan',
      c: 'Chloe',
      d: 'Caroline',
      show: 'New Girl'
    },
    {
      question: 'What quiet Asian man often offers Nick silently brilliant advice?',
      answer: 'Tran',
      a: 'Ming',
      b: 'Confucius',
      c: 'Tran',
      d: 'Master Roshi',
      show: 'New Girl'
    },
    {
      question: 'Who does Cece data between flings with Schmidt?',
      answer: 'Robby',
      a: 'Tully',
      b: 'Bob',
      c: 'Sam',
      d: 'Robby',
      show: 'New Girl'
    },
    {
      question: 'What does Nick name his first novel',
      answer: 'Z is for Zombie',
      a: 'Slave to the Grave',
      b: 'Loft of the Living Dead',
      c: 'Brains for Breakfast',
      d: 'Z is for Zombie',
      show: 'New Girl'
    },
    {
      question: 'What is the name of the cat Winston tries setting up with Ferguson?',
      answer: 'Fatty',
      a: 'Miss Kitty Fantastico',
      b: 'Fatty',
      c: 'Snuffles McGuffles',
      d: 'Purrfect Lady',
      show: 'New Girl'
    },
    {
      question: 'Which basketball team does Jess pretend to like so Coach will like her?',
      answer: 'Detroit Pistons',
      a: 'Detroit Pistons',
      b: 'Boston Celtics',
      c: 'Chicago Bulls',
      d: 'Sacramento Kings',
      show: 'New Girl'
    },
    {
      question: 'What does Nick call his alternate personality?',
      answer: 'Julius Pepperwood',
      a: 'Art Vandelay',
      b: 'Kal Vernsen',
      c: 'Julius Pepperwood',
      d: 'H.E. Pennypacker',
      show: 'New Girl'
    },
    {
      question: 'Who in the loft has secretly passed the bar exam?',
      answer: 'Nick',
      a: 'Schmidt',
      b: 'Jess',
      c: 'Coach',
      d: 'Nick',
      show: 'New Girl'
    },
    {
      question: "Who is Winston's partner turned fiance?",
      answer: 'Aly',
      a: 'Aly',
      b: 'Ruth',
      c: 'Gina',
      d: 'Elizabeth',
      show: 'New Girl'
    },
    {
      question: 'What Tinder-like dating app brings Jess little success?',
      answer: 'Dice',
      a: 'Buddiez',
      b: 'Datr',
      c: 'Dice',
      d: 'Spinsters',
      show: 'New Girl'
    },
    {
      question: 'Which school staff member was Winston terrified of as a child?',
      answer: 'Lunch ladies',
      a: 'Lunch ladies',
      b: 'Guidance counselors',
      c: 'Vice principals',
      d: 'Nurses',
      show: 'New Girl'
    },
    {
      question: "What iconic rock star's party do Jess and friends attend?",
      answer: 'Prince',
      a: 'Madonna',
      b: 'Prince',
      c: 'Taylor Swift',
      d: 'Paul McCartney',
      show: 'New Girl'
    },
    {
      question: "Who is Cece's intimidating Russian model friend?",
      answer: 'Nadia',
      a: 'Charmaine',
      b: 'Svetlana',
      c: 'Elaine',
      d: 'Nadia',
      show: 'New Girl'
    },
    {
      question: "What instrument does Coach's girlfriend May play?",
      answer: 'Cello',
      a: 'Violin',
      b: 'Piano',
      c: 'Cello',
      d: 'Harp',
      show: 'New Girl'
    },
    {
      question: 'Where does Coach move with May when leaving the loft for a second time?',
      answer: 'New York City',
      a: 'Philadelphia',
      b: 'Chicago',
      c: 'Dallas',
      d: 'New York City',
      show: 'New Girl'
    },
    {
      question: 'What costume is Nick wearing when conquering his fear of haunted houses?',
      answer: 'Bee Arthur',
      a: 'Joey Ramona Quimby',
      b: 'Bee Arthur',
      c: 'Alice in Chains',
      d: 'Edgar Allen Ho',
      show: 'New Girl'
    },
    {
      question: 'What character did Taylor Swift play in her big cameo?',
      answer: 'Elaine',
      a: 'Kim',
      b: 'Nadia',
      c: 'Elaine',
      d: 'Sadie',
      show: 'New Girl'
    },
    {
      question: 'Which animal do both Jess and Nick believe comes from outer space?',
      answer: 'Horses',
      a: 'Ducks',
      b: 'Horses',
      c: 'Cats',
      d: 'Cows',
      show: 'New Girl'
    },
    {
      question: 'Why is Jess absent from multiple episodes in season five?',
      answer: 'Jury Duty',
      a: 'She is in jail',
      b: 'She in on a work retreat',
      c: 'She is at space camp',
      d: 'Jury Duty',
      show: 'New Girl'
    },
    {
      question: "What is the name of Nick and Schmidt's bar?",
      answer: 'The Griffin',
      a: "Paddy's",
      b: "McLaren's",
      c: 'The Drunken Clam',
      d: 'The Griffin',
      show: 'New Girl'
    },
    {
      question: 'What fellow Fox sitcom did New Girl share a crossover with?',
      answer: 'Brooklyn Nine-Nine',
      a: 'The Mick',
      b: 'Brooklyn Nine-Nine',
      c: 'The Last Man on Earth',
      d: 'Son of Zorn',
      show: 'New Girl'
    },
    {
      question: "What does Schmidt want to call his and Cece's new home?",
      answer: 'Jaipur Aviv',
      a: 'Casa Schmidtce',
      b: 'Maison Parekh',
      c: 'Jaipur Aviv',
      d: "Daddy's House",
      show: 'New Girl'
    },
    {
      question: 'What undercover police persona does Winston invent to help Jess get a promotion?',
      answer: 'James Wonder',
      a: 'Ringo Harrison',
      b: 'James Wonder',
      c: 'Mickey Bowie',
      d: 'Dave Charles',
      show: 'New Girl'
    },
    {
      question: 'Who did Winstone marry in a disastrous prank gone wrong?',
      answer: 'Rhonda',
      a: 'Jodie',
      b: 'Rhonda',
      c: 'Priscilla',
      d: 'Sadie',
      show: 'New Girl'
    },
    {
      question: 'Who was the first study group member to get bitten in "Epidemiology"?',
      answer: 'Britta',
      a: 'Troy',
      b: 'Britta',
      c: 'Annie',
      d: 'Pierce',
      show: 'Community'
    },
    {
      question: 'What motto is on the Greendale school flag?',
      answer: 'E pluribus anus',
      a: 'Caveat scholasticus',
      b: 'Semper pigmentum globus',
      c: 'E pluribus anus',
      d: 'Carpe vinum',
      show: 'Community'
    },
    {
      question: 'Who does the librarian choose to go to the dance with in "Early 21st Century Romanticism"?',
      answer: 'Troy',
      a: 'Abed',
      b: 'Troy',
      c: 'Pierce',
      d: 'Jeff',
      show: 'Community'
    },
    {
      question: 'Who sabotaged the yam project in "Lupin Urology"?',
      answer: 'Fat Neil',
      a: 'Garrett',
      b: 'Quendra',
      c: 'Todd',
      d: 'Fat Neil',
      show: 'Community'
    },
    {
      question: "What is Star-Burns' real name?",
      answer: 'Alex',
      a: 'Andrew',
      b: 'Brian',
      c: 'Dave',
      d: 'Alex',
      show: 'Community'
    },
    {
      question: 'Finish the quote: "To me, religion is like ____. I see the appeal, and I would never take it away from anyone, but I would also never stand in line for it."',
      answer: 'Paul Rudd',
      a: 'Chris Pratt',
      b: 'Kevin Hart',
      c: 'Paul Rudd',
      d: 'Mark Wahlberg',
      show: 'Community'
    },
    {
      question: 'What do Troy and Abed have in their apartment to make it fancy?',
      answer: 'Toilet olives',
      a: 'Sparkling water',
      b: 'Toilet olives',
      c: 'Cloth napkins',
      d: 'Chocolate cigars',
      show: 'Community'
    },
    {
      question: 'Who was the first first study group member shot in "Modern Warfare"?',
      answer: 'Troy',
      a: 'Annie',
      b: 'Shirley',
      c: 'Troy',
      d: 'Pierce',
      show: 'Community'
    },
    {
      question: "Where does Annie's fake ID say she is from in 'Mixology Certification'?",
      answer: 'Corpus Christi',
      a: 'Little Rock',
      b: 'Houston',
      c: 'Corpus Christi',
      d: 'Fort Worth',
      show: 'Community'
    },
    {
      question: 'Who took the pen in "Cooperative Calligraphy"?',
      answer: "Annie's boobs",
      a: 'Magnitude',
      b: 'Star Burns',
      c: "Annie's boobs",
      d: 'Chang',
      show: 'Community'
    },
    {
      question: 'Where did Terry live when pursuing a college education?',
      answer: 'Japan',
      a: 'Austrailia',
      b: 'Sweden',
      c: 'Alaska',
      d: 'Japan',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What hidden talent did Terry have?',
      answer: 'artistic talent',
      a: 'magical talent',
      b: 'comical talent',
      c: 'musical talent',
      d: 'artistic talent',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Which member of the squad likes to stay in the office rather than the line of fire?',
      answer: 'Terry',
      a: 'Terry',
      b: 'Jake',
      c: 'Amy',
      d: 'Rosa',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Who is the jokester of the precinct?',
      answer: 'Jake',
      a: 'Gina',
      b: 'Raymond',
      c: 'Jake',
      d: 'Terry',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: "What is Jake's favorite movie?",
      answer: 'Die Hard',
      a: 'Casablanca',
      b: 'The Terminator',
      c: 'Rocky',
      d: 'Die Hard',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: "What happened at Jake and Amy's wedding in Season Five?",
      answer: 'There was a bomb threat',
      a: 'There was an earthquake',
      b: 'There was an objection',
      c: 'There was a bomb threat',
      d: 'There was an injury',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Who plays the role of Gina Linetti?',
      answer: 'Chelsea Peretti',
      a: 'Jessica Biel',
      b: 'Emma Stone',
      c: 'Chelsea Peretti',
      d: 'Reese Witherspoon',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What number is the precinct in the show?',
      answer: '99th',
      a: '10th',
      b: '78th',
      c: '20th',
      d: '99th',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What other show shares the same producer with Brooklyn Nine-Nine?',
      answer: 'Parks & Rec',
      a: 'New Girl',
      b: 'The Office',
      c: 'Community',
      d: 'Parks & Rec',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What did Charles receive after being shot?',
      answer: 'NYPD Medal for Valor',
      a: 'NYPD Medal for Valor',
      b: 'Commendation Integrity',
      c: 'Meritorious Police Duty',
      d: 'Excellent Police Duty',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Where was Charles adopted son from?',
      answer: 'Latvia',
      a: 'Thailand',
      b: 'Latvia',
      c: 'Ukraine',
      d: 'India',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: "What is Gina's job in the precinct?",
      answer: 'Administrator',
      a: 'Detective',
      b: 'Commander',
      c: 'Guard',
      d: 'Administrator',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Who does Amy get married to?',
      answer: 'Jake',
      a: 'Raymond',
      b: 'Charles',
      c: 'Jake',
      d: 'Marcus',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Which member of the precinct had their car stolen?',
      answer: 'Raymond',
      a: 'Amy',
      b: 'Gina',
      c: 'Raymond',
      d: 'Charles',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Who held Thanksgiving for everyone at the precinct?',
      answer: 'Amy',
      a: 'Amy',
      b: 'Charles',
      c: 'Terry',
      d: 'Raymond',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'How many brothers does Amy have?',
      answer: 'seven',
      a: 'one',
      b: 'ten',
      c: 'seven',
      d: 'twelve',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Who is hit by a bus in Season Four?',
      answer: 'Gina',
      a: 'Charles',
      b: 'Jake',
      c: 'Gina',
      d: 'Rosa',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What was "giggle pig"?',
      answer: 'a drug',
      a: 'a joke',
      b: 'a song',
      c: 'a drug',
      d: 'a person',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Which two members of the squad had their parents marry each other?',
      answer: 'Charles and Gina',
      a: 'Jake and Amy',
      b: 'Rosa and Raymond',
      c: 'Terry and Michael',
      d: 'Charles and Gina',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What actor plays the role of Jake Peralta?',
      answer: 'Andy Samberg',
      a: 'Chelsea Peretti',
      b: 'Melissa Fumero',
      c: 'Andy Samberg',
      d: 'Terry Crews',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Which of the following people have guest starred on the show?',
      answer: 'Adam Sandler',
      a: 'Jim Carrey',
      b: 'Tom Cruise',
      c: 'Katy Perry',
      d: 'Adam Sandler',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Where are Jake & Raymond relocated to at the end of Season 3?',
      answer: 'Florida',
      a: 'England',
      b: 'Russia',
      c: 'Canada',
      d: 'Florida',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Who is the Pontiac Bandit?',
      answer: 'Doug Judy',
      a: 'Gina',
      b: 'Hitchcock',
      c: 'Scully',
      d: 'Doug Judy',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What are Jake and Rosa found guilty of in Season 4?',
      answer: 'robbery',
      a: 'robbery',
      b: 'vandalism',
      c: 'murder',
      d: 'arson',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What did Adrian and Rosa almost do in Season 4?',
      answer: 'get married',
      a: 'move away',
      b: 'get married',
      c: 'quit their job',
      d: 'nothing',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What type of business did Charles have in Season 5?',
      answer: 'a food truck',
      a: 'a law firm',
      b: 'a clothing store',
      c: 'a convenience store',
      d: 'a food truck',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'Which occasion is always celebrated at the Precinct?',
      answer: 'Halloween',
      a: 'Christmas',
      b: 'Easter',
      c: 'Halloween',
      d: "New Year's Eve",
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What rank was Amy promoted to in Season 5?',
      answer: 'Sergeant',
      a: 'Sergeant',
      b: 'Detective',
      c: 'Captain',
      d: 'Lieutenant',
      show: 'Brooklyn Nine-Nine'
    },
    {
      question: 'What does Michael pretend to fire Pam over in Season 1?',
      answer: 'stealing post-it notes',
      a: 'taking his umbrella',
      b: 'stealing post-it notes',
      c: 'not answering phone',
      d: 'wearing her glasses',
      show: 'The Office'
    },
    {
      question: "What is Pam's favorite flavor of yogurt?",
      answer: 'mixed berry',
      a: 'vanilla',
      b: 'strawberry',
      c: 'peach',
      d: 'mixed berry',
      show: 'The Office'
    },
    {
      question: "What's Phyllis's maiden name?",
      answer: 'Lapin',
      a: 'Vance',
      b: 'Lapin',
      c: 'Lanpin',
      d: 'Vincent',
      show: 'The Office'
    },
    {
      question: 'What does Kevin suggest Dwight put in his gun holster?',
      answer: 'a banana',
      a: 'a cell phone',
      b: 'a toy gun',
      c: 'a banana',
      d: 'a pair of tongs',
      show: 'The Office'
    },
    {
      question: 'What did Michael say everyone called Phyllis back in high school?',
      answer: 'Easy Rider',
      a: 'Aunt Jemima',
      b: 'Phyll',
      c: 'Filly',
      d: 'Easy Rider',
      show: 'The Office'
    },
    {
      question: 'What kind of Sandwich does Michael have a dream about?',
      answer: 'peanut butter & tunafish',
      a: 'peanut butter & tunafish',
      b: 'tunafish & tartar sauce',
      c: 'tunafish & jelly',
      d: 'peanut butter & tartar sauce',
      show: 'The Office'
    },
    {
      question: 'What does Michael like to drink while watching Glee?',
      answer: 'a glass of sangria',
      a: 'scotch and splenda',
      b: 'a beer',
      c: 'a glass of sangria',
      d: 'chocolate milk',
      show: 'The Office'
    },
    {
      question: 'What game does Michael say he plays every night before bed?',
      answer: 'Who would you do?',
      a: 'Counting sheep',
      b: 'Who would you do?',
      c: 'Desert Island',
      d: 'Would you rather?',
      show: 'The Office'
    },
    {
      question: 'What did Kevin buy for himself when he got himself for Secret Santa?',
      answer: 'a foot bath',
      a: 'a foot massager',
      b: 'a foot bath',
      c: 'cookies',
      d: 'an iPod',
      show: 'The Office'
    },
    {
      question: "What's Stanley's morning 3 by 5?",
      answer: 'iced tea, 3 sugars, 5 creams',
      a: 'iced coffee, 3 sugars, 5 creams',
      b: 'iced tea, 3 sugars, 5 creams',
      c: 'coffee, 3 creams, 5 sugars',
      d: 'tea, 3 creams, 5 sugars',
      show: 'The Office'
    },
    {
      question: "What's the name of Dwight's porcupine?",
      answer: 'Henrietta',
      a: 'Heather',
      b: 'Henry',
      c: 'Hillary',
      d: 'Henrietta',
      show: 'The Office'
    },
    {
      question: "What is in Michael's thermos during morning deliveries for the Michael Scott Paper Compamy?",
      answer: 'milk and sugar',
      a: 'milk and sugar',
      b: 'cream and sugar',
      c: 'coffee and sugar',
      d: 'red bull and cream',
      show: 'The Office'
    },
    {
      question: "What brand is Michael wearing on the day he accidentally wear's a woman's suit?",
      answer: 'MISSsterious',
      a: 'Sassypants',
      b: 'Misstery',
      c: 'PowHERsuitz',
      d: 'MISSsterious',
      show: 'The Office'
    },
    {
      question: "Andy: I'm in this weird, flirty, nebulous thing with this ____ of mine, and it's a total mind effer",
      answer: 'cousin',
      a: 'friend',
      b: 'step sister',
      c: 'cousin',
      d: 'neighbor',
      show: 'The Office'
    },
    {
      question: 'Who does Michael wear on his head during the activity on diversity day?',
      answer: 'Martin Luther King Jr.',
      a: 'Colin Powell',
      b: 'Ghandi',
      c: 'Caesar Chavez',
      d: 'Martin Luther King Jr.',
      show: 'The Office'
    },
    {
      question: 'What does Michael actually order at Hooters after saying: "I will have the chicken breast, hold the chicken"?',
      answer: 'gourmet hotdog',
      a: 'cheeseburger',
      b: 'gourmet hotdog',
      c: 'wings',
      d: 'corndog',
      show: 'The Office'
    },
    {
      question: 'What does Michael make a ton of for him and Pam on the morning of the first day of the Michael Scott Paper Company?',
      answer: 'french toast',
      a: 'waffles',
      b: 'pancakes',
      c: 'crepes',
      d: 'french toast',
      show: 'The Office'
    },
    {
      question: 'When Phyllis suggests Michael go out with her friend, what is one of the questions he asks about her?',
      answer: 'could we share a rowboat?',
      a: 'what is her shoe size?',
      b: 'is she pretty?',
      c: 'does she like to eat for fun?',
      d: 'could we share a rowboat?',
      show: 'The Office'
    },
    {
      question: 'What secret signal do Dwight and Michael agree on using for a sale?',
      answer: 'licking your lips',
      a: 'raising your eyebrows',
      b: 'licking your lips',
      c: 'coughing loudly',
      d: 'winking',
      show: 'The Office'
    },
    {
      question: 'Stanley says to Michael: "Nobody likes that stuff except for you", to what is he referring?',
      answer: 'white chocolate bark',
      a: 'peppermint chocolate bark',
      b: 'milk chocolate bark',
      c: 'dark chocolate bark',
      d: 'white chocolate bark',
      show: 'The Office'
    },
    {
      question: 'As opposed to a whistle, what does Angela use as a rape deterrent?',
      answer: 'rape flute',
      a: 'pepper spray',
      b: 'blow horn',
      c: 'a gun',
      d: 'rape flute',
      show: 'The Office'
    },
    {
      question: "After going to Donna's husband's baseball game with Andy, what does Michael take from the game back to the office?",
      answer: 'a bag of orange slices',
      a: 'a bag of orange slices',
      b: 'a baseball',
      c: 'a glove',
      d: 'a bat',
      show: 'The Office'
    },
    {
      question: 'What does Michael eat instead of ice cream because they do not have any?',
      answer: 'mayo and olives',
      a: 'mustard and pickles',
      b: 'ketchup and chocolate chips',
      c: 'mayo and olives',
      d: 'relish and blueberries',
      show: 'The Office'
    },
    {
      question: "On what social media site does Creed say that Michael's nephew is trashing them relentlessy?",
      answer: 'Twitter',
      a: 'Facebook',
      b: 'Reddit',
      c: 'Twitter',
      d: 'Instagram',
      show: 'The Office'
    },
    {
      question: "Why does Creed follow Michael's nephew on Twitter?",
      answer: 'because he does not talk about Betty White',
      a: 'because he does not talk about Betty White',
      b: 'because he talks about Betty White',
      c: 'because Betty White follows him too',
      d: 'because the latter follows Betty White',
      show: 'The Office'
    },
    {
      question: "Dwight and Robert California's son agree what is the scariest animal?",
      answer: 'box jellyfish',
      a: 'black bear',
      b: 'shark',
      c: 'honey badger',
      d: 'box jellyfish',
      show: 'The Office'
    },
    {
      question: "What kind of sauce does Kevin ask for when being force fed broccoli as part of his New Year's Resolution?",
      answer: 'hollandaise',
      a: 'ketchup',
      b: 'chocolate',
      c: 'cheese whiz',
      d: 'hollandaise',
      show: 'The Office'
    },
    {
      question: 'What acronym does Creed come up with during his brief reign as manager?',
      answer: 'boboddy',
      a: 'noboddy',
      b: 'boboddy',
      c: 'dundder',
      d: 'creedit',
      show: 'The Office'
    },
    {
      question: '"____, your teeth called. Your breath stinks. Boom, roasted"',
      answer: 'Creed',
      a: 'Toby',
      b: 'Kevin',
      c: 'Creed',
      d: 'Meredith',
      show: 'The Office'
    },
    {
      question: "Which Toy Story character is Holly's doll that Michael throws in the trash and pours coffee on?",
      answer: 'Woody',
      a: 'Woody',
      b: 'Buzz',
      c: 'Bo Peep',
      d: 'Jessie',
      show: 'The Office'
    },
    {
      question: 'Aside from Jim, who in the office has an obvious crush on Pam?',
      answer: 'Toby',
      a: 'Ryan',
      b: 'Roy',
      c: 'Andy',
      d: 'Toby',
      show: 'The Office'
    },
    {
      question: 'What does Dwight stop Michael from eating in the woods?',
      answer: 'mushrooms',
      a: 'berries',
      b: 'mushrooms',
      c: 'bird egg',
      d: 'squirrel',
      show: 'The Office'
    },
    {
      question: 'What does Andy pose as during the lunch with the insurance salesman whom they suspect to be in the mob?',
      answer: 'a mechanic',
      a: 'a police officer',
      b: 'a plumber',
      c: 'a yakuza',
      d: 'a mechanic',
      show: 'The Office'
    },
    {
      question: 'Jim sends an urgent message back to Dwight posing as Dwight from the future, warning him that something in the office was poisoned. What was it?',
      answer: 'the coffee',
      a: 'the donuts',
      b: 'the coffee',
      c: 'the water',
      d: 'the muffins',
      show: 'The Office'
    },
    {
      question: "What does Michael's girlfriend, Carol, dress up as to Kelly's Diwali party?",
      answer: 'a cheerleader',
      a: 'a nurse',
      b: 'a realtor',
      c: 'a cheerleader',
      d: 'a princess',
      show: 'The Office'
    },
    {
      question: "What is Michael and Jan's safe word if things go too far?",
      answer: "foliage",
      a: 'bonfire',
      b: 'sublime',
      c: 'candles',
      d: 'foliage',
      show: 'The Office'
    },
    {
      question: 'What does Michael sleep on instead of the bed because Jan has "space issues"?',
      answer: 'a bench',
      a: 'a couch',
      b: 'a bench',
      c: 'a dog bed',
      d: 'the floor',
      show: 'The Office'
    },
    {
      question: "Jim prints out Dwight's Dunder Mifflin ID with an incorrect middle name. What is it?",
      answer: 'Fart',
      a: 'Fart',
      b: 'Dork',
      c: 'Idiot',
      d: 'Poop',
      show: 'The Office'
    },
    {
      question: 'For his audition for Sweeny Todd, Michael acts out an episode from what TV show?',
      answer: 'Law & Order',
      a: 'Lost',
      b: 'Threat Level: Midnight',
      c: 'Glee',
      d: 'Law & Order',
      show: 'The Office'
    },
    {
      question: "What is Angela's favorite Christmas song?",
      answer: 'Little Drummer Boy',
      a: 'O Come Let Us Adore Him',
      b: 'Silent Night',
      c: 'Little Drummer Boy',
      d: 'Hark! The Herald Angels Sing',
      show: 'The Office'
    },
    {
      question: "How much did Michael's plasma TV cost?",
      answer: '$200',
      a: '$150',
      b: '$200',
      c: '$250',
      d: '$300',
      show: 'The Office'
    }
  ];

  constructor() { }

  getQuestions() {
    console.log(this.questions);
  }
}
