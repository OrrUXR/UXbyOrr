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
        A training program transitioning from in-person to digital experiences noticed less desirable outcomes, including reduced user enjoyment, lower cognitive engagement, and poor retention of training materials. I was tasked with identifying the reasons behind these issues and providing actionable design considerations to enhance the digital training experience. A critical design question arose: how could motion controllers be leveraged to resolve these issues? Specifically, should controllers mimic user hands (dual controllers) or act as surrogates for objects (single controller)? This study explored how interface design impacts user behavior, engagement, performance, and experience perceptions.
        </p>
        
        <!-- Section 2: My Responsibilities -->
        <h3><b>My Responsibilities: Senior Researcher</b></h3>
        <ul>
          <li><b>Research Leadership:</b> Designed and led the study to evaluate real-world actions in digital environments.</li>
          <li><b>Study Design and Execution:</b> Developed all aspects of the study, including experimental design, recruitment, and management of 100+ participants.</li>
          <li><b>Documentation:</b> Authored research protocols, regulatory submissions, and use specifications.</li>
          <li><b>Data Collection:</b> Conducted usability testing, cognitive walkthroughs, and surveys for data gathering.</li>
          <li><b>Data Analysis:</b> Processed qualitative and quantitative data and conducted multivariate analyses.</li>
          <li><b>Collaboration:</b> Partnered with design and engineering teams to iteratively refine digital interfaces.</li>
          <li><b>Stakeholder Engagement:</b> Delivered insights and recommendations to stakeholders to inform design strategies.</li>
        </ul>

        <!-- Section 3: The Work -->
        <h3><b>The Work:</b></h3>
        <p>
        This study sought to provide actionable recommendations for improving digital hands-on training experiences. The work focused on evaluating interfaces to determine how real-world actions could enhance user performance and satisfaction.
        </p>
        <ul>
          <li><b>Interface Design:</b> Developed and tested three interfaces: traditional mouse-based, single-hand motion controller, and dual-hand motion controller.</li>
          <li><b>Usability Testing:</b> Conducted sessions with 100+ participants to evaluate behaviors, cognitive engagement, and training perceptions.</li>
          <li><b>Data Integration:</b> Combined interviews, surveys, and performance metrics to assess interface effectiveness.</li>
          <li><b>Iterative Development:</b> Collaborated with teams to refine interfaces based on findings.</li>
          <li><b>Final Presentation:</b> Delivered findings and design recommendations to stakeholders for implementation.</li>
        </ul>

        <!-- Section 4: Methodologies, Data Processing, and Analysis -->
        <h3><b>Methodologies, Data Processing, and Analysis:</b></h3>
        <ul>
          <li><b>Study Design:</b> Used a 2x2 between-groups experimental design and a control group to explore the effects of interface differences on engagement, behavior, and task performance. 
              <br><i>Rationale:</i> The design allowed controlled comparisons while isolating the impact of specific interface types.</li>
          
          <li><b>Mixed Methods Approach:</b>
            <ul>
              <li>Pre-task skill assessment, usability testing, cognitive walkthroughs, and surveys were employed.</li>
              <li><i>Rationale:</i> Combining qualitative and quantitative methods provided a holistic view of user interactions and experiences.</li>
            </ul>
          </li>

          <li><b>Data Processing:</b>
            <ul>
              <li>User transcripts were coded into 7,409 data points for cognitive analysis.</li>
              <li>Behavioral video data yielded 8,069 observations.</li>
              <li>Task performance was scored using a 10-item retention and reasoning assessment.</li>
              <li>Survey data (20 Likert items) captured enjoyment, usability, engagement, and training value.</li>
              <li><i>Rationale:</i> This approach ensured granular analysis of cognitive, behavioral, and perceptual dimensions.</li>
            </ul>
          </li>

          <li><b>Data Analysis:</b>
            <ul>
              <li><b>Thematic Analysis:</b> Identified key themes and user pain points.</li>
              <li><b>Multivariate Analysis of Variance (MANOVA):</b> Tested group differences across cognitive engagement, task performance, and user feedback metrics.</li>
              <li><b>Tools:</b> SPSS and R were used for statistical precision.</li>
              <li><i>Rationale:</i> Advanced statistical methods enabled robust testing of hypotheses and ensured actionable insights.</li>
            </ul>
          </li>
        </ul>

     <!-- Key Findings -->
        <h3><b>Key Findings:</b></h3>
        <ul>
            <li><b>User Behavior:</b> Both single-controller and double-controller users demonstrated significantly more behaviors associated with real-world utility compared to the control (mouse interface). This indicates that motion-based interactions aligned more closely with the natural affordances of hands-on training, promoting more effective and realistic task performance.</li>
            <li><b>Cognitive Engagement:</b>
                <ul>
                    <li>Single motion controller users exhibited significantly greater cognitive engagement than those using two motion controllers and the mouse interface.</li>
                    <li>Two motion controller users showed no significant difference in cognitive engagement when compared to the mouse interface users.</li>
                </ul>
                These findings suggest that a simplified interaction (single motion controller) encouraged deeper cognitive processing and minimized cognitive overload compared to dual-controller interactions or traditional interfaces.
            </li>
            <li><b>Post-Task Skill Assessment:</b>
                <ul>
                    <li>Single motion controller users outperformed both two-controller and mouse interface users in skill assessments, demonstrating higher retention and application of training content.</li>
                    <li>No significant difference in performance was observed between two motion controller users and mouse interface users.</li>
                </ul>
                These results underscore the effectiveness of the single motion controller in enhancing task mastery and knowledge retention.
            </li>
            <li><b>User Feedback:</b>
                <ul>
                    <li>Participants using single and two motion controllers rated their experience significantly higher in terms of enjoyment, usability, and perceived training value compared to mouse interface users.</li>
                    <li>Two motion controller users expressed frustration due to limitations in manipulation and task completion ease, while single motion controller users described their experience as intuitive and satisfying.</li>
                </ul>
            </li>
            <li><b>Thematic Insights:</b> Natural interactions facilitated by motion controllers were universally appreciated for their alignment with real-world actions. The single motion controller's design, where the controller acted as a surrogate for the object rather than the user's hand, was particularly effective at bridging the gap between digital and physical experiences.</li>
        </ul>

        <!-- Design Recommendations -->
        <h3><b>Design Recommendations:</b></h3>
        <ul>
            <li><b>Adopt Motion Controllers for Digital Training:</b> Replace mouse-based interfaces with motion controllers to better align digital training environments with real-world physical interactions. This approach has been shown to improve user behavior, task performance, and engagement.</li>
            <li><b>Prioritize Single Motion Controller Design:</b> Use a single motion controller that acts as a surrogate for the object being manipulated. This design simplifies interactions, reduces cognitive overload, and enhances user performance and satisfaction, as evidenced by significantly improved outcomes across all metrics.</li>
            <li><b>Incorporate Intuitive Manipulation Features:</b> Ensure that motion controllers afford natural and realistic object manipulations, minimizing user frustration and improving task completion ease.</li>
            <li><b>Iteratively Test and Refine Interfaces:</b> Continue conducting user-centered research to refine the interface based on feedback and observed behaviors. Employ a mixed-methods approach to validate improvements and ensure alignment with user needs.</li>
            <li><b>Focus on Cognitive Engagement:</b> Design training tasks that leverage the deeper cognitive processing facilitated by single motion controllers to maximize retention and task mastery.</li>
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
  <li><b>Research Leadership:</b> Led and designed usability studies aimed at encouraging specific user behaviors that could be readily identified in log data, capturing real-time perceptions, and collecting actionable user feedback to inform design decisions.</li>
  <li><b>Study Design and Execution:</b> Developed and implemented comprehensive study plans, including experimental design, participant recruitment strategies, and management of the participant pool throughout the research process.</li>
  <li><b>Technical Documentation:</b> Authored critical research documentation, such as research protocols, regulatory submissions, study scripts, and use specifications, ensuring clarity and compliance with industry standards.</li>
  <li><b>Participant Management:</b> Coordinated participant recruitment efforts, scheduling, and ensured adherence to informed consent protocols, effectively managing a pool of over 50 participants for the study.</li>
  <li><b>Data Collection:</b> Facilitated usability testing sessions, conducted cognitive walkthroughs, interviews, and gathered survey-based user feedback to assess interactions with the platform.</li>
  <li><b>Data Processing:</b> Processed and coded both qualitative and quantitative data, including user transcripts, behavioral observations, and survey responses, to prepare for comprehensive analysis.</li>
