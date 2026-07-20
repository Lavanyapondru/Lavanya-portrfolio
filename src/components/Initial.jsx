import { useEffect } from "react";

function Initial() {
  useEffect(()=>{
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('mobileNav');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
    // browser still follows href="#section"
  });
});

  })
  
    return ( 
        <div>
   
    <div className="App">
      <div className="container">
        <div className="row flex-nowrap">
          {/* Sidebar */}
          <div className="col-12 col-md-3 sidebar d-md-flex flex-column justify-content-between vh-100 sticky-top">
            <div>
              <h1 className="fw-bold mb-1">Lavanya Pondru</h1>
              <h6 className="text-light mb-3">
                Front-End Developer | Web Developer
              </h6>
              <p className=" small contentpara">
                “I craft responsive, user‑friendly websites that merge design
                with performance.”
              </p>

              <ul className="nav flex-column mt-4" id="sidebarNav">
                <li className="nav-item mb-2">
                  <a href="#about" className="nav-link fs-6">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#skills" className="nav-link fs-6">
                    Skills
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#experience" className="nav-link fs-6">
                    Experience
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#projects" className="nav-link fs-6">
                    Projects
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#contact" className="nav-link fs-6">
                    Contact
                  </a>
                  
                </li>
              </ul>
            </div>

            <div className="social-icons mt-5">
              <a
                href="mailto:pondrulavanya@gmail.com"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-envelope-fill"></i>
              </a>
               <a
                href="https://wa.me/919515618887"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-telephone-fill"></i>
              </a>
              <a
                href="https://github.com/Lavanyapondru"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/lavanya-pondru-b49a8b30b"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <a href="/Resume_Lavanya_Web developer.pdf" className="text-decoration-none mt-3" download >
            <button className="resume"><i className="bi bi-download"></i> Resume</button>
    
  </a>
          </div>
            


            {/* Top Navbar (mobile only) */}
  <nav className="navbar navbar-expand-md navbar-dark d-md-none fixed-top">
    <div className="container-fluid">
      {/* Left side: Name */}
      <a className="navbar-brand fw-bold" href="#about">Lavanya Pondru</a>

      {/* Right side: Hamburger */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible nav links */}
      <div className="collapse navbar-collapse" id="mobileNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link text-light" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link text-light" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link text-light" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link text-light" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link text-light" href="#contact">Contact</a></li>
        </ul>
        <div className="social-icons mt-2 mb-2 ms-5">
              <a
                href="mailto:pondrulavanya@gmail.com"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-envelope-fill"></i>
              </a>
               <a
                href="https://wa.me/919515618887"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-telephone-fill"></i>
              </a>
              <a
                href="https://github.com/Lavanyapondru"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/lavanya-pondru-b49a8b30b"
                className="me-3"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <a href="/Ms.Lavanya_Web developer.pdf" className="text-decoration-none mt-5 ms-3" download >
            <button className="resume"><i className="bi bi-download"></i> Resume</button>
    
  </a>
      </div>
    </div>
  </nav>


          {/* Content */}
          <div className="col-12 col-md-9 content px-5 py-1" id="scrollableContent"
  data-bs-spy="scroll"
  data-bs-target="#sidebarNav"
  data-bs-offset="0"
  tabIndex="0">
            <div className="container">
              {/* About Section */}
              <section id="about" className="mb-5">
                <h2 className="about mt-3">About Me</h2>
                <p className="">
                  Hi, I'm Lavanya — a passionate web developer with a strong
                  foundation in HTML, CSS, JavaScript, and React. As a fresher,
                  I bring fresh ideas, adaptability, and a drive to build
                  responsive, user‑friendly websites that make a real impact.
                </p>
                <p className="">
                  My journey is guided by curiosity and continuous learning. I
                  enjoy solving problems, refining designs, and creating clean,
                  efficient code that balances speed with quality. With an MCA
                  background, I combine technical knowledge with creativity to
                  deliver practical solutions.
                </p>
              </section>


                <section id="skills" className="mb-5">
                <h2>Technical Skills</h2>
                <div className="row align-items-center justify-content-center justify-column">
                  <div className="mt-1 mb-5">
                  <p className="">"Passionate about shaping responsive digital experiences, I merge creativity with modern web technologies to deliver clean, accessible, and performance‑driven solutions."</p>
                  <p className="lh-1"><i class="bi bi-arrow-right fs-5 me-2"></i>Specialized in responsive website development.</p>
                  <p className="lh-1"><i class="bi bi-arrow-right fs-5 me-2"></i>Experienced with modern JavaScript frameworks.</p>
                  <p className="lh-1"><i class="bi bi-arrow-right fs-5 me-2"></i>Strong collaboration with designers and back-end teams.</p>
                  </div>
                  <div className="col-lg-2 col-md-6 col-6 mb-3">
                    <div className="icon border border-2 text-center">
                       <h6>HTML</h6>
                    <i class="bi bi-code-slash fs-1"></i>
                    </div>                   
                  </div>

                  <div className="col-lg-2 col-md-6 col-6 mb-3">
                    <div className="icon border border-2 text-center">
                       <h6>CSS</h6>
                    <i class="bi bi-css fs-1"></i>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 col-6 mb-3">
                    <div className="icon border border-2 text-center">
                       <h6>Bootstrap 5</h6>
                   <i class="bi bi-bootstrap-fill fs-1"></i>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 col-6 mb-3">
                    <div className="icon border border-2 text-center">
                       <h6>Javascript</h6>
                    <i class="bi bi-javascript fs-1"></i>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 col-6 mb-3">
                    <div className="icon border border-2 text-center">
                       <h6>Tailwind CSS</h6>
                    <i class="bi bi-palette-fill fs-1"></i>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 col-6 mb-3">
                    <div className="icon border border-2 text-center">
                       <h6>React.js</h6>
                      <i class="bi bi-filetype-jsx fs-1"></i>
                    </div>
                  </div>

                 

                </div>
              </section>
  

  

              {/* Experience Section */}
              <section id="experience" className="mb-5">
                <h2>Experience</h2>

                <div className="experience-item mb-5">
                  <h6 className="text-secondary">2026 — Present</h6>
                  <h4>UI React Developer · Nivsee Technologies</h4>
                  <p>
                    Build and maintain critical components used to construct
                    Klaviyo’s frontend. Collaborate with cross-functional teams
                    to implement best practices in web accessibility.
                  </p>
                  <div className="tags justify-content-start align-items-center">
                    <span>HTML5</span>
                    <span>CSS </span>
                    <span>JavaScript</span><br/>
                    <span>React.js</span>
                    <span>Tailwind CSS</span>
                    <span>Bootstrap 5</span>
                    

                  </div>
                </div>

                <div className="experience-item mb-5">
                  <h6 className="text-secondary">2025</h6>
                  <h4>Web Developer · Prodigy Infotech</h4>
                  <p>
                    Developed high-quality websites and design systems for
                    diverse clients. Provided leadership within engineering
                    teams through collaboration and innovation.
                  </p>
                  <div className="tags">
                     <span>HTML5</span>
                    <span>CSS </span>
                    <span>JavaScript</span>
                  </div>
                </div>

                
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-5">
                <h2>Recent Projects</h2>
                <div className="row">
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                    <img src="project5.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Elixir Responsive Website  </h5>
                        <p className="card-text">Created a modern beverage brand site emphasizing elegant typography, responsive hero sections, and engaging product highlights.</p>
                         <a href="https://elixir-responsive-website.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                         <a href="https://github.com/Lavanyapondru/Elixir-responsive-website" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                         <img src="project2.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">FruitMart Website  </h5>
                        <p className="card-text">
                          Designed a dynamic online marketplace with intuitive shopping flow, responsive sections, and performance‑focused layouts.
                        </p>
                        <a href="https://fruitmart-7itech-z88y.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                        <a href="https://github.com/Lavanyapondru/Fruitmart-7itech" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                         <img src="project1.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Ultras Responsive Website  </h5>
                        <p className="card-text">
                          Delivered a stylish landing page with bold visuals, interactive elements, and adaptive layouts for consistent cross‑device performance.
                        </p>
                        <a href="https://ultras-responsive-website.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                        <a href="https://github.com/Lavanyapondru/Ultras-responsive-website" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                         <img src="project8.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Aranyak Responsive Website  </h5>
                        <p className="card-text">
                          Designed a nature‑themed responsive site with immersive visuals and adaptive layouts, delivering a smooth browsing experience across devices.
                        </p>
                         <a href="https://aranyak-responsive-website.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                        <a href="https://github.com/Lavanyapondru/Aranyak-responsive-website" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                         <img src="project3.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Drivin Responsive Website</h5>
                        <p className="card-text">
                         Built a sleek car rental landing page with responsive layouts and optimized navigation, ensuring seamless user experience across devices.
                        </p>
                        <a href="https://drivin-responsive-website.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                         <a href="https://github.com/Lavanyapondru/Drivin-responsive-website" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                         <img src="project4.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Frutiko Website</h5>
                        <p className="card-text">
                          Developed an e‑commerce fruit store featuring clean product grids, vibrant visuals, and mobile‑friendly design for smooth browsing.
                        </p>
                         <a href="https://frutiko-7i-tech-itgc.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                        <a href="https://github.com/Lavanyapondru/frutiko.7i-tech-" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                         <img src="project7.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">BigSpring Blog Website</h5>
                        <p className="card-text">
                          Developed a modern blog interface with responsive typography, clean layouts, and optimized readability for engaging content presentation.
                        </p>
                         <a href="https://bigspring-mu.vercel.app/ " target="_blank" class="btn btn-outline-light me-3">View Project</a>
                        <a href="https://github.com/Lavanyapondru/Bigspring" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                   <div className="recents col-md-6 mb-3 text-center">
                    <div className="card project-card">
                      <img src="Project9.png" class="w-100 project" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Srinivasa Services Website</h5>
                        <p className="card-text">
                          Built a professional service showcase platform with structured sections, responsive grids, and clear navigation to highlight offerings effectively.
                        </p>
                         <a href="https://srinivasaservices.vercel.app/" target="_blank" class="btn btn-outline-light me-3">View Project</a>
                        <a href="https://github.com/Lavanyapondru/srinivasaservices" target="_blank" class="btn btn-outline-light">View Code</a>
                      </div>
                    </div>
                  </div>
                   

                </div>
              </section>


               {/* Contact Section */}
<section id="contact" className="mb-5">
  <h2>Contact</h2>
  {/* <h3 className="text-start text-primary">Get In Touch</h3> */}
  <p className="">
    I’m always excited to collaborate on new projects or discuss web development opportunities. 
    Feel free to reach out through any of the channels below.
  </p>

  <div className="row mt-5 justify-column align-items-center justify-content-center">
    {/* Email */}
    <div className="col-md-4 col-12 mb-3 text-center">
      <div className="icon1 border border-2 text-center">
        <i className="bi bi-envelope-fill fs-2"></i>
        <h6 className="mt-2">Email</h6> 
        <a href="mailto:pondrulavanya@gmail.com" className="text-decoration-none">pondrulavanya@gmail.com</a>
      </div>
    </div>

    {/* Phone / WhatsApp */}
    <div className="col-md-4 col-12 mb-3 text-center">
      <div className="icon1 border border-2 text-center">
        <i class="bi bi-whatsapp fs-2"></i>
        <h6 className="mt-2">Phone / Whatsapp</h6>
        <a href="https://wa.me/919515618887" target="_blank" rel="noreferrer" className="text-decoration-none">
          +91 95156 18887
        </a>
      </div>
    </div>
    
  </div>
  <div className="row">
  <div className="col-12 text-center">
    <a 
      href="/Resume_Lavanya_Web developer.pdf" target="_blank"
      className="btn btn-outline-primary btn-lg mt-3" 
      download
    >
      Download Resume
    </a>
  </div>
  </div>
</section>



<footer className="footer text-light pt-2">
      <div className="container text-center">
        <p>
          &copy; 2026 Lavanya Pondru • UI React Developer
        </p>
      </div>
    </footer>
            </div>
          </div>
        </div>        
      </div>  
    </div>
  
            

        </div>
     );
}

export default Initial;