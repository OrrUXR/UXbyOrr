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
    title: 'Research: Supporting Hands-On Training with Digital 3D Objects: The Impact of Embodied Cognition',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P6.png',
    largeParagraph: `
        <!-- Section 1: Objective -->
       <h3><b>Objective:</b></h3>
<p>
A training program transitioning from in-person to digital experiences noticed that their digital training resulted in less desirable outcomes, including lower user enjoyment, decreased cognitive engagement, and poor retention of training materials. I was tasked with understanding why these issues were occurring and providing actionable design considerations to improve the digital training experience. A critical design question arose during this research: how could modern interfaces, such as motion controllers, be leveraged to resolve these issues? Specifically, should motion controllers act as a direct extension of the users’ hands (i.e., two motion controllers), or should a single motion controller serve as a stand-in for the object itself (i.e., manipulations of the controller directly mirrored manipulations of the digital object)? This study sought to answer these questions by exploring how these interface design choices impact user behavior, cognitive engagement, task performance, and experience perceptions.
</p>
        <!-- Section 2: My Responsibilities -->
        <h3><b>My Responsibilities: Senior Researcher</b></h3>
<ul>
  <li><b>Research Leadership:</b> Designed and led the study to evaluate the impact of real-world actions on hands-on training in digital environments.</li>
  <li><b>Study Design and Execution:</b> Developed and implemented all aspects of the study, including experimental design, participant recruitment, and participant pool management.</li>
  <li><b>Technical Documentation:</b> Authored all necessary documentation, including research protocols, regulatory submissions, use specifications, and study scripts.</li>
  <li><b>Participant Management:</b> Managed the participant pool, including recruiting over 100 participants, scheduling sessions, and ensuring informed consent protocols were followed.</li>
  <li><b>Data Collection:</b> Facilitated usability testing sessions, conducted cognitive walkthroughs, and collected survey-based user feedback.</li>
  <li><b>Data Processing:</b> Processed and coded qualitative and quantitative data, including user transcripts, behavioral observations, and survey results.</li>
  <li><b>Data Analysis:</b> Conducted multivariate statistical analyses (MANOVA) to identify group differences and tested hypotheses about interface impacts.</li>
  <li><b>Collaboration:</b> Worked closely with design and engineering consultants to iteratively refine the digital interfaces based on findings.</li>
  <li><b>Stakeholder Communication:</b> Delivered regular updates and presented research progress to project managers and stakeholders.</li>
  <li><b>Recommendations and Final Deliverables:</b> Synthesized findings into actionable recommendations and presented final insights to stakeholders to inform future design strategies.</li>
</ul>

        <!-- Section 3: The Work -->
       <h3><b>The Work:</b></h3>
<p>This study aimed to provide designers and engineers with a roadmap for improving hands-on experiences in digital environments. The research focused on evaluating how integrating real-world actions into digital, hands-on training could enhance user performance and perceptions. The following activities were undertaken:</p>
<ul>
  <li><b>Interface Design:</b> Developed and tested three distinct digital interfaces to compare traditional mouse-based controls with single-hand motion controllers and dual-hand motion controllers.</li>
  <li><b>Usability Testing:</b> Conducted extensive usability testing sessions involving over 100 participants across multiple experimental conditions. These sessions were designed to evaluate user behaviors, cognitive engagement, task performance, and perceptions of their training experience.</li>
  <li><b>Data Integration:</b> Triangulated user feedback from interviews and surveys with quantitative performance metrics to test hypotheses regarding the impact of interface differences on cognitive engagement and task success.</li>
  <li><b>Iterative Development:</b> Collaborated closely with design and engineering consultants to refine the interfaces and testing setups through iterative improvements based on findings from the testing sessions.</li>
  <li><b>Final Presentation:</b> Presented comprehensive findings and actionable design recommendations to project managers and stakeholders. Delivered insights into optimizing digital training interfaces to enhance user engagement, performance, and satisfaction.</li>
</ul>

        <!-- Section 4: Methodologies, Data Processing, and Analysis -->
        <h3><b>Methodologies, Data Processing, and Analysis:</b></h3>
<ul>
  <li><b>Study Design:</b> This research employed a 2 x 2 between-groups experimental design alongside a control group (mouse interface) to investigate how interface differences influenced user behaviors, cognitive engagement, task performance, and experience perceptions.</li>
  <li><b>Methodologies:</b>
    <ul>
      <li><b>Mixed Methods Approach:</b> Combined qualitative and quantitative methodologies to provide a comprehensive understanding of user interactions and outcomes.</li>
      <li><b>Components:</b>
        <ul>
          <li>Pre-task skill assessment</li>
          <li>Usability testing</li>
          <li>Cognitive walkthrough</li>
          <li>Behavior assessment</li>
          <li>Post-task skill assessment</li>
          <li>Survey-based user feedback</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>Data Processing:</b>
    <ul>
      <li>User transcripts were segmented and coded, yielding 7,409 individual data points for cognitive engagement analysis.</li>
      <li>Videos of user behavior were tagged, resulting in 8,069 individual data points for behavioral analysis.</li>
      <li>Task performance was scored using a rubric based on accuracy in a 10-item retention and reasoning assessment (post-task skill assessment) about the training content.</li>
      <li>The user-feedback survey was a 20-item Likert-style questionnaire assessing perceptions of enjoyment, usability, engagement, training value, and task usefulness, with four items per construct rated on a 6-point scale.</li>
    </ul>
  </li>
  <li><b>Data Analyses:</b>
    <ul>
      <li><b>Thematic Analysis:</b> Applied to user transcripts to identify overarching themes, including verbally expressed observations and pain points during the activities.</li>
      <li><b>Multivariate Analysis of Variance (MANOVA):</b> Used to examine group differences in user behaviors, cognitive engagement (segment counts), task performance, and survey responses.</li>
      <li><b>Tools:</b> Conducted analyses using SPSS and R for statistical rigor and accuracy.</li>
    </ul>
  </li>
</ul>

        <!-- Section 5: Outcomes -->
       <h3><b>Outcomes:</b></h3>

<ul>
  <li><b>Key Findings:</b></li>
  <ul>
        <li><b>User Behavior:</b> Both single-controller and double-controller users engaged in significantly more desired behaviors associated with real-world utility than control.</li>
    <li><b>Cognitive Engagement:</b> Control and two motion controller users did not significantly differ in depth of cognitive engagement. Single motion controller users exhibited significantly greater depth of cognitive engagement than those using two motion controllers and control.</li>
    <li><b>Post-Task Skill Assessment:</b> No difference was observed between control and two motion controller users. Single motion controller users had significantly higher performance.</li>
    <li><b>User Feedback:</b> Two motion controller and single motion controller users rated their experiences significantly higher than control, but did not differ between each other.</li>
    <li><b>Themes:</b> Both the users with two and single motion controllers expressed more positive sentiment during their experience than those using control. However, those working with control and two motion controllers repeatedly expressed frustration in not being able to manipulate objects in the ways they wanted to or experiencing difficulty in completing simple tasks with those interfaces.</li>
    <li><b>Design Recommendations:</b> Affording natural manipulations of digital objects during hands-on training yielded significant improvements in all facets of concern. However, the single motion controller—where the controller served as a surrogate for the object and not the user’s hand—significantly improved all measurable outcomes overall. As such, in this instance, a single motion controller should be used for hands-on training moving forward.</li>
</ul>

  <li><b>Design Recommendations:</b></li>
  <ul>
    <li><b>Motion Interfaces Moving Forward:</b> Affording natural manipulations of digital objects during hands-on training yielded significant improvements in all facets of concern, including user behavior, cognitive engagement, and task performance. As such, motion control interfaces should be used for hands-on training instead of the mouse interface.</li>
    <li><b>Single Motion Controller Design:</b> The single motion controller—where the controller served as a surrogate for the object and not the user’s hand—significantly improved all measurable outcomes overall. Based on these findings, it was recommended to use a single motion controller for hands-on training moving forward.</li>
</ul>
</ul>
    `
},

   demo07: {
    title: 'Research: Can Machine Learning Enhance Digital Learning with Personalized Interventions?',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P7.png',
    largeParagraph: `
        <!-- Section 1: Objective -->
<h3><b>Objective:</b></h3>
<p>
The course designer for a paleontology program at the University of Utah identified that students were struggling to make accurate and meaningful observations, form hypotheses, and draw inferences when engaging with scientific data. These challenges contributed to suboptimal performance on both practical and written exams. In response to this issue, I was tasked with collaborating with a course designer and her team to design and develop a custom digital learning platform aimed at improving students' scientific inquiry skills. The platform incorporated a personalized pedagogical agent to provide real-time feedback and guidance as students engaged with interactive content. A critical question emerged during the development process: How can the platform accurately identify and classify individual user behaviors during interactions? Furthermore, how precise is the classification, and what impact does this accuracy have on user performance and experience both during practice and in real-world scenarios?
</p>
        <!-- Section 2: My Responsibilities -->
<h3><b>My Responsibilities: Research Fellow</b></h3>
<ul>
  <li><b>Research Leadership:</b> Led and designed usability studies aimed at encouraging specific user behaviors, capturing real-time perceptions, and collecting actionable user feedback to inform design decisions.</li>
  <li><b>Study Design and Execution:</b> Developed and implemented comprehensive study plans, including experimental design, participant recruitment strategies, and management of the participant pool throughout the research process.</li>
  <li><b>Technical Documentation:</b> Authored critical research documentation, such as research protocols, regulatory submissions, study scripts, and use specifications, ensuring clarity and compliance with industry standards.</li>
  <li><b>Participant Management:</b> Coordinated participant recruitment efforts, scheduling, and ensured adherence to informed consent protocols, effectively managing a pool of over 50 participants for the study.</li>
  <li><b>Data Collection:</b> Facilitated usability testing sessions, conducted cognitive walkthroughs, and gathered survey-based user feedback to assess interactions with the platform.</li>
  <li><b>Data Processing:</b> Processed and coded both qualitative and quantitative data, including user transcripts, behavioral observations, and survey responses, to prepare for comprehensive analysis.</li>
<li><b>Data Analysis:</b> Conducted data mining and decision tree analysis on user log-trace data to cluster interaction behaviors, which were used to train the platform's personalized response system. Additionally, performed thematic and semantic analysis of users' cognitive walkthroughs to identify patterns in user thought processes. User feedback surveys provided valuable insights into participants' perceptions of the system's functionality and the effectiveness of the agent's behavior identification capabilities.</li>

  <li><b>Collaboration:</b> Collaborated closely with the course designer and engineering teams to iteratively refine the platform, leveraging user insights to enhance design effectiveness.</li>
  <li><b>Team Communication:</b> Provided regular updates and presented research findings to the course designer and project manager, ensuring alignment between research insights and project goals.</li>
  <li><b>Recommendations and Final Deliverables:</b> Synthesized key findings into actionable design recommendations and presented these insights to the team, informing future platform refinements and development strategies.</li>
</ul>

        <!-- Section 3: The Work -->
       <h3><b>The Work:</b></h3>
<p>This study aimed to provide designers and engineers with a roadmap for improving hands-on experiences in digital environments. The research focused on evaluating how integrating real-world actions into digital, hands-on training could enhance user performance and perceptions. The following activities were undertaken:</p>
<ul>
  <li><b>Interface Design:</b> Developed and tested three distinct digital interfaces to compare traditional mouse-based controls with single-hand motion controllers and dual-hand motion controllers.</li>
  <li><b>Usability Testing:</b> Conducted extensive usability testing sessions involving over 100 participants across multiple experimental conditions. These sessions were designed to evaluate user behaviors, cognitive engagement, task performance, and perceptions of their training experience.</li>
  <li><b>Data Integration:</b> Triangulated user feedback from interviews and surveys with quantitative performance metrics to test hypotheses regarding the impact of interface differences on cognitive engagement and task success.</li>
  <li><b>Iterative Development:</b> Collaborated closely with design and engineering consultants to refine the interfaces and testing setups through iterative improvements based on findings from the testing sessions.</li>
  <li><b>Final Presentation:</b> Presented comprehensive findings and actionable design recommendations to project managers and stakeholders. Delivered insights into optimizing digital training interfaces to enhance user engagement, performance, and satisfaction.</li>
</ul>

        <!-- Section 4: Methodologies, Data Processing, and Analysis -->
        <h3><b>Methodologies, Data Processing, and Analysis:</b></h3>
<ul>
  <li><b>Study Design:</b> This research employed a 2 x 2 between-groups experimental design alongside a control group (mouse interface) to investigate how interface differences influenced user behaviors, cognitive engagement, task performance, and experience perceptions.</li>
  <li><b>Methodologies:</b>
    <ul>
      <li><b>Mixed Methods Approach:</b> Combined qualitative and quantitative methodologies to provide a comprehensive understanding of user interactions and outcomes.</li>
      <li><b>Components:</b>
        <ul>
          <li>Pre-task skill assessment</li>
          <li>Usability testing</li>
          <li>Cognitive walkthrough</li>
          <li>Behavior assessment</li>
          <li>Post-task skill assessment</li>
          <li>Survey-based user feedback</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>Data Processing:</b>
    <ul>
      <li>User transcripts were segmented and coded, yielding 7,409 individual data points for cognitive engagement analysis.</li>
      <li>Videos of user behavior were tagged, resulting in 8,069 individual data points for behavioral analysis.</li>
      <li>Task performance was scored using a rubric based on accuracy in a 10-item retention and reasoning assessment (post-task skill assessment) about the training content.</li>
      <li>The user-feedback survey was a 20-item Likert-style questionnaire assessing perceptions of enjoyment, usability, engagement, training value, and task usefulness, with four items per construct rated on a 6-point scale.</li>
    </ul>
  </li>
  <li><b>Data Analyses:</b>
    <ul>
      <li><b>Thematic Analysis:</b> Applied to user transcripts to identify overarching themes, including verbally expressed observations and pain points during the activities.</li>
      <li><b>Multivariate Analysis of Variance (MANOVA):</b> Used to examine group differences in user behaviors, cognitive engagement (segment counts), task performance, and survey responses.</li>
      <li><b>Tools:</b> Conducted analyses using SPSS and R for statistical rigor and accuracy.</li>
    </ul>
  </li>
</ul>

        <!-- Section 5: Outcomes -->
       <h3><b>Outcomes:</b></h3>

<ul>
  <li><b>Key Findings:</b></li>
  <ul>
        <li><b>User Behavior:</b> Both single-controller and double-controller users engaged in significantly more desired behaviors associated with real-world utility than control.</li>
    <li><b>Cognitive Engagement:</b> Control and two motion controller users did not significantly differ in depth of cognitive engagement. Single motion controller users exhibited significantly greater depth of cognitive engagement than those using two motion controllers and control.</li>
    <li><b>Post-Task Skill Assessment:</b> No difference was observed between control and two motion controller users. Single motion controller users had significantly higher performance.</li>
    <li><b>User Feedback:</b> Two motion controller and single motion controller users rated their experiences significantly higher than control, but did not differ between each other.</li>
    <li><b>Themes:</b> Both the users with two and single motion controllers expressed more positive sentiment during their experience than those using control. However, those working with control and two motion controllers repeatedly expressed frustration in not being able to manipulate objects in the ways they wanted to or experiencing difficulty in completing simple tasks with those interfaces.</li>
    <li><b>Design Recommendations:</b> Affording natural manipulations of digital objects during hands-on training yielded significant improvements in all facets of concern. However, the single motion controller—where the controller served as a surrogate for the object and not the user’s hand—significantly improved all measurable outcomes overall. As such, in this instance, a single motion controller should be used for hands-on training moving forward.</li>
</ul>

  <li><b>Design Recommendations:</b></li>
  <ul>
    <li><b>Motion Interfaces Moving Forward:</b> Affording natural manipulations of digital objects during hands-on training yielded significant improvements in all facets of concern, including user behavior, cognitive engagement, and task performance. As such, motion control interfaces should be used for hands-on training instead of the mouse interface.</li>
    <li><b>Single Motion Controller Design:</b> The single motion controller—where the controller served as a surrogate for the object and not the user’s hand—significantly improved all measurable outcomes overall. Based on these findings, it was recommended to use a single motion controller for hands-on training moving forward.</li>
</ul>
</ul>
<b>Research Problem:</b> How can machine learning algorithms be utilized to improve science education by personalizing learning experiences with digital 3D representations? Specifically, how can these algorithms classify user interactions to guide instructional interventions, thereby enhancing user engagement and learning outcomes during scientific investigations with 3D fossils?<br><br>In this study, "Transforming Science Learning with 3D Representations and Personalized Learning," I explored how machine learning algorithms can be applied to tailor learning experiences using advanced 3D technologies. The objective was to address gaps in instructional strategies for integrating digital 3D representations into science education. By analyzing user interactions and responses while engaging with 3D fossils, I developed an automated system for providing "just-in-time" interventions that adapt to individual user needs.<br><br>3D materials offer a rich multimedia experience, combining visual and verbal elements, which generally results in improved learning outcomes compared to text-based materials. Despite the growing use of 3D resources in education, effective strategies for leveraging these tools to support deep learning have been underexplored. This research assessed whether personalized prompts based on user interactions with 3D materials could enhance learning experiences.<br><br>Methodologically, the study involved analyzing user interactions with digital 3D representations of fossils. Data mining techniques were used to classify interaction types and user responses, informing the creation of personalized instructional prompts. These prompts were tested in a pilot study to evaluate their effectiveness.<br><br><b>Methodologies used:</b> Data Mining, Log-Trace Analysis, Association Rule Mining, Time-Series Clustering, Survey Response Theory, 1:1 Interviews, Machine Learning Classification, Real-Time Analysis, Pedagogical Intervention Development.<br><br><b>Tools Used:</b> R Studio, Microsoft Excel, RapidMiner, IBM SPSS, Qualtrics, Github, MeshLab, Adobe Photoshop, Adobe Illustrator, Brackets, Microsoft Word.<br><br><b>Data Analyzed:</b> User interactions with digital 3D objects (i.e., log-trace positional data), user verbal utterances (e.g., observations), user survey responses (Likert and free response), user interaction patterns.<br><br><b>Outcomes:</b> The evolutionary algorithm and decision tree analysis achieved 98% accuracy in classifying user manipulations (e.g., rotation, action, zoom) during the initial phase. In the subsequent phase, the real-time classification system successfully deployed targeted behavioral prompts with 98% accuracy, effectively guiding users based on their interactions.<br><br><b>Design Considerations and Recommendations:</b><br><b>1. Implement Adaptive Machine Learning Systems:</b> Integrate machine learning algorithms to dynamically adjust learning experiences based on real-time user data. This approach ensures that instructional interventions are tailored to individual needs, enhancing user engagement and learning outcomes.<br><br><b>2. Develop Real-Time Feedback Mechanisms:</b> Create systems that provide immediate, context-sensitive feedback and guidance based on user interactions with 3D materials. This enables users to receive timely support and adapt their learning strategies accordingly.<br><br><b>3. Utilize Comprehensive Interaction Data:</b> Employ robust data collection methods to capture a wide range of user interactions, including log-trace data, verbal feedback, and survey responses. This comprehensive approach provides valuable insights into user behavior and learning processes.<br><br><b>4. Refine Classification Models:</b> Continuously improve machine learning models to accurately classify various interaction types and user states. This refinement ensures that personalized prompts are relevant and effective in addressing specific learning needs.<br><br><b>5. Focus on Scalability and Adaptability:</b> Design solutions that can be scaled across different educational settings and adaptable to various learning contexts. This ensures that personalized interventions can be applied broadly and effectively.<br><br><b>6. Incorporate User Feedback for Iterative Improvement:</b> Regularly gather and analyze user feedback to refine machine learning algorithms and instructional strategies. This iterative process helps address emerging challenges and enhances the overall effectiveness of educational interventions.<br><br><b>7. Ensure Usability and Accessibility:</b> Develop interfaces and interaction methods that are user-friendly and accessible to a diverse range of users. Prioritize inclusive design to accommodate different abilities and enhance the overall learning experience.<br><br><b>8. Align with Educational Standards:</b> Ensure that digital 3D materials and instructional interventions are aligned with relevant educational standards and curricula. This alignment helps maintain the educational relevance and effectiveness of the learning tools.<br><br>For more information, please reach out to me via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>'
}








demo08: {
    title: 'Research: Do Materials Matter to Museum Visitors?',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P8.png',
    largeParagraph: <b>Research Problem:</b> How do museum visitors perceive the value of 3D objects produced through different methods? Specifically, how do these perceptions vary when the objects are presented in isolation versus being compared directly with one another?<br><br>The study investigates the following research questions:<br>1. How do visitors rate the educational value, enjoyability, inherent value, and usefulness of 3D objects when presented in isolation?<br>2. How do visitors' rankings of these constructs change when comparing different types of 3D objects side by side?<br><br><b>Methodologies used:</b> A/B Testing, Ranked Survey, Likert Survey, Random Assignment, Lab Testing, In Situ Testing, Linear Modeling, Survey Design.<br><br><b>Tools Used:</b> IBM SPSS, R Studio, Qualtrics, Microsoft Excel, MeshLab, Microsoft Word.<br><br><b>Data Analyzed:</b> User ratings on educational value, enjoyability, inherent value, and usefulness in both lab and museum settings, comparative rankings of different 3D objects, user feedback during in situ testing.<br><br><b>Outcomes:</b> When evaluated in isolation, users rated all objects similarly across the constructs of educational value, enjoyability, inherent value, and usefulness. However, in the comparative phase, the grey gypsum object received the highest ratings, followed by the digital 3D object, the white plastic 3D print, and finally, the red plastic 3D print.<br><br><b>Design Considerations Recommendations:</b><br><b>1. Consistency and Material Authenticity:</b> In isolation, users valued all objects similarly, suggesting that consistency in the objects used across different experiences is crucial. However, if varying the objects, it is recommended to use those closest to the authentic material, as they are perceived more positively when compared directly. If authenticity is not an option, digital 3D objects may serve as a suitable alternative.<br><br><b>2. Leverage Digital 3D Objects:</b> Surprisingly, digital 3D objects ranked second in user preference, suggesting that digital representations can be highly effective in educational settings when physical replicas are unavailable. This opens up opportunities for museums to expand their digital offerings, especially in remote or online contexts.<br><br><b>3. Evaluate the Impact of Color:</b> The red plastic 3D print received the lowest rankings, highlighting the potential impact of color on user perception. Future studies should explore how different colors and finishes affect user engagement and perceived value, which could inform the choice of materials and colors in museum exhibits.<br><br><b>4. Implement Comparative Experiences in Museums:</b> Since users' perceptions changed when objects were presented side by side, museums might consider designing exhibits that allow visitors to compare different versions of an artifact. This could enhance the educational value of the experience and encourage deeper engagement with the material.<br><br><b>5. Use Mixed-Methods Approaches:</b> The combination of lab and in situ testing provided comprehensive insights into user perceptions, suggesting that mixed-methods approaches can be particularly effective in museum research. Future studies should continue to blend controlled and real-world testing environments to capture the full spectrum of user experiences.<br><br><b>6. Focus on User-Centered Design:</b> As user preferences varied based on the presentation context, museums should adopt a user-centered design approach, gathering continuous feedback to refine exhibit elements. This iterative process ensures that exhibits are tailored to meet visitor expectations and provide meaningful learning experiences.<br><br>The work described above is currently in the process of publication. For more information, please reach out to me via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.`
},

   demo09: {
    title: 'Research: The Impact of Confusion During Educational Gameplay',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P9.png',
    largeParagraph: `<b>Research Problem:</b> How does initial confusion during an interactive, online learning activity influence user outcomes and experiences? Specifically, is early confusion helpful or harmful in the context of educational gameplay?<br><br>The study investigates the following research questions:<br>1. How does early user behavior, such as confusion or success, impact learning outcomes and perceived engagement in an online science activity?<br>2. What role does feedback play in resolving confusion, and how does it affect user performance and experience?<br><br><b>Methodologies used:</b> Linear Modeling, Survey Design, Item Response Theory, Likert Scales, A/B Testing.<br><br><b>Tools Used:</b> IBM SPSS, R Studio, Adobe Photoshop, Adobe Illustrator, Adobe XD, Qualtrics, ZOOM, Microsoft Word, Microsoft Excel.<br><br><b>Data Analyzed:</b> Log data of user interactions, time-stamped actions, reflective responses, Likert-style ratings of enjoyment and engagement.<br><br><b>Outcomes:</b> The research identified that early confusion during the activity did not negatively impact learning outcomes or user satisfaction. Users who experienced confusion initially took more time per decision but eventually improved their performance with adequate feedback. Both users who succeeded early and those who faced early confusion demonstrated similar levels of understanding by the end of the activity.<br><br><b>Design Considerations Recommendations:</b><br><b>1. Embrace Initial Confusion:</b> Early confusion should not be viewed as inherently negative in user experience design. Instead, ensure that the system provides adequate support and feedback to help users navigate through their confusion, enabling them to achieve successful outcomes over time.<br><br><b>2. Provide Timely Feedback:</b> Effective feedback is crucial in resolving user confusion. Designers should focus on creating responsive systems that adapt to user behavior, offering guidance and support at critical moments to maintain engagement and facilitate learning.<br><br><b>3. Monitor User Behavior Data:</b> Analyzing user log data provides valuable insights into how users interact with educational tools. This data-driven approach allows for the identification of patterns and potential issues, informing iterative design improvements to enhance the user experience.<br><br><b>4. Design for User-Centered Learning:</b> Understanding that users may approach activities differently is essential. Designers should create flexible environments that accommodate diverse user experiences, ensuring that all users, regardless of their initial performance, can achieve positive outcomes.<br><br>The work described above is currently in the process of publication. For more information, please reach out to me via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.`
},


   demo10: {
    title: 'Research: Predicting User Success through Pathways in an Interactive Map',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P10.png',
    largeParagraph: `<b>Research Problem:</b> How do users navigate an interactive map, and how do their paths predict success in understanding complex systems? Specifically, this research focused on user interactions with an interactive map of the Cleveland-Lloyd Dinosaur Quarry to identify which pathways led to the most successful reasoning about fossil layers and their formation.<br><br>The study investigates the following research questions:<br>1. What patterns in user navigation paths correlate with successful critical thinking about fossil layers?<br>2. How can understanding these paths inform the design of interactive systems to improve user outcomes?<br><br><b>Methodologies used:</b> Data Mining, Evolutionary Algorithms, Log-Trace Processing, Process Mapping, Linear Modeling.<br><br><b>Tools Used:</b> IBM SPSS, R Studio, RapidMiner, Microsoft Excel, Microsoft Word.<br><br><b>Data Analyzed:</b> User navigation paths through the interactive map, written responses critically analyzing fossil layers, and the sequence in which users examined different types of fossils.<br><br><b>Outcomes:</b> The study revealed that users who initially examined varied herbivores, then explored layers associated with carnivores, and finally returned to herbivores were the most successful in reasoning about the quarry. This successful pathway pattern provided insights into user behavior that could be used to enhance educational tools.<br><br><b>Design Considerations Recommendations:</b><br><b>1. Implement Guided Pathways:</b> Based on the findings, the design team deployed a pedagogical agent to assist users who followed less successful pathways. This agent intervenes after a set time or when users exhibit less effective navigation patterns, offering guidance to improve their reasoning without directly providing answers.<br><br><b>2. Optimize User Pathways:</b> By understanding the navigation patterns that lead to success, designers can create more intuitive interfaces that encourage users to explore content in ways that enhance learning outcomes. This approach ensures that all users are supported in developing critical thinking skills.<br><br><b>3. Leverage Data Mining for Continuous Improvement:</b> Ongoing analysis of user navigation data allows for continuous refinement of the interactive system. This iterative process ensures that the design remains responsive to user needs, improving both user experience and educational effectiveness.<br><br>The work described above is currently in the process of publication. For more information, please reach out to me via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.`
},