<li><b>Data Analysis:</b> Conducted data mining and decision tree analysis on user log-trace data to cluster interaction behaviors, which were used to train the platform's personalized response system. Additionally, performed thematic and semantic analysis of users' cognitive walkthroughs to identify patterns in user thought processes. User feedback surveys provided valuable insights into participants' perceptions of the system's functionality and the effectiveness of the agent's behavior identification capabilities.</li>

  <li><b>Collaboration:</b> Collaborated closely with the course designer and engineering teams to iteratively refine the platform, leveraging user insights to enhance design effectiveness.</li>
  <li><b>Team Communication:</b> Provided regular updates and presented research findings to the course designer and project manager, ensuring alignment between research insights and project goals.</li>
  <li><b>Recommendations and Final Deliverables:</b> Synthesized key findings into actionable design recommendations and presented these insights to the team, informing future platform refinements and development strategies.</li>
</ul>

              <!-- Section 3: The Work -->
<h3><b>The Work:</b></h3>
<p>
This study aimed to provide a course designer with an automated system capable of identifying and classifying user behaviors with digital objects as they engaged in science inquiry practices. The goal was to identify user pain points and provide recommendations for iterative improvements. Participants were university students enrolled in introductory science courses.
</p>
<ul>
    <li><b>Object Interaction:</b> Participants interacted with three distinct fossils: a jaw, claw, and femur. They were asked to manipulate the objects freely while making observations aloud (cognitive walkthrough).</li>
    <li><b>Task-Specific Manipulations:</b> After the free exploration phase, participants performed specific tasks, such as functional motions, rotations, and zooming.</li>
    <li><b>User Feedback:</b> Participants were interviewed in an unstructured format to discuss pain points and experiences.</li>
    <li><b>Survey Responses:</b> Participants completed a survey evaluating their engagement, enjoyment, usability, and perceptions of the educational value of the experience.</li>
    <li><b>Phase Two Validation:</b> A second group of participants interacted with the objects without explicit instructions. Their data served as a test dataset for validating the decision tree classification system trained with phase one data.</li>
