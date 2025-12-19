
import images from "./images";

const services = [
  {
    category: "Graphic & Print Design",
    icon: "fa-palette",
    items: [
      { title: "Flyer Design", price: "400 – 2,000 RWF", img: images["../assets/flyer.jpeg"] },
      { title: "Business Cards", price: "150 – 8,000 RWF", img: images["../assets/card.png"] },
      { title: "Greeting Cards", price: "from 1,200 RWF", img: images["../assets/greet.png"] },
      { title: "Banners", price: "8,500 – 20,000 RWF", img: images["../assets/banner.png"] },
      { title: "Booklet Printing", price: "from 3,000 RWF", img: images["../assets/book.jpeg"] },
      { title: "Posters", price: "from 3,500 RWF", img: images["../assets/poster.jpeg"] },
      { title: "Pull-Up Banners", price: "from 80,000 RWF", img: images["../assets/pull.png"] },
      { title: "Display Boards", price: "from 15,000 RWF", img: images["../assets/display.jpg"] },
      { title: "Light Box Advertising", price: "from 180,000 RWF", img: images["../assets/Board.jpeg"] }
    ]
  },

  {
    category: "Branding & Promotional",
    icon: "fa-bullhorn",
    items: [
      { title: "T-Shirt Printing", price: "from 6,500 RWF", img: images["../assets/t.png"] },
      { title: "Custom Mugs", price: "from 5,500 RWF", img: images["../assets/printi.png"] },
      { title: "Acrylic Board Signs", price: "from 24,000 RWF", img: images["../assets/sign.jpg"] },
      { title: "Vinyl Banners", price: "from 14,040 RWF", img: images["../assets/vnyl.jpg"] },
      { title: "Car Branding / Magnets", price: "from 5,762 RWF", img: images["../assets/car.jpg"] },
      { title: "Window Decals", price: "from 15,000 RWF", img: images["../assets/window.jpg"] }
    ]
  },

  {
    category: "Digital & Creative Design",
    icon: "fa-laptop",
    items: [
      { title: "Logo & Brand Identity", price: "from 80,000 RWF", img: images["../assets/logod.png"] },
      { title: "Social Media Graphics", price: "from 50,000 RWF", img: images["../assets/social.jpeg"] },
      { title: "Infographic Design", price: "from 80,000 RWF", img: images["../assets/info.jpg"] },
      { title: "Packaging Design", price: "from 100,000 RWF", img: images["../assets/box.jpg"] }
    ]
  },

  {
    category: "Web Development 🇷🇼",
    icon: "fa-code",
    items: [
      { title: "Business Website", price: "300k – 600k RWF", img: images["../assets/business.png"] },
      { title: "Corporate Website", price: "700k – 1.2M RWF", img: images["../assets/org.png"] },
      { title: "E-Commerce Website", price: "800k – 2M RWF", img: images["../assets/commerce.png"] },
      { title: "Personal Portfolio", price: "from 150k RWF", img: images["../assets/personal.png"] },
      { title: "Blog & Media Website", price: "350k – 800k RWF", img: images["../assets/blog.png"] }
    ]
  },

  {
    category: "Microsoft Office Services",
    icon: "fa-file-word",
    items: [
      { title: "Microsoft Word Documents", price: "from 10,000 RWF", img: images["../assets/docs.jpg"] },
      { title: "Microsoft Excel Spreadsheets", price: "from 15,000 RWF", img: images["../assets/micro.png"] },
      { title: "PowerPoint Presentations", price: "from 20,000 RWF", img: images["../assets/point.png"] },
      { title: "Reports & Data Entry", price: "Negotiable", img: images["../assets/report.jpg"] }
    ]
  },

  {
    category: "Photography & Media",
    icon: "fa-camera",
    items: [
      { title: "Event Photography", price: "from 150,000 RWF", img: images["../assets/events.png"] },
      { title: "Product Photography", price: "from 100,000 RWF", img: images["../assets/produ.png"] },
      { title: "Portrait Photography", price: "from 80,000 RWF", img: images["../assets/protrait.png"] }
    ]
  }
];

export default services;