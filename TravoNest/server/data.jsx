import { useRef } from "react";

export function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }

const list = ([])

export default list;

/*
const list = shuffle([
    {
        id: 1,
        place: "Paris",
        image: "https://media.cntraveler.com/photos/63e6b44a71cc5230e7788d4f/4:3/w_4760,h_3570,c_limit/Paris_GettyImages-601762971.jpg",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vft1m1996a_CHDHE3Y0zKOW8Wq4Na6YOmQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQil6PQZPkfVFAf7BhtpmkJ1Z_m4L9hr0IU7Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s_leqysdhNQ4IozOk_v0qoiBg637Q84mDQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQbjlbr9-YgBtN0wzXGMphcG8x1sa7cf8dA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UlOozEl-tN8GApNsaSDLUx1TEsPMggYe7g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3A3i9RWQOZL41x9y_fgPMKepB__wSteS27g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrbhef8Zlaf7gr1TXMsg67uhopw-WoUOKXw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJ98bwiNzHYmxTmUxqPoN02GdS9GUSCr0HA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy3JEpqmiDEfWvMt-O0Yj_7jg22tml0VC1g&s"
        ],
        tourPlace: [
            "Eiffel Tower",
            "Louvre Museum",
            "Notre-Dame Cathedral"
        ],
        price: 18500,
        duration: "5 days",
        tag: [
            "City",
            "Cultural",
            "Cuple", 
        ],
        activities: [
            "Seine River Cruise",
            "Visit Montmartre"
        ],
        food: [
            "Croissants",
            "Macarons"
        ],
        location: "Île-de-France, France",
        provider: "Lord XteremO",
        startDate: "2024-07-01",
        mode:'outdoor',
        tagline: "Discover the heart of French elegance and artistry in Paris.",
        description: "Paris, the capital of France, is known as the City of Lights and the cultural heart of Europe. Renowned for its art, fashion, gastronomy, and culture, Paris offers an unforgettable experience. From the iconic Eiffel Tower to the world-class Louvre Museum and the majestic Notre-Dame Cathedral, Paris is a city that captivates with its history, architecture, and romance."
    },
    {
        id: 2,
        place: "New York",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdL9TLKM2ngtjf0zuUiuODqEc1jZkF5RZi6A&s",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFveQtS5XeSzCi5z7PTHO9aNynKq2rXM3FQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_0awKDRAhAY_vUcUaItgzqKcloyLKTFIFQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvoqpP6AgfukKTa_Y_2ya87_lg9PaBA0j6Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDsGoubYblSSvK7hg5eb82lJay8tf8fMwZA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaqJs6onJKG8Hznz3rlq9_pDV43wJaZYlrw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzt9f5NtpBmoCSAK4ccjFs_jaeFvMOFt-j3g&s"
        ],
        tourPlace: [
            "Statue of Liberty",
            "Central Park",
            "Times Square"
        ],
        price: 22200,
        duration: "7 days",
        tag: [
            "City",
        ],
        activities: [
            "Broadway Shows",
            "Empire State Building"
        ],
        food: [
            "New York Pizza",
            "Bagels"
        ],
        location: "New York, USA",
        provider: "Lord XteremO",
        startDate: "2024-07-03",
        mode:'outdoor',
        tagline: "Experience the pulse of America in New York City.",
        description: "New York City, often called the Big Apple, is one of the world's most vibrant cities. It is a global hub of finance, fashion, art, and entertainment. From the iconic Statue of Liberty to the bustling Times Square and the serene Central Park, New York offers a mix of culture, history, and modernity that attracts millions of visitors every year."
    },
    {
        id: 3,
        place: "Tokyo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnw5qJFedS0i_NoiyS4RFVItmcVPZw6C7bg&s",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7ZC3Ztndjub9y79CDecUCr51moNf-Wn7iQ&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfX004GGlai86bUK3uBjNv4gaJEfcazyXJkg&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5zfDAmYsAGawmwntKPr0NM2OoqUzOIQ7Pg&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2n5ClzsCGCbDAcMZ4qowTN0CNRR4skHlGA&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9LOE2H9MfhTJU79frVQoc8uGGZnC1Tcf1A&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUzl2BrOOwQ5V6y1g4XEoWt6Sqkz1t1BJqQ&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvztPRlHxB7OjgowzPIXDuZOmYmhSZ4Cel6Q&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgc0mTwipLC41BtPxwVadbpVr3adT9CRVOw&s", 
        ],
        tourPlace: [
            "Tokyo Tower",
            "Senso-ji Temple",
            "Shibuya Crossing"
        ],
        price: 25900,
        duration: "6 days",
        tag: [
            "City",
            "Tech Hub",
            "Cuple"
        ],
        activities: [
            "Harajuku Shopping",
            "Sumo Wrestling"
        ],
        food: [
            "Sushi",
            "Ramen"
        ],
        location: "Tokyo, Japan",
        provider: "Lord XteremO",
        startDate: "2024-07-05",
        mode:'outdoor',
        tagline: "Explore the blend of ancient tradition and futuristic innovation in Tokyo.",
        description: "Tokyo, Japan's capital, is a city where traditional culture meets cutting-edge technology. From the iconic Tokyo Tower to the historic Senso-ji Temple and the lively Shibuya Crossing, Tokyo offers a dynamic mix of sights and experiences. Known for its culinary delights like sushi and ramen, Tokyo is a must-visit for anyone fascinated by culture, cuisine, and innovation."
    },
    {
        id: 4,
        place: "Sydney",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLJ2ARN4Ui5NjeKDWLSC0LXtHugi0fCXKRQ&s",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrWJPlNsSsxoL2GfTpUtjHLexenJnLjO-xg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNDrFDKZvjUIXKZYghY_dRWfgZnQG1vuZLw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTif8b7bkd3WAMWaafPL1SwD1AV0GJFgOG5oQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6xQ5-ZWoxYT4A7ew5k23dNOtoE77IHaEmg&s0",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTO9VzlYY65evWSB_Xg49m1RvSchMPvIuQVg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4O5llX45_xPGdaBGaJ2uh6sE17sDajDwRg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4SdtQ6XrlRVPK_3mjuS8XQHVgvE2IytibA&s"
        ],
        tourPlace: [
            "Sydney Opera House",
            "Bondi Beach",
            "Sydney Harbour Bridge"
        ],
        price: 14800,
        duration: "4 days",
        tag: [
            "City",
            "Australian Gem"
        ],
        activities: [
            "Blue Mountains Tour",
            "Taronga Zoo"
        ],
        food: [
            "Pavlova",
            "Tim Tams"
        ],
        location: "New South Wales, Australia",
        provider: "Lord XteremO",
        startDate: "2024-07-07",
        mode:'outdoor',
        tagline: "Discover the stunning beauty and vibrant culture of Sydney.",
        description: "Sydney, Australia's largest city, is famous for its iconic landmarks and vibrant culture. From the architectural marvel of the Sydney Opera House to the picturesque Bondi Beach and the majestic Sydney Harbour Bridge, Sydney offers breathtaking views and diverse experiences. Known for its laid-back lifestyle and delicious cuisine, Sydney is a destination that promises unforgettable memories."
    },
    {
        id: 5,
        place: "Rome",
        image: "https://tse1.mm.bing.net/th?id=OIP.jvk1_bSwc9eg5M-uKksknAHaE8&pid=Api&P=0&h=180",
        gallery: [],
        tourPlace: [
            "Colosseum",
            "Vatican City",
            "Trevi Fountain"
        ],
        price: 20300,
        duration: "5 days",
        tag: [
            "City",
            "Hills",
            "Mountain"
        ],
        activities: [
            "Roman Forum",
            "Pizza and Gelato Tour"
        ],
        food: [
            "Carbonara",
            "Gelato"
        ],
        location: "Lazio, Italy",
        provider: "Lord XteremO",
        startDate: "2024-07-09",
        mode:'outdoor',
        tagline: "Experience the grandeur of ancient history in the Eternal City of Rome.",
        description: "Rome, Italy's capital, is a city where ancient history and modern life blend seamlessly. Home to iconic landmarks like the Colosseum, Vatican City, and Trevi Fountain, Rome offers a journey through time. With its rich history, delicious cuisine, and vibrant culture, Rome is a city that captivates visitors with its charm and grandeur."
    },
    {
        id: 6,
        place: "London",
        image: "https://tse2.mm.bing.net/th?id=OIP.CPxEgyAWAGBLUQjgFAfOmAHaE6&pid=Api&P=0&h=180",
        gallery: [],
        tourPlace: [
            "Big Ben",
            "Buckingham Palace",
            "Tower Bridge"
        ],
        price: 19700,
        duration: "6 days",
        tag: [
            "City",
            "Historic"
        ],
        activities: [
            "West End Theatre",
            "British Museum"
        ],
        food: [
            "Fish and Chips",
            "Afternoon Tea"
        ],
        location: "London, United Kingdom",
        provider: "Lord XteremO",
        startDate: "2024-07-11",
        mode:'outdoor',
        tagline: "Explore the historic charm and cultural richness of London.",
        description: "London, the capital of England and the United Kingdom, is a city steeped in history and culture. From the iconic Big Ben to the majestic Buckingham Palace and the picturesque Tower Bridge, London offers a blend of tradition and modernity. Known for its theatre scene, museums, and diverse cuisine, London is a city that promises a memorable experience for every visitor."
    },
    {
        id: 7,
        place: "Darjeeling",
        image: "https://media.easemytrip.com/media/Blog/India/636933592279983958/6369335922799839582y8mG2.jpg",
        gallery : [
            
            "https://media.istockphoto.com/id/187306825/photo/train-passing-a-garden-and-entering-fog.webp?b=1&s=170667a&w=0&k=20&c=ssvKQ9pvCcdL5Nd6QI0J6XnQKdA4KGytlrkp6OSG-6k=",
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201702/darjeeling_647_021517111436_0.jpg?size=690:388",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H6fiK7AaB9NSX3KpOLQCPSAdcNUQajtIjg&s",
            "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/12/05/Photos/darjeelingtea-kU9--621x414@LiveMint.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3bhYFDMWREqYehQDenKpzetB6tIucREjhF96M4laTIZV68uWmD2q2dF_NivAa1WTmhs&usqp=CAU",
            "https://images.moneycontrol.com/static-mcnews/2022/06/My-project-1.jpg?impolicy=website&width=1600&height=900",
            "https://www.elginhotels.com/wp-content/uploads/2020/03/Himalayan-Zoological-Park-01.jpeg.webp",
            "https://assets.telegraphindia.com/telegraph/2022/Feb/1644083190_snow.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqObAIYj4C8pwU9uxb1h2AfqJ8fD6FmsgMmg&s"
        
        ],
        tourPlace: [
            "Darjeeling Mall Road",
            "Rock Garden",
            "Tiger Hill",
            "Padnmaja Naidu Zoological Garden",
            "Toy Train",
            "Ghum HillStation",
            "Visit Tea Garden",
        ],
        price: 17500,
        duration: "5 days",
        tag: [
            "City",
            "Cultural",
            "Cuple",
            "Mountain", 
        ],
        activities: [
            "Witness Sunrise from Tiger Hill point",
            "Visit Padnmaja Naidu Zoological Garden",
            "Ride Toytrain",
            "Visit Mall Road for shopping"
        ],
        food: [
            "Thukpa",
            "Traditional Nepali Thalies",
            "Darjeling Tea",
            "Momos",
            "Naga Cuisine"
        ],
        location: "Darjeeling, West Bengal, India",
        provider: "Uddyan Travels",
        startDate: "2024-07-01",
        mode:'indoor',
        tagline: "Welcome to the mesmerizing world of Darjeeling, where every moment is a canvas painted with the colors of Himalayan magic",
        description: "Darjeeling is a city in WestBengal, India that is famous throughout the world for the tea it grows and the great view of the Kanchenjunga range of mountains that it offers. It is also known for its richness in cultural & natural heritage and the famous toy train that has been declared a UN heritage."
    },
    {
        id: 8,
        place: "Maldives",
        image: "https://media.nomadicmatt.com/2023/maldivesbudget1.jpg",
        gallery: [
            "https://travellingbee.in/wp-content/uploads/2024/04/image-1.jpeg",
            "https://i0.wp.com/jyoshankar.com/wp-content/uploads/2020/02/jyoshankar_travelblogger_maldives_hideawaybeachresortandspa_luxuryresorts_9.jpg?fit=2000%2C1333&ssl=1",
            "https://www.travelandleisure.com/thmb/6rAXu2YdK34P4bZmmkC6KRTm92c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mother-son-maldives-vacation-MALDIVEMISS0820-aecf8960655243e8b0ef311082a92729.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYnMLFtM1cYfJUGxXlNbwWQRHyicN7Snyfg&s",
            "https://miro.medium.com/v2/resize:fit:868/1*sFNqxKEaQCQY9TVPbJPg7w.png",
            "https://ichef.bbci.co.uk/images/ic/480xn/p0hnbk2b.jpg.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3KkU_FMMjVZX2-9W8EfcAzDmH-0VKx7YNQ&s",
            "https://static.wanderon.in/wp-content/uploads/2023/10/gondola-ride-in-autumn-in-kashmir-2023-10-18t174214.790-min.png",
            "https://worldjourneys.co.nz/wp-content/uploads/Country-Maldives-1568x1116.jpg"
        ],
        tourPlace: [
            "Malé",
            "Maafushi",
            "Banana Reef"
        ],
        price: 56000,
        duration: "7 days",
        tag: [
            "Beach",
            "Cultural",
            "Cuple", 
        ],
        activities: [
            "Snorkeling",
            "Scuba Diving"
        ],
        food: [
            "Mas Huni",
            "Fihunu Mas"
        ],
        location: "Southwest of Sri Lanka and India, Indian Ocean",
        provider: "Rahul Mondal",
        startDate: "2024-07-05",
        mode:'outdoor',
        tagline: "Maldives: Your Slice of Paradise Awaits.",
        description: "Discover the Maldives, a breathtaking archipelago in the Indian Ocean renowned for its stunning white-sand beaches, crystal-clear turquoise waters, and vibrant marine life. This tropical paradise offers a perfect blend of relaxation and adventure, with luxurious overwater bungalows, world-class diving spots, and unforgettable sunsets."
    },
    {
        id: 9,
        place: "Melbourne",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3prfpvkUkfec4htLT6V7bsAPrezCgRU9WjA&s",
        gallery: [
            "https://i.natgeofe.com/n/dbf3c75f-ed6a-4455-a307-4ff18f7a55c3/Melbourne5.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Melbourne_skyline_sor.jpg/1200px-Melbourne_skyline_sor.jpg",
            "https://cdn.britannica.com/09/93309-050-DCAC1FDB/bridge-Yarra-River-Melbourne.jpg",
            "https://i.guim.co.uk/img/media/ee824db0a747b84410f5721cdd22b11f3783d5f1/271_438_4016_2409/master/4016.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=4cefce7ba765cee3943c4b1d42e77199",
            "https://content.r9cdn.net/rimg/dimg/e7/e2/a092e93b-city-13998-1641eaba8a3.jpg?width=440&height=220&xhint=1016&yhint=1024&crop=true",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rE__u0DNqYQt5MjBua3EEjV16qz71Dr91A&s",
            "https://www.aeccglobal.com/images/easyblog_articles/112/8-Optimized-shutterstock_274387127.jpg",
            "https://res.klook.com/image/upload/Mobile/City/z7jrge0fwxuxu4gu0lqs.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyds1ogk0wTj_pihX4Zy39mmF3IuOf_o5buA&s"
        ],
        tourPlace: [
            "Federation Square",
            "Melbourne Cricket Ground (MCG)",
            "Southbank and Arts Centre Melbourne"
        ],
        price: 45000,
        duration: "7 days",
        tag: [
            "City",
            "Cultural" 
        ],
        activities: [
            "Visit Art Galleries and Museums",
            "Watch cricket in MCG"
        ],
        food: [
            "Melbourne Coffee",
            "Meat Pie"
        ],
        location: "Melbourne, Australia",
        provider: "Rahul Mondal",
        startDate: "2024-07-08",
        mode:'outdoor',
        tagline: "Melbourne: Where Culture and Creativity Meet",
        description: "Discover Melbourne, Australia's vibrant and cosmopolitan heart. Renowned for its rich cultural tapestry, Melbourne offers an eclectic mix of world-class dining, cutting-edge art, and stunning natural landscapes. Wander through its iconic laneways adorned with vibrant street art, indulge in its famed coffee culture, and explore the diverse neighborhoods that reflect the city’s multicultural heritage. ."
    },
    {
        id: 10,
        place: "Sweden",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWApBZcLtI8JMNHV2fzzJcTy-SOmA2C9NLGA&s",
        gallery: [
            "https://i.natgeofe.com/k/6785336d-6acf-4d80-aed0-bb82a39f70f6/sweden-northern-lights.jpg?wp=1&w=1084.125&h=609",
            "https://static.toiimg.com/photo/60018902/.jpg",
            "https://hips.hearstapps.com/hmg-prod/images/stockholm-sweden-scenic-summer-sunset-view-with-royalty-free-image-1713459498.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25gQSuWKYEcdtF7caRmiPVOH4xYmwf6Y_vdkffTVIkI4YaHXSwKjXdthj9EJVqNfzWL4&usqp=CAU",
            "https://imageio.forbes.com/specials-images/imageserve/1154990774/Colorful-houses-on-Stortorget-square-in-Old-town--Stockholm--Sweden-/960x0.jpg?format=jpg&width=960",
            "https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2FVisitSweden-LurSkrgrd_CMSTemplate_hKEkd86.jpg&w=1980&q=75",
            "https://i0.wp.com/travelawaits.com/wp-content/uploads/2021/04/colorful-houses-in-stockholmf78eb5.jpg?resize=1024%2C683&ssl=1",
            "https://s30876.pcdn.co/wp-content/uploads/Sweden3-e1634207530977-1170x630.jpg.optimal.jpg",
            "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1431942320v2.jpg"
        ],
        tourPlace: [
            "Stockholm",
            "Gothenburg",
            "Lapland"
        ],
        price: 85000,
        duration: "5 days",
        tag: [
            "City",
            "Cuple",
            "Beach",
            "Mountain"
        ],
        activities: [
            "Hiking and Trekking",
            "Skiing and Winter Sports"
        ],
        food: [
            "Meatballs (Köttbullar)",
            "Gravlax"
        ],
        location: "Sweden, Europe",
        provider: "Rahul Mondal",
        startDate: "2024-07-12",
        mode:'outdoor',
        tagline: "Sweden: Where Nature Meets Innovation",
        description: "Discover Sweden, a country of stunning contrasts where vibrant cities pulse with innovation against a backdrop of pristine natural landscapes. From the Northern Lights dancing over Lapland to the historic charm of Stockholm's cobblestone streets, Sweden invites you to explore its unique blend of modernity and timeless tradition."
    },
    {
        id: 11,
        place: "Switzerland",
        image: "https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg",
        gallery: [
            "https://cdn.britannica.com/34/102134-050-6DE65DE1/La-Gruyere-district-Fribourg-canton-Switzerland.jpg",
            "https://cdn.britannica.com/49/20049-004-9BD606E2/Cliffs-Lauterbrunnen-Mittelland-Switzerland-region.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKw_ADOa9__hHqn63hYBN63jq_0JbD6SbwA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXdnxvknAgddvlnWg2zXbRy-qfLJToUpmVQ&s",
            "https://i.natgeofe.com/k/e1d98f03-0625-4947-9099-7e0997376cb5/switzerland-curling_2x1.jpg",
            "https://static.toiimg.com/photo/msid-89946341,width-96,height-65.cms",
            "https://i.insider.com/5899df478275e823008b4848?width=800&format=jpeg&auto=webp",
            "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/11/20202626/lauterbrunnen.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcqpacN_778bY5pG2pYPtzBzmW7zDyZ2BeQ&s"
        ],
        tourPlace: [
            "Zurich",
            "Geneva",
            "Lucerne"
        ],
        price: 90000,
        duration: "5 days",
        tag: [
            "Mountain",
            "Cuple"
        ],
        activities: [
            "Paragliding and Skydiving",
            "Skiing and Snowboarding"
        ],
        food: [
            "Fondue",
            "Rösti"
        ],
        location: "Switzerland, Europe",
        provider: "Rahul Mondal",
        startDate: "2024-07-23",
        mode:'outdoor',
        tagline: "Switzerland: Timeless Beauty, Modern Precision",
        description: "Explore Switzerland, where majestic alpine peaks overlook pristine lakes and picturesque villages. Renowned for its precision craftsmanship and commitment to quality, Switzerland offers a blend of traditional charm and cutting-edge innovation."
    },
    {
        id: 12,
        place: "South Africa",
        image: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4b50e023-2a4b-4f99-8cb4-6d383858a385.jpg?crop=1564%2C880%2C318%2C0",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQl7kP2TO0E0Tm0O7Hq_Oq021MgbqKap8kg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Es-OjRNxFvT7MHEYNV8aYzQ2d2VfyRxjtQ&s",
            "https://afar.brightspotcdn.com/dims4/default/7c2bdd0/2147483647/strip/true/crop/1440x720+0+22/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F86%2Fba%2F808972c94fb289b1cc2819f4defb%2Fsouthafrica-marcreation-unsplash.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDAWo--G-ju4XslDrcLXksco7E8utx2iQz1VQjtp149GwNBmRbmlqMwIyrO8bs8_K2w&usqp=CAU",
            "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
            "https://media.nomadicmatt.com/2023/southafricasafety.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWKkNpcrwvOajwGvNBCmZlNqArYfgBWf8gA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN3julLEYIR4Fl3BI10LiM9m3gRRXPMqfxA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSfer5eO37kskE7nHWhWs8NRXG9j7rDtCeQ&s"
        ],
        tourPlace: [
            "Addo Elephant National Park",
            "Hluhluwe-Imfolozi Park",
            "The Garden Route"
        ],
        price: 75000,
        duration: "5 days",
        tag: [
            "Mountain",
            "Cultural",
            "Offbeat"
        ],
        activities: [
            "Safari in Kruger National Park",
            "Whale Watching"
        ],
        food: [
            "Snoek Braai",
            "Bunny Chow"
        ],
        location: "South Africa, Africa",
        provider: "Rahul  mondal",
        startDate: "2024-07-30",
        mode:'outdoor',
        tagline: "South Africa: Where Diversity Thrives",
        description: "Explore the vibrant tapestry of South Africa, a land where diverse cultures, breathtaking landscapes, and rich wildlife converge. From the bustling city life of Johannesburg and Cape Town's iconic Table Mountain to the serene vineyards of Stellenbosch and the rugged beauty of the Drakensberg Mountains, South Africa captivates with its contrasts."
    },
    {
        id: 13,
        place: "Sundarbans",
        image: "https://d1u4oo4rb13yy8.cloudfront.net/article/70617-ehdnfcaloq-1507560954.jpg",   
        gallery : [
            
            "https://trippyigloo.com/static/falcon/img/stock/5bb2d94d04a28675b2b99da3/5fcf3aef04a286705264cb54/WEB_Bangabandhu_Safari-Park-Gazipur_Syed-Zakir-Hossain-_Tiger-census_Edited_28.07.2017.jpg",
            "https://wallpapercave.com/wp/wp2519762.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qtlfFWoCYuIBLNiwRs8opAMwLjT6uaa_z4_npziUkwlne29DFqwCUeMjGqM1NPBfA5w&usqp=CAU",
            "https://lh3.googleusercontent.com/proxy/GYx1lMHdKmJTs0-ZCHZNPio1Gp-ryULH0xE7oZsRDZrDniq009f6k9NAygsF_d6vA34AeYk1ybL69qddS_9WAH79c2XZramQtOnkyrRa19TYcs4juglYZTBeDQ",
            "https://assets-global.website-files.com/6094741aba31b56efe984fb1/60ae1baac0ebd54a76a891ab_DJI_0068.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-ifd9nvgoiuvMDzWig-_9u_R722pzBRN8M9bov-MKk9dUFHkBdbaBZxjvjg-6QQQjEM&usqp=CAU",
            "https://www.junglelore.com/sites/default/files/styles/tourslider/public/2022-08/bird_watching_tours_sunderbans_national_park.jpg?itok=d_FBJaeU"
        ],
        tourPlace: [
            "Sajnekhali Watch Tower",
            "Sundarban Bird Jungle ",
            "Sundarban delta Safari",
            "Sudhanyakhali Watch Tower",
            "Do-Banki Tiger Reserve Area",
            "sundarban national park"
    
        ],
        price: 6500,
        duration: "5 days",
        tag: [
            "Cultural",
            "Forest", 
        ],
        activities: [
            "Witness The Royal Bengal Tiger",
            "Visit Surdarban Bird Jungle",
            "Mangrove",
            "thrilling boat Safari through various rivers"
            
        ],
        food: [
            "Noksi Bori",
            "POsto bora",
            "Naru"
        ],
        location: "Sundarban, West Bengal, India",
        provider: "Travelvi UDAYAN ",
        startDate: "2024-07-01",
        mode:'indoor',
        tagline: "Welcome to the cluster of low-lying islands in the Bay of Bengal, spread across India and Bangladesh, famous for its unique mangrove forests natural magic",
        description:  "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India's Sundarbans World Heritage site inscribed in 1987.",
    },
    {
        id: 14,
        place: "Lakshadweep",
        image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/01/10130652/feature-1600x900.jpeg",   
        gallery : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5pVDWBXgt0K_PaYCMiFNdc9DITptDQl0Zg&s",
            "https://static.toiimg.com/photo/61628464.cms",
            "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images_additional/mmt/activities/m_Lakshadweep_Pitti_Bird_Sanctuary_1_l_662_1000.jpg",
            "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-for-Scuba-Diving-In-Lakshadweep_31st-Jan.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjUa5jQcJfsaI1yqKDYG_a-GkXlNkMFwvrQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0wdnDDq4g4CAZ0oVOphNou-x8-8yZKR42Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8KfHGUW8uPpZGoMu-xKWcC-H38-W8cM6Ng&s"
        ],
        tourPlace: [
            "Andretti",
            "Agatti",
            "Minicoy",
            "Kadmath",
            "Bitra Island",
            "Amini",
            "kavaratti"
        ],
        price: 69966,
        duration: "5 days",
        tag: [
            "Cuple",
            "Islands",
            "Beach" 
        ],
        activities: [
            "Snorkelling At Agatti Island",
            "Scuba Diving At Kalpeni Island",
            "Kite Surfing",
            "Sunbathing At Androth Island",
            "NightLife with Beers, Whiskey and Girls",
            "Go Fishing At Kadmat Island"
        ],
        food: [
            "Mus Kavaab",
            "Kulukki Sarbath",
            "Tuna Curry",
            "Kavaratti Biryani",
            "Adukku Pathiri"
        ],
        location: "Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India.",
        provider: "Travelvi UDAYAN",
        startDate: "2024-07-01",
        mode:'outdoor',
        tagline: "welcome to the Laxadwip",
        description: "Lakshadweep is an astonishing tourist place in India. A trip to Lakshadweep and its exotic islands are full of mind blowing scenic beauty and awe inspiring adventure. Now you know what all you can indulge in at these fabulous islands – don’t miss out on planning for a trip to the ethereal Lakshadweep soon!"
    },    
    {  id: 15,
        place: "Auckland",
        image: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",   
        gallery : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd1goK19ERSuOduRdaXoEGLJexizH7wqusVhxS2nLalmBvmNCW8jFXEnpOwB6uxeu7TU&usqp=CAU",
            "https://cdn.archilovers.com/projects/593ab6c2-a08a-4fb9-af2c-7d6d1e404178.jpg",
            "https://cdn.architecturenow.co.nz/site_media/media/cache/8c/1a/8c1a966a18aab1455ec2f275348be435.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfygS8hVWHJ0lRNAUkeoyJKE_EcFOFG8ZKw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAAqBNni8ifH1BXaicesIJOUgPc5k1_dCrg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_rHuoBr6ptoyuA9eBII4ZWLk2LlEVGiSoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ua-1v0vlBQlTfhyQhpuTbUEdKzL5Ezp_FQ&s",
            "https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-4779022/img-1713478337-2296-537531-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.JPG"
        ],
        tourPlace: [
            "sky Tower",
            "Auckland War Memorial Museum",
            "Auckland Art Gallery",
            "Auckland Zoo",
            "SEA LIFE Kelly Tarlton's Aquarium"
        ],
        price: 55500,
        duration: "5 days",
        tag: [
            "City",
            "Cultural",
            "Cuple"
        ],
        activities: [
            "visit The sky Tower",
            "visit Auckland War Memorial Museum",
            "explore Auckland Art Gallery",
            "visit Auckland Zoo",
            "visit SEA LIFE Kelly Tarlton's Aquarium"
        ],
        food: [
            "Hangi",
            "Fish and chips",
            "Whitebait",
            "Meat pie",
            "Lolly cake",
            "Pavlova",
            "Rewena bread",
            "Hokey pokey ice cream"
        ],
        location: "Lolal Land",
        provider: "Travelvi UDAYAN",
        startDate: "2024-07-01",
        mode:'outdoor',
        tagline: "clean, green and adventure at 100% Pure New Zealand nature destinations areas",
        description: " 'Auckland, the gathering place of people' is home to a third of the country's population and over a third of its GDP. One of the world's most diverse cities, with more than 180 ethnicitie", 
    },
    {   
        id: 16,
        place: "Bhutan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpOL0B_S_g5eDeY_n3WECqRiL-W328Zv1Rg&s",   
        gallery : [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1X36gV1eRmu7SZwVE2hDZiQwDNSIjnLmyTRY2iP23Q0PXzcD9zdgM34_8ZqAvsOf2sU&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPspRz6slwyLJd1vDE4eA5CILvW1CB736jfw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABn2uLI7VjtUKQfWm0sk4VPaoFQ_aGb9P-A&s",
                "https://www.swantour.com/blogs/wp-content/uploads/2017/10/trongsa-bhutan.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdQMYfpE-YhygqaJoWLD2-ovVWxQ_agKD3X-3jQojxJJnOqP_56Z2D3YC--cosfPUCSc&usqp=CAU",
                "https://scoutmytrip.com/wp-content/uploads/2019/08/1620px-Rinpung_Dzong_Bhutan_17-1536x1024.jpg",
                "https://scoutmytrip.com/wp-content/uploads/2019/08/Tibetan_Prayer_Technology_Cheli_La_Bhutan.jpg",
                "https://scoutmytrip.com/wp-content/uploads/2019/08/Dordenma.jpg",
                "https://scoutmytrip.com/wp-content/uploads/2019/08/1440px-Mount_Jomolhari_from_Bhutan_2009-10-11_b.jpg",
                "https://scoutmytrip.com/wp-content/uploads/2019/08/1624px-A_Takin_the_national_animal_of_Bhutan-1536x1021.jpg",
                "https://scoutmytrip.com/wp-content/uploads/2019/08/1440px-Punakha_3-74_suspension_bridge.jpg"
        ],
        tourPlace: [
          
            "National Museum of Bhutan",
            "Thimpu",
            "Kyichu Lhakhang",
            "National Memorial Chhorte",
            "Trongsa",
            " Rinpung Dzong"
        ],
        price: 48500,
        duration: "5 days",
        tag: [
            "City",
            "Cultural",
            "Forest"
        ],
        activities: [
            "Visit Punakha Dzong",
            "Hike The Tiger's Nest Monastery",
            "Check out Bhutan's longest suspension bridge",
            "Be in awe of Buddha Dordenma",
            "Visit Tashichho-Dzong"
        ],
        food: [
            "Noksi Bori",
            "POsto bora",
            "Naru"
        ],
        location: "North India",
        provider: "Travelvi UDAYAN ",
        startDate: "2024-07-01",
        mode:'indoor',
        tagline: "welcome to the Thunder Dragon Kingdom Bhutun",
        description: "Bhutan is the land of tradition, culture and virgin beauty. Bhutan tourism is reputed world-wide famous for its striking landscape, cultural spots, mesmerizing mountains, and the cool and crisp mountain air. From nature lovers to pilgrims to busy office goers to adventure-seeking teens, Bhutan has something to offer to each one of you."
    }
]);

export default list;
*/