</ul>


<!-- Section 4: Methodologies, Data Processing, and Analysis -->
<h3><b>Methodologies, Data Processing, and Analysis:</b></h3>
<ul>
  <li><b>Study Design:</b> This was an exploratory style study where user behaviors within a digital environment were gathered to train an automated system. As such, there were no experimental groups, and all data was gathered from all users.
    <ul>
      <li><b>Rationale:</b> An exploratory design was chosen to gather comprehensive insights from a wide range of user interactions. Without preset group comparisons, the focus was on creating a robust training dataset for the automated system and capturing naturalistic user behaviors.</li>
    </ul>
  </li>
  <li><b>Methodologies:</b>
    <ul>
      <li><b>Mixed Methods Approach:</b> This combined qualitative and quantitative data to offer a holistic understanding of user behaviors and perceptions.
        <ul>
          <li><b>Rationale:</b> A mixed-methods approach ensured that both measurable behavioral patterns and user experiences were captured, enabling the integration of data for system training and iterative platform refinement.</li>
        </ul>
      </li>
      <li><b>Components:</b>
        <ul>
          <li>Usability testing, cognitive walkthrough, log analysis (decision tree), unstructured interview, user survey.</li>
          <li><b>Rationale:</b> Each methodology was chosen for its ability to address specific objectives:
            <ul>
              <li><b>Usability testing:</b> To identify functional and interaction pain points.</li>
              <li><b>Cognitive walkthrough:</b> To explore user thought processes and uncover usability issues in real-time.</li>
              <li><b>Log analysis:</b> To capture precise, timestamped behavioral data for system training.</li>
              <li><b>Unstructured interviews:</b> To allow users to openly express sentiments, uncovering nuances not easily detected through structured feedback.</li>
              <li><b>User surveys:</b> To quantify perceptions of usability, engagement, and educational value.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>Data Processing:</b>
    <ul>
      <li>Log-trace data was collected at one-second intervals, including all axes coordinates of the object at a given time. Data processing included transforming this information to reveal changes in coordinates from second to second. Specific behavior timeframes were timestamped, and data was transformed to show second-to-second changes.</li>
      <li>Interviews and cognitive walkthroughs were transcribed for coding.</li>
      <li>Surveys were scored using a Likert scale system (1–6), where low scores represented disagreement. Negative items were reverse-scored.</li>
      <li><b>Rationale:</b> Precise log data transformations ensured the system could detect subtle behavior shifts, forming the foundation for accurate classification. Thematic coding of transcripts allowed for deep qualitative insights, and Likert-scale scoring simplified perception analysis while maintaining granularity.</li>
    </ul>
  </li>
  <li><b>Data Analyses:</b>
    <ul>
      <li>User behavior data (i.e., logged positional data) were analyzed using RapidMiner via decision tree analysis to identify and validate behavior patterns. Phase two users (unprompted behaviors) were used to test and validate the training data gathered from phase one users (prompted behaviors).</li>
      <li>Interviews and cognitive walkthroughs were analyzed using thematic analysis to extract common pain points, sentiments, and other insights.</li>
      <li>Surveys were analyzed using simple statistical methods to highlight user perceptions across key constructs.</li>
      <li><b>Rationale:</b> Decision tree analysis offered an efficient and interpretable method for classifying user behaviors. Thematic analysis of qualitative data provided depth, while survey analysis revealed overall trends to validate findings and guide future development.</li>
    </ul>
    <li><b>Tools:</b> Conducted analyses using RapidMiner and R for statistical rigor and accuracy.
      <ul>
        <li><b>Rationale:</b> These tools ensured precise data handling, robust statistical analysis, and accurate pattern detection, critical for training the automated system and deriving actionable insights.</li>
      </ul>
    </li>
  </li>
