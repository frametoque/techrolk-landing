<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Team;
use App\Models\Partner;
use App\Models\Testimonial;
use App\Models\Service;
use App\Models\Portfolio;

class LandingDataSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Team members
        $team = [
            [
                "name" => "Ruvindu Bamunuge",
                "role" => "UAS Design Engineer",
                "bio" => "Specializes in unmanned aerial systems layout, structural design, and aerodynamics optimization.",
                "image" => "/team/ruvindu.jpg"
            ],
            [
                "name" => "Rishan Sachinthana",
                "role" => "Mechatronic Engineer",
                "bio" => "Expert in robotics, control systems, and integrating hardware with smart automation software.",
                "image" => "/team/rishan.jpg"
            ],
            [
                "name" => "Shanuka Kamesh",
                "role" => "Mechatronic Engineer",
                "bio" => "Focuses on electronic circuits, microcontroller firmware, and embedded system design.",
                "image" => "/team/shanuka.jpg"
            ],
            [
                "name" => "Miraj Madurawala",
                "role" => "Mechatronic Engineer",
                "bio" => "Specializes in precision mechanical setups, sensor fusion, and automated prototyping workflows.",
                "image" => "/team/miraj.jpg"
            ],
            [
                "name" => "Pasindu Nanayakkara",
                "role" => "Mechanical Engineer",
                "bio" => "Expert in CAD modeling, stress analysis, mechanical assemblies, and production design.",
                "image" => "/team/pasindu.jpeg"
            ],
        ];

        foreach ($team as $m) {
            Team::updateOrCreate(['name' => $m['name']], $m);
        }

        // 2. Partners & Dealerships
        Partner::updateOrCreate(['name' => "Western Aluminiums"], [
            "name" => "Western Aluminiums",
            "logo" => "/partners/western-aluminiums.png",
            "type" => "partner"
        ]);

        $dealerships = [
            [ "name" => "BetaFPV", "logo" => "/partners/betafpv.jpg" ],
            [ "name" => "CNHL", "logo" => "/partners/cnhl-1.jpg" ],
            [ "name" => "GEPRC", "logo" => "/partners/geprc.png" ],
            [ "name" => "iFlight", "logo" => "/partners/iflight.png" ],
            [ "name" => "Master Airscrew", "logo" => "/partners/masterairscrew.png" ],
            [ "name" => "Radio Master", "logo" => "/partners/radiomaster.jpg" ],
            [ "name" => "Ready To Sky", "logo" => "/partners/readytosky.png" ],
            [ "name" => "T-Motor", "logo" => "/partners/tmotor.png" ],
        ];

        foreach ($dealerships as $d) {
            Partner::updateOrCreate(['name' => $d['name']], [
                "name" => $d["name"],
                "logo" => $d["logo"],
                "type" => "dealership"
            ]);
        }

        // 3. Testimonials
        $testimonials = [
            [
                "name" => "Prabath Anuradha",
                "role" => "Client",
                "text" => "Excellent service and timely response",
                "stars" => 5,
            ],
            [
                "name" => "Ravindu Gunarathna",
                "role" => "Client",
                "text" => "Highly recommend buying from Techro lk. professional and respectfully friendly service. Quality products",
                "stars" => 5,
            ],
            [
                "name" => "Tinura Andaraweera",
                "role" => "Client",
                "text" => "Superb customer service I ever seen in my Life and 3d printing is soo neat and clean",
                "stars" => 5,
            ],
            [
                "name" => "Dinal Samarasinha",
                "role" => "Client",
                "text" => "Best coustomer service and super fast delivery, Highly recommend for anyone to purchase ,all original and high quality products. Thank you very much!",
                "stars" => 5,
            ],
        ];

        foreach ($testimonials as $t) {
            Testimonial::updateOrCreate(['name' => $t['name']], $t);
        }

        // 4. Books (Services)
        $services = [
            [
                "name" => "Computer Aided Designing",
                "tagline" => "Precision engineering for the physical world",
                "description" => "TechRoLK's CAD team uses industry-leading software to create precise 3D models for any application, from consumer products to industrial components. We work in all major CAD file formats and handle both conceptual design and detailed engineering drawings.",
                "features" => [
                    "3D product modeling & assemblies",
                    "Engineering drawings & tolerancing",
                    "Reverse engineering from physical parts",
                    "Tooling & fixture design",
                    "Simulation & stress analysis",
                    "DFM (Design for Manufacturing) reviews",
                ],
                "deliverables" => ["STEP, IGES, STL files", "DWG/DXF drawings", "SolidWorks / Fusion 360 files", "3D printed prototype available"],
                "color" => "#CC1F2A",
                "bg" => "rgba(204,31,42,0.04)",
                "icon" => "Cpu"
            ],
            [
                "name" => "3D Printing",
                "tagline" => "Premium quality from filament to finished part",
                "description" => "We operate multiple FDM and resin 3D printers to deliver the best possible output for your project. With the widest material selection in Sri Lanka and 3 outlets for pickup or nationwide delivery, TechRoLK is your go-to 3D printing partner.",
                "features" => [
                    "FDM printing in PLA, ABS, PETG, TPU, and more",
                    "Resin printing for fine detail",
                    "Large format prints available",
                    "Post-processing, sanding & painting",
                    "Batch production capabilities",
                    "Same-day service for urgent orders",
                ],
                "deliverables" => ["Physical printed parts", "Multiple finish options", "Quality inspection report", "Packaging & shipping"],
                "color" => "#CC1F2A",
                "bg" => "rgba(204,31,42,0.04)",
                "icon" => "Printer"
            ],
            [
                "name" => "Drone Solutions",
                "tagline" => "Custom UAV systems built for your mission",
                "description" => "TechRoLK specializes in designing, building, & tuning custom UAV systems. From racing FPV quads to professional-grade inspection drones, our engineers have prototyped unmanned ground vehicles, 6-DOF robotic arms, and intelligent aerial platforms.",
                "features" => [
                    "Custom FPV & racing drone builds",
                    "Professional cinematography rigs",
                    "Inspection & survey drone platforms",
                    "Drone component sourcing & assembly",
                    "Flight controller configuration & tuning",
                    "Free assembly with component purchase",
                ],
                "deliverables" => ["Fully assembled & tested drone", "Flight manual & configuration file", "Tuning session included", "After-sales support"],
                "color" => "#CC1F2A",
                "bg" => "rgba(204,31,42,0.04)",
                "icon" => "Plane"
            ],
            [
                "name" => "Prototyping",
                "tagline" => "Precision prototypes that bring your ideas to life",
                "description" => "TechRoLK's prototyping services combine CAD, 3D printing, and electronics to create functional prototypes for your product ideas. We can help you iterate quickly, test your concepts, and refine your designs before moving to mass production.",
                "features" => [
                    "Tailored prototyping solutions for your product",
                    "Rapid iteration and testing of concepts",
                    "Integration of electronics and sensors",
                    "Functional prototypes for user testing",
                    "Design for manufacturability feedback",
                ],
                "deliverables" => ["Functional prototype units", "Design documentation and CAD files", "Testing and validation reports", "Guidance for mass production"],
                "color" => "#CC1F2A",
                "bg" => "rgba(204,31,42,0.04)",
                "icon" => "Pen"
            ],
            [
                "name" => "FPV Drone Assembling & Tuning",
                "tagline" => "This service is provided free when you are buying main components from us.",
                "description" => "TechRoLK offers comprehensive FPV drone assembling and tuning services to get your custom-built drones flying at their best.",
                "features" => [
                    "Custom FPV drone builds",
                    "Flight controller configuration & tuning",
                    "Component sourcing & assembly",
                    "Post-assembly testing & validation",
                ],
                "deliverables" => ["Fully assembled & tested drone", "Flight manual & configuration file", "Tuning session included", "After-sales support"],
                "color" => "#CC1F2A",
                "bg" => "rgba(204,31,42,0.04)",
                "icon" => "Hammer"
            ]
        ];

        foreach ($services as $s) {
            Service::updateOrCreate(['name' => $s['name']], $s);
        }

        // Delete graphic design services if present
        Service::where('name', 'like', '%Graphic%')->delete();

        // 5. Portfolios (Projects)
        Portfolio::whereNull('slug')->orWhere('slug', '')->delete();

        $droneService = Service::where('name', 'like', '%Drone%')->first() ?? Service::first();
        $cadService = Service::where('name', 'like', '%CAD%')->first() ?? Service::first();

        $projects = [
            [
                "slug" => "high-endurance-hexacopter",
                "title" => "High Endurance Hybrid Oil Electric Hexacopter",
                "category" => "Drone Solutions",
                "mainImage" => "/portfolio_assets/hexacopter-1.png",
                "collage_images" => [
                    "/portfolio_assets/hexacopter-1.png",
                    "/portfolio_assets/hexacopter-2.png",
                    "/portfolio_assets/hexacopter-3.png",
                    "/portfolio_assets/hexacopter-4.png"
                ],
                "image1" => "/portfolio_assets/hexacopter-1.png",
                "image2" => "/portfolio_assets/hexacopter-2.png",
                "image3" => "/portfolio_assets/hexacopter-3.png",
                "image4" => "/portfolio_assets/hexacopter-4.png",
                "youtube_video_url" => "U31AZ2fZLhI",
                "Short_description" => "A professional-grade, heavy-duty hybrid oil-electric hexacopter engineered to support demanding industrial applications.",
                "description" => "A professional-grade, heavy-duty hybrid oil-electric hexacopter engineered to support demanding industrial applications and custom payloads with extreme flight durations.",
                "tags" => ["Hybrid Propulsion", "Hexacopter", "Heavy Lift", "Industrial UAV"],
                "challenge" => "Standard battery-powered multirotors suffer from severely limited flight times when tasked with carrying heavy engineering payloads, creating a bottleneck for long-distance missions.",
                "solution" => "We integrated a hybrid oil-electric generator system running on a 14-liter fuel capacity, enabling an astonishing flight time performance envelope.",
                "outcome" => "Successfully achieved an extended flight endurance of 120-150 minutes with a maximum takeoff weight capability of up to 66kg and a dedicated 10kg payload capacity featuring remote generator starting functionality.",
                "service_id" => $droneService->id
            ],
            [
                "slug" => "unmanned-ground-aerial-vehicle",
                "title" => "Unmanned Ground and Aerial Vehicle (UGAV)",
                "category" => "Robotics",
                "mainImage" => "/portfolio_assets/ugav-1.jpeg",
                "collage_images" => [
                    "/portfolio_assets/ugav-1.jpeg",
                    "/portfolio_assets/ugav-2.jpeg",
                    "/portfolio_assets/ugav-3.jpg",
                    "/portfolio_assets/ugav-4.jpeg",
                    "/portfolio_assets/ugav-5.jpg",
                ],
                "image1" => "/portfolio_assets/ugav-1.jpeg",
                "image2" => "/portfolio_assets/ugav-2.jpeg",
                "image3" => "/portfolio_assets/ugav-3.jpg",
                "image4" => "/portfolio_assets/ugav-4.jpeg",
                "youtube_video_url" => "U31AZ2fZLhI",
                "Short_description" => "A novel combined ground and aerial platform (UGAV) developed with fully autonomous navigation capabilities.",
                "description" => "A novel combined ground and aerial platform (UGAV) developed with fully autonomous navigation capabilities, designed specifically to operate within critical disaster response and victim rescue environments.",
                "tags" => ["UGAV", "Autonomous Navigation", "Obstacle Avoidance", "Thrust Vectoring"],
                "challenge" => "During disaster events, traditional air or ground rescue methods often fail independently due to harsh debris layouts, tight spaces, or highly restricted battery operating lifespans.",
                "solution" => "We engineered a combined platform utilizing a thrust vector mechanism system that increases the forward motion speed and minimizes aerodynamic drag by reducing the tilting angle of the main platform, paired with stereo-vision sensors.",
                "outcome" => "Built a fully autonomous waypoint navigation system complete with real-time vision-based obstacle avoidance capable of mapping 2D coordinates and pinpointing object distances dynamically.",
                "service_id" => $droneService->id
            ],
            [
                "slug" => "custom-payload-quadcopter-v1",
                "title" => "Custom Payload Carrying Quadcopter (Prototype V1.2)",
                "category" => "Drone Solutions",
                "mainImage" => "/portfolio_assets/quadcopter-v1-1.png",
                "collage_images" => [
                    "/portfolio_assets/quadcopter-v1-1.png",
                    "/portfolio_assets/quadcopter-v1-2.jpg",
                    "/portfolio_assets/quadcopter-v1-3.jpg"
                ],
                "image1" => "/portfolio_assets/quadcopter-v1-1.png",
                "image2" => "/portfolio_assets/quadcopter-v1-2.jpg",
                "image3" => "/portfolio_assets/quadcopter-v1-3.jpg",
                "youtube_video_url" => "ntTRG350U_w",
                "Short_description" => "An autonomous payload multirotor build featuring built-in triple redundant flight controller configurations.",
                "description" => "An autonomous payload multirotor build featuring built-in triple redundant flight controller configurations and a custom first-person view tracking camera setup.",
                "tags" => ["Quadcopter", "Autonomous Flight", "Triple Redundancy", "FPV Camera"],
                "challenge" => "The client needed an early-stage tactical platform capable of handling heavy weight lifting tasks autonomously while managing flight safety and airspace collision variables safely.",
                "solution" => "We engineered Prototype V1.1 to carry an attached payload of up to 1700 grams, integrating a remote-controlled pan-and-tilt FPV camera alongside collision-mitigation parameters.",
                "outcome" => "Successfully achieved stable autonomous flight capabilities for 12-15 minutes per session. The system actively detects nearby manned aircraft to autonomously avoid probable collision courses.",
                "service_id" => $droneService->id
            ],
            [
                "slug" => "custom-payload-quadcopter-v2",
                "title" => "Custom Payload Carrying Quadcopter v2",
                "category" => "Drone Solutions",
                "mainImage" => "/portfolio_assets/quadcopter-v2-1.png",
                "collage_images" => [
                    "/portfolio_assets/quadcopter-v2-1.png",
                    "/portfolio_assets/quadcopter-v2-2.jpg",
                    "/portfolio_assets/quadcopter-v2-3.jpg"
                ],
                "image1" => "/portfolio_assets/quadcopter-v2-1.png",
                "image2" => "/portfolio_assets/quadcopter-v2-2.jpg",
                "image3" => "/portfolio_assets/quadcopter-v2-3.jpg",
                "youtube_video_url" => "xX7AQrUPIE8",
                "Short_description" => "An advanced, high-stability iteration of our custom payload quadcopter.",
                "description" => "An advanced, high-stability iteration of our custom payload quadcopter, introducing fully optimized structural enhancements and updated avionics frameworks.",
                "tags" => ["Quadcopter", "Custom Payload", "Avionics Upgrade", "Canopy Design"],
                "challenge" => "The initial V1.1 prototype needed adjustments to reduce its overall profile weight, increase total flight times, and upgrade its active camera tracking configurations for rugged setups.",
                "solution" => "We reverse-engineered the external payload structural mounts to install custom, lightweight form-factor components, highly efficient propellers/motors, a lightweight protective canopy, and retractable landing gears.",
                "outcome" => "Delivered a highly maneuverable platform with significantly extended flight times, an upgraded camera sensor array, and a responsive, full-touch handheld remote controller setup.",
                "service_id" => $droneService->id
            ],
            [
                "slug" => "carbon-fiber-octoquad",
                "title" => "Carbon Fiber OctoQuad Drone",
                "category" => "Drone Solutions",
                "mainImage" => "/portfolio_assets/octoquad-1.png",
                "collage_images" => [
                    "/portfolio_assets/octoquad-1.png",
                    "/portfolio_assets/octoquad-2.png",
                    "/portfolio_assets/octoquad-3.jpeg"
                ],
                "image1" => "/portfolio_assets/octoquad-1.png",
                "image2" => "/portfolio_assets/octoquad-2.png",
                "image3" => "/portfolio_assets/octoquad-3.jpeg",
                "youtube_video_url" => "n0wzZtPG6ug",
                "Short_description" => "A high-stability multirotor platform built completely from scratch using robust lightweight composites.",
                "description" => "A high-stability multirotor platform built completely from scratch using robust lightweight composites and custom structural impact guards.",
                "tags" => ["OctoQuad", "Carbon Fiber", "PLA+", "Autopilot Control"],
                "challenge" => "Developing an industrial-grade drone with high flight stability that can operate safely close to complex surrounding obstacles without endangering its delicate components or structural frame.",
                "solution" => "We designed a unique aerodynamic shape constructed primarily out of lightweight carbon fiber composites and high-grade PLA+ materials, complete with an integrated, protective perimeter cage.",
                "outcome" => "Equipped with an advanced autopilot flight controller configuration that generates exceptionally stable flight patterns and ensures a high layer of safety.",
                "service_id" => $droneService->id
            ],
            [
                "slug" => "custom-designed-fpv-freestyle",
                "title" => "Custom Designed FPV Freestyle Drone",
                "category" => "CAD & Prototyping",
                "mainImage" => "/portfolio_assets/fpv-freestyle-1.jpg",
                "collage_images" => [
                    "/portfolio_assets/fpv-freestyle-1.jpg",
                    "/portfolio_assets/fpv-freestyle-2.jpg",
                    "/portfolio_assets/fpv-freestyle-3.jpg",
                    "/portfolio_assets/fpv-freestyle-4.jpg"
                ],
                "image1" => "/portfolio_assets/fpv-freestyle-1.jpg",
                "image2" => "/portfolio_assets/fpv-freestyle-2.jpg",
                "image3" => "/portfolio_assets/fpv-freestyle-3.jpg",
                "image4" => "/portfolio_assets/fpv-freestyle-4.jpg",
                "youtube_video_url" => "n0wzZtPG6ug",
                "Short_description" => "A custom 5-inch FPV freestyle multirotor frame engineered and fabricated from the ground up.",
                "description" => "A custom 5-inch FPV freestyle multirotor frame engineered and fabricated from the ground up to match precise performance parameters requested by the client.",
                "tags" => ["FPV Frame", "CAD Modeling", "Freestyle Design", "Custom Fabrication"],
                "challenge" => "Off-the-shelf FPV quadcopter frames often restrict component layout versatility, lack specific impact reinforcements, or do not fulfill localized weight parameters.",
                "solution" => "We modeled a specialized, regular 5-inch carbon fiber FPV layout entirely within CAD software, tuning structural stress distribution points and adding vibrant, high-durability landing guards.",
                "outcome" => "Successfully delivered a tailor-made, highly durable freestyle frame that perfectly accommodated the client's custom electronics stacks.",
                "service_id" => $cadService->id
            ]
        ];

        foreach ($projects as $p) {
            $p['Sdescription'] = $p['Short_description'];
            Portfolio::updateOrCreate(['slug' => $p['slug']], $p);
        }
    }
}
