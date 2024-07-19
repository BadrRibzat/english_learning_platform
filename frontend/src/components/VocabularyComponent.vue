<!-- src/components/VocabularyComponent.vue -->
<template>
  <div>
    <h2>Vocabulary</h2>
    <MarkdownRender :source="vocabularyContent" />
  </div>
</template>

<script>
import vocabularyContent from "@/content/level1/lesson1/vocabulary.md";

export default {
  data() {
    return {
      vocabularyContent: "",
    };
  },
  created() {
    fetch(vocabularyContent)
      .then((response) => response.text())
      .then((text) => {
        this.vocabularyContent = text;
      });
  },
};
</script>
