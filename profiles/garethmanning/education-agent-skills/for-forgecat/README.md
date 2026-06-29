*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Education Agent Skills

Evidence-based education skills for curriculum design, assessment, learning science, wellbeing, professional learning, historical thinking, and student-facing AI study support.

## Tags

- education
- agent-skills
- curriculum-design
- assessment
- learning-science
- teaching

## Installation

```bash
npx forgecat install @forgecat/garethmanning_education-agent-skills
```

## Skills

| Skill | Domain | Description |
|---|---|---|
| `adaptive-hint-sequence-designer` | AI Learning Science | Generate a cascading hint sequence for a problem type, revealing progressively without giving answers. Use when designing tutoring dialogues or scaffolded worksheets. |
| `ai-facilitated-collaborative-learning-designer` | AI Learning Science | Design AI-supported collaborative tasks that structure group interaction and address participation problems. Use when students struggle to collaborate effectively on group tasks. |
| `ai-feedback-design-principles` | AI Learning Science | Audit and redesign AI-generated feedback for pedagogical quality, timing, and learning impact. Use when building or reviewing automated feedback in digital learning tools. |
| `cognitive-tutoring-architecture-designer` | AI Learning Science | Map knowledge components and skill hierarchies for a cognitive tutoring system or adaptive learning platform. Use when designing intelligent tutoring software or skill-based mastery systems. |
| `digital-worked-example-sequence` | AI Learning Science | Create an interactive digital worked example sequence with fading for online or blended delivery. Use when building e-learning modules, LMS content, or app-based instruction. |
| `erroneous-example-designer` | AI Learning Science | Design deliberately flawed examples that develop error-detection skills and deepen understanding. Use when students make characteristic errors and need practice spotting mistakes. |
| `formative-assessment-loop-designer` | AI Learning Science | Design an adaptive assessment loop where each student response triggers the next instructional move. Use when building technology-enhanced formative assessment cycles. |
| `individual-spacing-algorithm-explainer` | AI Learning Science | Explain and configure individual spacing algorithms using student performance data and forgetting curves. Use when personalising retention schedules in adaptive learning platforms. |
| `intelligent-tutoring-dialogue-designer` | AI Learning Science | Script a multi-turn tutoring dialogue with branching responses for anticipated student difficulties. Use when designing AI tutors, chatbot interactions, or structured one-to-one support scripts. |
| `learning-analytics-interpretation-guide` | AI Learning Science | Interpret learning analytics data and translate dashboard findings into actionable teaching decisions. Use when reviewing LMS data, quiz patterns, or engagement metrics. |
| `metacognitive-monitoring-ai-contexts` | AI Learning Science | Design metacognitive checkpoints that prevent AI-assisted learning from bypassing genuine understanding. Use when students use AI tools and may overestimate their own comprehension. |
| `productive-failure-desirable-difficulty-designer` | AI Learning Science | Redesign a direct instruction sequence to include productive struggle before the explanation phase. Use when teaching concepts that benefit from failure-first approaches. |
| `self-explanation-prompt-designer` | AI Learning Science | Create self-explanation prompts that deepen understanding of worked examples, texts, or diagrams. Use when students read material passively without engaging with underlying principles. |
| `worked-example-to-problem-solving-transition-designer` | AI Learning Science | Design the transition from worked examples to independent problem-solving using expertise-reversal principles. Use when students follow examples but cannot solve problems alone. |
| `ai-expertise-interrogation-designer` | AI Literacy | Design a Funhouse Mirror activity where students use their own domain expertise to detect AI distortions, omissions, and overconfidence. Use when students know a subject well enough to evaluate AI claims about it. |
| `ai-hallucination-fact-check-protocol` | AI Literacy | Design a fact-checking protocol for AI-generated text, extending SIFT with AI-specific adaptations for hallucination detection. Use when students need to verify AI claims and citations. |
| `ai-learning-boundary-mapper` | AI Literacy | Map which elements of an assignment benefit from AI assistance vs. which AI use undermines. Use when redesigning tasks for AI-age classrooms or setting defensible AI use policies for specific assignments. |
| `ai-output-critical-audit-designer` | AI Literacy | Design a structured protocol for auditing AI-generated text against Ennis's six CT standards. Use when students need to critically evaluate AI output in any subject. |
| `ai-socratic-dialogue-designer` | AI Literacy | Design a multi-round questioning sequence for interrogating AI chatbot answers, tracking how responses shift and distinguishing genuine updates from sycophantic capitulation. Use when teaching students to probe AI critically. |
| `disciplinary-ai-literacy-sequence-designer` | AI Literacy | Design a sequence where students compare AI's handling of the same question across disciplines, developing a mental model of where AI is reliable vs. distorting based on knowledge type. |
| `prompt-literacy-sequence-designer` | AI Literacy | Design a learning sequence teaching prompt quality — comparing vague vs. refined prompts to show why specificity and context transform AI output. Use when students use AI without understanding why output quality varies. |
| `coverage-audit` | Curriculum Alignment | Takes a curriculum framework and a statutory or accreditation requirement list; produces a coverage table, gap summary, and CSV showing which framework content covers each requirement and where gaps exist. |
| `curriculum-crosswalk` | Curriculum Alignment | Compares two or more band-tagged frameworks and produces a framework-neutral topic matrix showing coverage and gaps across all inputs, plus an optional reference-centric PLC crosswalk document when a reference framework is supplied. |
| `developmental-band-translator` | Curriculum Alignment | Tags harness-decomposed curriculum items (KUDs, LTs, criteria) with a school's developmental band metadata while preserving source voice and labels. Supply the band schema; the skill derives mapping rules from it. |
| `kud-chart-author` | Curriculum Alignment | Authors or reviews Know/Understand/Do charts for competency-based learning targets across developmental bands. Handles seven input types from raw curriculum documents to existing LT sets. Routes to upstream skills when stronger inputs are available. |
| `assessment-validity-checker` | Curriculum Assessment | Audit a proposed assessment for construct validity, reliability, and alignment to learning objectives. Use when reviewing or quality-assuring assessments before deployment. |
| `backwards-design-unit-planner` | Curriculum Assessment | Plan a unit using backwards design from desired outcomes through assessment evidence to learning activities. Use when starting a new unit or redesigning an existing one from standards. |
| `competency-unpacker` | Curriculum Assessment | Unpack a broad standard or competency descriptor into specific, assessable success criteria and sub-skills. Use when interpreting curriculum standards or writing learning objectives. |
| `criterion-referenced-rubric-generator` | Curriculum Assessment | Generate a criterion-referenced rubric with descriptive performance levels for a task or objective. Use for marking guides and general curriculum contexts. For Manning programmes where Competent = success, use coherent-rubric-logic-builder instead. |
| `curriculum-knowledge-architecture-designer` | Curriculum Assessment | Map the epistemic structure of a subject to determine knowledge types and inform curriculum sequencing. Use when designing courses, restructuring programmes, or analysing knowledge architecture. |
| `differentiation-adapter` | Curriculum Assessment | Adapt a classroom task for specific learner needs while preserving the core learning objective intact. Use when differentiating for SEND, EAL, gifted, ADHD, dyslexia, or anxiety. |
| `discipline-specific-critical-thinking-task-designer` | Curriculum Assessment | Design discipline-specific critical thinking tasks grounded in knowledge-contingent reasoning rather than generic skills. Use when embedding higher-order thinking into subject content. |
| `formative-assessment-technique-selector` | Curriculum Assessment | Select the right formative assessment technique for a specific learning moment, purpose, and age group. Use when choosing how to check understanding during, between, or after lessons. |
| `gap-analysis-from-student-work` | Curriculum Assessment | Analyse student work against criteria to identify specific gaps between current performance and learning objectives. Use when reviewing submissions, planning feedback, or diagnosing learning needs. |
| `kud-knowledge-type-mapper` | Curriculum Assessment | Classify curriculum content into Know, Understand, and Do categories to align teaching and assessment approaches. Use when planning units, writing objectives, or selecting assessment methods. |
| `learning-progression-builder` | Curriculum Assessment | Build a learning progression showing prerequisite-to-mastery steps for a target skill or understanding. Use when sequencing content, designing diagnostics, or mapping prerequisite gaps. |
| `project-brief-designer` | Curriculum Assessment | Design a project-based learning brief with a driving question, milestones, and assessment criteria. Use when planning PBL units, inquiry projects, or extended investigations. |
| `scope-and-sequence-designer` | Curriculum Assessment | Design a scope and sequence showing vertical and horizontal curriculum coherence across a programme or year. Use when building new programmes, restructuring subjects, or ensuring progression. |
| `academic-language-sentence-frame-generator` | EAL Language Development | Generate tiered sentence frames for academic tasks that scaffold language production across proficiency levels. Use when EAL students need structured language support for classroom discourse. |
| `language-demand-analyser` | EAL Language Development | Analyse the language demands of a classroom task to identify barriers for EAL and multilingual learners. Use when adapting tasks, planning support, or assessing linguistic accessibility. |
| `scaffolded-task-modifier` | EAL Language Development | Modify a classroom task with language scaffolds that preserve cognitive demand for EAL learners. Use when adapting existing tasks for students at different English proficiency levels. |
| `sheltered-instruction-lesson-modifier` | EAL Language Development | Modify a lesson plan using SIOP sheltered instruction principles to support language learners across all four skills. Use when planning lessons for classes that include EAL students. |
| `vocabulary-tiering-tool` | EAL Language Development | Tier vocabulary from a text or topic into everyday, academic, and technical categories with teaching priorities. Use when pre-teaching vocabulary or identifying language barriers in a text. |
| `biophilic-learning-environment-designer` | Environmental Experiential Learning | Redesign a learning space using biophilic design principles to improve focus, calm, and wellbeing. Use when classroom environment contributes to restlessness, poor attention, or stress. |
| `ecological-inquiry-anchor-designer` | Environmental Experiential Learning | Design an inquiry sequence anchored in a local ecosystem that embeds science or geography curriculum content. Use when teaching through local living systems like gardens, ponds, or hedgerows. |
| `experiential-learning-cycle-designer` | Environmental Experiential Learning | Structure a direct experience into a full learning cycle with concrete experience, reflection, and conceptual transfer. Use when planning field trips, simulations, or practical tasks. |
| `interdisciplinary-real-world-connection-mapper` | Environmental Experiential Learning | Map curriculum connections across multiple subjects for a real-world problem or authentic context. Use when planning cross-curricular projects or connecting content to real issues. |
| `outdoor-learning-sequence-designer` | Environmental Experiential Learning | Design a structured outdoor learning sequence embedding curriculum objectives in an available outdoor space. Use when planning lessons in school grounds, parks, or local natural environments. |
| `service-learning-project-designer` | Environmental Experiential Learning | Design a service-learning project connecting genuine community need with embedded curriculum learning. Use when planning community projects, civic engagement, or social action units. |
| `checking-for-understanding-protocol-designer` | Explicit Instruction | Design a checking-for-understanding protocol with specific techniques for each lesson stage. Use when planning systematic comprehension checks during explicit or direct instruction. |
| `explicit-instruction-sequence-builder` | Explicit Instruction | Build a complete explicit instruction sequence from teacher modelling through guided practice to independent work. Use when teaching new skills, procedures, or concepts through direct instruction. |
| `lesson-opening-designer` | Explicit Instruction | Design a lesson opening that activates prior knowledge and connects previous learning to today's content. Use when planning lesson starters, retrieval openers, or advance organisers. |
| `practice-problem-sequence-designer` | Explicit Instruction | Generate a scaffolded sequence of practice problems with graduated difficulty and strategic variability. Use when creating worksheets, homework sets, or independent practice materials. |
| `think-aloud-script-generator` | Explicit Instruction | Script a teacher think-aloud demonstrating expert reasoning processes for a specific task. Use when modelling problem-solving, writing, reading comprehension, or analytical processes. |
| `cpa-sequence-designer` | Global Cross Cultural Pedagogies | Design a Concrete-Pictorial-Abstract learning sequence for a mathematical concept using manipulatives. Use when teaching maths through Singapore method or when students struggle with abstraction. |
| `cross-cultural-task-validity-checker` | Global Cross Cultural Pedagogies | Check an educational practice or task for cultural bias, WEIRD assumptions, and cross-cultural validity. Use when adapting resources for diverse contexts or questioning universal claims. |
| `culturally-responsive-teaching-designer` | Global Cross Cultural Pedagogies | Redesign a lesson to centre students' cultural backgrounds, community knowledge, and lived experience. Use when making curriculum relevant and inclusive for diverse student populations. |
| `emergent-project-design-scaffold` | Global Cross Cultural Pedagogies | Scaffold an emergent project from observed children's interests using Reggio-inspired approaches. Use when following children's fascinations into deeper inquiry in early years or primary settings. |
| `phenomenon-based-unit-anchor` | Global Cross Cultural Pedagogies | Anchor a multidisciplinary unit in a real-world phenomenon that requires multiple subject lenses to understand. Use when designing integrated or phenomenon-based units across disciplines. |
| `place-based-inquiry-anchor` | Global Cross Cultural Pedagogies | Anchor curriculum learning in a specific local place with connections to community, culture, and identity. Use when connecting academic content to students' local environment and heritage. |
| `reggio-documentation-protocol` | Global Cross Cultural Pedagogies | Design a pedagogical documentation protocol for making children's learning processes visible and shareable. Use when documenting learning, communicating with families, or planning next steps. |
| `ubuntu-collective-knowledge-task-designer` | Global Cross Cultural Pedagogies | Design learning tasks built on Ubuntu philosophy emphasising collective knowledge-building and mutual responsibility. Use when fostering collaboration that values community over individual competition. |
| `variation-theory-task-designer` | Global Cross Cultural Pedagogies | Design a variation theory task using contrast, separation, and fusion to teach critical features of a concept. Use when students confuse similar concepts or fail to discern key distinctions. |
| `central-historical-question-evaluator` | Historical Thinking | Evaluate a teacher-drafted central historical question for its capacity to drive genuine historical inquiry. Use when assessing whether a question will generate real evidence-weighing or produce shallow responses. |
| `close-reading-skill-builder` | Historical Thinking | Build students' capacity to read historical documents closely — attending to word choice, tone, and rhetoric as evidence of perspective. Use when students summarise sources without analysing language. |
| `contextualisation-skill-builder` | Historical Thinking | Build students' capacity to place historical documents in their temporal and social context. Use when students read sources without considering what was happening at the time, or know the context but don't deploy it. |
| `corroboration-skill-builder` | Historical Thinking | Build students' capacity to compare accounts across multiple historical sources — identifying agreements, contradictions, and gaps. Use when students treat individual documents as complete answers rather than partial perspectives. |
| `document-based-lesson-designer` | Historical Thinking | Design a complete document-based history lesson using the Reading Like a Historian four-part structure. Use when planning a primary source inquiry lesson or converting a textbook lesson into document-based investigation. |
| `historical-document-set-curator` | Historical Thinking | Design a document set for a document-based lesson — selecting and sequencing sources for analytical tension around a central question. Use when assembling sources for a new lesson or when an existing set produces flat responses. |
| `historical-source-adapter` | Historical Thinking | Adapt a historical primary source for classroom use — modifying complexity and length while preserving features for sourcing, close reading, and corroboration. Use when a primary source is too complex for the target age group. |
| `historical-thinking-assessment-designer` | Historical Thinking | Design formative assessments that make students' historical thinking visible — revealing whether they source, close-read, contextualise, and corroborate. Use when assessing historical thinking skills or planning a diagnostic. |
| `historical-thinking-strategy-modelling-guide` | Historical Thinking | Design a teacher think-aloud that models historical thinking strategies with a specific document. Use when planning explicit strategy instruction or when students follow a protocol without understanding the underlying reasoning. |
| `sourcing-skill-builder` | Historical Thinking | Build students' capacity to interrogate a historical source before reading — asking who authored it, when, why, and what this means for reliability. Use when students read documents without attending to authorship. |
| `udl-barrier-anticipator` | Inclusive Design | Predicts access barriers in a learning task before delivery, given a learner variability profile. Distinguishes between barriers addressable through design and those requiring specialist support. |
| `udl-lesson-auditor` | Inclusive Design | Audits an existing lesson against UDL's three principles — engagement, representation, and action/expression. Identifies specific access barriers and suggests concrete modifications ranked by impact. |
| `udl-options-designer` | Inclusive Design | Generates multiple means of engagement, representation, and action/expression for a given learning goal. Produces specific, practical alternatives — not generic options — and recommends the highest-impact single change. |
| `argument-structure-scaffold-generator` | Literacy Critical Thinking | Generate argument structure scaffolds using Toulmin, PEEL, or CER frameworks for a specific claim or question. Use when teaching argumentative or analytical writing across any subject. |
| `critical-thinking-task-designer` | Literacy Critical Thinking | Design a critical thinking task targeting specific skills like evaluating evidence, identifying bias, or analysing arguments. Use when embedding critical analysis into subject lessons. |
| `disciplinary-writing-scaffold` | Literacy Critical Thinking | Create a writing scaffold teaching the genre conventions specific to an academic discipline. Use when students write lab reports, historical essays, or other discipline-specific text types. |
| `media-literacy-deconstruction-protocol` | Literacy Critical Thinking | Design a media deconstruction protocol analysing persuasion, bias, or representation in media texts. Use when teaching students to critically read advertisements, news, or social media content. |
| `reading-comprehension-strategy-selector` | Literacy Critical Thinking | Select and sequence reading comprehension strategies matched to a specific text's challenges and demands. Use when students struggle with a text or need targeted reading support. |
| `source-credibility-evaluation-protocol` | Literacy Critical Thinking | Design a source evaluation protocol using lateral reading and credibility checks for digital information. Use when students need to evaluate websites, online sources, or social media claims. |
| `text-complexity-analyser` | Literacy Critical Thinking | Analyse text complexity across quantitative, qualitative, and reader-task dimensions with scaffolding recommendations. Use when selecting texts, assessing readability, or planning reading support. |
| `cognitive-load-analyser` | Memory Learning Science | Analyse a learning task for cognitive load problems and recommend specific design improvements. Use when tasks overwhelm students, instructions feel complex, or materials need simplifying. |
| `dual-coding-designer` | Memory Learning Science | Design a visual complement to verbal content using dual coding principles for stronger encoding. Use when creating slides, diagrams, posters, or visual explanations of complex concepts. |
| `elaborative-interrogation-generator` | Memory Learning Science | Generate elaborative interrogation prompts that deepen encoding through targeted why and how questions. Use when students memorise without understanding or need deeper processing of content. |
| `feedback-quality-analyser` | Memory Learning Science | Analyse existing written feedback for quality, specificity, actionability, and impact on student learning. Use when reviewing teacher or peer feedback to improve feedback practices. |
| `interleaving-unit-planner` | Memory Learning Science | Redesign a blocked topic sequence into an interleaved plan with mixed practice across related topics. Use when planning units, homework schedules, or revision programmes. |
| `retrieval-practice-generator` | Memory Learning Science | Generate retrieval practice questions at varied difficulty levels for a topic or concept. Use when creating quiz starters, revision activities, or low-stakes testing materials. |
| `spaced-practice-scheduler` | Memory Learning Science | Design a spaced retrieval schedule for any topic list and timeline. Use when planning units, term sequences, or revision programmes. |
| `worked-example-fading-designer` | Memory Learning Science | Design a worked example fading sequence from fully worked examples through to independent practice. Use when teaching procedures, algorithms, or multi-step processes to novice learners. |
| `mixed-age-learning-task-designer` | Montessori Alternative Approaches | Design a learning task where mixed-age students work together with mutual benefit for all age groups. Use when planning cross-age tutoring, vertical grouping, or multi-year group activities. |
| `prepared-environment-designer` | Montessori Alternative Approaches | Redesign a classroom as a prepared environment optimised for independent learning, calm transitions, and material access. Use when classroom layout hinders independence or self-directed work. |
| `three-part-lesson-designer` | Montessori Alternative Approaches | Design a Montessori three-period lesson for introducing concepts through concrete materials and naming. Use when teaching vocabulary, classifications, or concepts through hands-on materials. |
| `uninterrupted-work-cycle-designer` | Montessori Alternative Approaches | Design an uninterrupted work cycle with choice-based activities structured within a realistic time block. Use when planning Montessori-style independent work periods or extended choice time. |
| `assessment-design-orchestrator` | Original Frameworks | Routes between five assessment pathways — formative, rubric/criteria, authentic/performance, peer/self, and diagnostic — with validity and equity checks. Use when a teacher needs help choosing how to assess. |
| `coherent-rubric-logic-builder` | Original Frameworks | Build a five-level rubric with coherent logic for a learning target within a developmental band. Use for Manning methodology programmes where Competent = success. For general curriculum rubrics, use criterion-referenced-rubric-generator instead. |
| `compassionate-systems-awareness-orchestrator` | Original Frameworks | Orchestrate compassionate systems tools from issue or aspiration to wise action. Use when a class needs a complete inquiry workflow. |
| `developmental-band-system-designer` | Original Frameworks | Design a developmental band system mapping student growth from early childhood through upper secondary. Use when building competency-based curriculum architecture for a school or programme. |
| `developmental-progression-synthesis` | Original Frameworks | Synthesise completed KUD charts into a developmental progression matrix and per-competency narrative sections. Use when you need a programme-level view of how knowledge, understanding, and performance develop across bands. |
| `dilemma-navigation-for-education-design` | Original Frameworks | Identify and navigate genuine dilemmas in curriculum, school, or community contexts — tensions between competing goods that cannot be solved, only navigated. Produces a structured dilemma map with both poles named and both/and possibilities. |
| `dispositional-knowledge-assessment-designer` | Original Frameworks | Design multi-informant assessment approaches for dispositional competencies like curiosity or resilience. Use when assessing character strengths or competencies that written tests cannot capture. |
| `inclusive-design-orchestrator` | Original Frameworks | Coordinates UDL and differentiation tools through a universal-first hierarchy: barrier removal before targeted differentiation before individualised accommodation. Use when planning accessible learning. |
| `learning-target-authoring-guide` | Original Frameworks | Author learning targets for a competency across developmental bands with precise, observable progression language. Use when writing 'I can' statements for competency-based programmes. |
| `multi-perspective-decision-wheel` | Original Frameworks | Structure a decision or design challenge through multiple perspectives before committing to action. Use as a synthesis step after scoping, mapping, and dilemma navigation when a group needs a wiser next step. |
| `place-based-curriculum-orchestrator` | Original Frameworks | Present pathway options and orchestrate place-based curriculum design from a local place, curriculum requirement, or community issue. Use when place should become a primary text for learning. |
| `regenerative-project-design-orchestrator` | Original Frameworks | Present project-design pathway options and orchestrate regenerative projects using backwards design, PBL, SEEDS, compassionate systems action, or civic/service pathways. |
| `scoping-for-transformative-learning-inquiry` | Original Frameworks | Define the scope and purpose of a complex inquiry before mapping or futures work begins. Use when a class or group needs to agree what they are investigating, who it matters to, and at what scale. |
| `seeds-regenerative-inquiry-cycle` | Original Frameworks | Design a SEEDS regenerative inquiry cycle connecting place-based learning to ecological awareness for young learners. Use when building early childhood or primary inquiry around ecosystems and community. |
| `self-determined-project-design-protocol` | Original Frameworks | Structure a student's self-determined project with mentoring checkpoints, competency alignment, and reflection. Use when guiding student-led projects within a competency-based framework. |
| `single-point-rubric-designer` | Original Frameworks | Design a single-point rubric with one criterion and open columns for evidence. Use for student self-assessment, peer feedback, teacher formative feedback, or pre-task planning. Works with any learning target, with or without a band system. |
| `three-horizons-learning-transition-mapper` | Original Frameworks | Map a scoped topic across three coexisting horizons — current system under strain (H1), preferred future (H3), and transition innovations sorted as H2+ or H2- — to understand change dynamics and identify responsible next actions. |
| `competency-framework-translator` | Professional Learning | Translate an external competency framework like DigComp, GreenComp, or ISTE into classroom-ready activities. Use when implementing framework standards in specific teaching contexts. |
| `instructional-coaching-conversation-guide` | Professional Learning | Generate a coaching conversation guide with questions, protocols, and follow-up actions for a teaching focus. Use when preparing for coaching sessions, mentoring, or peer feedback conversations. |
| `lesson-observation-protocol-designer` | Professional Learning | Design a focused lesson observation protocol with specific look-fors and evidence collection methods. Use when planning peer observations, coaching visits, or developmental classroom visits. |
| `lesson-study-cycle-designer` | Professional Learning | Design a complete lesson study cycle from research question through collaborative planning to research lesson. Use when planning jugyou kenkyuu or collaborative teacher inquiry into practice. |
| `panel-review` | Professional Learning | Seven-role depersonalised panel review of framework artefacts (KUD, criterion bank, LT definition, crosswalk, scope-and-sequence) in sequential-isolation mode. Gate rule mean>=88 AND no role<70. |
| `pedagogical-content-knowledge-developer` | Professional Learning | Develop pedagogical content knowledge for a topic by surfacing common misconceptions and effective representations. Use when preparing to teach unfamiliar content or improving teaching of hard topics. |
| `professional-development-session-designer` | Professional Learning | Design a professional development session using adult learning principles with active teacher engagement. Use when planning INSET days, CPD workshops, or staff training sessions. |
| `reflective-practice-prompt-generator` | Professional Learning | Generate structured reflection prompts for a specific teaching experience or professional learning challenge. Use when debriefing lessons, journaling, or preparing for coaching conversations. |
| `teacher-inquiry-cycle-designer` | Professional Learning | Design a practitioner inquiry cycle from research question through data collection to evidence-informed action. Use when starting action research, teacher-led investigation, or professional inquiry. |
| `technological-pedagogical-content-knowledge-developer` | Professional Learning | Develop TPACK for integrating a specific technology or AI tool into subject teaching with pedagogical alignment. Use when adopting new ed-tech, reviewing AI tools, or planning technology integration. |
| `dialogic-teaching-move-generator` | Questioning Discussion | Generate follow-up teaching moves that extend student thinking after a specific classroom response. Use when a student says something worth exploring and the teacher wants to deepen the dialogue. |
| `discussion-protocol-selector` | Questioning Discussion | Select and configure a structured discussion protocol matched to the purpose, topic, and group readiness. Use when planning classroom discussions, Socratic seminars, or structured debate. |
| `hinge-question-designer` | Questioning Discussion | Design a diagnostic hinge question that reveals whether students understand enough to move on. Use when planning key checkpoints mid-lesson during explicit or direct instruction. |
| `perspective-taking-designer` | Questioning Discussion | Design structured perspective-taking activities with anti-projection guardrails. Develops genuine understanding of complexity across history, social sciences, and literature — not performed empathy. |
| `socratic-questioning-sequence-generator` | Questioning Discussion | Generate a Socratic questioning sequence that develops conceptual understanding through guided inquiry. Use when facilitating philosophical discussions, concept exploration, or critical examination. |
| `error-analysis-protocol` | Self Regulated Learning | Design an error analysis protocol to diagnose the root cause of student mistakes and misconceptions. Use when error patterns appear in student work and targeted feedback is needed. |
| `goal-setting-protocol-designer` | Self Regulated Learning | Design a structured goal-setting protocol using SMART or implementation-intention frameworks for students. Use when launching units, projects, or developing student self-direction habits. |
| `metacognitive-prompt-library` | Self Regulated Learning | Build a library of metacognitive prompts targeting planning, monitoring, or evaluation for a specific task. Use when developing students' thinking-about-thinking during independent work. |
| `self-regulation-scaffold-generator` | Self Regulated Learning | Generate scaffolds supporting student self-regulation across planning, monitoring, and evaluation phases. Use when students struggle to manage their own learning during extended or independent tasks. |
| `study-strategy-selector` | Self Regulated Learning | Select evidence-based study strategies matched to material type, learning goal, and student habits. Use when advising students on revision techniques, homework, or independent study approaches. |
| `ai-claim-checker` | Student Learning | After any AI-generated explanation, require the learner to identify one place it could be wrong, one thing to check, and one source to consult. Builds epistemic vigilance — treats AI output as a claim to evaluate, not truth to absorb. |
| `confidence-calibration-check` | Student Learning | Capture confidence ratings before and after a learning attempt to identify overconfidence and underconfidence patterns. Use when a student wants to understand how well they actually know something versus how well they think they know it. |
| `explain-first-interrogator` | Student Learning | Require the learner to explain a concept in their own words before the AI evaluates or extends it. Ensures the AI works from the learner's understanding rather than providing an explanation from scratch. |
| `fading-manager` | Student Learning | Track performance across sessions and reduce scaffolding as competence grows. Makes fading visible — the learner knows when scaffolds are removed and why. Use for sustained learning engagement where independence is the goal. |
| `productive-failure-protocol` | Student Learning | Stage exploration before instruction on complex problems. The learner produces two attempted approaches before consolidation — which builds on those attempts, not from scratch. Use for genuinely hard problems where struggle produces deeper learning. |
| `progressive-hint-ladder` | Student Learning | Provide graduated assistance from abstract conceptual nudge to concrete procedural step, with reflection required before each escalation. Teaches help-seeking as a skill and prevents direct-answer shortcuts. |
| `retrieve-first-gate` | Student Learning | Before any explanation or answer, require the learner to produce a free-recall attempt and confidence rating. Use when a student wants help understanding or reviewing a topic — this skill ensures the AI works from what the learner already knows. |
| `srl-session-wrapper` | Student Learning | Wrap a learning session in a plan → monitor → reflect cycle. Use at the start of any substantial study session to set goals, mid-session to check strategy, and at session end to consolidate what changed. Builds self-regulated learning as a habit. |
| `stuck-and-error-diagnosis-coach` | Student Learning | When a learner gets something wrong or feels stuck, require them to diagnose the problem before receiving help. Ensures help targets the actual cognitive breakdown, not just the surface error. |
| `teach-back-evaluator` | Student Learning | The learner teaches the concept to the AI, which plays a curious novice peer and identifies gaps through authentic questions. Use when the learner wants to test their understanding — teaching forces a different kind of organisation than studying. |
| `transfer-bridge` | Student Learning | After the learner demonstrates understanding of a concept, present near-transfer and far-transfer challenges. Use to test whether learning is portable or task-specific — this is what separates understanding from familiarity. |
| `unassisted-evidence-checkpoint` | Student Learning | After scaffolded practice, run an unassisted check — a problem with no AI help. Separates what the learner can do with support from what they can do independently. Critical for preventing phantom attainment. |
| `weekly-agency-review` | Student Learning | Review the week using accumulated session evidence — retrieval rates, hint depths, calibration accuracy, transfer and unassisted results. The learner identifies patterns and sets a strategy goal. Use weekly or after a multi-session period. |
| `agency-circles-for-systems-action` | Systems Thinking | Map control, influence, and concern after systems analysis. Use when students need wise agency without being made responsible for everything. |
| `aspirational-systems-iceberg` | Systems Thinking | Design the deeper patterns, structures, artefacts, and mental models needed to grow a desired event. Use when a class imagines a better future. |
| `hexagon-complexity-mapper` | Systems Thinking | Map a complex topic by placing factors on hexagonal tiles where adjacency signals a claimed relationship. Use when students need to surface hidden connections in a system before analysis or action. |
| `ladder-of-inference-reflection` | Systems Thinking | Slow down interpretation from observation to action. Use when students or adults need to examine assumptions in conflict, dialogue, or inquiry. |
| `leverage-and-response-design` | Systems Thinking | Design a wise systems intervention from an existing analysis. Maps proposed actions against Meadows' leverage points, checks for unintended consequences, and generates alternatives. |
| `mental-model-mapper` | Systems Thinking | Surface beliefs, assumptions, stories, and values shaping a system. Use when deeper mental models need examining with care and evidence. |
| `systems-awareness-iceberg` | Systems Thinking | Map a current event below the surface into patterns, structures, and mental models. Use when a class or team needs systemic understanding before action. |
| `systems-wellbeing-impact-mapper` | Systems Thinking | Map systemic forces shaping a wellbeing concern without individualising the problem. Uses Bronfenbrenner's ecological model and social determinants to generate structural interventions. |
| `agency-scaffold-generator` | Wellbeing Motivation Agency | Generate scaffolds that gradually increase student choice, voice, and ownership within a learning task. Use when students depend heavily on teacher direction and need to develop autonomy. |
| `awe-wonder-experience-designer` | Wellbeing Motivation Agency | Design a moment of awe or wonder that hooks curiosity and deepens emotional engagement with content. Use when opening units, introducing surprising material, or reigniting student interest. |
| `belonging-classroom-culture-designer` | Wellbeing Motivation Agency | Design targeted interventions that strengthen belonging and inclusion for specific classroom dynamics. Use when students feel isolated, cliques form, or new students need integrating. |
| `flow-state-condition-designer` | Wellbeing Motivation Agency | Optimise a learning activity for flow by balancing challenge level, skill, clear goals, and immediate feedback. Use when students are bored, anxious, or disengaged during a task. |
| `implementation-intention-designer` | Wellbeing Motivation Agency | Create if-then implementation intentions and WOOP plans for specific student behaviour change goals. Use when students know what to do but struggle to follow through on habits or routines. |
| `motivation-diagnostic-task-redesign` | Wellbeing Motivation Agency | Diagnose motivation problems in a task using self-determination theory and redesign for autonomy, competence, and relatedness. Use when students are disengaged, resistant, or going through the motions. |
| `perma-based-lesson-designer` | Wellbeing Motivation Agency | Design a lesson that embeds PERMA wellbeing elements alongside academic learning objectives. Use when planning lessons that intentionally support both content mastery and student flourishing. |
| `restorative-practice-protocol-designer` | Wellbeing Motivation Agency | Design a restorative practice protocol for addressing harm, rebuilding trust, and restoring relationships. Use when managing conflict, behavioural incidents, or relationship breakdown between students. |
| `ruler-emotional-literacy-sequence` | Wellbeing Motivation Agency | Design a RULER emotional literacy sequence for recognising, understanding, labelling, expressing, and regulating emotions. Use when students struggle with emotional regulation, conflict, or anxiety. |
| `self-efficacy-builder-sequence` | Wellbeing Motivation Agency | Design a mastery experience sequence that systematically builds student confidence in a skill they avoid. Use when students say 'I can't do this', avoid tasks, or show learned helplessness. |
| `trauma-informed-practice-designer` | Wellbeing Motivation Agency | Design trauma-informed classroom practices that prioritise safety, predictability, connection, and regulation. Use when student behaviour may be trauma-related or the class needs a sensitive approach. |
| `wellbeing-learning-connection-mapper` | Wellbeing Motivation Agency | Map evidence-based connections between a wellbeing initiative and specific academic learning outcomes. Use when justifying wellbeing programmes, integrating SEL, or linking pastoral and academic work. |