</ul>


        <!-- Section 5: Outcomes -->
<h3><b>Key Findings:</b></h3>
<ul>
  <li><b>Training Set Accuracy:</b> The decision tree analysis resulted in accurate classification of user behaviors in real-time for the testing data 98% of the time. Given the immense dataset (i.e., one positional data point for every second across 20 minutes of interaction), this level of accuracy was determined to be robust. It set the foundation for the next development phase: designing and deploying instructional prompts and feedback based on user behaviors.</li>
  <li><b>User Thoughts and Feedback:</b> Users commonly expressed slight frustration with the interface’s ability to execute specific functional actions. However, they noted that thinking about the actions often sparked deeper conversations about the objects themselves. Survey data revealed that participants saw the potential of the platform as a supplemental tool in their courses, provided it included substantial guidance and tailored support. Additionally, users found the objects and the platform novel and engaging.</li>
</ul>

<h3><b>Design Recommendations:</b></h3>
<ul>
  <li><b>Deploy Classification System:</b> The classification system is ready for real-time deployment in future iterations to support user engagement through automated feedback and instructional prompts.</li>
  <li><b>Test Automated Responses:</b> Further testing is needed to evaluate the timing, content, and effectiveness of automated prompts in achieving desired user outcomes, such as increased engagement or deeper inquiry.</li>
  <li><b>Address Interface Usability:</b> Given user frustrations with specific functional interactions, focus should be placed on resolving usability issues. Enhancements may include refining interaction mechanics and testing alternative input methods or user controls to reduce barriers.</li>
  <li><b>Leverage Cognitive Prompts:</b> If physical interactions remain challenging, design prompts that encourage cognitive engagement rather than requiring complex physical interactions. This approach could still achieve desired outcomes without relying on perfect interface functionality.</li>
  <li><b>Enhance Guidance and Support:</b> Integrate context-sensitive guidance and tailored support to ensure users feel confident and engaged throughout their interactions. Consider adaptive elements that align with individual user needs based on the classification system.</li>
  <li><b>Iterative Refinement:</b> Continue iterative development by gathering feedback on automated responses and usability updates, ensuring that improvements align with user expectations and educational objectives.</li>
</ul>

.`
},demo08: {
    title: "Research: Do Materials Matter to Museum Visitors?",
    smallParagraph: "",
    mediumImage: "img/portfolio/P8.png",
    largeParagraph: `
       <h3><b>Objective:</b></h3>
<p>
    The Natural History Museum of Utah sought to develop a new experience allowing visitors to examine and interact with fossils from its collection that were not available on the display floor. To achieve this, the museum produced high-detail laser scans of select fossils and needed to determine which medium visitors preferred for this interactive experience:
