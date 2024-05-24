// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });

    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    // isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    // Modal content map
const contentMap = {
    demo01: {
        title: 'PhD - Learning and Cognition',
        smallParagraph: '<b>Dissertation title:</b> Supporting Meaningful Learning with Digital 3D Objects: The Impact of Embodied Learning<br><br><b>Advisor:</b><a href="https://faculty.utah.edu/u0616669-Kirsten_R._Butcher/hm/index.hml" target="_blank"> Kirsten R. Butcher</a>',
        mediumImage: '',
        largeParagraph: 'My PhD work has provided me with a robust foundation for a successful career in UX research. Throughout my dissertation, I focused on evaluating user behaviors as students interacted with digital technology, applying a variety of advanced research methods to enhance digital learning outcomes. Techniques such as machine learning, behavioral analysis, thematic analysis, think-aloud protocols, A/B testing, and surveys were integral to my research, enabling me to gather comprehensive insights and drive meaningful improvements in user experience.<br><br>During my time as a doctoral candidate, I undertook coursework that was directly relevant to UX research, including human-computer interaction (studied from both psychological and computer science perspectives), quantitative and qualitative analysis, and instructional design. This interdisciplinary education equipped me with a deep understanding of both the technical and human aspects of UX.<br><br>Additionally, I had the opportunity to teach courses in the Instructional Design and Educational Technology (IDET) program, further honing my skills in instructional design and user experience. My involvement in teacher workshops and user testing projects at the Natural History Museum of Utah provided hands-on experience in conducting user research and usability testing in real-world settings.<br><br>These experiences have collectively prepared me to excel in UX research by developing a keen ability to understand user needs, apply rigorous research methodologies, and translate findings into actionable design improvements. My background in both theoretical and applied aspects of user interaction with digital technology positions me well to contribute effectively to UX research and design teams.'
    },
    demo02: {
        title: 'MS - Learning and Cognition',
        smallParagraph: '<b>Thesis title:</b> The Impact of Tangible Materials and Focused Prompts on Learning with 3D Representations<br><br><b>Advisor:</b><a href="https://faculty.utah.edu/u0616669-Kirsten_R._Butcher/hm/index.hml" target="_blank"> Kirsten R. Butcher</a>',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo03: {
        title: 'Graduate Certificate in Statistics',
        smallParagraph: 'With a Graduate Certificate in Statistics, I bring a solid foundation in analytical skills and methodological precision to UX research. This certification equips me with the ability to understand user behavior patterns and derive meaningful insights from complex datasets accurately.<br><br>My coursework has provided me with a deep understanding of statistical principles essential for effective UX research. From designing experiments to interpreting data, I possess the expertise to navigate every step of the research process confidently.<br><br>While my formal education has been invaluable, what truly sets me apart is my intrinsic drive to explore new methods and creative analytical approaches. I thrive on the challenge of uncovering insights from data and am constantly seeking innovative ways to enhance the user experience.<br><br>Moreover, my hands-on experience with statistical packages and data manipulation techniques enables me to translate insights into actionable recommendations. In a field where data-driven decision-making is paramount, I excel at transforming raw data into meaningful narratives that drive tangible outcomes.<br><br>Above all, my pursuit of the Graduate Certificate in Statistics reflects my dedication to professional growth and excellence. With me on your team, you\'ll have a partner committed to leveraging data-driven insights to enhance the user experience and drive business success.<br><br>For more information on the University of Utah\'s Graduate Certificate in Statistics, visit their <a href="https://ed-psych.utah.edu/statistics-certificate/" target="_blank">website</a>.',
        mediumImage: '',
        largeParagraph: ''
    },
    demo04: {
        title: 'BS - Cognitive Neuroscience',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo05: {
        title: 'Certificate in Human Factors Research',
        smallParagraph: 'The Human Factors Certificate from the University of Utah has thoroughly prepared me for a career in user experience research. Through this program, I gained a robust foundation in ergonomics, system design, and user behavior, which are crucial for understanding and optimizing user interactions.<br><br>Moreover, working closely with senior researchers throughout the program provided invaluable hands-on experience. I learned to design rigorous research studies, effectively collect and analyze data, and communicate findings in a way that ensures they serve practical purposes. This experience has equipped me with the ability to identify and solve usability issues, generate actionable insights, and contribute meaningfully to product development processes.<br><br>The Human Factors Certificate not only equipped me with technical skills but also enhanced my ability to work collaboratively within interdisciplinary teams. The program emphasized the importance of clear and effective communication, ensuring that research findings can be easily understood and applied by stakeholders to improve user experiences.<br><br>This certification program served as a foundation for my love of user research and propelled me into graduate school, where I honed my skills as a researcher.<br><br>For more detailed information about the Human Factors Certificate, please visit the <a href="https://psych.utah.edu/human-factors/" target="_blank">University of Utah\'s Human Factors Certificate page</a>.',
        mediumImage: '',
        largeParagraph: ''
    },
    demo06: {
        title: 'Supporting Hands-on Learning with Digital 3D Objects',
        smallParagraph: '<b>Abstract:</b> Hands-on learning activities in science education provide valuable context and experiences that bolster student understanding of complex real-world phenomena. This research aimed to understand how theories of embodied learning may be leveraged to bring about meaningful, hands-on learning to digital learning. The current study examined the impact of two embodied learning factors—gestural congruency and sensorimotor activation—on hands-on science learning with digital 3D objects. Students working with a single motion controller (i.e., high gestural congruency), two-motion controllers (i.e., low gestural congruency), or a mouse (control) interface thought aloud as they worked with digital 3D representations of museum objects. Students working with the motion controller interfaces were prompted to engage in small (i.e., low sensorimotor) or large (i.e., high sensorimotor) manipulations of the objects as they worked. The data in this study included how students manipulated the digital 3D objects, the verbal utterances generated during the think-aloud and post-learning assessments of recall of the learning materials, inferential reasoning, self-reported cognitive load, and perceptions of the learning experience. Higher levels of gestural congruency significantly increased the number of embodied-action manipulations that students deployed when learning with digital 3D objects and the depth of learning processes in which they engaged during a science activity. Additionally, higher levels of gestural congruency positively influenced students’ learning outcomes and self-reported levels of cognitive load. However, the level of sensorimotor activation was shown to have minimal influence on how students engaged in hands-on learning with digital 3D objects or their post-learning outcomes. Results showed that gestural congruency, not sensorimotor activation, is the primary factor of embodied learning determining the quality of hands-on learning with digital 3D objects.',
        mediumImage: 'img/portfolio/P6.png',
        largeParagraph: 'This study exemplifies my capabilities as a UX researcher by showcasing my ability to design, conduct, and analyze complex research projects that are grounded in real-world applications. Through my exploration of gestural congruency and sensorimotor activation in digital learning environments, I demonstrated a deep understanding of user behavior and engagement, which is crucial for UX research.<br><br>By employing a variety of research methodologies, including think-aloud protocols and behavioral analysis, I effectively captured and analyzed how students interact with digital interfaces. My findings highlighted the importance of gestural congruency in enhancing user engagement and learning outcomes, which underscores my ability to identify and prioritize key factors that improve user experience.<br><br>Additionally, my research process involved meticulous data collection and analysis, showcasing my proficiency in handling both qualitative and quantitative data. The ability to derive actionable insights from complex datasets is a core skill in UX research, enabling me to inform and optimize design decisions effectively.<br><br>Overall, this study illustrates my commitment to understanding and enhancing user experiences through rigorous research, making me well-suited for a role in UX research where I can continue to apply my skills in analyzing user interactions and improving digital interfaces.<br><br> The work described above is currently in the process of publication. For more information, please reach out to me via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo07: {
        title: 'Research: Can we Use Machine Learning to Guide Digital Manipulations?',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo08: {
        title: 'Research: Do Materials Matter to Museum Visitors?',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo09: {
        title: 'Research: The Impact of Confusion During Educational Gameplay',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo10: {
        title: 'Research: Optimizing User Paths with an Interactive Map',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo11: {
        title: 'Research: The Impact of Tangible Materials and Focused Prompts on Hands-On Learning',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo12: {
        title: 'Research: Persistent Errors of Novice Learners',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo13: {
        title: 'Research: The Impact of Multimedia Materials',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo14: {
        title: 'Research: Medical Needs of North-Shore Communities',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo15: {
        title: 'Research: Current Trends in Extended Reality',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo16: {
        title: 'Designs: VR for Hands-On Learning',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo17: {
        title: 'Designs: Digital Learning Interfaces',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo18: {
        title: 'Designs: Instructional Comics',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo19: {
        title: 'Designs: Logos',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo20: {
        title: 'Designs: Web',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo21: {
        title: 'Skills: Adobe Suite',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo22: {
        title: 'Skills: User Research Methods',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo23: {
        title: 'Skills: Research Planning and Execution',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo24: {
        title: 'Skills: Data Analysis',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo25: {
        title: 'Skills: Tools and Software',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo26: {
        title: 'Skills: Communication and Collaboration',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo27: {
        title: 'Skills: Instruction and Mentoring',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo28: {
        title: 'Skills: Web Development',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo29: {
        title: 'Skills: Asset Production',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo30: {
        title: 'Instructor: Multimedia Learning',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo31: {
        title: 'Instructor: Introduction to Web-Based Tools',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo32: {
        title: 'USA Hockey Officiating Instructor',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo33: {
        title: 'Current Resume',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo34: {
        title: 'Academic Curriculum Vitae',
        smallParagraph: '',
        mediumImage: '',
        largeParagraph: 'Please note that this section is currently under development as I continue to work on refining and adding content. Updates will be provided shortly to ensure a comprehensive overview of my skills and experiences. Thank you for your understanding. For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    }
};

    // Handle modal triggers
  $(".portfolio_item").on("click", function(event) {
    var triggerId = $(this).attr('id');
    var content = contentMap[triggerId];

    if (content) {
        $('#modal-title').html(content.title);
        $('#modal-small-paragraph').html(content.smallParagraph);
        $('#modal-medium-image').attr('src', content.mediumImage);
        $('#modal-large-paragraph').html(content.largeParagraph);
    }
});
    // Initializing animatedModal for the triggers
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09,#demo10,#demo11,#demo12,#demo13,#demo14,#demo15,#demo16,#demo17,#demo18,#demo19,#demo20,#demo21,#demo22,#demo23,#demo24,#demo25,#demo26,#demo27,#demo28,#demo29,#demo30,#demo31,#demo32,#demo33,#demo34").animatedModal();

    // Contact Form

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});