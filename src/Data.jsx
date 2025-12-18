const CLOUD =
  "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_400,h_300,c_fill,q_auto,f_auto";

const services = [
  {
    category: "Graphic & Print Design",
    icon: "fa-palette",
    items: [
      { title:"Flyer Design", price:"from 400 - 2,000 RWF", img:`${CLOUD}/graphics/flyer.jpg` },
      { title:"Business Cards", price:"from 150 - 8,000 RWF", img:`${CLOUD}/graphics/business-cards.jpg` },
      { title:"Greeting Card Printing", price:"from 1,200 RWF", img:`${CLOUD}/graphics/greeting-card.jpg` },
      { title:"Banner", price:"from 8,500 - 20,000 RWF", img:`${CLOUD}/graphics/banner.jpg` },
      { title:"Booklet Printing", price:"from 3,000 RWF", img:`${CLOUD}/graphics/booklet.jpg` },
      { title:"Posters", price:"from 3,500 RWF", img:`${CLOUD}/graphics/poster.jpg` },
      { title:"Pull Up Banners", price:"from 80,000 RWF", img:`${CLOUD}/graphics/pullup-banner.jpg` },
      { title:"Display Boards", price:"from 15,000 RWF", img:`${CLOUD}/graphics/display-board.jpg` },
      { title:"Light Box Advertising", price:"from 180,000 RWF", img:`${CLOUD}/graphics/lightbox.jpg` }
    ]
  },

  {
    category: "Branding & Promotional",
    icon: "fa-bullhorn",
    items: [
      { title:"T-Shirt Printing", price:"from 6,500 RWF", img:`${CLOUD}/branding/tshirt.jpg` },
      { title:"Custom Mugs", price:"from 5,500 RWF", img:`${CLOUD}/branding/mug.jpg` },
      { title:"Acrylic Board Signs", price:"from 24,000 RWF", img:`${CLOUD}/branding/acrylic-board.jpg` },
      { title:"Vinyl Banners", price:"from 14,040 RWF", img:`${CLOUD}/branding/vinyl-banner.jpg` },
      { title:"Car Magnets", price:"from 5,762 RWF", img:`${CLOUD}/branding/car-magnet.jpg` },
      { title:"Window Decals", price:"from 15,000 RWF", img:`${CLOUD}/branding/window-decals.jpg` }
    ]
  },

  {
    category: "Digital & Creative Design",
    icon: "fa-laptop",
    items: [
      { title:"Logo & Brand Identity Design", price:"from 80,000 RWF", img:`${CLOUD}/graphics/logo-branding.jpg` },
      { title:"Social Media Graphics", price:"from 50,000 RWF", img:`${CLOUD}/graphics/social-media.jpg` },
      { title:"Infographic Design", price:"from 80,000 RWF", img:`${CLOUD}/graphics/infographic.jpg` },
      { title:"Packaging Design", price:"from 100,000 RWF", img:`${CLOUD}/graphics/packaging.jpg` }
    ]
  },

  {
    category: "Web Development 🇷🇼",
    icon: "fa-code",
    items: [
      { title:"Basic Business Website", price:"300,000 – 600,000 RWF", img:`${CLOUD}/web/business-website.jpg` },
      { title:"Corporate Website", price:"700,000 – 1,200,000 RWF", img:`${CLOUD}/web/corporate-website.jpg` },
      { title:"E-Commerce Website", price:"800,000 – 2,000,000 RWF", img:`${CLOUD}/web/ecommerce.jpg` },
      { title:"Custom Web Application", price:"1,500,000+ RWF", img:`${CLOUD}/web/web-application.jpg` },
      { title:"Personal Portfolio", price:"150,000+ RWF", img:`${CLOUD}/web/portfolio.jpg` },
      { title:"Blog & Entertainment Web", price:"350,000 - 800,000 RWF", img:`${CLOUD}/web/blog.jpg` }
    ]
  },

  {
    category: "Microsoft Office Services",
    icon: "fa-file-word",
    items: [
      { title:"Microsoft Word Documents", price:"from 10,000 RWF", img:`${CLOUD}/office/word.jpg` },
      { title:"Microsoft Excel Spreadsheets", price:"from 15,000 RWF", img:`${CLOUD}/office/excel.jpg` },
      { title:"PowerPoint Presentations", price:"from 20,000 RWF", img:`${CLOUD}/office/powerpoint.jpg` },
      { title:"Data Entry & Reports", price:"Negotiable", img:`${CLOUD}/office/data-entry.jpg` }
    ]
  },

  {
    category: "Photography & Media",
    icon: "fa-camera",
    items: [
      { title:"Event Photography", price:"from 150,000 RWF", img:`${CLOUD}/photography/event.jpg` },
      { title:"Product Photography", price:"from 100,000 RWF", img:`${CLOUD}/photography/product.jpg` },
      { title:"Portrait Photography", price:"from 80,000 RWF", img:`${CLOUD}/photography/portrait.jpg` }
    ]
  }
];

export default services;