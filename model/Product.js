const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  categories: { type: String },
  price: { type: Number, required: true },
});

const brand1 = [
  {
    id: 1,
    title: "JBL - PartyBox 310 Portable Party Speaker - Black",
    desc: "Huge sound, dazzling lights and unbelievable power set this speaker apart from the crowd. The JBL PartyBox 310 packs a full party into a transportable, splashproof sound machine like no other. Turn up your favorite playlists anywhere, from get-togethers at home to dance parties on the beach. Bring big party vibes with 240 watts of JBL Pro Sound and a synced light show that grooves to the beat. Plug in and keep the fun going all night or wheel over to the campfire and take advantage of its impressive 18-hour battery life. Start a party with the JBL PartyBox 310.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426700_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 549.99,
  },
  {
    id: 2,
    title: "JBL - CHARGE5 Portable Waterproof Speaker with Powerbank - Black",
    desc: "Play and charge endlessly. Take the party with you no matter what the weather. The JBL Charge 5 speaker delivers bold JBL Original Pro Sound, with its optimized long excursion driver, separate tweeter and dual pumping JBL bass radiators. Up to 20 hours of playtime and a handy powerbank to keep your devices charged to keep the party going all night. Rain? Spilled drinks? Beach sand? The IP67 waterproof and dustproof Charge 5 survives whatever comes its way. Thanks to PartyBoost, you can connect multiple JBL PartyBoost-enabled speakers for a sound big enough for any crowd. With all-new colors inspired by the latest street fashion trends, it looks as great as it sounds",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454256_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 149.99,
  },
  {
    id: 3,
    title: "JBL - PartyBox On-The-Go Portable Party Speaker - Black",
    desc: "Take your party anywhere and sing everywhere. From beach parties to festivals, the JBL PartyBox On-The-Go lets you see, hear and feel the beat. Turn it up loud with 100 watts of powerful JBL Pro Sound, synched to a dazzling light show. Access your favorite tunes with Bluetooth, USB, AUX and TWS (True Wireless Stereo) connectivity, grab a friend and sing your hearts out with the JBL wireless mics, or use the instrument input to play along. With a bottle opener, padded shoulder strap, rechargeable battery and IPX4 splash-proof protection, the JBL PartyBox On-The-Go has everything you need to get the party started—and take it with you.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426699cv24d.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 299.99,
  },
  {
    id: 4,
    title: "JBL - PartyBox 110 Portable Party Speaker - Black",
    desc: "Bring a whole new dimension to any party with the unique dynamic LED lightrings, synced to the powerful sound and deep bass of the PartyBox 110. Take the partybox wherever you go with the splashproof design and plug in a guitar and mic for the ultimate immersive experience. With Bass Boost and loud, powerful JBL Original Pro Sound, your friends won't just hear the music, they'll feel it as 12 hours of playtime keeps the party rocking all day or night. Use the PartyBox app for total control as you stream your tunes wirelessly.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471418_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 399.99,
  },
  {
    id: 5,
    title: "JBL - Flip 5 Portable Bluetooth Speaker - Red",
    desc: "Listen to your favorite music with this JBL FLIP5 portable wireless speaker. The lightweight design lets you easily transport it from one location to another, while the waterproof construction resists everyday moisture. This JBL FLIP5 portable wireless speaker has Bluetooth pairing, which lets you stream music seamlessly from your smartphone.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356534_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 99.99,
  },
  {
    id: 6,
    title: "JBL - Pulse 4 Portable Bluetooth Speaker - Black",
    desc: "Get the party started with this JBL Pulse 4 portable Bluetooth speaker. The powerful 360-degree speaker array delivers impressively accurate audio, and built-in LEDs improve your listening experience with vivid light shows. This JBL Pulse 4 portable Bluetooth speaker offers up to 12 hours of listening per charge and has a waterproof chassis that stands up to spills and precipitation.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6378/6378520_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 249.99,
  },
  {
    id: 7,
    title: "JBL - Flip 5 Portable Bluetooth Speaker - White Steel",
    desc: "Enjoy powerful sound on the go with this JBL Flip 5 portable white speaker. Stream music wirelessly via Bluetooth-enabled devices with up to 12 hours of playtime and USB recharging capabilities to keep you celebrating all day. This JBL Flip 5 portable white speaker is IPX7 waterproof for use in rugged environments.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356536_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 99.99,
  },
  {
    id: 8,
    title: "JBL - GO3 Portable Waterproof Wireless Speaker - Black",
    desc: "JBL Go 3 features bold styling and rich JBL Pro Sound. With its new eye-catching edgy design, colorful fabrics and expressive details this a must-have accessory for your next outing. Your tunes will lift you up with JBL Pro Sound, it’s IP67 waterproof and dustproof so you can keep listening rain or shine, and with its integrated loop, you can carry it anywhere. Go 3 comes in completely new shades and color combinations inspired by current street fashion. JBL Go 3 looks as vivid as it sounds.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427076_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 29.99,
  },
  {
    id: 9,
    title: "JBL - Xtreme 2 Portable Bluetooth Speaker - Black",
    desc: "Enjoy powerful outdoor music with this waterproof JBL Xtreme 2 Bluetooth speaker. It has a rechargeable Li-ion battery that provides up to 15 hours of playing time, and its passive bass radiators give you deep, high-quality audio. This black portable JBL Xtreme 2 Bluetooth speaker connects up to two devices for more music source options.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213284_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 349.99,
  },
  {
    id: 10,
    title:
      "JBL - 2.1-Channel Soundbar with Wireless Subwoofer and Dolby Digital - Black",
    desc: "Elevate your cinematic experience with this 2.1-channel JBL Bar Deep Bass soundbar. The wireless subwoofer and set of tweeters fill your room with immersive audio, while Bluetooth connectivity lets you stream music wirelessly. This JBL Bar Deep Bass soundbar features a low-profile design for a contemporary look, and built-in Dolby Digital offers increased clarity.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395178_rd.jpg;maxHeight=640;maxWidth=550",
    categories: "Bluetooth & Wireless Speakers",
    price: 249.99,
  },
];
const brand2 = [
  {
    id: 11,
    title:
      "Bose - Headphones 700 Wireless Noise Cancelling Over-the-Ear Headphones - Triple Black",
    desc: "Bose Noise Cancelling Headphones 700 deliver everything you expect from Bluetooth headphones – and some things you never imagined possible. It’s no surprise PC Magazine called them “The best active noise cancellation you can buy.” Eleven levels of noise cancellation feature a range of options to choose from. You can totally eliminate distractions or minimize noise cancelling to hear everything around you. Or choose from nine other levels in between. Active noise cancelling technology in Bose Headphones 700 monitors the sounds around you and instantly cancels out unwanted noise to let your music shine through. At the same time, the acoustic space inside the earcups is maximized to give your music depth and detail. With these noise cancelling headphones, it’s not just your music that’s clear, so are your calls. The unrivaled microphone system uses a series of microphones to adapt in real time to noisy and windy environments so voices sound crystal clear on calls. Voice commands are also captured with unprecedented accuracy. The stunning new design of Bose Headphones 700 features a streamlined stainless-steel headband and a lightweight, comfortable fit that’s perfect for all-day listening. With these wireless headphones you get up to 20 hours of battery life and time-based power information per charge. Bose Headphones 700. The wireless headphones everyone is talking about.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6332/6332173_rd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 379.0,
  },
  {
    id: 12,
    title: "Bose - SoundLink II Wireless Over-the-Ear Headphones - White",
    desc: "Enjoy a better Bluetooth wireless experience with Bose SoundLink around- ear headphones II. Exclusive headphone technology delivers deep, immersive sound at any volume. SoundLink wireless Bluetooth headphones use the latest technology so you can easily connect to your mobile devices with seamless audio/video sync. And a dual microphone system rejects noise and wind, so you'll be heard loud and clear. Switch seamlessly between 2 Bluetooth devices, and stay connected to both. And intuitive touch controls give you simple command of your music and calls. The over ear headphone design features soft ear cushions and a contoured headband, they're lighter and more comfortable than other comparable wireless headphones so you can enjoy them all day long. Wear them almost anywhere, and experience uncompromised wireless performance. When you're done listening, you can fold them flat for storage in their compact matching case.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4331/4331857_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 199.0,
  },
  {
    id: 13,
    title:
      "Bose - QuietComfort 45 Wireless Noise Cancelling Over-the-Ear Headphones - Triple Black",
    desc: "The minute you put on Bose QuietComfort 45 Wireless Noise Cancelling Headphones, you feel it — the iconic quiet that allows you to concentrate on your music or work on your passion projects. Plus, with these wireless headphones, you can experience the comfort and crystal-clear sound that can only come from Bose. The soft, plush cushions of these Bose wireless headphones seal you in. Then you flip the switch and whoosh — the world fades. The music starts. It’s love at first listen. The original Bluetooth headphones are back, now with a best-in-class combination of noise cancelling performance and premium comfort. Plus proprietary technology for deep, clear sound, and adjustable EQ so you can tune your music to your liking. Bose QuietComfort 45 over-ear headphones. An icon reborn.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471291_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 329.0,
  },
  {
    id: 14,
    title:
      "Bose - QuietComfort Earbuds True Wireless Noise Cancelling In-Ear Earbuds - Triple Black",
    desc: "Better sound begins with better silence. That’s why Bose QuietComfort Earbuds are engineered with the world’s most effective noise cancelling and high-fidelity audio. Microphones inside and outside the earphones sense noise and react instantaneously to cancel the signal. Get rid of disruptions so you can turn up the music on your wireless earbuds and amplify whatever you’re most passionate about — from hiking or circuit training to coding or baking. And when you need to be more aware of your surroundings, minimize noise cancelling with a quick double tap, so you can walk down a busy street or listen for your boarding announcement. StayHear Max tips provide extra comfort and stability for an even better experience. Rule the Quiet with Bose QuietComfort Earbuds and get an exhilarating experience that’s tough to find in any other Bluetooth earbuds. The Bose QuietComfort Noise Cancelling Earbuds are available in Triple Black, Soapstone and limited-edition Sandstone or Stone Blue.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419203_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 199.0,
  },
  {
    id: 15,
    title:
      "Bose - Sleepbuds II — Soothing Sounds and Noise-masking Technology Designed for Better Sleep - White/Silver",
    desc: "Bose Sleepbuds II deliver relaxing sounds that help you fall asleep, and use Bose noise-masking technology so you stay asleep. Tiny, wireless Sleepbuds II are designed for comfort with sleep technology clinically proven to help you fall asleep faster. Sleepbuds II play content only from the Bose Sleep app, which gives you full control of the Sound Library and helps you personalize features. Discover tranquil tones and soothing sounds from nature. Or, use Bose noise-masking sounds to cover unwanted nighttime noise. Download your favorite sounds directly to Sleepbuds II, control volume, and set a personal wake-up alarm. Sleepbuds II feature proprietary eartips made of soft silicone for a comfortable, secure fit. Sleep on your back or side, or rollover during the night, they’ll stay put. Get up to ten hours of battery life from a single charge, enough for a full night’s sleep — and three additional charges from the portable case.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425583_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 249.0,
  },
  {
    id: 16,
    title: "Bose - Sport Earbuds True Wireless In-Ear Earbuds - Triple Black",
    desc: "Bose Sport Earbuds are true wireless earbuds engineered to produce clear and balanced sound in any listening environment. StayHear Max tips mold these wireless earbuds to your ears with soft silicone and won’t fall out, no matter how demanding your workout is. Bose Sport Earbuds go through rigorous quality testing for durability and they’re rated IPX4 - designed to resist moisture from sweat and weather. And instead of buttons, a capacitive touch interface lets you simply tap to play or pause music, answer calls, and more. With a battery life of up to five hours get ready to beat your personal best, again and again.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419302_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 149.0,
  },
  {
    id: 17,
    title:
      "Bose - Frames Tenor — Rectangular Bluetooth Audio Sunglasses - Black",
    desc: "Without sound, they’re just sunglasses. Thoughtfully refined and strikingly elegant, Bose Frames Tenor style feature a refined square frame and distinctive keyhole bridge, for those who crave a modern take on a classic style. Bose Open Ear Audio technology produces clear, lifelike sound, leaving you free to engage with the world around you while discreetly listening to music. Bose Frames also feature an advanced mic system that lets you make crystal clear calls, scratch-and-shatter-resistant polarized lenses and a rechargeable battery that plays for up to 5.5 hours. All this housed in a lightweight frame crafted from ultramodern materials for a luxurious look and feel.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420329_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 249.0,
  },
  {
    id: 18,
    title:
      "Bose - Frames Tempo – Sports Audio Sunglasses with Polarized Lenses - Black",
    desc: "Designed for sports. Engineered for sound. Bose Frames Tempo will take your audio game to the next level. With Bose Open Ear Audio, you get loud, deep, lifelike sound thanks to wafer-thin speakers hidden in the temples. It’s a jaw-dropping experience that leaves you free to engage with the world around you, all while discreetly listening to music. Performance doesn’t end with audio. Bose Frames Tempo is also designed for maximum comfort and durability with a lightweight nylon frame, sweat-and weather-resistance and durable, soft, silicone nose pads. Tempo gives you sound you expect from Bose with everything you need from sport sunglasses.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420331_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 249.0,
  },
  {
    id: 19,
    title:
      "Bose - QuietComfort 35 II Wireless Noise Cancelling Over-the-Ear Headphones - Black",
    desc: "Bose QuietComfort 35 II Wireless Noise Cancelling Headphones are over-ear headphones from Bose featuring world-class noise cancelling technology, and now they're optimized with Amazon Alexa and the Google Assistant. Enjoy balanced audio performance at any volume with volume-optimized EQ. And you can make or receive clear phone calls, even in loud environments with the noise reduction dual-microphone system in these Bluetooth headphones. Connect to your devices wirelessly with Bluetooth and NFC pairing, with voice prompts for easy Bluetooth pairing. Thanks to Amazon Alexa and the Google Assistant you can keep in touch, get answers and manage your day using just your voice with one-button access to the voice assistant of your choice. You can also access your phone's default virtual assistant, like Siri through your headphones. Together, they can create astonishing real-world experiences and fundamentally new ways to work, travel, exercise, learn, play, and more. Wear these comfortable headphones all day because they're built with premium materials. Listen to your wireless headphones for up to 20 hours of long battery life from a rechargeable lithium-ion battery. Keep listening without battery power by connecting the included audio cable. Unlock more features and access future updates through the Bose Connect app.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5876/5876115_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 299.0,
  },
  {
    id: 20,
    title: "Bose - SoundSport Wireless Sports In-Ear Earbuds - Black",
    desc: "With no wires in the way, Bose SoundSport Wireless Sports Earbuds keep you moving with powerful audio. Perfect for exercise and running with a sweat and weather resistant design and StayHear+ tips designed for comfort and stability. The Tile app makes your headphones easy to find if they ever go missing.",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5168/5168600_sd.jpg;maxHeight=640;maxWidth=550",
    categories: "Headphones",
    price: 129.0,
  },
];
// const Product1 = mongoose.model("Product", ProductSchema);
// for (let i = 0; i < brand1.length; i++) {
//   let p1 = new Product1(brand1[i]);
//   p1.save().then((res) => {
//     let productId = res._id;
//   });
// }

// const Product2 = mongoose.model("Product", ProductSchema);
// for (let i = 0; i < brand2.length; i++) {
//   let p1 = new Product2(brand2[i]);
//   p1.save().then((res) => {
//     let productId = res._id;
//   });
// }

module.exports = mongoose.model("Product", ProductSchema);
