import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Styles/HomePage.css";
import { ReactTyped } from "react-typed";
import Carousel from "../Components/Carousel";
import { images } from "../Data/CarouselImages";
import { imagesPetroGraphy } from "../Data/CarouselPetroGraphy";

function HomePage() {
  return (
    <div className="HomePage">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="Page1">
        <div className="Page1-Header">GEOTECTONICS</div>
        <p className="Page1-strings">
          <ReactTyped
            className="typing"
            strings={[
              "Shaping Earth's Evolution",
              "Unveiling Geological Mysteries",
              "Forging the Landscape of Tomorrow",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </p>
      </div>
      <div className="Page2">
        <div className="Page2-Header">About Us</div>
        <div className="Page2-AboutUs">
          <div className="Page2-AboutUsContent">
            At Geotectonics (Pvt.) Ltd., we are dedicated to delivering
            excellence in geological solutions, Geotectonics (Pvt.) Ltd. offers
            customized consulting services spanning the entire geological
            spectrum helping our clients to make critical decisions and achieve
            success in their projects. We leverage top-tier Senior Geological
            Consultants and utilize our global affiliations to deliver
            distinctive geological solutions worldwide. Client inquiries are
            promptly addressed with the utmost confidentiality therefore partner
            with us for unparalleled expertise and reliable geological insights.
            <br />
            <br />
            Assessing natural resources is crucial for understanding their
            availability, sustainability, and impact on society. Geotectonics
            (Pvt.) Ltd. experts likely use a combination of geological,
            geophysical, and geochemical methods, coupled with time honoured
            instrumentation and cutting-edge technology, to evaluate resources
            such as fossil fuels, water, minerals, and even renewable energy
            sources like geothermal. Our expertise can help to take decisions
            about resource management, conservation efforts, and sustainable
            development practices. Our clients are at the centre of everything
            we do. We tailor creative solutions to meet their specific needs,
            not only in traditional upstream oil and gas sectors but also by
            fostering opportunities across a range of other industries and
            academic institutes.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={images} />
          </div>
        </div>
      </div>
      <div className="Page3">
        <div className="Page3-Header">Our Services</div>
        <div className="Page3-Content">
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Petrography Analysis</div>
            <div className="Page3-ServiceBoxDescription">
              We deliver ultra-high-resolution insights into both geological and
              non-geological samples, providing a comprehensive understanding of
              mineral composition, texture, grain characteristics,
              microfractures, micropores, and structure, presented in both
              quantitative and qualitative formats. <br /> Whether delving into
              rock formations or mineral assemblages, our dedication to
              precision and efficiency empowers and elevates the research
              process.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                Learn More
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader2">
              Rock and Core Cuttings Analysis
            </div>
            <div className="Page3-ServiceBoxDescription2">
              In our Rock and Core Cuttings Analysis services, Geotectonics
              (Pvt.) Ltd. employs various techniques to uncover crucial
              information about subsurface formations. By measuring fundamental
              properties such as porosity, saturation, and permeability, we
              provide invaluable insights into reservoir potential. Through our
              comprehensive approach, we ensure that clients receive detailed
              and accurate assessments, empowering informed decision-making in
              oil and gas exploration and production endeavours.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                Learn More
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Potential Core Study</div>
            <div className="Page3-ServiceBoxDescription">
              Geotectonics (Pvt.) Ltd. offers comprehensive core study services
              for analyzing and interpreting core samples from drilling
              operations. Our expert geologists assess hydrocarbon potential,
              reservoir quality, and geological characteristics using advanced
              techniques. We provide insights into reservoir properties, aiding
              decision-making in reservoir development and resource estimation.
              Dedicated to delivering high-quality results, we support
              successful hydrocarbon exploration and exploitation.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                Learn More
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader2">
              Alkali-Silica Reaction (ASR) Assessment
            </div>
            <div className="Page3-ServiceBoxDescription2">
              Geotectonics (Pvt.) Ltd. offers specialized Alkali-Silica Reaction
              (ASR) and Alkali Carbonate Reaction (ACR) assessment services
              designed to identify and mitigate the risk of concrete
              deterioration caused by alkali aggregate reaction. Our team of
              experts employs rigorous testing protocols and advanced analytical
              techniques to evaluate concrete and aggregate materials for
              potential ASR-induced damage.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                Learn More
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Structural Mapping</div>
            <div className="Page3-ServiceBoxDescription">
              Mapping and interpretation of geological structures including
              folds, faults, fractures, and stratigraphy. Structural mapping
              aids in understanding subsurface geology, tectonic history, and
              geomechanical properties for various engineering and exploration
              purposes. Our team possesses extensive experience in structural
              mapping and the utilization of drilling information across a wide
              range of commodities and geological settings. Leveraging our
              knowledge of regional to small-scale mapping, interpretation of
              bottom-of-hole geology, and coherent analysis of drilling
              programs, we excel in generating high-quality structural maps in a
              time-efficient manner.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                Learn More
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">X-ray Diffractometers</div>
            <div className="Page3-ServiceBoxDescription">
              Currently, X-ray diffraction stands as the most potent technique
              for examining the phase and crystal structure of materials. This
              is achieved by analyzing the diffraction pattern of powder, single
              crystal, or polycrystal samples, thereby providing insights into
              the composition of materials as well as the structure or
              arrangement of atoms or molecules within them.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Page4">
        <div className="Page4-Header">Petrography Analysis</div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            We deliver ultra-high-resolution insights into both geological and
            non-geological samples, providing a comprehensive understanding of
            mineral composition, texture, grain characteristics, microfractures,
            micropores, and structure, presented in both quantitative and
            qualitative formats. Whether delving into rock formations or mineral
            assemblages, our dedication to precision and efficiency empowers and
            elevates the research process.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPetroGraphy} />
          </div>
        </div>
      </div>
      <div className="Page4">
        <div className="Page4-Header">Rock and Core Cuttings Analysis</div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            We deliver ultra-high-resolution insights into both geological and
            non-geological samples, providing a comprehensive understanding of
            mineral composition, texture, grain characteristics, microfractures,
            micropores, and structure, presented in both quantitative and
            qualitative formats. Whether delving into rock formations or mineral
            assemblages, our dedication to precision and efficiency empowers and
            elevates the research process.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPetroGraphy} />
          </div>
        </div>
      </div>
      <div className="Page4">
        <div className="Page4-Header">Petrography Analysis</div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            We deliver ultra-high-resolution insights into both geological and
            non-geological samples, providing a comprehensive understanding of
            mineral composition, texture, grain characteristics, microfractures,
            micropores, and structure, presented in both quantitative and
            qualitative formats. Whether delving into rock formations or mineral
            assemblages, our dedication to precision and efficiency empowers and
            elevates the research process.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPetroGraphy} />
          </div>
        </div>
      </div>
      <div className="Page4">
        <div className="Page4-Header">Petrography Analysis</div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            We deliver ultra-high-resolution insights into both geological and
            non-geological samples, providing a comprehensive understanding of
            mineral composition, texture, grain characteristics, microfractures,
            micropores, and structure, presented in both quantitative and
            qualitative formats. Whether delving into rock formations or mineral
            assemblages, our dedication to precision and efficiency empowers and
            elevates the research process.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPetroGraphy} />
          </div>
        </div>
      </div>
      <div className="Page4">
        <div className="Page4-Header">Petrography Analysis</div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            We deliver ultra-high-resolution insights into both geological and
            non-geological samples, providing a comprehensive understanding of
            mineral composition, texture, grain characteristics, microfractures,
            micropores, and structure, presented in both quantitative and
            qualitative formats. Whether delving into rock formations or mineral
            assemblages, our dedication to precision and efficiency empowers and
            elevates the research process.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPetroGraphy} />
          </div>
        </div>
      </div>
      <div className="Page4">
        <div className="Page4-Header">Petrography Analysis</div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            We deliver ultra-high-resolution insights into both geological and
            non-geological samples, providing a comprehensive understanding of
            mineral composition, texture, grain characteristics, microfractures,
            micropores, and structure, presented in both quantitative and
            qualitative formats. Whether delving into rock formations or mineral
            assemblages, our dedication to precision and efficiency empowers and
            elevates the research process.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPetroGraphy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