demo11: {
    title: 'Research: The Impact of Tangible Materials and Focused Prompts on Hands-On Learning',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P11.png',
    largeParagraph: `<b>Research Problem:</b> How do different types of 3D representations—tangible (3D printed) and digital (desktop-based)—influence user behaviors and learning outcomes, particularly when guided by focused versus general instructional prompts?<br><br>The study investigates the following research questions:<br>1. How do focused versus general prompts impact user interaction and learning with tangible 3D models compared to digital 3D models?<br>2. What are the behavioral and cognitive differences observed in users when engaging with tangible versus digital 3D representations?<br><br><b>Methodologies used:</b> A/B Testing, Verbal Protocols, Behavior Analysis, Item Response Theory, Survey Design, Likert Survey, Open Response, User Interviews, Process Mapping.<br><br><b>Tools Used:</b> IBM SPSS, R Studio, Atlas.ti, Microsoft Excel, Microsoft Word, Qualtrics, MeshLab.<br><br><b>Data Analyzed:</b> User interaction patterns, verbal protocols during task completion, survey responses measuring engagement and understanding, and qualitative feedback from user interviews.<br><br><b>Outcomes:</b> The study revealed that focused prompts significantly enhanced user interaction and learning when using tangible 3D models. Users engaging with tangible representations exhibited more functional behaviors and deeper cognitive processing compared to those interacting with digital models. However, digital 3D models, though widely accessible, required additional support for users to reach similar levels of engagement and understanding, highlighting the necessity for tailored user support in digital interfaces.<br><br><b>Design Considerations Recommendations:</b><br><b>1. Enhance Physical Interaction:</b> The research demonstrated the importance of physical interaction in learning, suggesting that tangible materials should be prioritized in hands-on learning environments. Where possible, digital interfaces should incorporate features that simulate physical interaction to enhance user engagement.<br><br><b>2. Implement Focused Prompts:</b> Focused prompts were found to be more effective in guiding users through tasks, especially with tangible models. Digital interfaces should also incorporate focused prompts to better support user navigation and understanding, ensuring that users receive the guidance necessary to achieve desired outcomes.<br><br><b>3. Provide Additional Support for Digital Models:</b> Since digital models often require more scaffolding, design strategies should include additional support mechanisms, such as interactive tutorials or guided steps, to help users effectively engage with digital content.<br><br><b>4. Utilize Mixed Methods for Comprehensive Insights:</b> The combination of quantitative and qualitative methods provided a well-rounded understanding of user interactions. Future research and design projects should continue to employ mixed-methods approaches to capture the full spectrum of user experiences, leading to more informed design decisions.<br><br>This research underscores the importance of understanding how users interact with different types of interfaces and the role of instructional design in facilitating effective learning experiences. By applying these insights, UX designers can create more intuitive and user-centered products that cater to diverse learning needs.<br><br>For more information, please reach out to me via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.`
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
        largeParagraph: 'For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo33: {
        title: 'Current Resume',
        smallParagraph: '<iframe src="img/Resume.pdf" width="100%" height="600px" style="border:none;"></iframe>',
        mediumImage: '',
        largeParagraph: 'For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    },
    demo34: {
        title: 'Academic Curriculum Vitae',
        smallParagraph: '<iframe src="img/CV.pdf" width="100%" height="600px" style="border:none;"></iframe>',
        mediumImage: '',
        largeParagraph: 'For inquiries, please reach out via <a href="mailto:uxbyorr@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/morrresearch/" target="_blank">LinkedIn</a>.'
    }
};

    // Handle modal triggers
  $(".portfolio_item").on("click", function(event) {
    var triggerId = $(this).attr('id');
    var content = contentMap[triggerId];

    if (content) {
        $('#modal-title').html(content.title);
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