</p>
<ul>
    <li><b>Gypsum powder 3D print:</b> Heavy with a texture similar to real fossils but costly to produce.</li>
    <li><b>White PLA 3D print:</b> Lightweight and inexpensive.</li>
    <li><b>Red PLA 3D print:</b> Lightweight, inexpensive, but with a non-conforming color.</li>
    <li><b>Digital 3D version on a device:</b> Non-tactile but highly detailed and versatile.</li>
</ul>
<p>
    I was tasked with collecting and analyzing data on how museum visitors perceived these items to guide the museum's designers in deciding which objects to feature in the new experience.
</p>

       <h3><b>My Responsibilities: Research Scientist</b></h3>
<ul>
    <li><b>Research Design and Planning:</b> Developed and planned the research methodology, including participant recruitment criteria, testing environments, and materials selection.</li>
    <li><b>In Situ Testing:</b> Conducted field testing sessions in an active museum experience area where visitors interacted voluntarily, ensuring realistic insights into how the materials were perceived by typical museumgoers.</li>
    <li><b>Survey and Data Collection:</b> Designed and administered survey materials using a combination of A/B testing, structured surveys, and interviews to gather comprehensive visitor feedback.</li>
    <li><b>Data Processing and Analysis:</b> Processed and analyzed all collected data using both qualitative and quantitative methods to derive actionable insights.</li>
    <li><b>Collaboration:</b> Partnered with museum professionals to align research goals with institutional priorities, ensuring the findings directly addressed the museum's key questions and needs.</li>
    <li><b>Stakeholder Presentations:</b> Synthesized and presented final insights to stakeholders and product managers, offering clear recommendations to inform their decision-making on object selection and exhibit design.</li>
</ul>

       <h3><b>The Work:</b></h3>
<p>This project focused on understanding how visitors perceive 3D fossils created in different mediums and identifying which materials best supported an engaging and educational museum experience. The study involved a multi-phase, counterbalanced approach to ensure comprehensive and unbiased feedback from participants.</p>
<ul>
    <li><b>Phase 1: Individual Object Ratings</b>
        <ul>
            <li>Each participant was presented with one object at a time, viewing it in isolation to avoid bias from direct comparisons.</li>
            <li>Visitors rated each object (white PLA, red PLA, gypsum, and digital) on a 1–6 scale across four constructs:
                <ul>
                    <li><b>Authenticity:</b> How real or genuine the object felt.</li>
                    <li><b>Educational Value:</b> The perceived learning potential of the object.</li>
                    <li><b>Engagement:</b> How much interest the object generated.</li>
                    <li><b>Enjoyment:</b> The overall pleasure derived from interacting with the object.</li>
                </ul>
            </li>
            <li>After completing the ratings for one object, it was removed, and the next object was presented.</li>
        </ul>
    </li>
    <li><b>Phase 2: Comparative Rankings</b>
        <ul>
            <li>Participants were shown all objects simultaneously and asked to rank them against each other on the same constructs.</li>
            <li>An unstructured interview followed, during which participants explained their reasoning for their rankings, providing qualitative insights into their preferences.</li>
        </ul>
    </li>
    <li><b>Data Utilization:</b> The collected quantitative and qualitative data were synthesized to inform the museum's experience design, ensuring it aligned with visitor preferences and enhanced their overall engagement.</li>
</ul>

<h3><b>Methodologies, Data Processing, and Analysis:</b></h3>

<h5><b>Study Design:</b></h5>
<p>To ensure unbiased evaluations, a counterbalanced design was employed during Phase 1. This method allowed for random assignment of the first object presented to each participant, mitigating any potential order effects. The approach ensured that initial impressions were representative of each object, free from comparison bias. Phase 2 utilized a straightforward ranking system, designed to capture participant preferences when all objects were presented side by side, simulating a real-world decision-making process.</p>

<h5><b>Methodologies:</b></h5>
<p>A mixed-methods approach was selected to provide a comprehensive understanding of visitor perceptions. The combination of quantitative methods (A/B testing and ranked surveys) and qualitative methods (unstructured interviews) allowed for triangulation of data, ensuring robust and actionable insights. A/B testing was particularly suited for isolating preferences during individual object presentations, while the interviews provided contextual depth to the numerical rankings and highlighted user motivations behind their choices.</p>

