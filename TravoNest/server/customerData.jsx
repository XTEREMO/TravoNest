function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }

const customers = shuffle([
    {
        id: 1,
        customerName: "Arghya Adhikari",
        customerAge: 24,
        customerGender: "Male",
        customerProfilePhoto: "../res/profilePicy/Arghya_Adhikari.jpg",
        customerCoverPhoto:"../res/cover/Arghya_Adhikari.jpg",
        customerHistory: [
            "Goa",
            "New York",
            "Tokyo"
        ],
        customerPlace: "Los Angeles, USA",
        customerFeedback: "Great travel experiences! Well-organized tours.",
        customerImages: [
            "../res/gallary/CUST001_01.jpg",
            "../res/gallary/CUST001_02.jpg",
            "../res/gallary/CUST001_03.jpg",
            "../res/gallary/CUST001_04.jpg",
            "../res/gallary/CUST001_05.jpg",
            "../res/gallary/CUST001_06.jpg"
        ]
    },
    {
        id: 2,
        customerName: "Rahul Mandal",
        customerAge: 22,
        customerGender: "Male",
        customerProfilePhoto: "../res/profilePicy/Rahul_Mandal.jpeg",
        customerCoverPhoto:"../res/cover/Rahul_Mandal.jpg",
        customerHistory: [
            "Goa",
            "Rome",
            "London"
        ],
        customerPlace: "New York, USA",
        customerFeedback: "Amazing tours and great customer service!",
        customerImages: [
            "../res/gallary/CUST002_01.jpg",
            "../res/gallary/CUST002_02.jpg",
            "../res/gallary/CUST002_03.jpg",
            "../res/gallary/CUST002_04.jpg",
            "../res/gallary/CUST002_05.jpg",
            "../res/gallary/CUST002_06.jpg",
        ]
    }
]);


export default customers;