## Details

| Field | Value |
|---|---|
| Author | Gareth Manning |
| Original repository | https://github.com/GarethManning/education-agent-skills/tree/main/skills |
| Version | `0.0.0` |
| Original commit | `9c06a5c557bf929c8e6b702056fcd0f56836670b` |
| License | CC-BY-SA-4.0 |
| Source platform | Claude Code and Codex |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Tested |
| Cursor | Partial |

## Dependencies

- None

---
*written by original source*

# Education Agent Skills Library

[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-1.0-blue)](https://agentskills.io)
[![Skills](https://img.shields.io/badge/skills-165-blue)](https://github.com/GarethManning/education-agent-skills)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Last Commit](https://img.shields.io/github/last-commit/GarethManning/education-agent-skills)](https://github.com/GarethManning/education-agent-skills/commits/main)

An open-source library of 165 evidence-based pedagogical skills across 20 domains — works in Claude Code, Claude.ai (via MCP), OpenAI Codex, and Hermes Agent, and is engineered for AI agent orchestration. Domains 1–19 are teacher and designer-facing. Domain 20 is the first student-facing domain: live AI interaction patterns that shape how AI responds to learners during study sessions.

> [!IMPORTANT]
> **Hosted MCP access now requires an auth token.**
>
> The library is still free and open source, and local/plugin/manual use remains the recommended free path. The hosted MCP server is still available for people who specifically need a remote MCP endpoint, but anonymous access is now blocked so the service stays sustainable.
>
> **Need hosted MCP?** [Request an access token](https://docs.google.com/forms/d/e/1FAIpQLSdW1EdcmtjSPPq68Hx-bdth5hO2KNyjhAwEV9Ld0EwWL1Gr8Q/viewform) or [jump to hosted MCP setup](#mcp-server).

---

## Get Started

Works with Claude, Codex, Hermes Agent, and any tool that supports the Agent Skills standard.

For sustainable free use, install or copy the skills locally from GitHub where possible. The hosted MCP server is a convenience endpoint for remote clients, not a requirement for using the library.

### Claude

**CoWork (easiest)** — go to **Customize → (+) Add Plugin** and paste:

```
https://github.com/GarethManning/education-agent-skills
```

**Claude Code CLI** — install from the repo URL:

```bash
claude plugin install https://github.com/GarethManning/education-agent-skills
```

**Claude.ai / Claude Desktop (hosted MCP)** — use only if your workflow specifically needs a remote MCP connector. Hosted access requires a token:

```text
https://mcp-server-sigma-sooty.vercel.app/mcp
```

Request a token here: [Hosted MCP access signup](https://docs.google.com/forms/d/e/1FAIpQLSdW1EdcmtjSPPq68Hx-bdth5hO2KNyjhAwEV9Ld0EwWL1Gr8Q/viewform). Free local and manual options remain available. See [Hosted MCP access](docs/HOSTED_MCP_ACCESS.md).

### OpenAI Codex

Codex does **not** need the hosted MCP server. Recommended local setup:

```bash
git clone https://github.com/GarethManning/education-agent-skills.git
cd education-agent-skills
codex plugin marketplace add "$PWD"
```

The repository includes a Codex plugin manifest at `.codex-plugin/plugin.json` pointing to `./skills/`, plus a local marketplace helper at `.agents/plugins/marketplace.json`. After installing/enabling the local plugin, restart Codex.

For one or two individual skills, copy them into your global Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -r skills/<domain>/<skill-name> ~/.codex/skills/
```

Example:

```bash
cp -r skills/memory-learning-science/spaced-practice-scheduler ~/.codex/skills/
```

Full Codex guide: [docs/CODEX.md](docs/CODEX.md).

### Hermes Agent

Hermes users should keep this repository as the canonical source, then install only the skills they actually need locally.

```bash
hermes skills tap add GarethManning/education-agent-skills
hermes skills install \
  GarethManning/education-agent-skills/skills/original-frameworks/learning-target-authoring-guide \
  --category education --yes
```

Recommended starting point: install selected skills or a small starter pack rather than all 165 skills. That keeps your local Hermes index useful instead of noisy.

If you want intelligent skill discovery and recommendation rather than local/offline installs, use the hosted MCP server's `find_skills` and `suggest_skills` tools. The MCP route and the Hermes tap serve different adopter types; a separate Hermes plugin is not currently planned.

Full Hermes guide: [docs/HERMES.md](docs/HERMES.md).

### Any Agent Skills-compatible tool

Copy skill folders from `skills/` into your agent's skills directory. Each skill is a folder containing `SKILL.md` with name/description frontmatter — no dependencies, no build step.

### Manual (no setup)

1. Open any skill file in the repository (under `skills/`)
2. Copy the prompt block
3. Paste it into any AI and fill in the fields for your class or context

---

## Feedback & Contributions

I'd love to hear your thoughts. If you have suggestions, find bugs, or want to contribute:

- Email: gareth.manning@gmail.com
- X: https://x.com/worldteacherman
- LinkedIn: https://www.linkedin.com/in/gareth-manning-a404b387/
- Open a Pull Request or Issue on GitHub

---

**I'm an educator — [start here](#try-it-now)**
No setup required. Use the plugin, a local skill install, or manual copy-paste and start teaching.

**I'm a developer or AI builder — [start here](#architecture)**
YAML schemas, typed inputs and outputs, chaining metadata, [live MCP server](#mcp-server).

---

## Who This Is For

- **Classroom teachers** who want evidence-based lesson and assessment design without hours of research
- **University lecturers and professors** who received little or no teacher training and want practical, research-grounded support for their teaching
- **Curriculum designers and heads of learning** building programmes, units, and assessments
- **School leaders in innovative and alternative education contexts** — international schools, Montessori, project-based, democratic and nature-based schools
- **Innovators reimagining education** — people building new school models, alternative programmes, and next-generation learning environments. Evidence-based constraints don't limit creative redesign of education; they deepen it.
- **EdTech developers and AI builders** who need a structured, programmatically accessible education knowledge layer
- **Education researchers** interested in how evidence translates into AI-mediated practice

---

## Why This Exists

AI is arriving in education fast. Whether it improves learning outcomes or simply scales mediocre practice depends almost entirely on what it is built on.

Most AI education tools are built on convention, habit, and assumption — on what educators have always done, rather than on what the research says actually works. Learning styles. Rigid lesson structures. Wellbeing programmes disconnected from learning theory. As AI expands in education, so does the risk of scaling ineffective practice.

This library exists to build something different: a credible, rigorous foundation for AI in education. One that is anchored in named research, honest about its limitations, and designed especially for the educators working at the frontier — building the next generation of schools, not optimising existing ones.

The potential is real. Personalised, evidence-grounded learning support at a scale that was never previously possible. But only if what is powering it is the actual evidence.

The benefit is not only personalised learning. It is teaching quality and workload. An educator who would otherwise spend hours researching, designing, and second-guessing gets structured, evidence-grounded support in minutes — which means more time for the parts of teaching that only a human can do.

That is one use case. The same library can power school-wide curriculum audits, personalised professional development pathways for teachers, or orchestrated end-of-term assessment reviews. The skills are the foundation. The architecture below describes the layers that make this possible.

---

## Try It Now

### With a runtime install (recommended)

Install the skills in Claude, Codex, or Hermes, then tell your agent what you need in plain language. The relevant skills can be selected automatically or searched locally.

**Example:** Say *"I'm planning a Year 9 science unit on cells — 6 weeks, 3 lessons a week."*

Claude runs the **Backwards Design Unit Planner**, the **Spaced Practice Scheduler**, and the **Retrieval Practice Generator** in parallel. In under 90 seconds you get a complete lesson-by-lesson plan with spaced retrieval built in, evidence-grounded sequencing, and ready-to-use formative assessment activities — all calibrated to the timeline and topic list you provided.

### Without the plugin (manual)

No API key. No technical setup. No dependencies.

1. Open any skill file in the repository (under `skills/`)
2. Copy the prompt block
3. Paste it into any AI and fill in the fields for your class or context

**Example:** Open `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md` and provide:

- Topics: Cell structure, Cell transport, Cell division, Enzymes, Biological molecules
- Timeline: 8-week term, starting 3 February
- Lessons per week: 3

Claude returns a complete week-by-week schedule showing when to teach new content and when to revisit previous topics at expanding intervals — with specific retrieval activities for each review slot. The schedule follows Cepeda et al.'s (2006) meta-analysis on optimal spacing intervals, includes interleaving across topics, and comes with practical guidance on what to do when review reveals gaps.

---

## What Makes This Different

**Evidence is the filter — including knowing what to exclude.**
Every skill is grounded in named research: specific authors, specific studies, specific findings. Frameworks that lack empirical support — including learning styles, VAK, and other widely-circulated but poorly-evidenced approaches — are not included. The library documents exactly what was excluded and why in [EXCLUSIONS.md](docs/EXCLUSIONS.md). For any school or faculty trying to separate evidence from convention, that document is worth reading on its own.

**Evidence strength is rated transparently.**

| Rating | What it means |
|--------|--------------|
| **Strong** | Multiple meta-analyses or systematic reviews with consistent findings |
| **Moderate** | Solid experimental evidence with some contextual variation |
| **Emerging** | Promising research base with limited replication or practitioner translation |
| **Original** | Practitioner framework; clearly labelled, not claimed as research-backed |

Where original frameworks are included (Domain 14), they are labelled honestly. One important limitation: the skills encode research-grounded prompts, but the prompts themselves have not been empirically validated as AI interventions. That work is ongoing.

**Built by an educator with 20 years of international school experience.**
The pedagogical judgements embedded in every prompt, every output structure, and every known-limitations section reflect real classroom and curriculum design practice — not a reading of the literature.

**Designed for orchestration from day one.**
YAML schema headers, typed input and output fields, chaining metadata, and composable outputs are built into every skill. This is not a prompt collection with metadata bolted on. It is a skill library engineered for programmatic use.

---

## The 20 Domains

> **Note on Domain 20:** Domains 1–19 are teacher and designer-facing — they generate plans, rubrics, scaffolds, and assessments. Domain 20 is different: these skills run live during a student's study session, shaping how AI responds to a learner in real time. The governing principle is the same across all 20 domains — evidence-grounded — but the user, the output, and the invocation pattern are all different. See [Domain 20 skills](skills/student-learning/) for details.

| # | Domain | Skills | Focus |
|---|--------|--------|-------|
| 1 | **Memory & Learning Science** | 8 | Retrieval practice, spacing, interleaving, cognitive load, dual coding, elaborative interrogation, feedback |
| 2 | **Self-Regulated Learning & Metacognition** | 5 | Self-regulation scaffolds, metacognitive prompts, goal-setting, study strategy selection, error analysis |
| 3 | **Explicit & Direct Instruction** | 5 | Gradual release sequences, checking for understanding, lesson openings, think-alouds, practice design |
| 4 | **Questioning, Discussion & Dialogue** | 5 | Socratic questioning, discussion protocols, dialogic teaching moves, hinge questions |
| 5 | **Literacy, Writing & Critical Thinking** | 7 | Argument structure, disciplinary writing, reading comprehension, source evaluation, text complexity, media literacy, critical thinking |
| 6 | **EAL/D & Language Development** | 5 | Language demand analysis, vocabulary tiering, scaffolded task modification, sentence frames, sheltered instruction |
| 7 | **Curriculum Design & Assessment** | 13 | Backwards design, competency unpacking, rubric generation, assessment validity, formative assessment, differentiation, gap analysis, learning progressions, PBL, threshold concept translation |
| 8 | **Wellbeing, Motivation & Student Agency** | 12 | Motivation diagnostics, self-efficacy, wellbeing-learning connections, agency scaffolds, belonging, and related practices |
| 9 | **Professional Learning & Teacher Development** | 10 | Lesson observation, reflective practice, PD session design, data interpretation, and related practices |
| 10 | **Global & Cross-Cultural Pedagogies** | 9 | Variation theory, CPA sequences, phenomenon-based learning, culturally responsive teaching, Ubuntu, place-based inquiry, Reggio documentation, emergent projects, cross-cultural validity |
| 11 | **Environmental & Experiential Learning** | 6 | Outdoor learning, biophilic design, ecological inquiry, experiential learning cycles, interdisciplinary connections, service learning |
| 12 | **AI Learning Science** | 14 | Adaptive hints, erroneous examples, digital worked examples, spacing algorithms, AI feedback, tutoring dialogue, learning analytics, collaborative learning, cognitive tutoring, self-explanation, metacognitive monitoring, productive failure, worked example transitions, formative assessment loops |
| 13 | **AI Literacy** | 7 | AI output auditing, hallucination fact-checking, prompt literacy, expertise interrogation, learning boundary mapping, AI Socratic dialogue, disciplinary AI reliability |
| 14 | **Montessori & Alternative Evidence-Based Approaches** | 4 | Three-part lessons, prepared environment design, mixed-age learning, uninterrupted work cycles |
| 15 | **Original Frameworks** | 17 | SEEDS regenerative inquiry, H3Uni systems methods (scoping, Three Horizons, dilemma navigation, multi-perspective decision wheel), developmental band systems, learning target authoring, rubric logic, self-determined project design, dispositional assessment, single-point rubrics; composite orchestrators (assessment design, inclusive design, place-based curriculum, regenerative project design, compassionate systems awareness) |
| 16 | **Curriculum Alignment** | 4 | Coverage audit, KUD chart authoring, developmental band translation, scope and sequence |
| 17 | **Historical Thinking** | 10 | Sourcing, close reading, contextualisation, corroboration, document-based lesson design, document set curation, source adaptation, strategy modelling, assessment design, central question evaluation |
| 18 | **Systems Thinking** | 8 | Systems awareness iceberg, aspirational iceberg, hexagon complexity mapper, leverage and response design, mental model mapper, agency circles for systems action, ladder of inference, systems wellbeing impact |
| 19 | **Inclusive Design** | 3 | UDL lesson auditing, options design across engagement/representation/action, proactive barrier anticipation before delivery |
| 20 | **Student-Facing Learning Skills** *(new)* | 13 | Retrieve-first gate, explain-first interrogator, progressive hint ladder, confidence calibration check, stuck & error diagnosis coach, AI claim checker, transfer bridge, teach-back evaluator, productive failure protocol, SRL session wrapper, unassisted evidence checkpoint, weekly agency review, fading manager |

---

## Architecture

This library is Layer 1 of a three-layer system. For the full design — including the Context Engine (Layer 2) and Orchestrator (Layer 3) — see [ARCHITECTURE.md](docs/ARCHITECTURE.md).

### For developers: the YAML schema

Every skill opens with a machine-readable YAML header including skill ID, domain, evidence strength, evidence sources, typed input/output schemas, chaining metadata, and tags. See any skill file under `skills/` for the full format, or [ARCHITECTURE.md](docs/ARCHITECTURE.md) for the schema reference.

### MCP Server

The skill library is available as a live MCP server for clients that specifically need remote discovery or programmatic access.

**Production URL:** `https://mcp-server-sigma-sooty.vercel.app/mcp`

Important: the hosted MCP server is a convenience endpoint, not the only way to use the library. If you can install the skills locally, prefer the free local options in [Get Started](#get-started).

Hosted MCP access now requires a unique auth token. Request one here: [Hosted MCP access signup](https://docs.google.com/forms/d/e/1FAIpQLSdW1EdcmtjSPPq68Hx-bdth5hO2KNyjhAwEV9Ld0EwWL1Gr8Q/viewform). Gareth's Agent normally emails the MCP URL, token, and short setup instructions within a few minutes. See [Hosted MCP access](docs/HOSTED_MCP_ACCESS.md) for details.

Connect from Claude.ai by adding the URL under **Integrations > MCP Servers**. Connect from Claude Desktop:

```json
{
  "mcpServers": {
    "education-skills": {
      "type": "streamable-http",
      "url": "https://mcp-server-sigma-sooty.vercel.app/mcp",
      "headers": {
        "Authorization": "Bearer <paste access token here>"
      }
    }
  }
}
```

The server exposes:
- **169 tools** (165 skills + 4 discovery tools: `list_skills`, `find_skills`, `suggest_skills`, `get_skill_details`)
- **165 prompts** (for clients that surface MCP prompts)

Source code, local setup, and development instructions: [`mcp-server/`](mcp-server/)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for inclusion criteria. The standard is high intentionally — every skill must be grounded in named evidence, honestly rated, and practically useful. The library's value depends on its rigour.

### Workflow for adding or revising a skill

After creating or editing a `SKILL.md`, run these steps before committing:

```bash
# 1. Regenerate the registry
python3 scripts/generate-registry.py

# 2. Rebuild the MCP server bundle — required after every skill addition or revision
cd mcp-server && npm run bundle-skills && cd ..

# 3. Stage both generated files alongside the skill
git add skills/<domain>/<skill-name>/SKILL.md registry.json mcp-server/src/skills.json
```

**Why the bundle step matters:** the MCP server running on Vercel does not read `SKILL.md` files at deploy time. It serves a pre-built snapshot at `mcp-server/src/skills.json`. If you add or revise a skill without rebuilding the bundle and committing the result, the change will not appear in the live server — even after a Vercel redeploy. CI will catch this and fail the build.

---

## Credit

Built by [Gareth Manning](https://substack.com/@garethmanning) — educator, curriculum designer, and learning systems designer. 20 years of international education experience across 27 countries.

## Licence

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Open. Forkable. Share alike.
