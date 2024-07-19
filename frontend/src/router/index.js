//Router file:

import Vue from 'vue';
import Router from 'vue-router';
import Lesson1View from '@/views/Level1/Lesson1View.vue';
import Lesson2View from '@/views/Level1/Lesson2View.vue';
import Lesson3View from '@/views/Level1/Lesson3View.vue';
import Lesson4View from '@/views/Level1/Lesson4View.vue';
import Lesson5View from '@/views/Level1/Lesson5View.vue';
import Lesson1ViewLevel2 from '@/views/Level2/Lesson1View.vue';
import Lesson2ViewLevel2 from '@/views/Level2/Lesson2View.vue';
import Lesson3ViewLevel2 from '@/views/Level2/Lesson3View.vue';
import Lesson4ViewLevel2 from '@/views/Level2/Lesson4View.vue';
import Lesson5ViewLevel2 from '@/views/Level2/Lesson5View.vue';
import Lesson1ViewLevel3 from '@/views/Level3/Lesson1View.vue';
import Lesson2ViewLevel3 from '@/views/Level3/Lesson2View.vue';
import Lesson3ViewLevel3 from '@/views/Level3/Lesson3View.vue';
import Lesson4ViewLevel3 from '@/views/Level3/Lesson4View.vue';
import Lesson5ViewLevel3 from '@/views/Level3/Lesson5View.vue';
import Lesson1ViewLevel4 from '@/views/Level4/Lesson1View.vue';
import Lesson2ViewLevel4 from '@/views/Level4/Lesson2View.vue';
import Lesson3ViewLevel4 from '@/views/Level4/Lesson3View.vue';
import Lesson4ViewLevel4 from '@/views/Level4/Lesson4View.vue';
import Lesson5ViewLevel4 from '@/views/Level4/Lesson5View.vue';
import Lesson1ViewLevel5 from '@/views/Level5/Lesson1View.vue';
import Lesson2ViewLevel5 from '@/views/Level5/Lesson2View.vue';
import Lesson3ViewLevel5 from '@/views/Level5/Lesson3View.vue';
import Lesson4ViewLevel5 from '@/views/Level5/Lesson4View.vue';
import Lesson5ViewLevel5 from '@/views/Level5/Lesson5View.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/level1/lesson1',
      name: 'Lesson1',
      component: Lesson1View
    },
    {
      path: '/level1/lesson2',
      name: 'Lesson2',
      component: Lesson2View
    },
    {
      path: '/level1/lesson3',
      name: 'Lesson3',
      component: Lesson3View
    },
    {
      path: '/level1/lesson4',
      name: 'Lesson4',
      component: Lesson4View
    },
    {
      path: '/level1/lesson5',
      name: 'Lesson5',
      component: Lesson5View
    },
    {
      path: '/level2/lesson1',
      name: 'Lesson1Level2',
      component: Lesson1ViewLevel2
    },
    {
      path: '/level2/lesson2',
      name: 'Lesson2Level2',
      component: Lesson2ViewLevel2
    },
    {
      path: '/level2/lesson3',
      name: 'Lesson3Level2',
      component: Lesson3ViewLevel2
    },
    {
      path: '/level2/lesson4',
      name: 'Lesson4Level2',
      component: Lesson4ViewLevel2
    },
    {
      path: '/level2/lesson5',
      name: 'Lesson5Level2',
      component: Lesson5ViewLevel2
    },
    {
      path: '/level3/lesson1',
      name: 'Lesson1Level3',
      component: Lesson1ViewLevel3
    },
    {
      path: '/level3/lesson2',
      name: 'Lesson2Level3',
      component: Lesson2ViewLevel3
    },
    {
      path: '/level3/lesson3',
      name: 'Lesson3Level3',
      component: Lesson3ViewLevel3
    },
    {
      path: '/level3/lesson4',
      name: 'Lesson4Level3',
      component: Lesson4ViewLevel3
    },
    {
      path: '/level3/lesson5',
      name: 'Lesson5Level3',
      component: Lesson5ViewLevel3
    },
    {
      path: '/level4/lesson1',
      name: 'Lesson1Level4',
      component: Lesson1ViewLevel4
    },
    {
      path: '/level4/lesson2',
      name: 'Lesson2Level4',
      component: Lesson2ViewLevel4
    },
    {
      path: '/level4/lesson3',
      name: 'Lesson3Level4',
      component: Lesson3ViewLevel4
    },
    {
      path: '/level4/lesson4',
      name: 'Lesson4Level4',
      component: Lesson4ViewLevel4
    },
    {
      path: '/level4/lesson5',
      name: 'Lesson5Level4',
      component: Lesson5ViewLevel4
    },
    {
      path: '/level5/lesson1',
      name: 'Lesson1Level5',
      component: Lesson1ViewLevel5
    },
    {
      path: '/level5/lesson2',
      name: 'Lesson2Level5',
      component: Lesson2ViewLevel5
    },
    {
      path: '/level5/lesson3',
      name: 'Lesson3Level5',
      component: Lesson3ViewLevel5
    },
    {
      path: '/level5/lesson4',
      name: 'Lesson4Level5',
      component: Lesson4ViewLevel5
    },
    {
      path: '/level5/lesson5',
      name: 'Lesson5Level5',
      component: Lesson5ViewLevel5
    }
  ]
});
