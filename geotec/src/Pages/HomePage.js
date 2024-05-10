import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../Components/Navbar";
import "../Styles/HomePage.css";
import { ReactTyped } from "react-typed";
import Carousel from "../Components/Carousel";
import { images } from "../Data/CarouselImages";
import { imagesPetroGraphy } from "../Data/CarouselPetroGraphy";
import { imagesASR } from "../Data/CarouselAlkaliSilikaReaction";
import { imagesRockAndCoreCutting } from "../Data/CarouselRockAndCoreCutting";
import { imagesPotentialCoreStudy } from "../Data/CarouselPotentialCoreStudy";
import { imagesStructuralMapping } from "../Data/CarouselStructureMapping";
import { imagesXray } from "../Data/CarouselXray";
import { imagesXRF } from "../Data/CarouselXRF";
import { imagesGeoPhysical } from "../Data/CarouselGeoPhysical";
import { imagesSEM } from "../Data/CarouselSEM";
import { imagesGIS } from "../Data/CarouselGIS";
import { imagesStratigraphy } from "../Data/CarouselStratigraphy";
import ContactUs from "../Components/Contact";

function HomePage() {
  return (
    <div className="HomePage">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="Page1">
        <div className="Page1-Header">GEOTECTONICS</div>
        <p className="Page1-subheading">
          Geotectonics (Pvt.) Ltd. offers customized consulting services
          spanning the entire geological spectrum.
        </p>
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
        <div className="Page1-subheading padding-top-10">
          <button className="button-6" role="button">
            <Link className="Link" smooth to="#ContactUs">
              Contact us
            </Link>
          </button>
        </div>
      </div>
      <div className="Page2">
        <div className="Page2-Header" id="AboutUs">
          About Us
        </div>
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
        <div className="Page3-Header" id="Services">
          Our Services
        </div>
        <div className="Page3-Content">
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Petrography</div>
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
                <Link className="Link" smooth to="#PetroGraphy">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
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
                <Link className="Link" smooth to="#RockCoreCutting">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
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
                <Link className="Link" smooth to="#potentialCoreStudy">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
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
                <Link className="Link" smooth to="#asr">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Structural Mapping</div>
            <div className="Page3-ServiceBoxDescription">
              Our team possesses extensive experience in structural mapping and
              the utilization of drilling information across a wide range of
              commodities and geological settings. Leveraging our knowledge of
              regional to small-scale mapping, interpretation of bottom-of-hole
              geology, and coherent analysis of drilling programs, we excel in
              generating high-quality structural maps in a time-efficient
              manner.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#structuralMapping">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
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
                <Link className="Link" smooth to="#xray">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">XRF Spectrometers</div>
            <div className="Page3-ServiceBoxDescription">
              X-ray fluorescence (XRF) analyzer demonstrates the ability to
              conduct both qualitative and quantitative analyses on various
              samples, including solids, powders, liquids, and others, across a
              wide range of elements from sodium (Na) to uranium (U). It can
              analyze concentrations spanning from 100% down to parts per
              million (ppm).
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#xrf">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader2">
              The Scanning Electron Microscope
            </div>
            <div className="Page3-ServiceBoxDescription2">
              The scanning electron microscope (SEM) uses high-energy electron
              beams to analyze solid specimens. Interactions between electrons
              and the sample produce signals revealing its external morphology,
              chemical composition, and crystalline structure. SEM generates 2D
              images showing spatial variations in these properties. It can
              image areas from 1 cm to 5 microns wide, with magnifications from
              20X to 30,000X and a resolution of 50 to 100 nm.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#sem">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Geo-Physical Services</div>
            <div className="Page3-ServiceBoxDescription">
              Our company is one of the trusted geophysical consultancies to
              provide the geophysical surveys by using the latest equipment and
              updated processing software handled by experts and trained civil
              engineers, geologists, geophysicists, environmental experts,
              hydrologists, surveyor, and other associated technicians.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#gps">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">Sequence Stratigraphy</div>
            <div className="Page3-ServiceBoxDescription">
              At GeoTectonics, we specialize in Outcrop Sequence Stratigraphy,
              Biostratigraphic Sequence Stratigraphy, Seismic Sequence
              Stratigraphy, and Integrated Sequence Stratigraphy. Dive deep into
              the geological history of your reservoirs with our precise
              Reservoir Studies and Well Log Sequence Stratigraphy.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#Stratigraphy">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="Page3-ServiceBox">
            <div className="Page3-ServiceBoxHeader">GIS-Based Services</div>
            <div className="Page3-ServiceBoxDescription">
              Experience seamless Digitization, transforming analog information
              into digital assets for enhanced accessibility and efficiency.
              Dive into DEM & Hydrology analysis, unraveling the intricate
              patterns of terrain and water flow for informed decision-making.
              Navigate the geological landscape with precision using our
              GIS-based Geological Mapping services. Safeguard your projects
              with expert Geological Hazard Zonation, identifying and mitigating
              risks with confidence.
            </div>
            <div className="Page3-ServiceBoxButton">
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#GIS">
                  Learn more
                </Link>
              </button>
              <button className="button-5" role="button">
                <Link className="Link" smooth to="#ContactUs">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Page4-1">
        <div className="Page4-Header" id="PetroGraphy">
          Petrography
        </div>
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
      <div className="Page4-2">
        <div className="Page4-Header" id="RockCoreCutting">
          Rock and Core Cuttings Analysis
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            In our Rock and Core Cuttings Analysis services, Geotectonics (Pvt.)
            Ltd. employs various techniques to uncover crucial information about
            subsurface formations. By measuring fundamental properties such as
            porosity, saturation, and permeability, we provide invaluable
            insights into reservoir potential. Porosity measurements reveal the
            presence of fluid-filled spaces within rocks, while saturation
            assessments determine the presence of hydrocarbons within those
            spaces. Understanding the permeability of these hydrocarbon fluids
            is vital in assessing their producibility.
            <br />
            <br />
            Additionally, our utilization of core gamma logging establishes a
            correlation between core depth and logging depth, facilitating
            accurate depth interpretation. Computed tomography (CT) scans
            further enhance our analysis by revealing core heterogeneity, aiding
            in the identification of key geological features. Through our
            comprehensive approach, we ensure that clients receive detailed and
            accurate assessments, empowering informed decision-making in oil and
            gas exploration and production endeavours.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesRockAndCoreCutting} />
          </div>
        </div>
      </div>
      <div className="Page4-3">
        <div className="Page4-Header" id="potentialCoreStudy">
          Potential Core Study
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            Geotectonics (Pvt.) Ltd. offers comprehensive potential core study
            services aimed at providing in-depth analysis and interpretation of
            core samples obtained from drilling operations. Our specialized team
            of geologists conducts meticulous examinations of core samples to
            evaluate their hydrocarbon potential, reservoir quality, and
            geological characteristics. Through advanced analytical techniques
            and expertise in sedimentology, stratigraphy, and reservoir
            engineering, we deliver valuable insights into reservoir properties,
            including porosity, permeability, and fluid saturation.
            <br />
            <br />
            Our holistic approach to potential core studies enables clients to
            make informed decisions regarding reservoir development strategies,
            production optimization, and resource estimation. At Geotectonics,
            we are dedicated to delivering high-quality results that support the
            successful exploration and exploitation of hydrocarbon reserves.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesPotentialCoreStudy} />
          </div>
        </div>
      </div>
      <div className="Page4-4">
        <div className="Page4-Header" id="asr">
          Alkali-Silica Reaction (ASR) Assessment
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            Geotectonics (Pvt.) Ltd. offers specialized Alkali-Silica Reaction
            (ASR) and Alkali Carbonate Reaction (ACR) assessment services
            designed to identify and mitigate the risk of concrete deterioration
            caused by alkali aggregate reaction. Our team of experts employs
            rigorous testing protocols and advanced analytical techniques to
            evaluate concrete and aggregate materials for potential ASR-induced
            damage.
            <br />
            <br />
            Through detailed petrographic analysis and chemical testing, we
            assess the reactivity of aggregates with alkalis present in concrete
            mixtures, providing valuable insights into the extent of ASR-related
            risks. Our comprehensive ASR assessments enable clients to
            proactively manage the durability and longevity of concrete
            structures, ensuring compliance with industry standards and
            regulatory requirements.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesASR} />
          </div>
        </div>
      </div>
      <div className="Page4-5">
        <div className="Page4-Header" id="structuralMapping">
          Structural Mapping
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            Mapping and interpretation of geological structures including folds,
            faults, fractures, and stratigraphy.
            <br />
            <br />
            Structural mapping aids in understanding subsurface geology,
            tectonic history, and geomechanical properties for various
            engineering and exploration purposes.
            <br />
            <br />
            Our team possesses extensive experience in structural mapping and
            the utilization of drilling information across a wide range of
            commodities and geological settings. Leveraging our knowledge of
            regional to small-scale mapping, interpretation of bottom-of-hole
            geology, and coherent analysis of drilling programs, we excel in
            generating high-quality structural maps in a time-efficient manner.
            <br />
            <br />
            Services include: <br />• Base mapping <br />• Structural mapping to
            define the geometry and mineralization controls at regional to mine
            scales.
            <br />• Regolith mapping to support regional geochemical programs.
            <br />• Alteration mapping to define controls on mineralization.{" "}
            <br />• Interpretation of multiple datasets in an integrated 3D
            environment
            <br />• Expert analytical support to solve specific issues (e.g.
            petrography, alteration, age-dating, fluid inclusions) <br />• 3D
            Geological Modelling <br />• Remote Sensing <br />• Resource
            Modelling and Estimation
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesStructuralMapping} />
          </div>
        </div>
      </div>
      <div className="Page4-6">
        <div className="Page4-Header" id="xray">
          X-ray Diffractometers
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            Currently, X-ray diffraction stands as the most potent technique for
            examining the phase and crystal structure of materials. This is
            achieved by analyzing the diffraction pattern of powder, single
            crystal, or polycrystal samples, thereby providing insights into the
            composition of materials as well as the structure or arrangement of
            atoms or molecules within them.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesXray} />
          </div>
        </div>
      </div>
      <div className="Page4-7">
        <div className="Page4-Header" id="xrf">
          XRF Spectrometers
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            X-ray fluorescence (XRF) analyzer demonstrates the ability to
            conduct both qualitative and quantitative analyses on various
            samples, including solids, powders, liquids, and others, across a
            wide range of elements from sodium (Na) to uranium (U). It can
            analyze concentrations spanning from 100% down to parts per million
            (ppm).
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesXRF} />
          </div>
        </div>
      </div>
      <div className="Page4-8">
        <div className="Page4-Header" id="sem">
          The Scanning Electron Microscope{" "}
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            The scanning electron microscope (SEM) employs a focused beam of
            high-energy electrons to generate various signals on the surface of
            solid specimens. These signals, arising from interactions between
            electrons and the sample, provide valuable information about its
            external morphology (texture), chemical composition, and crystalline
            structure and orientation.
            <br />
            <br />
            Typically, data are collected over a defined area of the sample's
            surface, generating a 2-dimensional image that illustrates spatial
            variations in these properties. Using conventional SEM techniques,
            areas ranging from approximately 1 cm to 5 microns in width can be
            imaged in scanning mode, with magnifications ranging from 20X to
            around 30,000X and a spatial resolution of 50 to 100 nm.
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesSEM} />
          </div>
        </div>
      </div>
      <div className="Page4-9">
        <div className="Page4-Header" id="gps">
          GeoPhysical Services
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            Our company is one of the trusted geophysical consultancies to
            provide the geophysical surveys by using the latest equipment and
            updated processing software handled by experts and trained civil
            engineers, geologists, geophysicists, environmental experts,
            hydrologists, surveyor, and other associated technicians.
            <br />
            <br />
            Geophysical surveys are being widely conducted across the world for
            different purposes like water surveys, mineral prospect evaluation,
            archeological studies, geology, and different environmental studies.
            These surveys are best to demonstrate the ground conditions in short
            time and these surveys help to gather a systematic information of
            large area with less cost as compared to drilling, coring, digging,
            and tunneling as these activities require a huge cost to perform.
            Geophysical surveys are best to investigate the insight conditions
            of near surface environments.
            <br />
            <br />
            Our company provides some of the following geophysical surveys with
            the best expertise and comprehensive and reliable results.
            <br />• Borehole logging
            <br />• Electrical resistivity survey
            <br />• Magnetic survey
            <br />• Ground penetrating radar.
            <br />• Polarization test
            <br />• Seismic investigations both cross-hole and down-hole
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesGeoPhysical} />
          </div>
        </div>
      </div>
      <div className="Page4-10">
        <div className="Page4-Header" id="Stratigraphy">
          Sequence Stratigraphy
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            At GeoTectonics, we specialize in Outcrop Sequence Stratigraphy,
            Biostratigraphic Sequence Stratigraphy, Seismic Sequence
            Stratigraphy, and Integrated Sequence Stratigraphy. Dive deep into
            the geological history of your reservoirs with our precise Reservoir
            Studies and Well Log Sequence Stratigraphy.
            <br />
            <br />
            Our team of experts excels in Structural Modeling, unraveling the
            complexities of subsurface structures. Explore Cyclicity patterns
            and decode the Paleoenvironment with our advanced techniques.
            Uncover the mysteries of Paleo-Tectonics and understand the
            evolution of your geological formations.
            <br />
            <br />
            Whether you're in exploration or production, our services offer
            invaluable insights to optimize your operations and maximize your
            reserves.
            <br />
            <br />
            Contact us today to elevate your understanding of the subsurface and
            drive success in your projects!
            <br />
            <br />
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesStratigraphy} />
          </div>
        </div>
      </div>
      <div className="Page4-11">
        <div className="Page4-Header" id="GIS">
          GIS-Based Services
        </div>
        <div className="Page4-Content">
          <div className="Page4-TextContent">
            Unlock the full potential of geographical data with Geotectonics.
            Our GIS-based services offer a diverse range of solutions to meet
            your needs.
            <br />
            <br />
            Experience seamless Digitization, transforming analog information
            into digital assets for enhanced accessibility and efficiency. Dive
            into DEM & Hydrology analysis, unraveling the intricate patterns of
            terrain and water flow for informed decision-making.
            <br />
            <br />
            Navigate the geological landscape with precision using our GIS-based
            Geological Mapping services. Safeguard your projects with expert
            Geological Hazard Zonation, identifying and mitigating risks with
            confidence.
            <br />
            <br />
            Embark on a journey through time with our Archaeological expertise,
            uncovering the mysteries of the past. Delve into Subsurface
            Hydrology to harness the hidden potential of groundwater resources
            for sustainable development.
            <br />
            <br />
            Elevate your ecological understanding with Remote Sensing-based
            Ecology Studies, harnessing the power of technology to protect our
            planet's precious ecosystems.
            <br />
            <br />
            At Geotectonics, we combine expertise with innovation to deliver
            unparalleled results. Contact us today to revolutionize your
            approach to spatial analysis and exploration! <br />
            <br />
          </div>
          <div className="Page2-AboutUsCarousel">
            <Carousel images={imagesGIS} />
          </div>
        </div>
      </div>
      <div className="Page5" id="ContactUs">
        <div className="Page5-ContactUsBox">
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