<h5><b>Data Processing:</b></h5>
<ul>
    <li>Survey responses were coded on a 1–6 scale to standardize ratings across constructs.</li>
    <li>Ranked object data were assigned numerical values based on preference order, allowing for straightforward aggregation and comparative analyses.</li>
    <li>Unstructured interview responses were transcribed and processed using thematic and semantic coding, with a second rater involved to ensure inter-rater reliability and minimize subjective bias.</li>
</ul>
<p>This rigorous coding process ensured consistency and reliability in identifying key patterns and themes in participant feedback.</p>

<h5><b>Data Analyses:</b></h5>
<p>The analyses were conducted using both quantitative and qualitative techniques to maximize the validity and depth of insights:</p>
<ul>
    <li><b>Quantitative Analysis:</b> Comparative analyses, including MANOVA, were performed in SPSS and R to identify statistically significant differences across constructs and object types. This ensured a robust understanding of participant preferences at scale.</li>
    <li><b>Qualitative Analysis:</b> Thematic and semantic coding of interview data provided nuanced insights into participant rationale, uncovering preferences and concerns not captured by numerical data alone.</li>
</ul>
<p>These analytical methods were chosen to complement one another, with quantitative techniques offering broad trends and qualitative methods providing detailed contextual understanding.</p>




       <h3><b>Key Findings:</b></h3>
<p>During Phase 1, where participants rated objects in isolation, all four objects were rated similarly across the constructs of <b>authenticity</b>, <b>educational value</b>, <b>engagement</b>, and <b>enjoyment</b>. However, in the comparative Phase 2, the rankings shifted significantly:</p>
<ul>
    <li><b>Gypsum 3D Object:</b> Rated the highest on all four constructs—authenticity, educational value, engagement, and enjoyment. However, 90% of visitors expressed concerns about interacting with it due to its perceived fragility, with many fearing that it could break or was too expensive to touch.</li>
    <li><b>Digital 3D Object:</b> Surprisingly ranked second in all categories. 83% of visitors mentioned its strong educational value, not because of its use within the museum experience, but due to its potential applicability outside the museum (e.g., in classrooms or as a mobile app).</li>
    <li><b>White PLA 3D Object:</b> Ranked third overall. Many visitors (78%) noted that the white PLA object seemed the most suitable for interactive exhibits because it felt less fragile and safer for handling, despite ranking lower in terms of authenticity and enjoyment compared to the gypsum object.</li>
    <li><b>Red PLA 3D Object:</b> Ranked the lowest across all constructs. The color, which did not align with visitor expectations, led to it being dismissed as "fake" by many visitors. Its lack of realism diminished its perceived educational value and engagement.</li>
</ul>
<p>These findings underscore the importance of balancing the tactile qualities of exhibits with their perceived value in the museum context. While the gypsum object was rated highest, its fragility was a significant concern for visitors, leading them to prefer other materials for interactivity. The digital 3D object’s appeal stemmed from its educational potential beyond the museum, highlighting the importance of extending the learning experience outside of physical exhibits.</p>

          <h3><b>Design Recommendations:</b></h3>
<p>The research was conducted to determine which material choice would be best suited for an in-person museum experience, ensuring alignment with visitor perceptions and interaction preferences. The findings revealed several key considerations and recommendations:</p>

