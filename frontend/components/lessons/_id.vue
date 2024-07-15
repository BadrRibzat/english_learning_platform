<!-- components/lessons/_id.vue -->
<template>
  <div v-if="lesson">
    <component :is="lesson" />
  </div>
  <div v-else>
    <p>Lesson not found</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Flashcard from '~/components/Flashcard.vue'
import Quiz from '~/components/Quiz.vue'


// Import all lesson components to be checked 

import AlphabetBasics from '~/components/lessons/level1/AlphabetBasics.vue'
import LetterSounds from '~/components/lessons/level1/LetterSounds.vue'
import ReadingComprehension from '~/components/lessons/level1/ReadingComprehension.vue'
import SentenceStructure from '~/components/lessons/level1/SentenceStructure.vue'
import SimpleWords from '~/components/lessons/level1/SimpleWords.vue'
import VocabularyBuilding from '~/components/lessons/level1/VocabularyBuilding.vue'

import ComplexSentences from '~/components/lessons/level2/ComplexSentences.vue'
import CompoundComplexSentences from '~/components/lessons/level2/Compound-ComplexSentences.vue'
import CompoundSentences from '~/components/lessons/level2/CompoundSentences.vue'
import PartsofSpeech from '~/components/lessons/level2/PartsofSpeech.vue'
import PluralsPossessives from '~/components/lessons/level2/PluralsPossessives.vue'
import Tenses from '~/components/lessons/level2/Tenses.vue'

import EssayWriting from '~/components/lessons/level3/EssayWriting.vue'
import GrammarRules from '~/components/lessons/level3/GrammarRules.vue'
import LiteraryDevices from '~/components/lessons/level3/LiteraryDevices.vue'
import ParagraphStructure from '~/components/lessons/level3/ParagraphStructure.vue'
import Punctuation from '~/components/lessons/level3/Punctuation.vue'
import VocabularyExpansion from '~/components/lessons/level3/VocabularyExpansion.vue'

import ArgumentativeWriting from '~/components/lessons/level4/ArgumentativeWriting.vue'
import CriticalReading from '~/components/lessons/level4/CriticalReading.vue'
import EditingAndProofreading from '~/components/lessons/level4/Editing-and-Proofreading.vue'
import NarrativeTechniques from '~/components/lessons/level4/NarrativeTechniques.vue'
import PublicSpeaking from '~/components/lessons/level4/PublicSpeaking.vue'
import ResearchSkills from '~/components/lessons/level4/ResearchSkills.vue'

import AcademicWriting from '~/components/lessons/level5/AcademicWriting.vue'
import AdvancedComposition from '~/components/lessons/level5/AdvancedComposition.vue'

import CreativeWriting from '~/components/lessons/level5/CreativeWriting.vue'
import LibraryAnalysis from '~/components/lessons/level5/LibraryAnalysis.vue'
import ProfessionalCommunication from '~/components/lessons/level5/ProfessionalCommunication.vue'
import RhetoricAndPersuasion from '~/components/lessons/level5/Rhetoric-and-Persuasion.vue'


import PresentSimple from '~/components/lessons/level1/PresentSimple.vue';
import PastSimple from '~/components/level1/PastSimple.vue';
import PresentContinuous from '~/components/level1/PresentContinuous.vue';
import FutureSimple from '~/components/level1/FutureSimple.vue';
import Adjectives from '~/components/level2/Adjectives.vue';
import Adverbs from '~/components/level2/Adverbs.vue';
import Comparatives from '~/components/level2/Comparatives.vue';
import Superlatives from '~/components/level2/Superlatives.vue';
import PresentPerfect from '~/components/level3/PresentPerfect.vue';
import PastContinuous from '~/components/level3/PastContinuous.vue';
import Modals from '~/components/level3/Modals.vue';
import PassiveVoice from '~/components/level3/PassiveVoice.vue';
import ConditionalSentences from '~/components/level4/ConditionalSentences.vue';
import ReportedSpeech from '~/components/level4/ReportedSpeech.vue';
import RelativeClauses from '~/components/level4/RelativeClauses.vue';
import Gerunds from '~/components/level4/Gerunds.vue';
import SubjunctiveMood from '~/components/level5/SubjunctiveMood.vue';
import InversionAndEmphasis from '~/components/level5/InversionAndEmphasis.vue';
import AdvancedModals from '~/components/level5/AdvancedModals.vue';
import AdvancedConditionals from '~/components/level5/AdvancedConditionals.vue';

const route = useRoute();

const lessons = {
  'alphabet-basics': AlphabetBasics,
  'letter-sounds': LetterSounds,
  'reading-comprehension': ReadingComprehension,
  'sentence-structure': SentenceStructure,
  'simple-words': SimpleWords,
  'vocabulary-building': VocabularyBuilding,
  'complex-sentences': ComplexSentences,
  'compound-complex-sentences': CompoundComplexSentences,
  'compound-sentences': CompoundSentences,
  'parts-of-speech': PartsofSpeech,
  'plurals-possessives': PluralsPossessives,
  'tenses': Tenses,
  'essay-writing': EssayWriting,
  'grammar-rules': GrammarRules,
  'literary-devices': LiteraryDevices,
  'paragraph-structure': ParagraphStructure,
  'punctuation': Punctuation,
  'vocabulary-expansion': VocabularyExpansion,
  'argumentative-writing': ArgumentativeWriting,
  'critical-reading': CriticalReading,
  'editing-and-proofreading': EditingAndProofreading,
  'narrative-techniques': NarrativeTechniques,
  'public-speaking': PublicSpeaking,
  'research-skills': ResearchSkills,
  'academic-writing': AcademicWriting,
  'advanced-composition': AdvancedComposition,
  'creative-writing': CreativeWriting,
  'library-analysis': LibraryAnalysis,
  'professional-communication': ProfessionalCommunication,
  'rhetoric-and-persuasion': RhetoricAndPersuasion,

  'present-simple': PresentSimple,
  'past-simple': PastSimple,
  'present-continuous': PresentContinuous,
  'future-simple': FutureSimple,
  'adjectives': Adjectives,
  'adverbs': Adverbs,
  'comparatives': Comparatives,
  'superlatives': Superlatives,
  'present-perfect': PresentPerfect,
  'past-continuous': PastContinuous,
  'modals': Modals,
  'passive-voice': PassiveVoice,
  'conditional-sentences': ConditionalSentences,
  'reported-speech': ReportedSpeech,
  'relative-clauses': RelativeClauses,
  'gerunds': Gerunds,
  'subjunctive-mood': SubjunctiveMood,
  'inversion-and-emphasis': InversionAndEmphasis,
  'advanced-modals': AdvancedModals,
  'advanced-conditionals': AdvancedConditionals
};

const currentLesson = computed(() => {
  const LessonComponent = lessons[route.params.id]
  return LessonComponent ? new LessonComponent() : null
})
</script>

<style scoped>
.lesson-content {
  /* styles for lesson content goes here */
}
</style>
