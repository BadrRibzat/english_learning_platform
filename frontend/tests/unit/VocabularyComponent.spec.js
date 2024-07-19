// Unit-Test file
import { shallowMount } from '@vue/test-utils';
import VocabularyComponent from '@/components/Level1/Lesson1/VocabularyComponent.vue';

describe('VocabularyComponent.vue', () => {
  it('renders vocabulary words correctly', () => {
    const wrapper = shallowMount(VocabularyComponent);
    expect(wrapper.text()).toContain('apple');
    expect(wrapper.text()).toContain('A round fruit with red or green skin and a whitish interior.');
  });
});