<ul>
    <li><b>Material Comparison Across Exhibits:</b> 
        <p>When objects were presented in isolation, visitors found all materials equally engaging. However, during comparative evaluations, visitors established a clear hierarchy of preference. This indicates that visitor perceptions can be influenced by the materials used in other parts of the museum. To avoid negative bias, care should be taken to align the material types used in new exhibits with those already present in the museum. For example, if PLA is used elsewhere, new experiences should feature materials of similar or higher perceived value to maintain consistency and enhance engagement.</p>
    </li>
    <li><b>Use of Gypsum Materials:</b>
        <p>Gypsum ranked highest across all constructs—authenticity, educational value, engagement, and enjoyment. However, visitors frequently expressed hesitation about manipulating these objects due to fears of breaking them. For this reason, gypsum may be best suited for moderated experiences where visitors can receive explicit instructions that handling these objects is both safe and encouraged. This approach could maximize visitor interaction while preserving the perceived value of the material.</p>
    </li>
    <li><b>Digital 3D Objects:</b>
        <p>Digital objects were ranked second in the hierarchy but were often contextualized as valuable outside the museum environment. Visitors highlighted their potential for applications in classrooms, mobile devices, or at-home learning. This suggests that digital objects may serve best as supplementary tools for extending the museum experience beyond its physical space. Further exploration of their impact on remote or hybrid experiences could provide additional value to the museum's educational goals.</p>
    </li>
    <li><b>Use of White PLA for Unmoderated Experiences:</b>
        <p>The white PLA objects provided a balance of engagement and educational value without eliciting concerns about fragility. Visitors were comfortable freely manipulating these objects, making them ideal for unmoderated, hands-on experiences. Incorporating white PLA into these contexts ensures visitors feel confident and encouraged to explore without constraints.</p>
    </li>
    <li><b>Avoiding Non-Conforming Colors:</b>
        <p>The red PLA objects were consistently rated the lowest, with visitors frequently describing them as "fake" or unrealistic. This highlights the importance of maintaining material colors that align with visitor expectations of authenticity. Avoiding non-conforming colors like red can prevent negative perceptions and enhance overall visitor satisfaction.</p>
    </li>
</ul>

<p>These recommendations provided a roadmap for selecting materials that align with visitor expectations and enhance the museum experience. By tailoring the material choice to the context of use—moderated vs. unmoderated, in-person vs. remote—the museum can maximize visitor engagement and educational impact while minimizing potential barriers to interaction. These recomendataions were provided to designers and their experience team.</p>


           `
},

    

   demo09: {
    title: 'Research: The Impact of Confusion During Educational Gameplay',
    smallParagraph: '',
    mediumImage: 'img/portfolio/P9.png',
    largeParagraph: `<h3><b>Objective:</b></h3>
            <p>
                The EPIC Bioscience educational platform at the Natural History Museum of Utah had recently launched a beta version of their Velvet Ants learning module. Within the module, there was an educational game where users took on the role of a Western Fence Lizard. Users were presented with various prey items (i.e., insects) which they had to choose to eat or ignore before the prey could flee. Users had no prior understanding of what they should eat or ignore, but they would receive feedback on correct or incorrect choices (if the prey fled, they received "too slow" feedback). This game was meant to teach users to identify patterns of safe insects or those (in this case, velvet ants) that would inflict pain. This game led into a larger module on mimicry concepts in nature, explaining how some non-poisonous animals disguise themselves as dangerous ones to survive. 
            </p>
            <p>
                The designers wanted to know if users would get too confused and give up, their perceptions of usability, and what user feedback could improve the beta designs in terms of content and functionality. I was tasked with designing and executing a user study to uncover initial usability insights and provide the design team with actionable next steps for game development moving forward towards launch.
            </p>

            <h3><b>My Responsibilities: Research Associate</b></h3>
            <ul>
                <li><b>Research Design and Planning:</b> Developed and planned the remote research methodology, including participant recruitment criteria, testing environments, and materials selection.</li>
                <li><b>Study Facilitation and Data Collection:</b> Acted as a remote study moderator during the pandemic. Collected all data from participants, which included video recordings, game response data, written responses, and interview feedback.</li>
                <li><b>Data Processing and Analysis:</b> Processed and analyzed all collected data using both qualitative and quantitative methods to derive next steps for the design team.</li>
                <li><b>Collaboration:</b> Partnered with stakeholders, the project manager, design team, and engineers to align research goals and communicate findings effectively.</li>
                <li><b>Design Team Presentations:</b> Synthesized and presented final insights to the design team in collaborative meetings to showcase the data and my recommendations moving forward.</li>
            </ul>

            <h3><b>The Work:</b></h3>
            <p>
                This project focused on exploratory testing of the beta version of the Velvet Ants module of the EPIC Bioscience platform at the Natural History Museum of Utah. The aim was to determine whether an educational game designed to teach users mimicry concepts through a "learn by doing" approach had the desired impact, whether it was too confusing, and to identify any usability issues. 
            </p>
            <ul>
                <li>Users were asked to complete gameplay as designed, complete a cognitive walkthrough, and participate in a semi-structured interview.</li>
                <li><b>Data Utilization:</b> The collected quantitative and qualitative data were synthesized to inform the next steps in refining the game, its content, and its functionality before launch.</li>
            </ul>

            <h3><b>Methodologies, Data Processing, and Analysis:</b></h3>

            <h5><b>Study Design:</b></h5>
            <p>
                This study was exploratory in nature, designed to gather initial insights without a hypothesis-driven framework. Users completed three rounds of the Velvet Ant Game, where they chose to ignore or eat specific insects one at a time. Correct choices received positive feedback, while incorrect choices received negative feedback. At the end of each round, users reviewed a summary screen showing all their choices and accuracy, then answered reflection questions about any patterns or features they noticed. This process repeated across rounds, increasing in complexity with the addition of mimic insects in the final round. Post-gameplay, users participated in a semi-structured interview to assess perceptions of educational value, usability, and encountered issues.
            </p>

            <h5><b>Methodologies:</b></h5>
            <p>
                A mixed-methods approach was employed, combining qualitative data (e.g., interviews and cognitive walkthroughs) to capture user perspectives, frustrations, and strategies, with quantitative data (e.g., game performance metrics) to validate or refute qualitative insights.
            </p>

            <h5><b>Data Processing:</b></h5>
            <p>
                Cognitive walkthrough and interview data were transcribed and coded for common themes and semantic patterns. Quantitative data, including game metrics (e.g., number of incorrect choices, decision-making time, and mimic identification accuracy), were exported and processed for statistical analysis. This dual approach ensured both broad trends and detailed user insights were captured.
            </p>

            <h5><b>Data Analyses:</b></h5>
            <ul>
                <li>
                    <b>Quantitative Analysis:</b> Descriptive statistics were used to analyze performance trends across rounds, focusing on error rates, time-to-decision, and mimic identification. Correlations were examined to explore relationships between confusion in early rounds and subsequent performance improvements.
                </li>
                <li>
                    <b>Qualitative Analysis:</b> Thematic and semantic coding of interview data provided nuanced insights into participant rationale, uncovering preferences and frustrations not captured by numerical data alone.
                </li>
            </ul>
            <p>
                These analytical methods were chosen to complement one another, with quantitative techniques revealing patterns and qualitative methods offering contextual depth to interpret user behavior.
            </p>

  <h3><b>Key Findings:</b></h3>
