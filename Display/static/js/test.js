const app = Vue.createApp({
    template: `
      <div :class="['sidebar', 'sidebar-right', { collapsed: collapsed }]">
        <div class="sidebar-header" @click="toggle">
            <img src="resources/media/notif.jpeg">
        </div>
        <div class="sidebar-content">
          <slot></slot>
        </div>
      </div>
    `,
    data() {
      return {
        collapsed: true
      }
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
      }
    }
  });
  
  app.component('sidebar', {
    template: `
      <div>
        <slot></slot>
      </div>
    `
  });
  
  app.mount('.app');
  