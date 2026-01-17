import images from "../data/images";
import ServiceDetailPage from "../components/ServiceDetailPage";
const services = [
  {
    category: "Digital Innovation Center",
    icon: "fa-desktop",
    items: [
      { 
        title: "Cyber Cafe & High-Speed Internet", 
        price: "from 1,000 RWF / 1h", 
        img: images["../assets/cyber.jpeg"],
        description: "Access lightning-fast, reliable internet in our modern, secure co-working space. Ideal for remote work, research, or handling essential online services (Irembo, RRA, RSSB) efficiently."
      },
      { 
        title: "Photocopying, Scanning & Printing", 
        price: "from 300 - 5,000 RWF", 
        img: images["../assets/printer_hp.jpg"],
        description: "High-volume, professional-grade digital printing, sharp photocopying, and efficient document scanning. We also offer professional binding and laminating services to give your documents a polished finish."
      },
      { 
        title: "Social Media & Digital Marketing", 
        price: "from 5,000 - 20,000 RWF", 
        img: images["../assets/social.jpeg"],
        description: "Amplify your reach and engage your target audience. We design targeted campaigns for Facebook, Instagram, LinkedIn, and TikTok to boost your brand visibility and drive measurable customer traffic."
      },
      { 
        title: "Video Editing & Production", 
        price: "from 50,000 - 20,000 RWF", 
        img: images["../assets/camera_pro.jpg"],
        description: "Transform your raw footage into compelling stories. We specialize in professional video editing for corporate events, promotional ads, YouTube content, and short films using industry-standard software."
      }
    ]
  },

  {
    category: "Web Development",
    icon: "fa-code",
    items: [
      { 
        title: "Business Website Design", 
        price: "300k – 600k RWF", 
        img: images["../assets/business.png"],
        description: "Establish your essential online presence with a fast, mobile-friendly website that clearly showcases your services, location, and contact information. Get found by local customers instantly."
      },
      { 
        title: "Corporate Website Development", 
        price: "700k – 1.2M RWF", 
        img: images["../assets/org.png"],
        description: "Build a robust, secure, and professional digital headquarters for your larger organization. Features include secure login areas, advanced content management, and seamless integration with existing systems."
      },
      { 
        title: "E-Commerce Website Solutions", 
        price: "800k – 2M RWF", 
        img: images["../assets/commerce.png"],
        description: "Open your 24/7 online store. We build scalable e-commerce platforms with integrated payment gateways (Mobile Money, Cards), inventory management, and a seamless checkout experience."
      },
      { 
        title: "Personal Portfolio Websites", 
        price: "from 150k RWF", 
        img: images["../assets/personal.png"],
        description: "Showcase your skills and past work with a sleek, custom portfolio site. The perfect tool for job seekers, freelancers, and artists to stand out from the competition."
      },
      { 
        title: "Blog & Media Website Creation", 
        price: "350k – 800k RWF", 
        img: images["../assets/blog.png"],
        description: "Launch your voice or news channel with a dynamic, easy-to-manage media website. Optimized for content delivery and audience engagement."
      },
       { 
        title: "Domain Hosting & SEO Services", 
        price: "50k – 200k RWF", 
        img: images["../assets/host.jpeg"],
        description: "Secure your brand's domain name and host your site on our reliable, high-performance servers. Our basic SEO services help ensure your business ranks higher on Google searches."
      }
    ]
  },

  {
    category: "Graphic & Print Design",
    icon: "fa-palette",
    items: [
       { 
        title: "Content Creation Services", 
        price: "from 80,000 RWF", 
        img: images["../assets/content.jpeg"],
        description: "Visually appealing content (graphics, short videos, infographics) created specifically for your social media channels to capture attention and increase engagement."
      },
      { 
        title: "Flyer Design & Printing", 
        price: "500 – 2,000 RWF", 
        img: images["../assets/flyer.jpeg"],
        description: "Eye-catching flyer designs optimized for print and digital distribution. Perfect for promoting events, special offers, or new business launches."
      },
      { 
        title: "Business Cards Design & Print", 
        price: "150 – 8,000 RWF", 
        img: images["../assets/card.png"],
        description: "Professional business card design that makes a lasting impression. Various paper stocks and finishes available for a premium feel."
      },
      { 
        title: "Greeting Cards (Custom)", 
        price: "from 1,200 RWF", 
        img: images["../assets/greet.png"],
        description: "Personalized greeting cards for corporate holidays, special events, or personal use. Custom designs tailored to your message."
      },
      { 
        title: "Large Format Banners", 
        price: "8,500 – 20,000 RWF", 
        img: images["../assets/banner.png"],
        description: "Durable, high-quality banners for events, roadside advertising, or storefront promotion. Designed to withstand the elements and maximize visibility."
      },
      { 
        title: "Booklet Printing & Design", 
        price: "from 3,000 RWF", 
        img: images["../assets/book.jpeg"],
        description: "Professional design and printing for brochures, catalogs, programs, and annual reports. Crisp color printing and various binding options available."
      },
      { 
        title: "Posters (A4, A3, Large)", 
        price: "from 3,500 RWF", 
        img: images["../assets/poster.jpeg"],
        description: "High-resolution poster printing services for academic presentations, promotions, or decor. Fast turnaround guaranteed."
      },
      { 
        title: "Pull-Up Banners (Roll-ups)", 
        price: "from 80,000 RWF", 
        img: images["../assets/pull.png"],
        description: "Portable and impactful marketing tools for trade shows, conferences, and receptions. Includes durable stand and carry case."
      },
      { 
        title: "Display Boards & Signage", 
        price: "from 15,000 RWF", 
        img: images["../assets/display.jpg"],
        description: "Rigid display boards for permanent signage, directional markers, or presentations. Made with high-quality, long-lasting materials."
      },
      { 
        title: "Light Box Advertising", 
        price: "from 180,000 RWF", 
        img: images["../assets/Board.jpeg"],
        description: "Illuminated signage solutions that capture attention 24/7. Ideal for retail stores, restaurants, and high-traffic areas."
      }
    ]
  },

  {
    category: "Branding & Promotional",
    icon: "fa-bullhorn",
    items: [
      { 
        title: "T-Shirt Printing (Custom)", 
        price: "from 6,500 RWF", 
        img: images["../assets/t.png"],
        description: "Custom T-shirt branding for corporate uniforms, events, or merchandise. High-quality screen printing and heat press options available."
      },
      { 
        title: "Custom Mugs & Merchandise", 
        price: "from 5,500 RWF", 
        img: images["../assets/printi.png"],
        description: "Branded mugs, pens, and other promotional items perfect for corporate giveaways and gifts that keep your brand visible daily."
      },
      { 
        title: "Acrylic Board Signs", 
        price: "from 24,000 RWF", 
        img: images["../assets/sign.jpg"],
        description: "Elegant and modern acrylic signage perfect for office lobbies, reception areas, and professional establishments. Provides a sleek, high-end finish."
      },
      { 
        title: "Vinyl Banners", 
        price: "from 14,040 RWF", 
        img: images["../assets/vnyl.jpg"],
        description: "Versatile vinyl banners suitable for indoor and outdoor use. Weather-resistant and customizable to any size requirement for maximum impact."
      },
      { 
        title: "Car Branding / Magnets", 
        price: "from 5,762 RWF", 
        img: images["../assets/car.jpg"],
        description: "Turn your vehicle into a moving billboard. Professional car branding and customizable vehicle magnets for flexible advertising."
      },
      { 
        title: "Window Decals & Graphics", 
        price: "from 15,000 RWF", 
        img: images["../assets/window.jpg"],
        description: "Transform plain windows into powerful advertising space or add privacy with custom frosted or full-color decals."
      }
    ]
  },
  {
    category: "Digital & Creative Design",
    icon: "fa-laptop",
    items: [
      { 
        title: "Logo & Brand Identity Design", 
        price: "from 80,000 RWF", 
        img: images["../assets/logod.png"],
        description: "We create unique, memorable logos and comprehensive brand guidelines that capture the essence of your business and help you connect with your ideal customers."
      },
      { 
        title: "Social Media Graphics Packages", 
        price: "from 50,000 RWF", 
        img: images["../assets/social.jpeg"],
        description: "Custom graphic design packages for consistent and professional social media feeds. Includes templates for posts, stories, and cover photos."
      },
      { 
        title: "Infographic Design", 
        price: "from 80,000 RWF", 
        img: images["../assets/info.jpg"],
        description: "Visually represent complex data or information in easy-to-understand and shareable infographics, perfect for reports, presentations, and educational content."
      },
      { 
        title: "Packaging Design", 
        price: "from 100,000 RWF", 
        img: images["../assets/box.jpg"],
        description: "Innovative and attractive packaging designs that protect your product and attract customers on the shelf. Stand out in a crowded market."
      }
    ]
  },
  {
    category: "Microsoft Office Services & Training",
    icon: "fa-file-word",
    items: [
      { 
        title: "Microsoft Word Document Formatting", 
        price: "from 10,000 RWF", 
        img: images["../assets/docs.jpg"],
        description: "Professional formatting for reports, CVs, and academic papers. Ensure your documents are clean, compliant with standards, and easy to read."
      },
      { 
        title: "Microsoft Excel Spreadsheets & Data", 
        price: "from 15,000 RWF", 
        img: images["../assets/micro.png"],
        description: "Expert assistance with Excel spreadsheet creation, data entry, formula implementation, and data visualization (charts/graphs) for better business insights."
      },
      { 
        title: "PowerPoint Presentations Design", 
        price: "from 20,000 RWF", 
        img: images["../assets/point.png"],
        description: "Create impactful, visually stunning presentations that hold your audience's attention. Perfect for business pitches, conferences, or academic defense."
      },
      { 
        title: "Reports & Data Entry Services", 
        price: "Negotiable", 
        img: images["../assets/report.jpg"],
        description: "Reliable and accurate data entry services and professional report compilation. We handle the busy work so you can focus on core business functions."
      }
    ]
  },

  {
    category: "Photography & Media Services",
    icon: "fa-camera",
    items: [
      { 
        title: "In-Studio Photoshoots", 
        price: "from 3,000 RWF", 
        img: images["../assets/shoot.jpeg"],
        description: "Affordable studio photoshoots for professional headshots, passport photos, or personal portraits. Quick editing included."
      },
      { 
        title: "Event Photography & Coverage", 
        price: "from 150,000 RWF", 
        img: images["../assets/events.png"],
        description: "Capture the moments that matter with professional event photography. Ideal for weddings, corporate functions, conferences, and celebrations."
      },
      { 
        title: "Product Photography", 
        price: "from 100,000 RWF", 
        img: images["../assets/produ.png"],
        description: "High-quality product images optimized for e-commerce websites and catalogs. Clear, compelling photos that boost sales."
      },
      { 
        title: "Portrait Photography", 
        price: "from 80,000 RWF", 
        img: images["../assets/protrait.png"],
        description: "Artistic portrait photography sessions tailored to individuals, families, or professionals. Preserve memories with beautiful imagery."
      }
    ]
  }
];

export default services;