<ul>
    <li><b>Decision Time:</b>  
    Users expressed feeling rushed, especially in the early rounds. Giving additional time for decision-making in the early stages helped reduce confusion and frustration, enhancing confidence and learning without negatively affecting the rest of the game.</li>

    <li><b>Confusion Did Not Impair Learning:</b>  
    Early confusion did not impede learning. Participants who faced challenges at the beginning gradually improved, catching up to those who succeeded earlier. This suggests that initial confusion may encourage deeper cognitive processing, leading to similar learning outcomes for all users.</li>

    <li><b>Feedback Loops Enhanced Motivation:</b>  
    Frequent feedback, including both positive and corrective, helped keep users engaged. Those who struggled in the early rounds appreciated the feedback, which motivated them to adjust their strategies and stay involved with the game.</li>

    <li><b>Pattern Recognition Increased with Progress:</b>  
    As users progressed, they began recognizing patterns in the prey choices (i.e., distinguishing safe vs. dangerous insects). By the later rounds, they made decisions faster and more confidently, showing an improved understanding of the game’s learning objectives.</li>
</ul>

<h3><b>Design Recommendations:</b></h3>
<ul>
    <li><b>Extend Decision Time in Early Rounds:</b>  
    Based on user feedback, it is recommended to increase the decision time in the early rounds of the game. This would allow users to feel more confident in their choices without significantly impacting the overall pace of the game.</li>

    <li><b>Maintain Feedback Systems for Engagement:</b>  
    The feedback mechanism was highly appreciated by users, especially those who experienced confusion. It is important to retain or improve this system to provide continual guidance and support throughout the game, enhancing user motivation and learning.</li>

    <li><b>Adjust Challenge Gradually:</b>  
    The transition from simple to more complex rounds was effective. However, it may help to slightly increase the complexity in small, incremental steps to give users more time to adjust to the changing dynamics of the game and feel less overwhelmed.</li>

</ul>

        </>.`
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